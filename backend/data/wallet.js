let balance = 1340.56;

let transactions = [
  {
    date: 'Oct 26, 2022',
    transactions: [
      {
        name: 'Adam Costa',
        bank: 'Standard Chartered Bank',
        time: '5:02 PM',
        amount: 200,
        type: 'credit',
      },
      {
        name: 'Sarah Eric',
        bank: 'Payment Received',
        time: '3:22 PM',
        amount: 200,
        type: 'debit',
      },
    ],
  },
  {
    date: 'Oct 25, 2022',
    transactions: [
      {
        name: 'Millie Bobby',
        bank: 'Payment Received',
        time: '3:22 PM',
        amount: 200,
        type: 'debit',
      },
      {
        name: 'William Edward',
        bank: 'Payment Received',
        time: '3:22 PM',
        amount: 200,
        type: 'debit',
      },
      {
        name: 'Adam Costa',
        bank: 'Standard Chartered Bank',
        time: '5:02 PM',
        amount: 200,
        type: 'credit',
      },
    ],
  },
];

module.exports = {
  getBalance: () => balance,
  addMoney: (amount) => {
    balance += amount;
    return balance;
  },
  withdrawMoney: (amount) => {
    if (balance >= amount) {
      balance -= amount;
      return { success: true, balance };
    } else {
      return { success: false, message: 'Insufficient funds' };
    }
  },
  getTransactions: () => transactions,
};
