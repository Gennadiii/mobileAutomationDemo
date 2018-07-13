const data = {
  login: {
    loginMaxCharacters: 100,
    passwordMaxCharacters: 30,
    passwordMinCharacters: 7,
    getLoginWithMaxCharacters() {
      return getStringWithLength(this.loginMaxCharacters);
    },
    getPasswordWithMaxCharacters() {
      return getStringWithLength(this.passwordMaxCharacters);
    },
    getPasswordWithMinCharactersMinusOne() {
      return getStringWithLength(this.passwordMinCharacters - 1);
    },
  },
  home: {
    balance: {
      maxCollapsedCount: 3,
    },
    latestTransactions: {
      maxDisplayedCount: 10,
    },
  }
};


export {data};


function getStringWithLength(length) {
  return '7'.repeat(length);
}
