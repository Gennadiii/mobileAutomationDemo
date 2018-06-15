import {FieldsPa} from "../page_actions/fields.pa";
import {OperationsPa} from "../page_actions/operations.pa";
import {ResultPa} from "../page_actions/result.pa";


interface DividedCalcServiceInterface {
}


class DividedCalcService implements DividedCalcServiceInterface {


  constructor(public fieldsPage: FieldsPa,
              public operationsPage: OperationsPa,
              public resultPage: ResultPa) {
  }

}


export {DividedCalcService};
