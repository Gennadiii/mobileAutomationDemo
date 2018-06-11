import {assemblerInterface} from "../src/assembler";


describe('Login', () => {
  const service: assemblerInterface = (jasmine.getEnv() as any).service;

  beforeAll(async () => await service.login.eyal());

  it('login success', async () => {
    const latestTransaction = await service.home.getLatestTransaction();
    const expectedLatestTransaction = {amount: -29.95};
    expect(latestTransaction.amount)
      .toEqual(-29.95, `Expected latest transaction: ${expectedLatestTransaction.amount}`);
  });

});
