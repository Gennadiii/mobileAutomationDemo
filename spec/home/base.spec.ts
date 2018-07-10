import {assemblerInterface} from "../../src/assembler/assembler";


describe('Home', () => {
  describe('Base', () => {

    const service: assemblerInterface = (jasmine.getEnv() as any).service;
    let userWithBalances = null;

    beforeAll(async () => {
      userWithBalances = service.common.user
        .balancesMoreThan(1)
        .withTransactions()
        .allocate();
      await service.login.first.as(userWithBalances);
    });
    afterAll(() => userWithBalances.free());

    it('page content is displayed', async () => {
      expect(await service.home.pageIsOpen())
        .toBe(true, 'Home page did not get opened');
      expect(await service.common.navigateTo.pageIsOpen())
        .toBe(true, 'Navigation section is not displayed');
      expect(await service.home.balanceSection.page.countMain())
        .toBeGreaterThan(0, `Balances are not found`);
      expect(await service.home.latestTransactions.page.latestIsDisplayed())
        .toBe(true, 'Transactions are not found');
    });

  });
});
