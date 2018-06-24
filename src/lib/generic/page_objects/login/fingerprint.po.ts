import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {Button} from "../../components/button";
import {BasePagePo} from "../basePage.po";


interface FingerprintPoInterface extends BasePagePo {
  notNowButton: Button;
}


class FingerprintPo extends BasePagePo implements FingerprintPoInterface {

  name = 'Fingerprint';

  notNowButton = new Button(this.ef.all.xpath('//android.widget.TextView', {index: 3}));


  constructor(protected ef: ElementFinderInterface) {
    super();
  }


  get staticElements() {
    return [this.notNowButton];
  }

}


export {FingerprintPo};
