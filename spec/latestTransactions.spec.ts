import {assemblerInterface} from "../src/assembler";


describe('Latest transactions', () => {
  const service: assemblerInterface = (jasmine.getEnv() as any).service;
  let cardBalanceUser = null;

  beforeAll(async () => {
    cardBalanceUser = service.common.user.name('card_balance').allocate();
    await service.login.as(cardBalanceUser);
  });
  afterAll(() => cardBalanceUser.free());

  it('check latest transaction amount', async () => {
    await service.home.page.verifyIsOpen();
    const latestTransaction = await service.home.latestTransactions.getLatest();
    const expectedLatestTransaction = {amount: -3.15};
    expect(latestTransaction.amount)
      .toEqual(expectedLatestTransaction.amount);
  });

});
