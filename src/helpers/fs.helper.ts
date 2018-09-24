const fs = require('fs');
const mkdirp = require('mkdirp');


interface fsHelperInterface {
  getFilesRecursively: (dir: string) => string[];
  createFullPath: (path: string) => Promise<void>;
  findPathByFileName: (dir: string, name: string) => string;
}


const fsHelper = {

  getFilesRecursively(dir, result = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const name = `${dir}/${file}`;
      if (fs.statSync(name).isDirectory()) {
        this.getFilesRecursively(name, result);
      } else {
        result.push(name);
      }
    });
    return result;
  },

  createFullPath(path) {
    return new Promise((resolve, reject) => {
      mkdirp(path, err => {
        err && reject(err);
        resolve();
      });
    });
  },

  findPathByFileName(dir, name) {
    return this.getFilesRecursively(dir).find(file => file.includes(name));
  }

};


export {fsHelper};
