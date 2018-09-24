import {fsHelper} from "../fs.helper";


const libPath = __dirname.replace(/dist./, '') + '/../../lib';


const promptOptions = {
  platforms: {
    platforms: 'platforms',
    generic: 'generic',
  },
  libTypes: {
    page_actions: 'page_actions',
    page_objects: 'page_objects',
    services: 'services'
  },
  yesNo: {
    no: 'no',
    yes: 'yes'
  },
  getAllFiles(selectedLibType) {
    const genericLibPath = `${libPath}/generic/${selectedLibType}`;
    const allFilesPaths = fsHelper.getFilesRecursively(genericLibPath);
    return allFilesPaths.map(file => file
      .replace(/.*\//, '')
      .replace('.ts', ''))
      .sort();
  },
};


export {promptOptions};
