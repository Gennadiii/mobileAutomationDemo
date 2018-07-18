import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {CommonPo as GenericCommonPo} from "../../generic/page_objects/common.po";
import {Icon} from "../../generic/components/icon";
import {Button} from "../../generic/components/button";


interface CommonPoInterface extends GenericCommonPo {
}


class CommonPo extends GenericCommonPo implements CommonPoInterface {

  name = 'Common';

  progressBar = new Icon(this.ef.className('XCUIElementTypeActivityIndicator'));
  backButton = new Button(this.ef.autoId('TBD')); // todo


  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

}


export {CommonPo};
