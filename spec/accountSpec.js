'use strict';

var Account = require('../lib/account');

describe('Account', () => {
  var account;

  beforeEach(function(){
    account = new Account();
  });

  it('starts empty', function(){
    expect(account.balance).toEqual(0);
  });
});
