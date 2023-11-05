import React from 'react';
import { Box } from '@mui/material';
import HeaderAccount from '../components/header/AccountHeader';
import Footer from '../components/footer/Footer';
import LogOut from '../components/LogOut';
import useCheckUser from '../hooks/useCheckUser';

export default function UserAccountProfile() {
  useCheckUser();
  return (
    <>
      <HeaderAccount />
      <Box className="container">
        <Box className="account-profile">
          <LogOut />
        </Box>
      </Box>
      <Footer />
    </>
  );
}
