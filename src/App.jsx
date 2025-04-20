import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Create from './pages/Create';
import Recipe from './pages/Recipe';
import Search from './pages/Search';
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast';

// Private Route Component
const PrivateRoute = ({ children }) => {
  const { token } = store.getState().auth;
  return token ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Toaster position="top-right" />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route 
                path="/create" 
                element={
                  <PrivateRoute>
                    <Create />
                  </PrivateRoute>
                } 
              />
              <Route path="/recipes/:id" element={<Recipe />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}