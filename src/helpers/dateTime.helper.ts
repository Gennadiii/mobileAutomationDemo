const dateTimeHelper = {

  sleep(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

};


export {dateTimeHelper};
