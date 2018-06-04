import {Component} from "./component";


interface LabelInterface extends Component {
}

class Label extends Component implements LabelInterface {

  constructor(protected ef) {
    super(ef);
  }

}


export {Label};
