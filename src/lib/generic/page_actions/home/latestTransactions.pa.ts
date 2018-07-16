import {helper} from "../../../../helpers/helper";
import {LatestTransactionsPo} from "../../page_objects/home/latestTransactions.po";
import {BaseTransactionsPa} from "../baseTransactions.pa";


const log = helper.logger.get('HomeLTPa');


interface LatestTransactionsPaInterface extends BaseTransactionsPa {
  // actions
  clickAllTransactionsLink: () => Promise<void>;
  // check
  findAllTransactionsLink: () => Promise<boolean>;
}


class LatestTransactionsPa extends BaseTransactionsPa implements LatestTransactionsPaInterface {

  constructor(public page: LatestTransactionsPo) {
    super(page);
  }


  // actions
  async clickAllTransactionsLink() {
    log.info(`Clicking all transactions link`);
    await this.page.allTransactionsLink.click();
  }

  // check
  findAllTransactionsLink() {
    log.info(`Looking for all transactions link`);
    return this.page.allTransactionsLink.scrollUntilDisplayed({maxScrolls: 6});
  }

}


export {LatestTransactionsPa};
