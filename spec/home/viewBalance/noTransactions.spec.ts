import {assemblerInterface} from "../../../src/assembler/assembler";


describe('Home', () => {
  describe('View balance', () => {
    describe('No transactions', () => {

      const service: assemblerInterface = (jasmine.getEnv() as any).service;
      let userWithBalancesAndCard = null;

      beforeAll(() => userWithBalancesAndCard = service.common.user
        .balancesMoreThan(1)
        .balancesLessThan(4)
        .withoutTransactions()
        .sameCurrencies()
        .allocate());
      afterAll(() => userWithBalancesAndCard.free());

      it('empty transactions content is displayed', async () => {
        await service.login.first.as(userWithBalancesAndCard);
        await service.home.balanceSection.openBalanceWithVisibleCard();

        expect(await service.home.viewBalance.latestTransactionsPage.emptyTransactionsContentIsDisplayed())
          .toBe(true, `Content is not displayed`);
      });

    });
  });
});
