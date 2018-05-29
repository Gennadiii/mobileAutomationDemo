const fs = require('fs');


const fsHelper = {

  getFiles(dir, result = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const name = `${dir}/${file}`;
      if (fs.statSync(name).isDirectory()) {
        this.getFiles(name, result);
      } else {
        result.push(name);
      }
    });
    return result;
  }

};


export {fsHelper}
