import {assemblerInterface} from "../../src/assembler/assembler";


describe('Transactions', () => {
  describe('Base', () => {

    const service: assemblerInterface = (jasmine.getEnv() as any).service;
    let userWithTransactions = null;

    beforeAll(() => userWithTransactions = service.common.user
      .withTransactions()
      .allocate());
    afterAll(() => userWithTransactions.free());

    it(`page content is displayed`, async () => {
      await service.login.first.as(userWithTransactions);
      await service.common.navigateTo.transactions();

      expect(await service.transactions.page.contentIsDisplayed())
        .toBe(true, `Some content is not displayed`);
    });
  });
});
