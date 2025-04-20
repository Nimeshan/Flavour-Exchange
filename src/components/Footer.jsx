import { FaGithub, FaLinkedin, FaHeart, FaRegCopyright } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
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
              href="https://github.com/Nimeshan" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              aria-label="GitHub"
            >
              <FaGithub className="social-icon" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/nimeshan-shanmugam-8674aa1ab/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              aria-label="LinkedIn"
            >
              <FaLinkedin className="social-icon" />
            </motion.a>
          </div>
        </div>
        
        <div className="footer-copyright">
          <FaRegCopyright className="copyright-icon" />
          <p>{currentYear} Flavor Exchange. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}