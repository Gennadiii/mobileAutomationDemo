import {capabilitiesInterface, Driver} from "./src/helpers/appium.helper";
require('dotenv-safe').config();
import {jasmine} from "./jasmine-conf";
import {selectTests} from "./src/helpers/testsSelector.helper";
import {helper} from "./src/helpers/helper";
import * as fs from "fs";


const log = helper.logger.get('index');


const {
  platform,
  deviceName,
  app = findBuildFor(platform),
  implicitWait = 4 * 1000,
  appiumPort = 4723,
  androidAutomationName = 'Appium',
  specs,
} = process.env;
let platformName = null;
let automationName = null;
let initializationWaitTimeout = null;


switch (platform.toLowerCase()) {
  case 'ios':
    platformName = 'iOS';
    automationName = 'XCUITest';
    initializationWaitTimeout = 2 * 60 * 1000;
    break;
  case 'android':
    platformName = 'Android';
    automationName = androidAutomationName;
    initializationWaitTimeout = 2 * 60 * 1000;
    break;
  default:
    throw new Error(`Wrong platform name: ${platform}`);
}


const capabilities: capabilitiesInterface = {
  deviceName,
  app,
  platformName,
  automationName,
};

if (platformName === 'Android') {
  capabilities.appPackage = 'xyz.bront.growler';
}


log.info(`Test run is about to start with next configuration:
${JSON.stringify({implicitWait, appiumPort, specs}, null, 4)}
Capabilities:\n${JSON.stringify(capabilities, null, 4)}`);


export const driver = new Driver({
  capabilities,
  implicitWait,
  appiumPort,
});

void async function main() {
  try {
    const appium = driver.init();

    helper.lib.build();
    await helper.lib.waitReady();

    const getServices = (await import("./src/assembler/assembler")).getServices;
    jasmine.env.service = getServices({platform});

    const tests = specs ? [specs] : (await selectTests()).map(getAbsoluteTestPath);

    await driver.waitUntilInitialized(appium, initializationWaitTimeout);

    jasmine.execute(tests);
    jasmine.onComplete(async () => driver.quit());

  } catch (err) {
    log.error(`Test run failed: ${err.message}`);
    driver.quit();
    process.exit(13);
  }
}();


function getAbsoluteTestPath(test) {
  return `${__dirname}/spec/${test}`;
}

function findBuildFor(desiredPlatform: string) {
  const rootFiles = fs.readdirSync('./');
  const buildExtension = desiredPlatform.toLowerCase() === 'ios' ? '.app' : '.apk';
  return rootFiles.find(file => file.includes(buildExtension));
}
