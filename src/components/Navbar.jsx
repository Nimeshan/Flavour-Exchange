import { Link } from 'react-router-dom';
import { FaUtensils, FaUser, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged out successfully!');
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="brand">
          <FaUtensils className="icon" />
          <span>Flavor Exchange</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation links */}
        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {user ? (
            <>
              <Link to="/create" onClick={() => setIsMobileMenuOpen(false)}>
                Create Recipe
              </Link>
              <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)}>
                <FaUser /> Profile
              </Link>
              <button onClick={handleLogout} className="logout-btn">
                <FaSignOutAlt /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                Login
              </Link>
              <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}