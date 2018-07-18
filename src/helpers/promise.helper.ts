import {logger} from "./logger.helper";


interface promiseHelperInterface {
  allTrue: (arr: any[]) => Promise<boolean>;
  allFalse: (arr: any[]) => Promise<boolean>;
}


const log = logger.get('promiseHelper');


const promiseHelper: promiseHelperInterface = {

  allTrue(arr) {
    return allBoolean(arr, true);
  },

  allFalse(arr) {
    return allBoolean(arr, false);
  }

};


export {promiseHelper};


async function allBoolean(arr, expectation: boolean) {
  const resolvedPromisesArr = await Promise.all(arr);
  let finalResult = true;
  resolvedPromisesArr.forEach((promise, index) => {
    const result = promise === expectation;
    result || log.warn(`Promise by index "${index}" resolved as ${!expectation}`);
    if (result === false) {
      finalResult = false;
    }
  });
  return finalResult;
}
