// src/App.js
import React, { useState } from 'react';
import { loginApi } from './LoginApi';
import axios from 'axios'; // Pastikan Anda mengimpor axios

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State untuk mengontrol visibilitas password

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Reset error sebelum mencoba login
    try {
      const token = await loginApi(email, password);
      setToken(token);
      localStorage.setItem('token', token); // Simpan token di localStorage
      console.log('Login successful, token:', token);
      // Anda bisa mengarahkan pengguna ke halaman lain atau memperbarui UI
    } catch (error) {
      setError('Login failed. Please check your credentials.'); // Tampilkan pesan kesalahan
      console.error('Login failed:', error);
    }
  };

  const fetchData = async () => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      try {
        const response = await axios.get('https://laravel-books-db.herokuapp.com/api/login', {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });
        console.log('Data fetched:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
      console.log('No token found');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="border border-gray-300 p-2 mb-4 w-full rounded"
          />
          <div className="relative mb-4">
            <input
              type={showPassword ? 'text' : 'password'} // Mengubah tipe input berdasarkan state
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)} // Toggle visibilitas password
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
            >
              {showPassword ? 'Hide' : 'Show'} {/* Tampilkan teks berdasarkan state */}
            </button>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>} {/* Tampilkan pesan kesalahan */}
        <button
          onClick={fetchData}
          className="mt-4 bg-green-500 text-white p-2 rounded w-full hover:bg-green-600 transition"
        >
          Fetch Protected Data
        </button>
      </div>
    </div>
  );
};

export default App;