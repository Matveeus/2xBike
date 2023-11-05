import React from 'react';
import { Box } from '@mui/material';
import HeaderAccount from '../components/header/AccountHeader';
import Footer from '../components/footer/Footer';
import RentPlans from '../components/plans/RentPlans';
import Additions from '../components/additions/Additions';
import useCheckUser from '../hooks/useCheckUser';

export default function UserAccountPlans() {
  useCheckUser();
  return (
    <>
      <HeaderAccount />
      <Box className="account-wrapper">
        <RentPlans />
        <Additions />
      </Box>
      <Footer />
    </>
  );
}
