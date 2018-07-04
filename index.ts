import {capabilitiesInterface, Driver} from "./src/helpers/appium.helper";
require('dotenv-safe').config();
import {jasmine} from "./jasmine-conf";
import {selectTests} from "./src/helpers/testsSelector.helper";
import {helper} from "./src/helpers/helper";


const log = helper.logger.get('index');


const {
  platform, deviceName, app, implicitWait = 7 * 1000, appiumPort = 4723, specs
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
    automationName = 'UiAutomator2';
    initializationWaitTimeout = 60 * 1000;
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
  capabilities.appPackage = 'com.payoneer.android';
  capabilities.appActivity = 'com.payoneer.MainActivity';
}

log.info(`Test run is about to start with next configuration:
${JSON.stringify({implicitWait, appiumPort, specs}, null, 4)}
Capabilities:\n${JSON.stringify(capabilities, null, 4)}`);


export const driver = new Driver({
  capabilities,
  implicitWait,
  appiumPort
});
const appium = driver.init();


void async function main() {
  try {
    helper.lib.build();
    await helper.lib.waitReady();

    const getServices = (await import("./src/assembler/assembler")).getServices;
    jasmine.env.service = getServices({platform});

    const tests = specs || (await selectTests())
      .map(test => `${__dirname}/spec/${test}`);

    await driver.waitUntilInitialized(appium, initializationWaitTimeout);

    await jasmine.addSpecFiles(tests);
    await jasmine.execute();

  } catch (err) {
    log.error(err.message);
    process.exit(13);
  }
}();
