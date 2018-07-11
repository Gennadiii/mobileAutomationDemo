import {OperationsPa} from "../page_actions/Operations.pa";
import {operationsInterface} from "../components/operationsPicker";
import {BaseService} from "./base.service";


interface OperationsServiceInterface {
  changeTo: () => Promise<operationsInterface>;
}


class OperationsService extends BaseService implements OperationsServiceInterface {

  constructor(public page: OperationsPa) {
    super();
  }


  async changeTo() {
    return await this.page.changeOperationTo();
  }

}


export {OperationsService};
