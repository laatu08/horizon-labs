const express = require('express');
const router = express.Router();
const wallet = require('../data/wallet.js');

router.get('/balance', (req, res) => {
  res.json({ balance: wallet.getBalance() });
});

router.post('/add-money', (req, res) => {
  const amount = req.body.amount || 100;
  const newBalance = wallet.addMoney(amount);
  res.json({ success: true, balance: newBalance });
});

router.post('/withdraw-money', (req, res) => {
  const amount = req.body.amount || 100;
  const result = wallet.withdrawMoney(amount);
  res.json(result);
});

router.get('/transactions', (req, res) => {
  res.json(wallet.getTransactions());
});

module.exports = router;
