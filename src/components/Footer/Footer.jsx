import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="app-footer">
      <p>&copy; {currentYear} Karthikeyan D. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;