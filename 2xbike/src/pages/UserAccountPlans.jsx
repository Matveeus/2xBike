import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import HeaderAccount from '../components/header/AccountHeader';
import Footer from '../components/footer/Footer';
import RentPlans from '../components/plans/RentPlans';
import Additions from '../components/additions/Additions';
import useCheckUser from '../hooks/useCheckUser';

export default function UserAccountPlans() {
  useCheckUser();

  useEffect(() => {
    window.booqableOptions = {
      company: '96cadf02-0a06-401a-94f5-07f1ac429695',
    };

    const script = document.createElement('script');
    script.src = 'https://96cadf02-0a06-401a-94f5-07f1ac429695.assets.booqable.com/v2/booqable.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
