import {fsHelper} from "./fs.helper";
const multiPrompt = require('multiselect-prompt');
const prompt = require('select-prompt');
const fs = require('fs');


const specsPath = `${__dirname}/../../spec/`;
const testChoiceNumberPath = `${__dirname}/testChoiceNumber.indexHelper`;
const featureChoiceNumberPath = `${__dirname}/featureChoiceNumber.indexHelper`;
const testsCollections = {
  smoke: 'smoke',
  otherThanSmoke: 'other than smoke',
};
let selectedFeatureChangedFromLastRun = true;
let testsPaths = null;


async function selectTests(): Promise<string[]> {
  try {

    const features = [testsCollections.otherThanSmoke, testsCollections.smoke]
      .concat(getFeatures());
    const featurePromptOptions = getPromptObj(features);
    const selectedFeature = await promptFeature(featurePromptOptions);

    if (features.indexOf(selectedFeature) === +readRememberedInput(featureChoiceNumberPath)[0]) {
      selectedFeatureChangedFromLastRun = false;
    }
    writeFeatureInput(features, selectedFeature);


    if (selectedFeature === testsCollections.smoke) {
      testsPaths = fsHelper.getFiles(`${specsPath}`).filter(base);
    } else if (selectedFeature === testsCollections.otherThanSmoke) {
      testsPaths = fsHelper.getFiles(`${specsPath}`).filter(otherThanBase);
    } else {
      testsPaths = fsHelper.getFiles(`${specsPath}/${selectedFeature}`);
    }
    const promptOptions = getPromptObj(testsPaths).filter(specs);
    selectedFeatureChangedFromLastRun || preselectLastInput(promptOptions);
    return await promptTests(promptOptions);

  } catch (err) {
    console.error(`Can't start tests: ${err}`);
    throw err;
  }
}


export {selectTests};


function getPromptObj(arr) {
  return arr.map(el => {
    const element = el.replace(/.*spec[\\/]/, '');
    return {
      title: element,
      value: element
    };
  });
}

function promptFeature(options): Promise<string> {
  return new Promise(resolve => {
    const rememberedInput = +readRememberedInput(featureChoiceNumberPath)[0];
    const cursor = rememberedInput >= 0 ? rememberedInput : Math.floor(options.length / 2);
    console.info('Press esc to choose everything');
    prompt('Select area:', options, {cursor})
      .on('submit', resolve)
      .on('abort', () => resolve(''));
  });
}

function promptTests(options): Promise<string[]> {
  console.info(`Choose nothing to go with everything`);
  return new Promise(resolve => {
    const rememberedInput = readRememberedInput(testChoiceNumberPath);
    const cursor = selectedFeatureChangedFromLastRun || rememberedInput.length === 0
      ? Math.floor(options.length / 2)
      : rememberedInput[Math.floor(rememberedInput.length / 2)];
    multiPrompt('Select tests to run: ', options, {cursor})
      .on('submit', items => {
        if (getSelectedItemsValues(items).length === 0) {
          writeTestsInput(items);
          markAllItemsSelected(items);
        } else {
          writeTestsInput(items);
        }
        const selected = getSelectedItemsValues(items);
        console.info(`Running tests: `);
        logChoices(selected);
        resolve(selected);
      });
  });
}

function markAllItemsSelected(items) {
  items.forEach(item => item.selected = true);
}

function logChoices(items) {
  console.info();
  items.forEach(item => console.info(item));
  console.info();
}

function getSelectedItemsValues(items) {
  return items.filter(item => item.selected)
    .map(item => item.value);
}

function writeTestsInput(items) {
  const indexes = [];
  items.forEach((item, index) => {
    item.selected && indexes.push(index);
  });
  fs.writeFileSync(testChoiceNumberPath, indexes);
}

function writeFeatureInput(features, selectedFeature) {
  fs.writeFileSync(featureChoiceNumberPath, features.indexOf(selectedFeature));
}

function readRememberedInput(path) {
  try {
    const rememberedInput = fs.readFileSync(path).toString();
    return rememberedInput ? rememberedInput.split(',') : [];
  } catch (err) {
    if (err.message.includes('ENOENT')) {
      return [];
    } else {
      throw err;
    }
  }
}

function preselectLastInput(items) {
  const lastInputs = readRememberedInput(testChoiceNumberPath);
  lastInputs.forEach(lastInput => items[lastInput].selected = true);
}

function getFeatures() {
  return fs.readdirSync(specsPath)
    .filter(str => !str.includes('.'));
}

function specs(file) {
  return file.title.includes('.spec');
}

function base(file) {
  return file.includes('base');
}

function otherThanBase(file) {
  return !file.includes('base');
}
