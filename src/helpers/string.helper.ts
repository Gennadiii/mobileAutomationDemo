const stringHelper = {

  capitalize(str) {
    return str[0].toUpperCase() + str.substring(1);
  },

  unCapitalize(str) {
    return str[0].toLowerCase() + str.substring(1);
  }

};


export {stringHelper};
