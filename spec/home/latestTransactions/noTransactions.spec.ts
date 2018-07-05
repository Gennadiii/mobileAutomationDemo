import {assemblerInterface} from "../../../src/assembler/assembler";


describe('Home', () => {
  describe('Latest transactions', () => {
    describe('No transactions', () => {

      const service: assemblerInterface = (jasmine.getEnv() as any).service;
      let userWithoutTransactions = null;

      beforeAll(async () => {
        userWithoutTransactions = service.common.user
          .withoutTransactions()
          .allocate();
        await service.login.first.as(userWithoutTransactions);
      });
      afterAll(() => userWithoutTransactions.free());


      it(`empty transactions placeholder is displayed`, async () => {
        expect(await service.home.latestTransactions.page.emptyTransactionsContentIsDisplayed())
          .toBe(true, `Some content is not displayed`);
      });

    });
  });
});
