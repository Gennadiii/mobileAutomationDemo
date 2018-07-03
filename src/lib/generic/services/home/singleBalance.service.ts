import {helper} from "../../../../helpers/helper";
import {SingleBalancePa} from "../../page_actions/home/SingleBalance.pa";


const log = helper.logger.get(`HomeSBService`);


interface SingleBalanceServiceInterface {
}


class SingleBalanceService implements SingleBalanceServiceInterface {

  constructor(public page: SingleBalancePa) {
  }

}


export {SingleBalanceService};
