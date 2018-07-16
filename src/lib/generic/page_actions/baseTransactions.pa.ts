import {TransactionsPo} from "../page_objects/Transactions.po";
import {helper} from "../../../helpers/helper";
import {BasePa} from "./base.pa";
import {LatestTransactionsPo} from "../page_objects/home/latestTransactions.po";
import {lengthInterface} from "../components/longComponentsList";


const log = helper.logger.get('BaseTransactionsPa');


interface BaseTransactionsPaInterface extends BasePa {
  // check
  emptyTransactionsContentIsDisplayed: () => Promise<boolean>;
  latestIsDisplayed: () => Promise<boolean>;
  countIsMoreThan: (count: number, params: lengthInterface) => Promise<boolean>;
  // get
  countTransactions: () => Promise<number>;
}


class BaseTransactionsPa extends BasePa implements BaseTransactionsPaInterface {

  constructor(public page: TransactionsPo | LatestTransactionsPo) {
    super();
  }


  // check
  emptyTransactionsContentIsDisplayed() {
    log.info(`Checking if empty transactions content is displayed`);
    const isDisplayedArr = this.page.emptyTransactionsContent
      .map(element => element.isDisplayed());
    return helper.promise.allTrue(isDisplayedArr);
  }

  latestIsDisplayed() {
    log.info(`Checking if latest transaction is displayed`);
    return this.page.items.getElementByIndex(0).isDisplayed();
  }

  async countIsMoreThan(count, params?: lengthInterface) {
    const actualCount = await this.page.items.length(params);
    log.info(`Actual count: ${actualCount}`);
    return actualCount > count;
  }

  // get
  countTransactions() {
    log.error(`countTransactions is platform specific method`);
    return Promise.resolve(NaN);
  }

}


export {BaseTransactionsPa};
