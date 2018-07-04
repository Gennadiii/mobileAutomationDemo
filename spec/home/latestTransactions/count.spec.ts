import {assemblerInterface} from "../../../src/assembler";
import {data} from "../../data";


describe('Home', () => {
  describe('Latest transactions', () => {
    describe('Count', () => {

      const service: assemblerInterface = (jasmine.getEnv() as any).service;
      let userWithMoreThan10Transactions = null;
      const expectedTransactionsAmount = data.home.latestTransactions.maxDisplayedCount;

      beforeAll(async () => {
        userWithMoreThan10Transactions = service.common.user
          .transactionsMoreThan(expectedTransactionsAmount)
          .allocate();
        await service.login.first.as(userWithMoreThan10Transactions);
      });
      afterAll(() => userWithMoreThan10Transactions.free());


      it(`only "${expectedTransactionsAmount}" transactions are displayed`, async () => {
        const latestTransactionsCount = await service.home.latestTransactions.count();
        expect(latestTransactionsCount)
          .toEqual(expectedTransactionsAmount, `Expected transactions amount is "${expectedTransactionsAmount}"
          found: ${latestTransactionsCount}`);
      });

    });
  });
});
