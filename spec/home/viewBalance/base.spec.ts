import {assemblerInterface} from "../../../src/assembler/assembler";


describe('Home', () => {
  describe('View balance', () => {
    describe('Base', () => {

      const service: assemblerInterface = (jasmine.getEnv() as any).service;
      let userWithBalancesAndCard = null;

      beforeAll(() => userWithBalancesAndCard = service.common.user
        .balancesMoreThan(1)
        .balancesLessThan(4)
        .standardCard()
        // .withTransactions() // todo enable when optin1 user is fixed
        .allocate());
      afterAll(() => userWithBalancesAndCard.free());

      it('page content is displayed', async () => {
        process.env.platform.toLowerCase() === 'ios' && pending('Until app back button locator is set');
        await service.login.first.as(userWithBalancesAndCard);
        await service.home.findBalanceWithCard();

        expect(await service.home.viewBalance.pageIsOpen())
          .toBe(true, `Page didn't get opened`);

        expect(await service.home.viewBalance.page.contentIsDisplayed())
          .toBe(true, `Some View balance content is not displayed`);
        expect(await service.home.viewBalance.cardPage.contentIsDisplayed())
          .toBe(true, `Some card content is not displayed`);
        // todo enable when optin1 user is fixed
        // expect(await service.home.viewBalance.latestTransactionsPage.contentIsDisplayed())
        //   .toBe(true, `Some latest transactions content is not displayed`);
      });

    });
  });
});
