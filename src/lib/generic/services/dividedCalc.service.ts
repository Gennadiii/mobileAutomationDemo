import {FieldsPa} from "../page_actions/fields.pa";
import {OperationsPa} from "../page_actions/operations.pa";
import {ResultPa} from "../page_actions/result.pa";
import {BaseService} from "./base.service";


interface DividedCalcServiceInterface {
}


class DividedCalcService extends BaseService implements DividedCalcServiceInterface {


  constructor(public fieldsPage: FieldsPa,
              public operationsPage: OperationsPa,
              public resultPage: ResultPa) {
    super();
  }

}


export {DividedCalcService};
