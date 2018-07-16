import {helper} from "../../../helpers/helper";
import {TransactionsPa as GenericTransactionsPa} from "../../generic/page_actions/transactions.pa";
import {TransactionsPo} from "../../generic/page_objects/transactions.po";


const log = helper.logger.get('AndroidTransactionsPa');


interface TransactionsPaInterface extends GenericTransactionsPa {
}


class TransactionsPa extends GenericTransactionsPa implements TransactionsPaInterface {

  constructor(public page: TransactionsPo) {
    super(page);
  }


  // check
  async countIsMoreThan(count) {
    log.info(`Checking if transactions count is more than "${count}"`);
    return super.countIsMoreThan(count, {
      withScroll: true,
      waitForElement: true,
      indexOfElementToWaitFor: 1,
    });
  }

}


export {TransactionsPa};
