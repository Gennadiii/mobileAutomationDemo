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
    const featurePromptOptions = getPromptObj(features);
    const selectedFeature = await selectPrompt({
      question: 'Select feature:',
      options: featurePromptOptions
    });
    if (features.indexOf(selectedFeature) === +readRememberedInput(featureChoiceNumberPath)[0]) {
      selectedFeatureChangedFromLastRun = false;
    }
    fs.writeFileSync(featureChoiceNumberPath, features.indexOf(selectedFeature));


    const testsPaths = fsHelper.getFiles(`${specsPath}/${selectedFeature}`);
    const promptOptions = getPromptObj(testsPaths).filter(specs);
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
  return new Promise(resolve => {
    const rememberedInput = +readRememberedInput(featureChoiceNumberPath)[0];
    const cursor = rememberedInput >= 0 ? rememberedInput : options.length / 2;
    console.info('Press esc to choose everything');
    prompt(question, options, {cursor})
      .on('submit', resolve)
      .on('abort', () => resolve(''));
  });
}

function multiselectPrompt(params): Promise<string[]> {
  const {question, resultMessage, options} = params;
  console.info(`Choose nothing to go with everything`);
  return new Promise(resolve => {
    const rememberedInput = readRememberedInput(testChoiceNumberPath);
    const cursor = selectedFeatureChangedFromLastRun || rememberedInput.length === 0
      ? options.length / 2
      : rememberedInput[Math.floor(rememberedInput.length / 2)];
    multiPrompt(`${question}:`, options, {cursor})
      .on('submit', items => {
        if (getSelectedItemsValues(items).length === 0) {
          writeTestsInput(items);
          markAllItemsSelected(items);
        } else {
          writeTestsInput(items);
        }
        const selected = getSelectedItemsValues(items);
        console.info(`${resultMessage}: `);
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
