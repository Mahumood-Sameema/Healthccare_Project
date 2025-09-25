import React from 'react';
import '../css/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
            <div className="footer-logo">
                
                <p>INDIA HEALTH</p>
            </div>
            <nav className="footer-nav">
                <a href="#">About India Health</a>
                <a href="#">Careers</a>
                <a href="#">Contact Us</a>
                <a href="#">Privacy Policy</a>
            </nav>
            <div className="footer-contact">
                <p>Reach us on</p>
                <p className="contact-number">📞 1800 11 2222</p>
            </div>
            <div className="footer-social">
                <a href="#">
                    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384028.png" alt="LinkedIn" />
                </a>
                <a href="#">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
                </a>
                <a href="#">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" />
                </a>
                <a href="#">
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Twitter" />
                </a>
            </div>
            <p className="footer-bottom">© 2025 India Health. All rights reserved.</p>
        </footer>
  )
}

export default Footer
