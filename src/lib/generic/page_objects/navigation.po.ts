import {Link} from "../components/link";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {BasePagePo} from "./basePage.po";


interface NavigationPoInterface {
  homeLink: Link;
  transactionsLink: Link;
  actionsLink: Link;
  settingsLink: Link;
}


class NavigationPo extends BasePagePo implements NavigationPoInterface {

  homeLink = new Link(this.ef.autoId('TabBar.Home.Text'));
  transactionsLink = new Link(this.ef.autoId('TabBar.Transactions.Text'));
  actionsLink = new Link(this.ef.autoId('TabBar.Actions.Text'));
  settingsLink = new Link(this.ef.autoId('TabBar.Settings.Text'));


  constructor(private ef: ElementFinderInterface) {
    super();
  }


  get content() {
    return [
      this.homeLink,
      this.transactionsLink,
      this.actionsLink,
      this.settingsLink,
    ];
  }

}


export {NavigationPo};
