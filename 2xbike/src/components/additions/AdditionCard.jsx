import React from 'react';
import { Box } from '@mui/material';

export default function AdditionCard({ title, description, price, buttonTitle }) {
  return (
    <Box className="addition-card">
      <div className="white-circle1" />
      <div className="white-circle2" />
      <h3 className="rent-card-title">{title}</h3>
      <p className="rent-card-desc">{description}</p>
      <p className="rent-card-price">{price}</p>
      <button type="button" className="dark-button">
        {buttonTitle}
      </button>
    </Box>
  );
}
