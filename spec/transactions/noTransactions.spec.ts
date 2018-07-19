import {assemblerInterface} from "../../src/assembler/assembler";


describe('Transactions', () => {
  describe('No transactions', () => {

    const service: assemblerInterface = (jasmine.getEnv() as any).service;
    let userWithoutTransactions = null;

    beforeAll(() => userWithoutTransactions = service.common.user
      .withoutTransactions()
      .allocate());
    afterAll(() => userWithoutTransactions.free());

    it(`no transactions content is displayed`, async () => {
      pending(`Until locators for empty transactions on transactions screen are added`);
      await service.login.first.as(userWithoutTransactions);
      await service.common.navigateTo.transactions();

      expect(await service.transactions.page.emptyTransactionsContentIsDisplayed())
        .toBe(true, `Content is not displayed`);
    });
  });
});
