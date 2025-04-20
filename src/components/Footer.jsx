import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div 
          className="footer-brand"
          whileHover={{ scale: 1.05 }}
        >
          <span>Flavor Exchange</span>
          <FaHeart className="heart-icon" />
        </motion.div>
        
        <div className="social-links">
          <motion.a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
          >
            <FaGithub className="social-icon" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
          >
            <FaLinkedin className="social-icon" />
          </motion.a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {currentYear} Flavor Exchange. All rights reserved.</p>
      </div>
    </footer>
  );
}