import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {CommonPo as GenericCommonPo} from "../../generic/page_objects/common.po";
import {Icon} from "../../generic/components/icon";


interface CommonPoInterface extends GenericCommonPo {
}


class CommonPo extends GenericCommonPo implements CommonPoInterface {

  name = 'Common';

  progressBar = new Icon(this.ef.className('XCUIElementTypeActivityIndicator'));


  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

}


export {CommonPo};
