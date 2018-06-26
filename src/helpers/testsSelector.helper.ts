import {fsHelper} from "./fs.helper";
const multiPrompt = require('multiselect-prompt');
const prompt = require('select-prompt');
const fs = require('fs');


const specsPath = `${__dirname}/../../spec/`;
const testChoiceNumberPath = `${__dirname}/testChoiceNumber.indexHelper`;
const featureChoiceNumberPath = `${__dirname}/featureChoiceNumber.indexHelper`;
let selectedFeatureChangedFromLastRun = true;


async function selectTests(): Promise<string[]> {
  try {

    const features = getFeatures();
    const selectedFeature = await selectPrompt({
      question: 'Select feature:',
      options: getPromptObj(features)
    });
    if (features.indexOf(selectedFeature) === readRememberedInput(featureChoiceNumberPath)) {
      selectedFeatureChangedFromLastRun = false;
    }
    fs.writeFileSync(featureChoiceNumberPath, features.indexOf(selectedFeature));


    const testsPaths = fsHelper.getFiles(`${specsPath}/${selectedFeature}`);
    const promptOptions = getPromptObj(testsPaths);
    selectedFeatureChangedFromLastRun || preselectLastInput(promptOptions);
    return await multiselectPrompt({
      question: 'Select tests to run',
      resultMessage: 'Running tests',
      options: promptOptions
    });

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

function selectPrompt(params): Promise<string> {
  const {question, options} = params;
  console.info(`Choose nothing to go with everything`);
  return new Promise(resolve => {
    const rememberedInput = readRememberedInput(featureChoiceNumberPath);
    const cursor = rememberedInput === 0 ? 0 : rememberedInput || options.length / 2;
    prompt(question, options, {cursor})
      .on('submit', resolve);
  });
}

function multiselectPrompt(params): Promise<string[]> {
  const {question, resultMessage, options} = params;
  console.info(`Choose nothing to go with everything`);
  return new Promise(resolve => {
    const rememberedInput = readRememberedInput(testChoiceNumberPath);
    const cursor = selectedFeatureChangedFromLastRun
      ? options.length / 2 :
      rememberedInput === 0 ? 0 : rememberedInput || options.length / 2;
    multiPrompt(`${question}:`, options, {cursor})
      .on('submit', items => {
        getSelectedItemsValues(items).length === 0 && markAllItemsSelected(items);
        const selected = getSelectedItemsValues(items);
        console.info(`${resultMessage}: `);
        logChoices(selected);
        writeTestsInput(items);
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
  items.find((item, index) => {
    if (item.selected) {
      fs.writeFileSync(testChoiceNumberPath, index);
      return true;
    }
  });
}

function readRememberedInput(path) {
  try {
    return +fs.readFileSync(path);
  } catch (err) {
    if (err.message.includes('ENOENT')) {
      return null;
    } else {
      throw err;
    }
  }
}

function preselectLastInput(items) {
  const lastInput = readRememberedInput(testChoiceNumberPath);
  if (lastInput === 0 || lastInput) {
    items[lastInput].selected = true;
  }
}

function getFeatures() {
  return fs.readdirSync(specsPath)
    .filter(str => !str.includes('.'));
}
