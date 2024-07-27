// backend/routes/transactions.js
const express = require('express');

const router = express.Router();

// Get transactions for a user
router.get('/health-check', async (req, res) => {
    res.status(200).json('Welcome to NodeJs Application');
});

module.exports = router;