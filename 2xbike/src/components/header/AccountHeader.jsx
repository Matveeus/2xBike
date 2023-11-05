import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Logo from '../Logo';
import NavigationAccount from './NavigationAccount';
import AccountHeaderMobile from './AccountHeaderMobile';
import '../../assets/styles/header.css';
import LanguageSwitch from './LanguageSwitch';
import account from '../../assets/images/account.png';

export default function HeaderAccount() {
  const isMobile = useMediaQuery('(max-width: 1130px)');

  return (
    <header className="header">
      <Box className="container header-inner">
        <Logo />
        {isMobile ? (
          <AccountHeaderMobile />
        ) : (
          <>
            <NavigationAccount />
            <Box className="actions-block">
              <LanguageSwitch />
              <button type="button" className="account-button">
                <img src={account} alt="account" />
              </button>
            </Box>
          </>
        )}
      </Box>
    </header>
  );
}