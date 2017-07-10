'use strict';

class Account {

  constructor(){
    this.balance = 0;
  }

  deposit(amount){
    this.balance += amount;
  }

  withdraw(amount){
    if (amount > this.balance) throw new RangeError('insufficient balance.')
    this.balance -= amount;
  }
}

module.exports = Account;
