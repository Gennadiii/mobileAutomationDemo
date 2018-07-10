import {assemblerInterface} from "./assembler";
import {helper} from "../helpers/helper";
import {ElementFinder} from "../helpers/element_finder/elementFinder.helper";
import {driver} from "../../index";
import {assembleServices} from "./genericServices";


function assembleAndroid(): assemblerInterface {

  const elementFinder = new ElementFinder('content-desc', 'contentDescription');

  return assembleServices(
    elementFinder,
    helper.lib.all.generic,
    driver);

}


export {assembleAndroid};
