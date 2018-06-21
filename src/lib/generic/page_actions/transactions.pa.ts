import {TransactionsPo} from "../page_objects/Transactions.po";
import {helper} from "../../../helpers/helper";
import {BasePagePa} from "./basePage.pa";


const log = helper.logger.get('TransactionsPa');


interface TransactionsPaInterface extends BasePagePa {
  clickFiltersButton: () => Promise<void>;
}


class TransactionsPa extends BasePagePa implements TransactionsPaInterface {

  constructor(public page: TransactionsPo) {
    super();
  }


  async clickFiltersButton() {
    log.info(`Opening filters`);
    await this.page.filtersButton.click();
  }

}


export {TransactionsPa};
