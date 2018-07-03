import {assemblerInterface} from "../../../src/assembler";


describe('Home', () => {
  describe('Latest transactions', () => {
    describe('Link to all transactions', () => {

      const service: assemblerInterface = (jasmine.getEnv() as any).service;
      let userWithTransactions = null;

      beforeAll(async () => {
        userWithTransactions = service.common.user
          .withTransactions()
          .allocate();
        await service.login.first.as(userWithTransactions);
      });
      afterAll(() => userWithTransactions.free());


      it(`all transactions link is displayed for user with transactions`, async () => {
        expect(await service.home.latestTransactions.page.findAllTransactionsLink())
          .toBe(true, `Couldn't find link`);
      });

      it(`all transactions link redirects to transactions screen`, async () => {
        await service.home.latestTransactions.page.findAllTransactionsLink();
        await service.home.latestTransactions.page.clickAllTransactionsLink();
        expect(await service.transactions.page.isOpen())
          .toBe(true, `Page didn't get opened`);
      });

    });
  });
});
