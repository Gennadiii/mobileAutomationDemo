import {BasePagePa} from "./basePage.pa";
import {LandingPo} from "../page_objects/landing.po";


interface LandingPaInterface extends BasePagePa {
}


class LandingPa extends BasePagePa implements LandingPaInterface {

  constructor(public page: LandingPo) {
    super();
  }

}


export {LandingPa};
