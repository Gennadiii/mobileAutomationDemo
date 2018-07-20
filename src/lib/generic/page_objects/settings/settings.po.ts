import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {BasePo} from "../base.po";
import {Button} from "../../components/button";


interface SettingsPoInterface {
  signOutButton: Button;
}


class SettingsPo extends BasePo implements SettingsPoInterface {

  name = 'Settings';

  signOutButton = new Button(this.ef.autoId('SignOut'));


  constructor(private ef: ElementFinderInterface) {
    super();
  }

  get staticElements() {
    return [this.signOutButton];
  }

}


export {SettingsPo};
