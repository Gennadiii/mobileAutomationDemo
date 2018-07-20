import {helper} from "../../../../../helpers/helper";
import {BasePa} from "../../base.pa";
import {DateFilterPo} from "../../../page_objects/transactions/filters/dateFilter.po";


const log = helper.logger.get('DateFilterPa');


interface DateFilterPaInterface extends BasePa {
}


class DateFilterPa extends BasePa implements DateFilterPaInterface {

  constructor(public page: DateFilterPo) {
    super();
  }


}


export {DateFilterPa};
