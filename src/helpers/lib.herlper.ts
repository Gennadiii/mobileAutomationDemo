import {fsHelper} from "./fs.helper";
import {logger} from "./logger.helper";
import {waitersHelper} from "./waiters.helper";
const fs = require('fs');


const log = logger.get('libHelper');


const libHelper = {

  all: null,

  build() {
    log.info(`Building lib`);
    const lib = {};
    const libTypes = fs.readdirSync(`${__dirname}/../generic`);

    libTypes.forEach(libType => {
      lib[libType] = {};
      fsHelper.getFiles(`${__dirname}/../generic/${libType}`)
        .forEach(async file => {
          const className = getClassName(file);
          lib[libType][className] = null;
          const importedFile = await import(file);
          lib[libType][className] = importedFile[className];
        });
    });

    this.all = lib;
  },

  findBrokenParts(lib) {
    const broken = [];
    findNestedObjects(lib)
      .forEach(obj => Object.keys(obj)
        .forEach(key => obj[key] || broken.push(key)));
    return broken;
  },

  async waitReady() {
    log.info(`Waiting for lib build finish`);
    try {
      await waitersHelper.wait(
        () => !this.findBrokenParts(this.all).length,
        1000, 0);
    } catch (err) {
      log.error(err);
      throw new Error(`Lib didn't build correctly: 
      ${JSON.stringify(this.findBrokenParts(this.all))}`);
    }
    log.info(`Lib build - success`);
  },

};


export {libHelper};


function getClassName(path) {
  return path
    .replace(/.*[\\/]/, '')
    .split('.')
    .slice(0, -1)
    .map(el => capitalize(el))
    .join('');
}

function findNestedObjects(obj, result = [obj]) {
  (<any>Object).values(obj).forEach(value => {
    if (value && typeof value === 'object') {
      result.push(value);
      return findNestedObjects(value, result);
    }
  });
  return result;
}


function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}
