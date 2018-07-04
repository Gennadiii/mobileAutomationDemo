"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_data_1 = require("../../../data/users.data");
var logger_helper_1 = require("../../../helpers/logger.helper");
var log = logger_helper_1.logger.get('UserService');
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = users_data_1.getUsers();
        this.freeUsers = users_data_1.getUsers();
        this.allocatedUsers = {};
        this.filteredUsers = [];
        this.firstFilter = true;
    }
    UserService.prototype.allocate = function () {
        var _this = this;
        log.info("Allocating user");
        if (this.filteredUsers.length === 0) {
            throw new Error("No free users with chosen filter parameters.\n      Free users: " + JSON.stringify(this.freeUsers, null, 4) + "\n      Allocated users: " + JSON.stringify(this.allocatedUsers, null, 4));
        }
        var _a = this.filteredUsers[0], id = _a[0], user = _a[1];
        var login = user.login, password = user.password;
        delete this.freeUsers[id];
        this.allocatedUsers[id] = user;
        this.resetFilter();
        log.info("Allocated user: " + id + " - " + login);
        return { id: id, login: login, password: password, free: function () { return _this.free(id); } };
    };
    // balances
    UserService.prototype.balancesMoreThan = function (num) {
        log.info("Filtering users with more than \"" + num + "\" balances");
        this.filter(function (_a) {
            var id = _a[0], user = _a[1];
            return user.balanceCount > num;
        });
        return this;
    };
    UserService.prototype.balancesLessThan = function (num) {
        log.info("Filtering users with less than \"" + num + "\" balances");
        this.filter(function (_a) {
            var id = _a[0], user = _a[1];
            return user.balanceCount < num;
        });
        return this;
    };
    UserService.prototype.balanceCount = function (num) {
        log.info("Filtering users with \"" + num + "\" balances");
        this.filter(function (_a) {
            var id = _a[0], user = _a[1];
            return user.balanceCount === num;
        });
        return this;
    };
    UserService.prototype.balanceDisabled = function () {
        log.info("Filtering users with disabled balances");
        this.filter(function (_a) {
            var id = _a[0], user = _a[1];
            return user.disabledBalance;
        });
        return this;
    };
    // transactions
    UserService.prototype.withTransactions = function () {
        log.info("Filtering users with transactions");
        this.filter(function (_a) {
            var id = _a[0], user = _a[1];
            return user.transactions;
        });
        return this;
    };
    UserService.prototype.withoutTransactions = function () {
        log.info("Filtering users without transactions");
        this.filter(function (_a) {
            var id = _a[0], user = _a[1];
            return !user.transactions;
        });
        return this;
    };
    UserService.prototype.transactionsMoreThan = function (num) {
        log.info("Filtering users with more than \"" + num + "\" transactions");
        this.filter(function (_a) {
            var id = _a[0], user = _a[1];
            return user.transactionsCount > num;
        });
        return this;
    };
    UserService.prototype.transactionsLessThan = function (num) {
        log.info("Filtering users with less than \"" + num + "\" transactions");
        this.filter(function (_a) {
            var id = _a[0], user = _a[1];
            return user.transactionsCount < num;
        });
        return this;
    };
    // currencies
    UserService.prototype.sameCurrencies = function () {
        log.info("Filtering users with same currencies");
        this.filter(function (_a) {
            var id = _a[0], user = _a[1];
            return user.sameCurrencies;
        });
        return this;
    };
    // cards
    UserService.prototype.withCards = function () {
        log.info("Filtering users with cards");
        this.filter(function (_a) {
            var id = _a[0], user = _a[1];
            return user.optInCards;
        });
        return this;
    };
    UserService.prototype.withoutCards = function () {
        log.info("Filtering users without cards");
        this.filter(function (_a) {
            var id = _a[0], user = _a[1];
            return !user.optInCards;
        });
        return this;
    };
    UserService.prototype.cardBlocked = function () {
        log.info("Filtering users with blocked cards");
        this.filter(function (_a) {
            var id = _a[0], user = _a[1];
            return user.blockedCard;
        });
        return this;
    };
    // other
    UserService.prototype.name = function (name) {
        log.info("Looking for user with username: " + name);
        this.filter(function (_a) {
            var id = _a[0], user = _a[1];
            return user.login === name;
        });
        return this;
    };
    UserService.prototype.any = function () {
        this.filter(function () { return true; });
        return this;
    };
    UserService.prototype.filter = function (predicate) {
        this.filteredUsers = this.firstFilter
            ? Object.entries(this.freeUsers).filter(predicate)
            : this.filteredUsers.filter(predicate);
        this.firstFilter = false;
    };
    UserService.prototype.free = function (id) {
        log.info("Freeing user: " + id);
        delete this.allocatedUsers[id];
        this.freeUsers[id] = this.users[id];
    };
    UserService.prototype.resetFilter = function () {
        this.filteredUsers = [];
        this.firstFilter = true;
    };
    return UserService;
}());
exports.UserService = UserService;
