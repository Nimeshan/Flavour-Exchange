import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../store/slices/authSlice';
import toast from 'react-hot-toast';
import { FaSignInAlt } from 'react-icons/fa';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setCredentials({
      user: { email: formData.email },
      token: 'mock-token'
    }));
    toast.success('Logged in successfully!');
    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <FaSignInAlt className="auth-icon" />
          <h2>Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>
          <button type="submit" className="auth-btn">Login</button>
        </form>
        <p className="auth-footer">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}