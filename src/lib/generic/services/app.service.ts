interface AppServiceInterface {
  relaunch: () => Promise<void>;
}


class AppService implements AppServiceInterface {


  constructor(private driver) {
  }


  async relaunch() {
    await this.driver.appRelaunch();
  }

}


export {AppService};
