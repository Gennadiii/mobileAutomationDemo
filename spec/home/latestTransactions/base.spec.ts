import {assemblerInterface} from "../../../src/assembler";


describe('Home', () => {
  describe('Latest transactions', () => {
    describe('Base', () => {

      const service: assemblerInterface = (jasmine.getEnv() as any).service;
      let userWithTransactions = null;

      beforeAll(async () => {
        userWithTransactions = service.common.user.withTransactions().allocate();
        await service.login.first.as(userWithTransactions);
      });
      afterAll(() => userWithTransactions.free());


      it('latest transaction content is displayed', async () => {
        expect(await service.home.latestTransactions.page.latestDateIsDisplayed())
          .toBe(true, 'Latest date is not displayed');
        expect(await service.home.latestTransactions.page.latestDescriptionIsDisplayed())
          .toBe(true, 'Latest description is not displayed');
        expect(await service.home.latestTransactions.page.latestCurrencyIsDisplayed())
          .toBe(true, 'Latest currency is not displayed');
        expect(await service.home.latestTransactions.page.latestAmountIsDisplayed())
          .toBe(true, 'Latest amount is not displayed');
        expect(await service.home.latestTransactions.page.latestStatusIsDisplayed())
          .toBe(true, 'Latest status is not displayed');
      });

    });
  });
});
