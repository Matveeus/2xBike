import React from 'react';
import { Box, Divider, useMediaQuery } from '@mui/material';
import '../../assets/styles/plans&additions.css';

export default function RentCard({ title, description, price, buttonTitle }) {
  const isMobile = useMediaQuery('(max-width: 850px)');
  return (
    <Box className="rent-card">
      <div className="white-circle1" />
      <div className="white-circle2" />
      <h3 className="rent-card-title">{title}</h3>
      {isMobile ? null : <Divider sx={{ borderColor: '#CE1212' }} orientation="vertical" />}
      <Box className="about-plan">
        <p className="rent-card-desc">{description}</p>
        <p className="rent-card-price">{price}</p>
        <button type="button" className="dark-button">
          {buttonTitle}
        </button>
      </Box>
    </Box>
  );
}
