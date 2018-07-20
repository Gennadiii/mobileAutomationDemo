import {driver} from "./index";
import * as fs from "fs";
import {helper} from "./src/helpers/helper";
const Jasmine = require('jasmine');
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const HtmlReporter = require('jasmine-pretty-html-reporter').Reporter;
const mkdirp = require('mkdirp');


const log = helper.logger.get('jasmine');
const jasmine = new Jasmine();
jasmine.jasmine.DEFAULT_TIMEOUT_INTERVAL = 2 * 60 * 1000;
const specReporter = new SpecReporter({
  spec: {
    displayPending: true
  }
});
const htmlReporter = new HtmlReporter({
  path: 'report'
});
let suiteStartTime = null;
const screenshotReporter = {
  jasmineStarted() {
    suiteStartTime = helper.dateTime.getTimeStamp().replace(/:/g, '-');
  },
  async specDone(result) {
    try {
      if (result.failedExpectations.length) {
        const screenshot = await driver.takeScreenshot();
        await saveScreenshot(screenshot, result.fullName);
      }
    } catch (err) {
      log.error(`Couldn't save screenshot: ${err}`);
    }
  },
};
jasmine.loadConfig({
  spec_dir: 'dist/spec',
  random: false,
  seed: null,
  stopSpecOnExpectationFailure: false,
});

jasmine.addReporter(specReporter);
jasmine.addReporter(htmlReporter);
jasmine.addReporter(screenshotReporter);


export {jasmine};


async function saveScreenshot(screenshot, name) {
  const path = `${process.cwd()}/screenshots/${suiteStartTime}-${process.env.deviceName}`;
  const screenshotPath = `${path}/${name}.png`;

  fs.existsSync(path) || await createFullPath(path);
  fs.writeFileSync(screenshotPath, screenshot, 'base64');
}

function createFullPath(path) {
  return new Promise((resolve, reject) => {
    mkdirp(path, err => {
      err && reject(err);
      resolve();
    });
  });
}
