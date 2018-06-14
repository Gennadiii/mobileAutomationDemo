interface promiseHelperInterface {
  allTrue: (params: allTrueInterface) => Promise<boolean>;
}


const promiseHelper: promiseHelperInterface = {

  async allTrue(params: allTrueInterface) {
    const {arr} = params;
    const resolvedPromisesArr = await Promise.all(arr);
    return resolvedPromisesArr.every(promise => promise === true);
  }

};


export {promiseHelper};


interface allTrueInterface {
  arr: Array<Promise<boolean>>;
}
