import { Link } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa';
import SearchBar from './SearchBar';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="brand">
          <FaUtensils className="icon" />
          <span>Flavor Exchange</span>
        </Link>
        <SearchBar />
        <div className="nav-links">
          <Link to="/create">Create Recipe</Link>
        </div>
      </div>
    </nav>
  );
}