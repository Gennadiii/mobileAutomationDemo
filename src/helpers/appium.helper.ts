import {logger} from "./logger.helper";
import {waitersHelper} from "./waiters.helper";
const wd = require('wd');


const log = logger.get('Driver');


interface DriverInterface {
  appium: () => Promise<any>;
  init: () => Promise<DriverInterface>;
  appiumTerminate: () => Promise<any>;
  hideKeyboard: () => Promise<any>;
  appRelaunch: () => Promise<any>;
  setImplicitTimeout: (time: number) => Promise<any>;
}


class Driver implements DriverInterface {

  appium = null;
  private capabilities;
  private implicitWait;
  private appiumPort;
  private appiumInitialized = false;

  constructor(private params: driverParams) {
    const {
      implicitWait,
      capabilities,
      appiumPort
    } = this.params;
    switch (capabilities.platformName.toLowerCase()) {
      case 'ios':
        capabilities.platformName = 'iOS';
        break;
      case 'android':
        capabilities.platformName = 'Android';
        break;
      default:
        throw new Error(`Wrong platform name: ${capabilities.platformName}`);
    }
    this.capabilities = capabilities;
    this.implicitWait = +implicitWait; // Comes as user input from runtime (string)
    this.appiumPort = +appiumPort; // Comes as user input from runtime (string)
  }

  async init() {
    log.info(`Initializing appium`);
    const driver = wd.promiseChainRemote('localhost', this.appiumPort);
    await driver
      .init(this.capabilities)
      .setImplicitWaitTimeout(this.implicitWait);
    this.appium = driver;
    return this;
  }

  async setImplicitTimeout(time) {
    await this.appium.setImplicitWaitTimeout(time);
  }

  async appiumTerminate() {
    log.info(`Terminating appium`);
    await this.appium.quit();
  }

  async hideKeyboard() {
    log.info(`Hiding keyboard`);
    await this.appium.hideKeyboard();
  }

  async appRelaunch() {
    log.info(`Relaunching app`);
    await this.appClose();
    await this.appLaunch();
  }

  element(using, value) {
    return this.appium.element(using, value);
  }

  elements(using, value) {
    return this.appium.elements(using, value);
  }

  async waitUntilInitialized(appiumInitPromise) {
    process.stdout.write("Waiting for appium to initialize");
    await waitersHelper.wait(() => {
        appiumInitPromise
          .then(() => this.appiumInitialized = true);
        return this.appiumInitialized;
      }, 30 * 1000, 100
    );
    console.info();
  }

  private async appClose() {
    log.info(`Closing application`);
    await this.appium.closeApp();
  }

  private async appLaunch() {
    log.info(`Launching application`);
    await this.appium.launchApp();
  }

}


export {Driver};


interface capabilitiesInterface {
  deviceName: string;
  platformName: string;
  app: string;
}


interface driverParams {
  capabilities: capabilitiesInterface;
  implicitWait: string | number;
  appiumPort: string | number;
}
