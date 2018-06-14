import {assemblerInterface} from "../src/assembler";
import {driver} from "../index";


describe('Smoke', () => {
  const service: assemblerInterface = (jasmine.getEnv() as any).service;

  beforeAll(async () => await driver.appRelaunch());

  it('calculator screen loads', async () => {
    expect(await service.calc.page.isOpen())
      .toBeTruthy(`Landing page didn't get opened`);
  });

});
