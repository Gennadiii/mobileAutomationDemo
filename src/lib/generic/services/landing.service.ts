import {LandingPa} from "../page_actions/landing.pa";


interface LandingServiceInterface {
}


class LandingService implements LandingServiceInterface {

  constructor(public page: LandingPa) {
  }

}


export {LandingService};
