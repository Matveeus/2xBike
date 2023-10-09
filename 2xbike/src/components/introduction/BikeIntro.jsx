import React from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import bikeMain from '../../assets/images/bike-main.png';
import arrowTop from '../../assets/images/arrow-top.png';

export default function BikeIntro() {
  const { t } = useTranslation();
  return (
    <Box className="bike-intro">
      <img className="bike scale" src={bikeMain} alt="Electric bike" />
      <Box className="cards">
        <Box className="about-bike first-card">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p className="card-number">4.9</p>
            <img src={arrowTop} alt="arrow up" />
          </Box>
          <p className="card-text">{t('intro.card1')}</p>
        </Box>
        <Box className="about-bike">
          <p className="card-number">20K+</p>
          <p className="card-text">{t('intro.card2')}</p>
        </Box>
      </Box>
    </Box>
  );
}
