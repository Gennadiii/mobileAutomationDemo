import {Driver} from "../../../helpers/appium.helper";


interface AppServiceInterface {
  relaunch: () => Promise<void>;
}


class AppService implements AppServiceInterface {


  constructor(private driver: Driver) {
  }


  async relaunch() {
    await this.driver.appRelaunch();
  }

}


export {AppService};
