import {assemblerInterface} from "../../src/assembler";


describe('Multiplication', () => {
  const service: assemblerInterface = (jasmine.getEnv() as any).service;

  it('multiply calculates correctly', async () => {
    expect(await service.calc.multiply(14, 3))
      .toEqual(42);
  });

});
