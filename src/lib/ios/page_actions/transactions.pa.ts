import {helper} from "../../../helpers/helper";
import {TransactionsPa as GenericTransactionsPa} from "../../generic/page_actions/transactions.pa";
import {TransactionsPo} from "../../generic/page_objects/transactions.po";
import {driver} from "../../../../index";


const log = helper.logger.get('IosTransactionsPa');


interface TransactionsPaInterface extends GenericTransactionsPa {
}


class TransactionsPa extends GenericTransactionsPa implements TransactionsPaInterface {

  constructor(public page: TransactionsPo) {
    super(page);
  }


  // get
  async countTransactions() {
    log.info(`Counting transactions`);
    await driver.scrollToBottom();
    return this.page.items.length({withScroll: false});
  }

}


export {TransactionsPa};
