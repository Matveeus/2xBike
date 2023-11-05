import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import '../../assets/styles/header.css';
import LanguageSwitch from './LanguageSwitch';
import account from '../../assets/images/account.png';

export default function HeaderLogin() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/signup');
  };

  return (
    <header className="header">
      <Box className="container header-inner">
        <Logo />
        <Box className="actions-block">
          <LanguageSwitch />
          <button onClick={handleNavigate} type="button" className="account-button">
            <img src={account} alt="account" />
          </button>
        </Box>
      </Box>
    </header>
  );
}
