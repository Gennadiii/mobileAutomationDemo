import {logger} from "./logger.helper";


interface promiseHelperInterface {
  allTrue: (params: allTrueInterface) => Promise<boolean>;
}


const log = logger.get('promiseHelper');


const promiseHelper: promiseHelperInterface = {

  async allTrue(params: allTrueInterface) {
    const {arr} = params;
    const resolvedPromisesArr = await Promise.all(arr);
    let finalResult = true;
    resolvedPromisesArr.forEach((promise, index) => {
      const result = promise === true;
      result || log.error(`Promise by index "${index}" resolved as false`);
      if (result === false) {
        finalResult = false;
      }
    });
    return finalResult;
  }

};


export {promiseHelper};


interface allTrueInterface {
  arr: Array<Promise<boolean>>;
}
