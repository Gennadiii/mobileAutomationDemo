import {InputField} from "../../generic/components/inputField";


interface IosInputFieldInterface extends InputField {
}


class IosInputField extends InputField implements IosInputFieldInterface {

  constructor(protected ef) {
    super(ef, {hideKeyboard: true});
  }

}


export {IosInputField};

