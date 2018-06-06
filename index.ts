import {Driver} from "./src/helpers/appium.helper";
require('dotenv-safe').config();
import {jasmine} from "./jasmine-conf";
import {selectTests} from "./src/helpers/testsSelector.helper";
import {helper} from "./src/helpers/helper";


const log = helper.logger.get('index');


const {
  platform, deviceName, app, implicitWait, appiumPort, specs
} = process.env;
let platformName = null;
let automationName = null;

switch (platform.toLowerCase()) {
  case 'ios':
    platformName = 'iOS';
    automationName = 'XCUITest';
    break;
  case 'android':
    platformName = 'Android';
    automationName = 'UiAutomator2';
    break;
  default:
    throw new Error(`Wrong platform name: ${platform}`);
}


log.info(`Test run is about to start with next configuration:
${JSON.stringify(
  {platformName, deviceName, app, implicitWait, appiumPort, automationName, specs},
  null, 4)}`);


const capabilities = {
  deviceName,
  app,
  platformName,
  automationName,
};

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

    const getServices = (await import("./src/assembler")).getServices;
    jasmine.env.service = getServices({platform});

    const tests = specs || (await selectTests())
      .map(test => `${__dirname}/spec/${test}`);

    await driver.waitUntilInitialized(appium);

    await jasmine.addSpecFiles(tests);
    await jasmine.execute();

  } catch (err) {
    log.error(err.message);
    process.exit(13);
  }
}();
