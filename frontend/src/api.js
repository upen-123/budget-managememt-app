// frontend/src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000';

// Add the token to the request headers
const getAuthHeader = () => ({
  headers: {
    'x-auth-token': localStorage.getItem('token'),
  },
});

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    localStorage.setItem('token', response.data.token); // Store token
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, userData);
    localStorage.setItem('token', response.data.token); // Store token
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTransactions = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/transactions/${userId}`, getAuthHeader());
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addTransaction = async (transactionData) => {
  try {
    const response = await axios.post(`${API_URL}/transactions`, transactionData, getAuthHeader());
    return response.data;
  } catch (error) {
    throw error;
  }
};
