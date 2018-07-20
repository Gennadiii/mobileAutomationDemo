import {Link} from "../components/link";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {BasePo} from "./base.po";


interface NavigationPoInterface {
  homeLink: Link;
  transactionsLink: Link;
  actionsLink: Link;
  settingsLink: Link;
}


class NavigationPo extends BasePo implements NavigationPoInterface {

  name = 'Navigation';

  homeLink = new Link(this.ef.autoId('TabBar.Home.Text'));
  transactionsLink = new Link(this.ef.autoId('TabBar.Transactions.Text'));
  actionsLink = new Link(this.ef.autoId('TabBar.Actions.Text'));
  settingsLink = new Link(this.ef.autoId('TabBar.Settings.Text'));


  constructor(private ef: ElementFinderInterface) {
    super();
  }


  get staticElements() {
    return [this.homeLink];
  }

  get content() {
    return [
      ...this.staticElements,
      this.transactionsLink,
      this.actionsLink,
      this.settingsLink,
    ];
  }

}


export {NavigationPo};
