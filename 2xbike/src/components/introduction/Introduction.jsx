import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import BikeIntro from './BikeIntro';
import '../../assets/styles/introduction.css';
import arrowTop from '../../assets/images/arrow-top.png';
import bikeMain from '../../assets/images/main-bike.png';
import IntroButtons from './IntroButtons';

export default function Introduction() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 850px)');
  return (
    <Box className="container">
      <Box className="intro-block" id="main">
        {isMobile ? (
          <Box className="intro-content">
            <BikeIntro />
            <IntroButtons />
          </Box>
        ) : (
          <Box className="intro-content">
            <BikeIntro />
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
        )}
      </Box>
    </Box>
  );
}
