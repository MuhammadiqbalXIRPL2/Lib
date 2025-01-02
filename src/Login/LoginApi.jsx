// src/api/auth.js
import axios from 'axios';

const API_URL = 'https://laravel-books-db.herokuapp.com/api/login'; // Ganti dengan URL API Anda

export const loginApi = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    return response.data.token; // Mengembalikan token
  } catch (error) {
    console.error('Login error:', error);
    throw error; // Melempar kesalahan untuk ditangani di tempat lain
  }
};