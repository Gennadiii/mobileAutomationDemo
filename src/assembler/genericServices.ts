import {assemblerInterface} from "./assembler";
import {helper} from "../helpers/helper";


function assembleServices(elementFinder, lib): assemblerInterface {

  const {
    page_objects: {
      FieldsPo,
      ResultPo,
      OperationsPo,
      CalcPo,
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
      DividedCalcService,
    }
  } = lib;


  const fieldsService = helper.assembler.serviceFactory({
    elementFinder,
    service: FieldsService,
    parts: [{po: FieldsPo, pa: FieldsPa}]
  });
  const operationsService = helper.assembler.serviceFactory({
    elementFinder,
    service: OperationsService,
    parts: [{po: OperationsPo, pa: OperationsPa}]
  });
  const resultService = helper.assembler.serviceFactory({
    elementFinder,
    service: ResultService,
    parts: [{po: ResultPo, pa: ResultPa}]
  });


  return {

    calc: helper.assembler.serviceFactory({
      elementFinder,
      service: CalcService,
      parts: [{po: CalcPo, pa: CalcPa}]
    }),

    accumulatedCalc: new AccumulatedCalcService(fieldsService, operationsService, resultService),

    dividedCalcService: helper.assembler.serviceFactory({
      elementFinder,
      service: DividedCalcService,
      parts: [
        {po: FieldsPo, pa: FieldsPa},
        {po: OperationsPo, pa: OperationsPa},
        {po: ResultPo, pa: ResultPa}
      ]
    }),

  };

}


export {assembleServices};
