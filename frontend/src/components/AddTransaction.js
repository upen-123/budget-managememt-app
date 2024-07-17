// frontend/src/components/AddTransaction.js
import React, { useState } from 'react';
import '../styles/AddTransaction.css';

function AddTransaction() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income'); // Default type

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle adding the transaction logic here
    console.log({ description, amount, type });
    // Reset the form
    setDescription('');
    setAmount('');
  };

  return (
    <div className="transaction-container">
      <h2>Add a Transaction</h2>
      <form onSubmit={handleSubmit} className="transaction-form">
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Enter transaction description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            placeholder="Enter transaction amount"
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <button type="submit" className="btn">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
