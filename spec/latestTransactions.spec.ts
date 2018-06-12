import {assemblerInterface} from "../src/assembler";


describe('Latest transactions', () => {
  const service: assemblerInterface = (jasmine.getEnv() as any).service;

  beforeAll(async () => await service.login.eyal());

  it('check latest transaction amount', async () => {
    const latestTransaction = await service.home.latestTransactions.getLatest();
    const expectedLatestTransaction = {amount: -29.95};
    expect(latestTransaction.amount)
      .toEqual(-29.95, `Expected latest transaction: ${expectedLatestTransaction.amount}`);
  });

});
