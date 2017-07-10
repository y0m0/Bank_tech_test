'use strict';

var Account = require('../lib/account');

describe('Account', () => {
  var account;

  beforeEach(() => {
    account = new Account();
  });

  it('starts empty', () => {
    expect(account.balance).toEqual(0);
  });

  it('can increase balance', () => {
    expect(account.balance).toEqual(0);
    account.deposit(5);
    expect(account.balance).toBeGreaterThan(0);
  });
});
