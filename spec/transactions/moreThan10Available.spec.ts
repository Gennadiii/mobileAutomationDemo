import {assemblerInterface} from "../../src/assembler/assembler";
import {data} from "../data";


describe('Transactions', () => {
  describe('Count', () => {

    const service: assemblerInterface = (jasmine.getEnv() as any).service;
    let userWithMoreThan10Transactions = null;

    beforeAll(() => userWithMoreThan10Transactions = service.common.user
      .transactionsMoreThan(data.home.latestTransactions.maxDisplayedCount)
      .transactionsLessThan(data.home.latestTransactions.maxDisplayedCount + 5)
      .allocate());
    afterAll(() => userWithMoreThan10Transactions.free());

    it(`more than ${data.home.latestTransactions.maxDisplayedCount} can be displayed`, async () => {
      await service.login.first.as(userWithMoreThan10Transactions);
      await service.common.navigateTo.transactions();

      expect(await service.transactions.count())
        .toBeGreaterThan(data.home.latestTransactions.maxDisplayedCount, `count is less than expected`);
    });
  });
});
