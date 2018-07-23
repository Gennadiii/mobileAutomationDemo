import {InputField} from "../lib/generic/components/inputField";
import {Button} from "../lib/generic/components/button";


// todo fix locators
const componentProvider = {
  generic: {
    transactions: {
      filters: {
        headers: {
          date(ef) {
            return new Button(ef.text('Date'));
          },
          balance(ef) {
            return new Button(ef.text('Balance'));
          },
          status(ef) {
            return new Button(ef.text('Status'));
          },
          type(ef) {
            return new Button(ef.text('Type'));
          }
        }
      }
    }
  },
  ios: {
    login: {
      password(ef) {
        return new InputField(ef.className('XCUIElementTypeSecureTextField'));
      }
    }
  }
};


export {componentProvider};
