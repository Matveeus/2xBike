import React, { useEffect, useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Logo from '../Logo';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import '../../assets/styles/header.css';
import LanguageSwitch from './LanguageSwitch';
import account from '../../assets/images/account.png';

export default function Header() {
  const [isHeaderVisible, setHeaderVisible] = useState(false);
  const isMobile = useMediaQuery('(max-width: 1130px)');
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
        {isMobile ? (
          <MobileNavigation />
        ) : (
          <>
            <Navigation />
            <Box className="actions-block">
              <LanguageSwitch />
              <img className="account-button" src={account} alt="account" />
            </Box>
          </>
        )}
      </Box>
    </header>
  );
}
