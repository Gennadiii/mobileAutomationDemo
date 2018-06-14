import {logger} from "./logger.helper";


const log = logger.get('dateTimeHelper');


const dateTimeHelper = {

  sleep(timeout, params = {ignoreLog: true}) {
    const {ignoreLog} = params;
    ignoreLog || log.info(`Sleeping: ${timeout / 1000} seconds`);
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

};


export {dateTimeHelper};
