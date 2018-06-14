import {assemblerInterface} from "../../assembler";
import {helper} from "../../helpers/helper";
import {ef as elementFinder} from "../../helpers/element_finder/elementFinder.helper";


const {
  generic: {
    page_objects: {
      FieldsPo,
      ResultPo,
    },
    page_actions: {
      CalcPa,
      FieldsPa,
      OperationsPa,
      ResultPa,
    },
    services: {
      CalcService,
      FieldsService,
      OperationsService,
      ResultService,
      AccumulatedCalcService,
    }
  },
  android: {
    page_objects: {
      AndroidCalcPo,
      AndroidOperationsPo
    },
  },
} = (helper.lib.all as any);


const fieldsService = helper.assembler.serviceFactory({
  elementFinder,
  service: FieldsService,
  parts: [{po: FieldsPo, pa: FieldsPa}]
});
const operationsService = helper.assembler.serviceFactory({
  elementFinder,
  service: OperationsService,
  parts: [{po: AndroidOperationsPo, pa: OperationsPa}]
});
const resultService = helper.assembler.serviceFactory({
  elementFinder,
  service: ResultService,
  parts: [{po: ResultPo, pa: ResultPa}]
});


const androidServices: assemblerInterface = {

  calc: helper.assembler.serviceFactory({
    elementFinder,
    service: CalcService,
    parts: [{po: AndroidCalcPo, pa: CalcPa}]
  }),

  accumulatedCalc: new AccumulatedCalcService(fieldsService, operationsService, resultService),

};


export {androidServices};
