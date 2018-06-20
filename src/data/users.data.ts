function getUsers(): { [name: number]: userInterface } {
  return {
    1972817: {
      login: 'dis_bal',
      password: '123456qq',
      balanceCount: 2,
      disabledBalance: true,
    },
    1972812: {
      login: 'card_block',
      password: '123456q',
      blockedCard: true,
      balanceCount: 2,
    },
    1614686: {
      login: 'samecurrency',
      password: '123456qq',
      optInCards: true,
      balanceCount: 1,
    },
    1972815: {
      login: 'onebalance',
      password: '123456qq',
      balanceCount: 1,
    },
    1972816: {
      login: 'card_balance',
      password: '123456qq',
      balanceCount: 2,
      cardsCount: 1,
      transactions: true,
    },
  };
}


export {getUsers, userInterface};


interface userInterface {
  login: string;
  password: string;
  balanceCount?: number;
  cardsCount?: number;
  sameCurrencies?: boolean;
  cardIssued?: boolean;
  blockedCard?: boolean;
  disabledBalance?: boolean;
  optInCards?: boolean;
  transactions?: boolean;
}

