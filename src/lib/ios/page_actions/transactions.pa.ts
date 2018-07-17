import {helper} from "../../../helpers/helper";
import {TransactionsPa as GenericTransactionsPa} from "../../generic/page_actions/transactions.pa";
import {TransactionsPo} from "../../generic/page_objects/transactions.po";


const log = helper.logger.get('IosTransactionsPa');


interface TransactionsPaInterface extends GenericTransactionsPa {
}


class TransactionsPa extends GenericTransactionsPa implements TransactionsPaInterface {

  constructor(public page: TransactionsPo) {
    super(page);
  }


  // get
  async countTransactions(waitUntilProgressBarDisappears) {
    log.info(`Counting transactions`);
    return this.page.items.length({waitUntilProgressBarDisappears, withScroll: false});
  }

}


export {TransactionsPa};
