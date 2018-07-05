import {Component} from "./component";


interface IconInterface extends Component {
}

class Icon extends Component implements IconInterface {

  constructor(protected ef) {
    super(ef);
  }

}


export {Icon};
