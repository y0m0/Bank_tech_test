'use strict';

var Account = require('../lib/account');

describe('Feature Test:', () => {
  var account;

  it('user can create a new account', () => {
    account = new Account();
    expect(account instanceof Account).toBeTruthy();
  });

  it('user can check account balance', () => {
    account = new Account();
    expect(account.balance).toEqual(0);
  });


  it('user can deposit money into the account', () => {
    account = new Account();
    account.deposit(10);
    expect(account.balance).toEqual(10);
  });
});
