import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import IntroButtons from './IntroButtons';
import bikeMain from '../../assets/images/main-bike.png';
import arrowTop from '../../assets/images/arrow-top.png';

export default function BikeIntro() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 850px)');
  return (
    <Box className="bike-intro">
      {isMobile ? (
        <>
          <Box className="headings-intro">
            <h1 className="heading">
              <span>2X </span>
              PROFIT
            </h1>
            <h1 className="heading">
              <span>2X </span>
              SPEED
            </h1>
            <h1 className="heading">
              <span>2X </span>
              BIKE
            </h1>
          </Box>
          <img className="bike scale" src={bikeMain} alt="Electric bike" />
          <p className="intro-info">{t('intro.body-text')}</p>
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
        </>
      ) : (
        <>
          <h1 className="heading">
            <span>2X </span>
            PROFIT
          </h1>
          <h1 className="heading">
            <span>2X </span>
            SPEED
          </h1>
          <h1 className="heading">
            <span>2X </span>
            BIKE
          </h1>
          <p className="intro-info">{t('intro.body-text')}</p>
          <IntroButtons />
        </>
      )}
    </Box>
  );
}
