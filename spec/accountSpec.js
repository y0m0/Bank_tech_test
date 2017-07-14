'use strict';

var Account = require('../lib/account');

describe('Account', () => {
  var account;

  beforeEach(() => {
    account = new Account();
  });

  it('starts empty', () => {
    expect(account.balance).toEqual(0.0);
  });

  it('has a balance property', function() {
    expect(account.balance).toBeDefined();
  });

  describe('#deposit', () => {

    it('can increase the balance', () => {
      expect(account.balance).toEqual(0.0);
      account.deposit(5);
      expect(account.balance).toBeGreaterThan(0.0);
    });
  });

  describe('#withdraw', () => {

    beforeEach(() => {
      account.deposit(20);
    });

    it('can decrease the balance', () => {
      expect(account.balance).toEqual(20.0);
      account.withdraw(10);
      expect(account.balance).toBeLessThan(20.0);
    });

    it('throws an error if balance is insufficient', () => {
      expect(() => { account.withdraw(21) }).toThrowError('insufficient balance.')
    })
  });

  describe("#statement", () => {
    var header = "date || credit || debit || balance\n"

    it("returns the current balance", () => {
      account.balance = 10;
      expect(account.statement()).toEqual(header + "balance: 10");
    });

    it("return a transaction", () => {
      account.deposit(10);
      expect(account.statement()).toEqual(header + "deposit: 10\nbalance: 10")
    });

    it("returns multiple transactions", () => {
      account.deposit(20);
      account.withdraw(5);
      expect(account.statement()).toEqual(header + "deposit: 20\nwithdraw: 5\nbalance: 15")
    });

    it("has a header", () => {
      expect(account.statement()).toEqual("date || credit || debit || balance\nbalance: 0")
    });
  });
});

