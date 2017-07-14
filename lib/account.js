'use strict';

class Account {

  constructor(){
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount){
    this.balance += amount;
    this.transactions.push(amount);
  }

  withdraw(amount){
    if (amount > this.balance) throw new RangeError('insufficient balance.')
    this.balance -= amount;
    this.transactions.push(-amount)
  }

  statement(){
    var statement = this.transactions.reduce((result, transaction) => {
      if (transaction <  0) return result + "withdraw: " + Math.abs(transaction) + ", ";
      if (transaction >= 0) return result + "deposit: " + transaction + ", ";
    }, "");

    return statement + "balance: " + this.balance;
  }
}

module.exports = Account;
