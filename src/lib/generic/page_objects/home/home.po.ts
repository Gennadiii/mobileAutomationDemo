import {BasePagePo} from "../basePage.po";
import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {Icon} from "../../components/icon";
import {Label} from "../../components/label";


interface HomePoInterface extends BasePagePo {
  userIcon: Icon;
  userTitle: Label;
}


class HomePo extends BasePagePo implements HomePoInterface {

  userIcon = new Icon(this.ef.autoId('UserIcon'));
  userTitle = new Label(this.ef.autoId('UserTitle'));


  constructor(protected ef: ElementFinderInterface) {
    super();
  }

  get staticElements() {
    return [this.userIcon];
  }

  get content() {
    return [this.userIcon, this.userTitle];
  }

}


export {HomePo};
