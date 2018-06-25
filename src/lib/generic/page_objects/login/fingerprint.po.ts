import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {Button} from "../../components/button";
import {BasePagePo} from "../basePage.po";


interface FingerprintPoInterface extends BasePagePo {
  notNowButton: Button;
  setupButton: Button;
}


class FingerprintPo extends BasePagePo implements FingerprintPoInterface {

  name = 'Fingerprint';

  setupButton = new Button(this.ef.autoId('QuickOptionsTouchId'));
  notNowButton = new Button(this.ef.text('Not now'));
  // notNowButton = new Button(this.ef.autoId('NotNow')); // todo


  constructor(protected ef: ElementFinderInterface) {
    super();
  }


  get staticElements() {
    return [this.notNowButton];
  }

}


export {FingerprintPo};
