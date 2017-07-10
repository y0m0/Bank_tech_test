'use strict';

var Account = require('../lib/account');

describe('Feature Test:', () => {
  var account;

  it('user can create a new account', () => {
    account = new Account();
    expect(account instanceof Account).toBeTruthy();
  });

  describe('manage account', () => {

    beforeEach(() => {
      account = new Account();
    });

    it('user can check account balance', () => {
      expect(account.balance).toEqual(0);
    });

    it('user can deposit money into the account', () => {
      account.deposit(10);
      expect(account.balance).toEqual(10);
    });

    it('user can withdraw money from the account', () => {
      account.deposit(10);
      account.withdraw(5);
      expect(account.balance).toEqual(5);
    });
  });
});
