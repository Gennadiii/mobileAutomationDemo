import {logger} from "./logger.helper";
import {waitersHelper} from "./waiters.helper";
const wd = require('wd');


const log = logger.get('Driver');


interface DriverInterface {
  appium: () => Promise<any>;
  // actions
  init: () => Promise<DriverInterface>;
  appiumTerminate: () => Promise<any>;
  hideKeyboard: () => Promise<any>;
  appRelaunch: () => Promise<any>;
  swipe: (params: swipeInterface) => Promise<void>;
  scrollDown: (screenPercentage?: number) => Promise<void>;
  // set
  setImplicitTimeout: (time: number) => Promise<any>;
  // get
  element: (using: string, value: string) => Promise<any>;
  elements: (using: string, value: string) => Promise<any>;
  getScreenSize: () => Promise<screenSizeInterface>;
  // wait
  waitUntilInitialized: (appiumInitPromise: any) => Promise<void>;
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
    this.capabilities = capabilities;
    this.implicitWait = +implicitWait; // Comes as user input from runtime (string)
    this.appiumPort = +appiumPort; // Comes as user input from runtime (string)

    wd.addPromiseChainMethod('swipe', swipe);
  }

  // actions

  async init() {
    log.info(`Initializing appium`);
    const driver = wd.promiseChainRemote('localhost', this.appiumPort);
    await driver
      .init(this.capabilities)
      .setImplicitWaitTimeout(this.implicitWait);
    this.appium = driver;
    return this;
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

  swipe(params: swipeInterface) {
    const {startPoint, endPoint, holdDuration = 800} = params;
    startPoint.x = startPoint.x || 100;
    endPoint.x = endPoint.x || 100;
    return this.appium.swipe({startPoint, endPoint, holdDuration});
  }

  async scrollDown(screenPercentage = 100) {
    if (screenPercentage < 1 || screenPercentage > 100) {
      throw new Error(`screenPercentage should be from 1 to 100`);
    }
    log.info(`Scrolling down: ${screenPercentage}%`);
    const screenPercentageWithoutNavigationSection = 0.92;
    const screenSizeWithoutNavigationSection = (await this.getScreenSize()).height *
      screenPercentageWithoutNavigationSection *
      screenPercentage / 100;
    await this.swipe({startPoint: {y: screenSizeWithoutNavigationSection}, endPoint: {y: 1}});
  }

  // set

  async setImplicitTimeout(time) {
    await this.appium.setImplicitWaitTimeout(time);
  }

  // get

  element(using, value) {
    return this.appium.element(using, value);
  }

  elements(using, value) {
    return this.appium.elements(using, value);
  }

  getScreenSize() {
    return this.appium.getWindowSize();
  }

  // wait

  async waitUntilInitialized(appiumInitPromise) {
    process.stdout.write("Waiting for appium to initialize");
    await waitersHelper.wait(() => {
        appiumInitPromise
          .then(() => this.appiumInitialized = true);
        return this.appiumInitialized;
      }, 60 * 1000, 100
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


export {Driver, pointCoordinatesInterface, capabilitiesInterface};


function swipe(params: swipeInterface) {
  const {startPoint, endPoint, holdDuration = 800} = params;
  const action = new wd.TouchAction();
  action
    .press(startPoint)
    .wait(holdDuration)
    .moveTo(endPoint)
    .release();
  return this.performTouchAction(action);
}


interface capabilitiesInterface {
  deviceName: string;
  platformName: string;
  app: string;
  automationName: string;
  appPackage?: string;
}


interface driverParams {
  capabilities: capabilitiesInterface;
  implicitWait: string | number;
  appiumPort: string | number;
}


interface swipeInterface {
  startPoint: pointCoordinatesInterface;
  endPoint: pointCoordinatesInterface;
  holdDuration?: number;
}


interface pointCoordinatesInterface {
  x?: number;
  y: number;
}


interface screenSizeInterface {
  height: number;
  width: number;
}
