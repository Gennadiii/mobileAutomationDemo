import {TransactionsPo} from "../page_objects/transactions/transactions.po";
import {helper} from "../../../helpers/helper";
import {BasePa} from "./base.pa";
import {LatestTransactionsPo} from "../page_objects/home/latestTransactions/latestTransactions.po";


const log = helper.logger.get('BaseTransactionsPa');


interface BaseTransactionsPaInterface extends BasePa {
  // check
  emptyTransactionsContentIsDisplayed: () => Promise<boolean>;
  latestIsDisplayed: () => Promise<boolean>;
  // get
  countTransactions: (waitUntilProgressBarDisappears: () => Promise<boolean>) => Promise<number>;
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

  // get
  countTransactions(waitUntilProgressBarDisappears?) {
    log.error(`countTransactions is platform specific method`);
    return Promise.resolve(NaN);
  }

}


export {BaseTransactionsPa};
