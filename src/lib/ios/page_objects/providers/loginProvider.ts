import {InputField} from "../../../generic/components/inputField";


class LoginProvider {

  static getPassword(ef) {
    return new InputField(ef.className('XCUIElementTypeSecureTextField'));
  }

}


export {LoginProvider};
