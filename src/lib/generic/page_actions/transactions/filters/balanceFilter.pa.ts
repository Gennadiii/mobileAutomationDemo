import {BalanceFilterPo} from "../../../page_objects/transactions/filters/balanceFilter.po";
import {helper} from "../../../../../helpers/helper";
import {BasePa} from "../../base.pa";


const log = helper.logger.get('BalanceFilterPa');


interface BalanceFilterPaInterface extends BasePa {
}


class BalanceFilterPa extends BasePa implements BalanceFilterPaInterface {

  constructor(public page: BalanceFilterPo) {
    super();
  }


}


export {BalanceFilterPa};
