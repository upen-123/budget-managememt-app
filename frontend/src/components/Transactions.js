// frontend/src/components/Transactions.js
import React, { useEffect, useState } from 'react';
import { getTransactions, addTransaction } from '../api';

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const userId = 'user-id-here'; // Replace with actual user ID
        const response = await getTransactions(userId);
        setTransactions(response);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  const handleAddTransaction = async (e) => {
    e.preventDefault();
    try {
      const transactionData = {
        amount,
        category,
        description,
        userId: 'user-id-here', // Replace with actual user ID
      };
      const response = await addTransaction(transactionData);
      setTransactions([...transactions, response]);
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  return (
    <div>
      <h1>Transactions</h1>
      <form onSubmit={handleAddTransaction}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Transaction</button>
      </form>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id}>
            {transaction.amount} - {transaction.category} - {transaction.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transactions;
