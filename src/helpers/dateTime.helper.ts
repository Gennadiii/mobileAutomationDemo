import {logger} from "./logger.helper";


const log = logger.get('dateTimeHelper');


const dateTimeHelper = {

  sleep(timeout, params = {ignoreLog: false}) {
    const {ignoreLog} = params;
    ignoreLog || log.info(`Sleeping: ${timeout / 1000} seconds`);
    return new Promise(resolve => setTimeout(resolve, timeout));
  },

  getTimeStamp(time = new Date()): string {
    const h = time.getHours();
    const m = time.getMinutes();
    const s = time.getSeconds();
    const mm = time.getMilliseconds();

    const hours = (h < 10 ? "0" : "") + h;
    const minutes = (m < 10 ? "0" : "") + m;
    const seconds = (s < 10 ? "0" : "") + s;
    const milliseconds = (mm < 10 ? "00" : (mm < 100 ? "0" : "")) + mm;

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  },

};


export {dateTimeHelper};
