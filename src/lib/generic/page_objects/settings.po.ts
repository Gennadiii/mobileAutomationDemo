import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {BasePagePo} from "./basePage.po";
import {Button} from "../components/button";


interface SettingsPoInterface {
  signOutButton: Button;
}


class SettingsPo extends BasePagePo implements SettingsPoInterface {

  name = 'Settings';

  signOutButton = new Button(this.ef.text('Sign out'));
  // signOutButton = new Button(this.ef.autoId('SignOut')); // todo


  constructor(private ef: ElementFinderInterface) {
    super();
  }

  get staticElements() {
    return [this.signOutButton];
  }

}


export {SettingsPo};
