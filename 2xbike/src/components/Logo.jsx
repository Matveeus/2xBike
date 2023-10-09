import { Box } from '@mui/material';
import React from 'react';
import logo from '../assets/images/logo.png';

export default function Logo() {
  return (
    <Box className="logo">
      <img src={logo} alt="2xbike" loading="lazy" />
    </Box>
  );
}