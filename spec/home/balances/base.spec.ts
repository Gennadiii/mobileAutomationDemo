import {assemblerInterface} from "../../../src/assembler";
import {data} from "../../data";


describe('Home', () => {
  describe('Balances', () => {
    describe('Base', () => {

      const service: assemblerInterface = (jasmine.getEnv() as any).service;
      let userWithExpandableBalances = null;
      let userWithoutExpandableBalances = null;

      beforeAll(async () => {
        userWithExpandableBalances = service.common.user
          .balancesMoreThan(data.home.balance.maxCollapsedCount).allocate();
        userWithoutExpandableBalances = service.common.user
          .balancesLessThan(data.home.balance.maxCollapsedCount).allocate();
        // todo replace with user having 3 balances
        // userWithoutExpandableBalances = service.common.user
        // .balanceCount(data.home.balance.maxCollapsedCount).allocate();
      });
      afterAll(() => {
        userWithExpandableBalances.free();
        userWithoutExpandableBalances.free();
      });

      it('page content is displayed for user with expandable balances', async () => {
        await service.login.first.as(userWithExpandableBalances);
        expect(await service.home.balanceSection.page.isCurrencyDisplayed())
          .toBe(true, 'Currencies are not displayed');
        expect(await service.home.balanceSection.page.isAmountDisplayed())
          .toBe(true, 'Amounts are not displayed');
        // todo add card check (need user)
        expect(await service.home.balanceSection.page.isMoreButtonDisplayed())
          .toBe(true, 'More button is not displayed');

      });

      it('more button is absent for user with not expandable balances', async () => {
        await service.login.first.as(userWithoutExpandableBalances);
        expect(await service.home.balanceSection.page.isMoreButtonDisplayed())
          .toBe(false, 'More button is displayed');
      });

    });
  });
});
