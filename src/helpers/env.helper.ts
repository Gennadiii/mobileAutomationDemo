import * as fs from "fs";
const data = `platform=${process.argv[2]}
deviceName=${process.argv[3]}`;
console.info(`Creating .env file with data:
${data}`);
fs.writeFileSync(`${__dirname}/../../../.env`, data);
