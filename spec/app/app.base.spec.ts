import {assemblerInterface} from "../../src/assembler/assembler";
import {driver} from "../../index";


describe('Smoke', () => {
  const service: assemblerInterface = (jasmine.getEnv() as any).service;

  beforeAll(async () => await driver.appRelaunch());

  it('calculator screen loads', async () => {
    expect(await service.calc.pageIsOpen())
      .toBeTruthy(`Landing page didn't get opened`);

    expect(await service.dividedCalcService.fieldsPage.isOpen())
      .toBeTruthy(`Landing page didn't get opened - fields are not found`);
  });

});
