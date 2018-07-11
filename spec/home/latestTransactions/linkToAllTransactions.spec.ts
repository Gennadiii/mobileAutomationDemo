import {assemblerInterface} from "../../../src/assembler/assembler";


describe('Home', () => {
  describe('Latest transactions', () => {
    describe('Link to all transactions', () => {

      const service: assemblerInterface = (jasmine.getEnv() as any).service;
      let userWithTransactions = null;
      let userWithoutTransactions = null;

      beforeAll(async () => {
        userWithTransactions = service.common.user
          .withTransactions()
          .allocate();
        userWithoutTransactions = service.common.user
          .withoutTransactions()
          .allocate();
      });
      afterAll(() => {
        userWithTransactions.free();
        userWithoutTransactions.free();
      });


      it(`all transactions link is displayed for user with transactions`, async () => {
        await service.login.first.as(userWithTransactions);
        expect(await service.home.latestTransactions.page.findAllTransactionsLink())
          .toBe(true, `Couldn't find link`);
      });

      it(`all transactions link redirects to transactions screen`, async () => {
        await service.login.first.as(userWithTransactions);
        await service.home.latestTransactions.page.findAllTransactionsLink();
        await service.home.latestTransactions.page.clickAllTransactionsLink();
        expect(await service.transactions.pageIsOpen())
          .toBe(true, `Page didn't get opened`);
      });

      it(`all transactions link is absent for user without transactions`, async () => {
        await service.login.first.as(userWithoutTransactions);
        expect(await service.home.latestTransactions.page.findAllTransactionsLink())
          .toBe(false, `Link is displayed`);
      });

    });
  });
});
