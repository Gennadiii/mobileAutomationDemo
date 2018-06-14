import {IosOperationsPicker} from "../../generic/components/Ios/IosOperationsPicker";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {BasePagePo} from "../../generic/page_objects/basePage.po";


interface IosOperationsPoInterface extends BasePagePo {
  operationsPicker: IosOperationsPicker;
}


class IosOperationsPo extends BasePagePo implements IosOperationsPoInterface {

  name = 'Calc - Operations';

  // override
  operationsPicker = new IosOperationsPicker(this.ef.accessibilityId('operationsPicker'), this.ef);


  constructor(protected ef: ElementFinderInterface) {
    super();
  }

}


export {IosOperationsPo};