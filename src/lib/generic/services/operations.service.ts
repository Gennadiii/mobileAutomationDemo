import {OperationsPa} from "../page_actions/Operations.pa";
import {operationsInterface} from "../components/operationsPicker";


interface OperationsServiceInterface {
  changeTo: () => Promise<operationsInterface>;
}


class OperationsService implements OperationsServiceInterface {

  constructor(public page: OperationsPa) {
  }


  async changeTo() {
    return await this.page.changeOperationTo();
  }

}


export {OperationsService};
