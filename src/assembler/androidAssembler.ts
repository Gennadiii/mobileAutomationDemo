import {assemblerInterface} from "./assembler";
import {helper} from "../helpers/helper";
import {ElementFinder} from "../helpers/element_finder/elementFinder.helper";
import {driver} from "../../index";
import {assembleServices} from "./genericServices";


const elementFinder = new ElementFinder('content-desc');


const androidServices: assemblerInterface = assembleServices(
  elementFinder,
  helper.lib.all.generic,
  driver);


export {androidServices};
