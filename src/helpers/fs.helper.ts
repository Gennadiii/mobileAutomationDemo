const fs = require('fs');


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
  }

};


export {fsHelper};
