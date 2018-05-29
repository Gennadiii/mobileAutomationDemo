import {dateTimeHelper} from "./dateTime.helper";


const waitersHelper = {

  /**
   * @summary uses poll method for a certain amount of time
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
   * @summary uses poll method with number of tries
   * @param {Function} callback - function to poll
   * @param params
   * retryNumber - number of tries
   * interval - time between queries
   */
  async retry(callback, params = {interval: 2 * 1000, retryNumber: 2}) {
    const {interval} = params;
    let {retryNumber} = params;
    let continuePolling = () => retryNumber--;
    return poll(callback, continuePolling, interval, false);
  },

};


export {waitersHelper};


/**
 * @summary Method polls a callback function
 * @param {Function} callback - function to poll
 * @param {Function} continuePolling - function of outer function which decides when to stop polling
 * @param {Number} interval - time between queries
 * @param cbContinueCondition - primitive which returns the function when doesn't find what needed
 */
async function poll(callback, continuePolling, interval, cbContinueCondition) {
  if (!continuePolling()) {
    return Promise.reject(`Polling didn't give results.`);
  }
  const result = await callback();
  process.stdout.write(".");
  if (result !== cbContinueCondition) {
    console.log(); // New line after buffer write
    return result;
  }
  await dateTimeHelper.sleep(interval);
  return poll(callback, continuePolling, interval, cbContinueCondition);
}
