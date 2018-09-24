import {dateTimeHelper} from "./dateTime.helper";
import {driver} from "../../index";


const waitersHelper = {

  /**
   * @summary uses poll method for a certain amount of time while callback returns false
   * @param {Function} callback - function to poll
   * @param {Number} timeout - time given for polling
   * @param {Number} interval - time between queries
   */
  async wait(callback, timeout, interval = 100): Promise<any> {
    const currentTime = () => +new Date();
    const startTime = currentTime();
    const continuePolling = () => (currentTime() - startTime) < timeout;
    return poll(callback, continuePolling, interval, false);
  },

  /**
   * Does the same as wait method but sets implicit wait to minimum before wait and restores to default time after
   * @param callback
   * @param timeout
   * @param {appiumWaitInterface} params
   * @return {Promise<any>}
   */
  async appiumWait(callback, timeout, params: appiumWaitInterface = {}): Promise<any> {
    const {throwError = true, interval = 100} = params;
    driver.setImplicitTimeout(0);
    try {
      return await this.wait(callback, timeout, interval);
    } catch (err) {
      if (throwError) {
        throw new Error(err);
      } else {
        return false;
      }
    } finally {
      driver.setImplicitTimeout(driver.defaultImplicitWait);
    }
  },

  /**
   * @summary uses poll method with number of tries while callback returns false
   * @param {Function} callback - function to poll
   * @param params
   * retryNumber - number of tries
   * interval - time between queries
   */
  async retry(callback, params = {interval: 2 * 1000, retryNumber: 2}) {
    const {interval} = params;
    let {retryNumber} = params;
    const continuePolling = () => retryNumber--;
    return poll(callback, continuePolling, interval, false);
  },

};


export {waitersHelper};


/**
 * @summary Method polls a callback function
 * @param {Function} callback - function to poll
 * @param {Function} continuePolling - function of outer function which decides when to stop polling
 * @param {Number} interval - time between queries
 * @param cbContinueCondition - primitive which indicates that polling should continue
 */
async function poll(callback, continuePolling, interval, cbContinueCondition) {
  if (!continuePolling()) {
    console.info(); // New line after buffer write
    return Promise.reject(`Polling didn't give results.`);
  }
  const result = await callback();
  process.stdout.write(".");
  if (result !== cbContinueCondition) {
    console.info(); // New line after buffer write
    return result;
  }
  await dateTimeHelper.sleep(interval, {ignoreLog: true});
  return poll(callback, continuePolling, interval, cbContinueCondition);
}


interface appiumWaitInterface {
  throwError?: boolean;
  interval?: number;
}

