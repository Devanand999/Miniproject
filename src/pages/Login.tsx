import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Background from "../assets/bg.jpg";
import Footer from '../components/Footer';

const Login = ({ setIsAuthenticated, setUserRole }) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '', role: '' });
  const [error, setError] = useState('');

  const users = [
    { email: 'admin@example.com', password: 'admin123', role: 'admin' },
    { email: 'user@example.com', password: 'user123', role: 'user' }
  ];

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!credentials.email || !credentials.password) {
      setError('Please enter both email and password.');
      return;
    }

    const user = users.find(
      (u) => u.email === credentials.email && u.password === credentials.password
    );

    if (user) {
      setIsAuthenticated(true);
      setUserRole(user.role);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', user.role);

      if (user.role === 'admin') {
        navigate('/dashboard');
      } else {
        navigate('/user-page');
      }
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div
      className="flex items-center justify-end min-h-screen bg-cover bg-center px-24"
      style={{ backgroundImage: `url(${Background})`
 }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-2xl"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-2xl"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-lime-600 text-white py-3 rounded-lg hover:bg-lime-700 transition"
          >
            Login
          </button>
        </form>
      </div>
      
    </div>
    
  );
};

export default Login;
