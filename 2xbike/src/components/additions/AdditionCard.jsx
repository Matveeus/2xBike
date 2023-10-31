import React from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function AdditionCard({ title, description, price, number }) {
  const { t } = useTranslation();
  return (
    <Box className="addition-card">
      <Box className="addition-card-header">
        <h3 className="rent-card-title">{title}</h3>
        <Box className="price-card-block">
          <p className="rent-card-price">{number}</p>
          <p className="small-card-price">{price}</p>
        </Box>
      </Box>
      <p className="rent-card-desc">{description}</p>
      <button type="button" className="dark-button">
        {t('plans.plans.planButton')}
      </button>
    </Box>
  );
}
