import React from 'react';
import { Box } from '@mui/material';
import Logo from '../Logo';
import '../../assets/styles/footer.css';
import visa from '../../assets/images/visa.png';
import mastercard from '../../assets/images/mastercard.png';

export default function Footer() {
  return (
    <footer className="footer">
      <Box className="container footer-content">
        <Logo />
        <Box className="payment-providers">
          <img src={visa} alt="visa" />
          <img src={mastercard} alt="mastercard" />
        </Box>
      </Box>
      <p>All rights reserved © 2023</p>
    </footer>
  );
}
