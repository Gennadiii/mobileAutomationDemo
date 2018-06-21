import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {BasePagePo} from "./basePage.po";
import {Button} from "../components/button";


interface SettingsPoInterface {
  signOutButton: Button;
}


class SettingsPo extends BasePagePo implements SettingsPoInterface {

  signOutButton = new Button(this.ef.autoId('SignOut'));


  constructor(private ef: ElementFinderInterface) {
    super();
  }

}


export {SettingsPo};
