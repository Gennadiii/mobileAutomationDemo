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
    const libDir = `${__dirname}/../lib`;

    const platforms = fs.readdirSync(libDir);
    platforms.forEach(platform => {
      lib[platform] = {};

      const libTypes = fs.readdirSync(`${libDir}/${platform}`);
      libTypes.forEach(libType => {
        lib[platform][libType] = {};

        fsHelper.getFiles(`${libDir}/${platform}/${libType}`)
          .forEach(async file => {
            const className = getClassName(file);
            lib[platform][libType][className] = null;

            const importedFile = await import(file);
            lib[platform][libType][className] = importedFile[className];
          });
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
        1000, 10);
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
  (Object as any).values(obj).forEach(value => {
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
