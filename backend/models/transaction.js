// backend/models/Transaction.js
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  amount: Number,
  category: String,
  date: { type: Date, default: Date.now },
  description: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Transaction', transactionSchema);
