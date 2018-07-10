import {helper} from "../../../../helpers/helper";
import {SingleBalancePa} from "../../page_actions/home/SingleBalance.pa";
import {BaseService} from "../base.service";


const log = helper.logger.get(`HomeSBService`);


interface SingleBalanceServiceInterface {
}


class SingleBalanceService extends BaseService implements SingleBalanceServiceInterface {

  constructor(public page: SingleBalancePa) {
    super();
  }

}


export {SingleBalanceService};
