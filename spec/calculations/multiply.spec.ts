import {assemblerInterface} from "../../src/assembler";
import {driver} from "../../index";


describe('Multiplication', () => {
  const service: assemblerInterface = (jasmine.getEnv() as any).service;

  beforeAll(async () => await driver.appRelaunch());

  it('multiply calculates correctly', async () => {
    expect(await service.calc.multiply(14, 3))
      .toEqual(42);
  });

});
