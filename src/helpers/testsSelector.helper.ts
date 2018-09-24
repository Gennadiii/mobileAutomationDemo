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


/**
 * The idea is to make it easy to select tests to run locally
 * All tests should be in "spec" folder in project's root
 * Inside of spec folder should be folders with test areas (login, home, etc.)
 * selectTests method will prompt for test area. It also has "smoke" and "other than smoke" options
 * After area is chosen there will be multi-select prompt with area's tests
 * Chosen tests will be logged and sent to execution
 * Chosen areas and tests will be remembered and preselected next time
 * If area is changed from lats time there will be no preselected tests
 * @return {Promise<string[]>}
 */
async function selectTests(): Promise<string[]> {
  try {

    const features = [testsCollections.otherThanSmoke, testsCollections.smoke]
      .concat(getFeatures());
    const featurePromptOptions = getPromptObj(features);
    const selectedFeature = await promptFeature(featurePromptOptions);

    if (selectedFeatureDidNotChangeFromLastInput(features, selectedFeature)) {
      selectedFeatureChangedFromLastRun = false;
    }
    writeFeatureInput(features, selectedFeature);


    if (selectedFeature === testsCollections.smoke) {
      testsPaths = fsHelper.getFilesRecursively(specsPath).filter(base);
    } else if (selectedFeature === testsCollections.otherThanSmoke) {
      testsPaths = fsHelper.getFilesRecursively(specsPath).filter(otherThanBase);
    } else {
      testsPaths = fsHelper.getFilesRecursively(`${specsPath}/${selectedFeature}`);
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
    const element = cutPathToSpecFolder(el);
    return {
      title: element,
      value: element,
      selected: false,
    };
  });
}

function promptFeature(options): Promise<string> {
  return new Promise(resolve => {
    const rememberedInput = +readRememberedInput(featureChoiceNumberPath)[0];
    const cursor = rememberedInput >= 0
      ? rememberedInput
      : getMiddle(options);
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
      ? getMiddle(options)
      : rememberedInput[getMiddle(rememberedInput)];

    multiPrompt('Select tests to run: ', options, {cursor})
      .on('submit', items => {
        writeTestsInput(items);
        const chosenItems = getSelectedItemsValues(items);
        chosenItems.length === 0 && markAllItemsSelected(items);
        const chosenAndPreselected = getSelectedItemsValues(items);
        console.info(`Running tests: `);
        logChoices(chosenAndPreselected);
        resolve(chosenAndPreselected);
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

function selectedFeatureDidNotChangeFromLastInput(features, selectedFeature) {
  return features.indexOf(selectedFeature) === +readRememberedInput(featureChoiceNumberPath)[0];
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

function cutPathToSpecFolder(file) {
  return file.replace(/.*spec[\\/]/, '');
}

function getMiddle(options) {
  return Math.floor(options.length / 2);
}
