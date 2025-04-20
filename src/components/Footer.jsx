import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2023 Flavor Exchange</p>
        <div className="social-links">
          <a href="https://github.com/earthcomfy" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}