import {TypeFilterPo} from "../../../page_objects/transactions/filters/typeFilter.po";
import {helper} from "../../../../../helpers/helper";
import {BasePa} from "../../base.pa";


const log = helper.logger.get('TypeFilterPa');


interface TypeFilterPaInterface extends BasePa {
}


class TypeFilterPa extends BasePa implements TypeFilterPaInterface {

  constructor(public page: TypeFilterPo) {
    super();
  }


}


export {TypeFilterPa};
