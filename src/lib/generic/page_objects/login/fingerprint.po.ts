import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {Button} from "../../components/button";
import {BasePo} from "../base.po";


interface FingerprintPoInterface extends BasePo {
  notNowButton: Button;
  setupButton: Button;
}


class FingerprintPo extends BasePo implements FingerprintPoInterface {

  name = 'Fingerprint';

  setupButton = new Button(this.ef.autoId('QuickOptionsTouchId'));
  notNowButton = new Button(this.ef.autoId('NotNow'));


  constructor(protected ef: ElementFinderInterface) {
    super();
  }


  get staticElements() {
    return [this.notNowButton];
  }

}


export {FingerprintPo};
