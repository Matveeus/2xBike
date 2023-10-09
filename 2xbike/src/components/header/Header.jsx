import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Logo from '../Logo';
import Navigation from './Navigation';
import '../../assets/styles/header.css';
import LanguageSwitch from './LanguageSwitch';
import account from '../../assets/images/account.png';

export default function Header() {
  const [isHeaderVisible, setHeaderVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHeaderVisible(true);
      } else {
        setHeaderVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isHeaderVisible ? 'visible' : ''}`}>
      <Box className={`container header-inner ${isHeaderVisible ? 'visible' : ''}`}>
        <Logo />
        <Navigation />
        <Box className="actions-block">
          <LanguageSwitch />
          <img className="account-button" src={account} alt="account" />
        </Box>
      </Box>
    </header>
  );
}
