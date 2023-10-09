import React from 'react';
import { Box, Divider } from '@mui/material';
import '../../assets/styles/plans&additions.css';

export default function RentCard({ title, description, price, buttonTitle }) {
  return (
    <Box className="rent-card">
      <div className="white-circle1" />
      <div className="white-circle2" />
      <h3 className="rent-card-title">{title}</h3>
      <Divider sx={{ borderColor: '#CE1212' }} orientation="vertical" />
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
