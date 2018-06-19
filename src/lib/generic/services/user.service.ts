import {getUsers} from "../../../data/users.data";
import {logger} from "../../../helpers/logger.helper";


const log = logger.get('UserService');


interface UserServiceInterface {
  allocate: () => returnedUserInterface;
  balancesMoreThan: (num: number) => UserServiceInterface;
  balanceCount: (num: number) => UserServiceInterface;
  balanceDisabled: () => UserServiceInterface;
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

  balancesMoreThan(num) {
    log.info(`Filtering users with more than "${num}" balances`);
    this.filter(([id, user]) => user.balanceCount > num);
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


export {UserService};


interface returnedUserInterface {
  id: number;
  login: string;
  password: string;
}
