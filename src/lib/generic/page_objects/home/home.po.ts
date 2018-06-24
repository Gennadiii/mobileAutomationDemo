import {BasePagePo} from "../basePage.po";
import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {Icon} from "../../components/icon";
import {Label} from "../../components/label";
import {Link} from "../../components/link";


interface HomePoInterface extends BasePagePo {
  userIcon: Icon;
  userTitle: Label;
  allTransactionsLink: Link;
}


class HomePo extends BasePagePo implements HomePoInterface {

  name = 'Home';

  userIcon = new Icon(this.ef.autoId('UserIcon'));
  userTitle = new Label(this.ef.autoId('UserTitle'));
  allTransactionsLink = new Link(this.ef.autoId('AllActivities'));


  constructor(protected ef: ElementFinderInterface) {
    super();
  }

  get staticElements() {
    return [];
    // return [this.userIcon];
  }

  get content() {
    return [this.userIcon, this.userTitle];
  }

}


export {HomePo};
