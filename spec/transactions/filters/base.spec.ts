import {assemblerInterface} from "../../../src/assembler/assembler";


describe('Transactions', () => {
  describe('Filters', () => {
    describe('Base', () => {

      const service: assemblerInterface = (jasmine.getEnv() as any).service;
      let anyUser = null;

      beforeAll(async () => {
        anyUser = service.common.user.any().allocate();
        await service.login.first.as(anyUser);
        await service.common.navigateTo.transactions();
        await service.transactions.page.clickFiltersButton();
      });
      afterAll(() => anyUser.free());


      it(`page content is displayed`, async () => {
        expect(await service.transactions.filters.page.contentIsDisplayed())
          .toBe(true, `Some content is not displayed`);
      });

      it('opening one filter closes another one', async () => {
        await service.transactions.filters.page.openDateFilter();

        expect(await service.transactions.filters.dateFilter.isOpen())
          .toBe(true, `Date filter didn't get opened`);

        await service.transactions.filters.page.openStatusFilter();

        expect(await service.transactions.filters.statusFilter.isOpen())
          .toBe(true, `Status filter didn't get opened`);
        expect(await service.transactions.filters.dateFilter.isOpen({timeout: 500}))
          .toBe(false, `Date filter didn't get closed`);
      });

    });
  });
});
