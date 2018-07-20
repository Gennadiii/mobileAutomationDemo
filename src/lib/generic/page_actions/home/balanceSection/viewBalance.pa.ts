import {BasePa} from "../../base.pa";
import {helper} from "../../../../../helpers/helper";
import {ViewBalancePo} from "../../../page_objects/home/balanceSection/viewBalance.po";


const log = helper.logger.get('HomeViewBalancePa');


interface ViewBalancePaInterface extends BasePa {
}


class ViewBalancePa extends BasePa implements ViewBalancePaInterface {

  constructor(public page: ViewBalancePo) {
    super();
  }
 
}


export {ViewBalancePa};
