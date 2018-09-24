import {driver} from "./index";
import * as fs from "fs";
import {helper} from "./src/helpers/helper";
import {fsHelper} from "./src/helpers/fs.helper";
const Jasmine = require('jasmine');
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const HtmlReporter = require('jasmine-pretty-html-reporter').Reporter;
const jasmineReporters = require('jasmine-reporters');


const log = helper.logger.get('jasmine');
const jasmine = new Jasmine();
jasmine.jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 1000;
const specReporter = new SpecReporter({
  spec: {
    displayPending: true
  }
});

const htmlReporter = new HtmlReporter({
  path: 'reports'
});

const junitReporter = new jasmineReporters.JUnitXmlReporter({
  savePath: 'reports',
  consolidateAll: false,
});

let suiteStartTime = null;
const screenshotReporter = {
  jasmineStarted() {
    suiteStartTime = helper.dateTime.getFullTimeStamp().replace(/:/g, '-');
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
jasmine.addReporter(junitReporter);
jasmine.addReporter(screenshotReporter);


export {jasmine};


async function saveScreenshot(screenshot, name) {
  const path = `${process.cwd()}/screenshots/${suiteStartTime}-${process.env.deviceName}-${process.env.testRunName}`;
  const screenshotPath = `${path}/${name}.png`;

  fs.existsSync(path) || await fsHelper.createFullPath(path);
  fs.writeFileSync(screenshotPath, screenshot, 'base64');
}
