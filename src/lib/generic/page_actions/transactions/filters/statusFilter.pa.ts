import {helper} from "../../../../../helpers/helper";
import {BasePa} from "../../base.pa";
import {StatusFilterPo} from "../../../page_objects/transactions/filters/statusFilter.po";


const log = helper.logger.get('StatusFilterPa');


interface StatusFilterPaInterface extends BasePa {
}


class StatusFilterPa extends BasePa implements StatusFilterPaInterface {

  constructor(public page: StatusFilterPo) {
    super();
  }


}


export {StatusFilterPa};
