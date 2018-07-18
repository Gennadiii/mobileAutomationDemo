import {helper} from "../../../../helpers/helper";
import {BalanceSectionPa} from "../../page_actions/home/balanceSection.pa";
import {BaseService} from "../base.service";


const log = helper.logger.get(`HomeBSService`);


interface BalanceSectionServiceInterface {
}


class BalanceSectionService extends BaseService implements BalanceSectionServiceInterface {

  constructor(public page: BalanceSectionPa) {
    super();
  }

}


export {BalanceSectionService};
