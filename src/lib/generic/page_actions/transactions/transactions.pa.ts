import {TransactionsPo} from "../../page_objects/transactions/transactions.po";
import {helper} from "../../../../helpers/helper";
import {BaseTransactionsPa} from "../baseTransactions.pa";


const log = helper.logger.get('TransactionsPa');


interface TransactionsPaInterface extends BaseTransactionsPa {
  clickFiltersButton: () => Promise<void>;
}


class TransactionsPa extends BaseTransactionsPa implements TransactionsPaInterface {

  constructor(public page: TransactionsPo) {
    super(page);
  }


  async clickFiltersButton() {
    log.info(`Opening filters`);
    await this.page.filtersButton.click();
  }

}


export {TransactionsPa};
