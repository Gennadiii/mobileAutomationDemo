import {Component} from "./component";


interface SectionInterface extends Component {
}

class Section extends Component implements SectionInterface {

  constructor(protected ef) {
    super(ef);
  }

}


export {Section};
