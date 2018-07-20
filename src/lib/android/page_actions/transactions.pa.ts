import {helper} from "../../../helpers/helper";
import {TransactionsPa as GenericTransactionsPa} from "../../generic/page_actions/transactions/transactions.pa";
import {TransactionsPo} from "../../generic/page_objects/transactions/transactions.po";


const log = helper.logger.get('AndroidTransactionsPa');


interface TransactionsPaInterface extends GenericTransactionsPa {
}


class TransactionsPa extends GenericTransactionsPa implements TransactionsPaInterface {

  constructor(public page: TransactionsPo) {
    super(page);
  }


  // get
  async countTransactions(waitUntilProgressBarDisappears) {
    log.info(`Counting transactions`);
    return this.page.items.length({
      waitUntilProgressBarDisappears,
      withScroll: true,
      waitForElement: true,
      indexOfElementToWaitFor: 1
    });
  }

}


export {TransactionsPa};
