import {logger} from "./logger.helper";


interface promiseHelperInterface {
  allTrue: (params: allInterface) => Promise<boolean>;
  allFalse: (params: allInterface) => Promise<boolean>;
}


const log = logger.get('promiseHelper');


const promiseHelper: promiseHelperInterface = {

  allTrue(params: allInterface) {
    return allBoolean(params, true);
  },

  allFalse(params: allInterface) {
    return allBoolean(params, false);
  }

};


export {promiseHelper};


async function allBoolean(params: allInterface, expectation: boolean) {
  const {arr} = params;
  const resolvedPromisesArr = await Promise.all(arr);
  let finalResult = true;
  resolvedPromisesArr.forEach((promise, index) => {
    const result = promise === expectation;
    result || log.error(`Promise by index "${index}" resolved as ${!expectation}`);
    if (result === false) {
      finalResult = false;
    }
  });
  return finalResult;
}


interface allInterface {
  arr: Array<Promise<boolean>>;
}
