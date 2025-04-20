import { Link } from 'react-router-dom';
import { FaUtensils, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import toast from 'react-hot-toast';

export default function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged out successfully!');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <FaUtensils className="icon" />
        <span>Flavor Exchange</span>
      </Link>
      <div className="nav-links">
        {user ? (
          <>
            <Link to="/create">Create Recipe</Link>
            <button onClick={handleLogout} className="logout-btn">
              <FaSignOutAlt /> Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}