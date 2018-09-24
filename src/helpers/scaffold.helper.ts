const prompt = require('text-prompt');
const singleSelectPrompt = require('select-prompt');
import * as fs from "fs";
import {fsHelper} from "./fs.helper";
import {templates} from "./scaffoldData/templates";
import {stringHelper} from "./string.helper";
import {getPathBetweenLibTypeAndFile} from "./scaffoldData/platforms";
import {promptOptions} from "./scaffoldData/promptOptions";


const libPath = __dirname.replace(/dist./, '') + '/../lib';
const {platforms, libTypes, yesNo, getAllFiles} = promptOptions;


void async function scaffold() {
  const selectedPlatform = await selectPrompt(getPromptOptions(platforms));

  if (selectedPlatform === platforms.generic) {


    const createService = await selectPrompt(getPromptOptions(yesNo));
    const selectedClassNames = (await textPrompt()).split(' ');
    selectedClassNames.forEach(selectedClassName => {
      const genericPath = `${libPath}/generic/`;
      const fileName = stringHelper.unCapitalize(selectedClassName);
      const poTemplate = templates.generic.po({name: selectedClassName});
      const paTemplate = templates.generic.pa({name: selectedClassName});
      const poPath = `${genericPath}/${libTypes.page_objects}/${fileName}.po.ts`;
      const paPath = `${genericPath}/${libTypes.page_actions}/${fileName}.pa.ts`;
      if (fs.existsSync(poPath)) {
        console.warn('These files already exists');
        return;
      }
      fs.writeFileSync(poPath, poTemplate);
      fs.writeFileSync(paPath, paTemplate);
      if (createService === yesNo.yes) {
        const serviceTemplate = templates.generic.service({name: selectedClassName});
        const servicePath = `${genericPath}/${libTypes.services}/${fileName}.service.ts`;
        fs.writeFileSync(servicePath, serviceTemplate);
      }
    });

    console.info(`Don't forget to assemble service:
    ${fsHelper.findPathByFileName(`${libPath}/../assembler`, 'genericServices')}`);


  } else {


    const selectedLibType = await selectPrompt(getPromptOptions(libTypes));
    const selectedLibPathAndroid = `${libPath}/android/${selectedLibType}`;
    const selectedLibPathIos = `${libPath}/ios/${selectedLibType}`;
    const selectedFile = await selectPrompt(getPromptOptions(getAllFiles(selectedLibType)));
    const pathBetweenLibTypeAndFile = getPathBetweenLibTypeAndFile(libPath, selectedLibType, selectedFile);
    const newAndroidFilePath = `${selectedLibPathAndroid}${pathBetweenLibTypeAndFile}${selectedFile}.ts`;
    const newIosFilePath = `${selectedLibPathIos}${pathBetweenLibTypeAndFile}${selectedFile}.ts`;
    await fsHelper.createFullPath(selectedLibPathAndroid + pathBetweenLibTypeAndFile);
    await fsHelper.createFullPath(selectedLibPathIos + pathBetweenLibTypeAndFile);
    if (fs.existsSync(newAndroidFilePath)) {
      console.warn('This files already exists');
      return;
    }
    const androidData = selectedLibType === libTypes.page_objects
      ? templates.platforms.po({
        platform: 'android',
        libType: selectedLibType,
        fileName: selectedFile
      })
      : templates.platforms.paAndService({
        platform: 'android',
        libType: selectedLibType,
        fileName: selectedFile
      });
    const iosData = selectedLibType === libTypes.page_objects
      ? templates.platforms.po({
        platform: 'ios',
        libType: selectedLibType,
        fileName: selectedFile
      })
      : templates.platforms.paAndService({
        platform: 'ios',
        libType: selectedLibType,
        fileName: selectedFile
      });
    fs.writeFileSync(newAndroidFilePath, androidData);
    fs.writeFileSync(newIosFilePath, iosData);
    console.info(`Don't forget to mark original class and non-generic properties and methods as abstract:
    generic/${selectedLibType}${pathBetweenLibTypeAndFile}${selectedFile}.ts`);
  }

}();


function getPromptOptions(options) {
  const preparedOptions = options instanceof Array
    ? options
    : (Object as any).values(options);
  return preparedOptions.map(option => ({
    title: option,
    value: option,
  }));
}

function selectPrompt(options): Promise<string> {
  return new Promise(resolve => {
    singleSelectPrompt('Select one of:', options, {cursor: Math.floor(options.length / 2)})
      .on('submit', resolve);
  });
}

function textPrompt(): Promise<string> {
  return new Promise((resolve, reject) => {
    prompt(`Write class name (e.g. FirstLogin, Home) or 
create multiple entities separated with space (e.g. FirstLogin Home)
`)
      .on('submit', selected => {
        selected[0] !== selected[0].toUpperCase() && reject('Class name should start from capital letter');
        resolve(selected);
      });
  });
}
