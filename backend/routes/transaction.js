// backend/routes/transactions.js
const express = require('express');
const auth = require('../middleware/auth');
const Transaction = require('../models/transaction');

const router = express.Router();

// Get transactions for a user
router.get('/:userId', auth, async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.params.userId });
    res.json(transactions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Add a new transaction
router.post('/', auth, async (req, res) => {
  try {
    const { amount, category, description } = req.body;

    const newTransaction = new Transaction({
      amount,
      category,
      description,
      userId: req.user.id,
    });

    const transaction = await newTransaction.save();
    res.json(transaction);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
