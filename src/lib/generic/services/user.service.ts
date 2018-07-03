import {getUsers} from "../../../data/users.data";
import {logger} from "../../../helpers/logger.helper";


const log = logger.get('UserService');


interface UserServiceInterface {
  allocate: () => userInterface;
  // balances
  balancesMoreThan: (num: number) => UserServiceInterface;
  balancesLessThan: (num: number) => UserServiceInterface;
  balanceCount: (num: number) => UserServiceInterface;
  balanceDisabled: () => UserServiceInterface;
  balanceBlocked: () => UserServiceInterface;
  // transactions
  transactionsMoreThan: (num: number) => UserServiceInterface;
  transactionsLessThan: (num: number) => UserServiceInterface;
  withTransactions: () => UserServiceInterface;
  withoutTransactions: () => UserServiceInterface;
  // currencies
  sameCurrencies: () => UserServiceInterface;
  // cards
  withCards: () => UserServiceInterface;
  withoutCards: () => UserServiceInterface;
  // other
  any: () => UserServiceInterface;
  name: (name: string) => UserServiceInterface;
}


class UserService implements UserServiceInterface {

  private users = getUsers();
  private freeUsers = getUsers();
  private allocatedUsers = {};
  private filteredUsers = [];
  private firstFilter = true;

  allocate() {
    log.info(`Allocating user`);
    if (this.filteredUsers.length === 0) {
      throw new Error(`No free users with chosen filter parameters.
      Free users: ${JSON.stringify(this.freeUsers, null, 4)}
      Allocated users: ${JSON.stringify(this.allocatedUsers, null, 4)}`);
    }
    const [id, user] = this.filteredUsers[0];
    const {login, password} = user;
    delete this.freeUsers[id];

    this.allocatedUsers[id] = user;
    this.resetFilter();
    log.info(`Allocated user: ${id} - ${login}`);

    return {id, login, password, free: () => this.free(id)};
  }

  // balances
  balancesMoreThan(num) {
    log.info(`Filtering users with more than "${num}" balances`);
    this.filter(([id, user]) => user.balanceCount > num);
    return this;
  }

  balancesLessThan(num) {
    log.info(`Filtering users with less than "${num}" balances`);
    this.filter(([id, user]) => user.balanceCount < num);
    return this;
  }

  balanceCount(num) {
    log.info(`Filtering users with "${num}" balances`);
    this.filter(([id, user]) => user.balanceCount === num);
    return this;
  }

  balanceDisabled() {
    log.info(`Filtering users with disabled balances`);
    this.filter(([id, user]) => user.disabledBalance);
    return this;
  }

  balanceBlocked() {
    log.info(`Filtering users with blocked balances`);
    this.filter(([id, user]) => user.blockedBalance);
    return this;
  }

  // transactions
  withTransactions() {
    log.info(`Filtering users with transactions`);
    this.filter(([id, user]) => user.transactions);
    return this;
  }

  withoutTransactions() {
    log.info(`Filtering users without transactions`);
    this.filter(([id, user]) => !user.transactions);
    return this;
  }

  transactionsMoreThan(num) {
    log.info(`Filtering users with more than "${num}" transactions`);
    this.filter(([id, user]) => user.transactionsCount > num);
    return this;
  }

  transactionsLessThan(num) {
    log.info(`Filtering users with less than "${num}" transactions`);
    this.filter(([id, user]) => user.transactionsCount < num);
    return this;
  }

  // currencies
  sameCurrencies() {
    log.info(`Filtering users with same currencies`);
    this.filter(([id, user]) => user.sameCurrencies);
    return this;
  }

  // cards
  withCards() {
    log.info(`Filtering users with cards`);
    this.filter(([id, user]) => user.optInCards);
    return this;
  }

  withoutCards() {
    log.info(`Filtering users without cards`);
    this.filter(([id, user]) => !user.optInCards);
    return this;
  }

  // other
  name(name) {
    log.info(`Looking for user with username: ${name}`);
    this.filter(([id, user]) => user.login === name);
    return this;
  }

  any() {
    this.filter(() => true);
    return this;
  }

  private filter(predicate) {
    this.filteredUsers = this.firstFilter
      ? (Object as any).entries(this.freeUsers).filter(predicate)
      : this.filteredUsers.filter(predicate);
    this.firstFilter = false;
  }

  private free(id) {
    log.info(`Freeing user: ${id}`);
    delete this.allocatedUsers[id];
    this.freeUsers[id] = this.users[id];
  }

  private resetFilter() {
    this.filteredUsers = [];
    this.firstFilter = true;
  }

}


export {UserService, userInterface};


interface userInterface {
  id: number;
  login: string;
  password: string;
  free: () => void;
}
