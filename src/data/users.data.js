"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultPassword = '123456qq';
function getUsers() {
    return {
        1972817: {
            login: 'dis_bal',
            password: defaultPassword,
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
            password: defaultPassword,
            optInCards: true,
            balanceCount: 1,
        },
        1972815: {
            login: 'onebalance',
            password: defaultPassword,
            balanceCount: 1,
        },
        1972816: {
            login: 'card_balance',
            password: defaultPassword,
            balanceCount: 2,
            cardsCount: 1,
            transactions: true,
        },
        1972846: {
            login: 'optin1',
            password: defaultPassword,
            balanceCount: 4,
            optInCards: true,
            transactions: true,
            transactionsCount: 11,
        },
        1972806: {
            login: 'sev_balances',
            password: defaultPassword,
            balanceCount: 3,
            optInCards: true,
            sameCurrencies: true,
        },
    };
}
exports.getUsers = getUsers;
