import {BasePagePa} from "../basePage.pa";
import {helper} from "../../../../helpers/helper";
import {SingleBalancePo} from "../../page_objects/home/SingleBalance.po";


const log = helper.logger.get('HomeSBPa');


interface SingleBalancePaInterface extends BasePagePa {
}


class SingleBalancePa extends BasePagePa implements SingleBalancePaInterface {

  constructor(public page: SingleBalancePo) {
    super();
  }

}


export {SingleBalancePa};
