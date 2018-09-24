import {stringHelper} from "../string.helper";
import {fsHelper} from "../fs.helper";

/* tslint:disable:max-line-length*/


const libPath = __dirname.replace(/dist./, '') + '/../../lib';

const libTypesOptions = {
  page_actions: 'page_actions',
  page_objects: 'page_objects',
  services: 'services'
};


const platforms = {


  po(params: getPlatformTemplateInterface) {
    const {platform, libType, fileName} = params;
    const className = convertFileNameToClassName(fileName);
    const pathBetweenLibTypeAndFile = getPathBetweenLibTypeAndFile(libPath, libType, fileName);

    return `import {ElementFinderInterface} from "${'../'.repeat(countDirUpNumber(pathBetweenLibTypeAndFile))}../../../helpers/element_finder/elementFinder.helper";
import {${className} as Generic${className}} from "${'../'.repeat(countDirUpNumber(pathBetweenLibTypeAndFile))}../../generic/${libType}${pathBetweenLibTypeAndFile}${fileName}";


interface ${className}Interface extends Generic${className} {
}


class ${className} extends Generic${className} implements ${className}Interface {

  name = '${stringHelper.capitalize(platform)}${className}';

  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

}


export {${className}};
`;
  },


  paAndService(params: getPlatformTemplateInterface) {
    const {platform, libType, fileName} = params;
    const className = convertFileNameToClassName(fileName);
    const pathBetweenLibTypeAndFile = getPathBetweenLibTypeAndFile(libPath, libType, fileName);
    const injectedClassExtension = libType === 'page_actions'
      ? '.po'
      : '.pa';
    const injectedClassLibType = libType === libTypesOptions.page_actions
      ? libTypesOptions.page_objects
      : libTypesOptions.page_actions;
    const injectedClassFileName = fileName.replace(/\..*/, injectedClassExtension);
    const injectedClassName = convertFileNameToClassName(injectedClassFileName);

    return `import {helper} from "${'../'.repeat(countDirUpNumber(pathBetweenLibTypeAndFile))}../../../helpers/helper";
import {${className} as Generic${className}} from "${'../'.repeat(countDirUpNumber(pathBetweenLibTypeAndFile))}../../generic/${libType}${pathBetweenLibTypeAndFile}${fileName}";
import {${injectedClassName}} from "${'../'.repeat(countDirUpNumber(pathBetweenLibTypeAndFile))}../../generic/${injectedClassLibType}${pathBetweenLibTypeAndFile}${injectedClassFileName}";


const log = helper.logger.get('${stringHelper.capitalize(platform)}${className}');


interface ${className}Interface extends Generic${className} {
}


class ${className} extends Generic${className} implements ${className}Interface {

  constructor(public page: ${injectedClassName}) {
    super(page);
  }

}


export {${className}};
`;
  }

};


export {platforms, getPathBetweenLibTypeAndFile};


function convertFileNameToClassName(fileName) {
  const name = fileName.substring(0, fileName.indexOf('.'));
  const libExtension = fileName.substring(fileName.indexOf('.') + 1);
  return stringHelper.capitalize(name) + stringHelper.capitalize(libExtension);
}

function getPathBetweenLibTypeAndFile(libDir, libType, fileName) {
  const classPath = fsHelper.findPathByFileName(`${libDir}/generic`, fileName);
  const regExpBefore = new RegExp(`.*${libType}`);
  const regExpAfter = new RegExp(`${fileName}.*`);
  return classPath.replace(regExpBefore, '').replace(regExpAfter, '');
}

function countDirUpNumber(pathBetweenLibTypeAndFile) {
  return pathBetweenLibTypeAndFile.match(/\//g).length - 1;
}


interface getPlatformTemplateInterface {
  fileName: string;
  platform: string;
  libType: string;
}
