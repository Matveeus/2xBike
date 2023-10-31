import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import IntroButtons from './IntroButtons';
import bikeMain from '../../assets/images/main-bike.png';

export default function BikeIntro() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 850px)');
  return (
    <Box className="bike-intro">
      {isMobile ? (
        <>
          <Box className="headings-intro">
            <h1 className="heading">
              <span>x2 </span>
              Speed
            </h1>
            <h1 className="heading">
              <span>x2 </span>
              Profit
            </h1>
            <h1 className="heading">
              <span>x2 </span>
              Bike
            </h1>
          </Box>
          <img className="bike scale" src={bikeMain} alt="Electric bike" />
          <p className="intro-info">{t('intro.body-text')}</p>
        </>
      ) : (
        <>
          <h1 className="heading">
            <span>x2 </span>
            Speed
          </h1>
          <h1 className="heading">
            <span>x2 </span>
            Profit
          </h1>
          <h1 className="heading">
            <span>x2 </span>
            Bike
          </h1>
          <p className="intro-info">{t('intro.body-text')}</p>
          <IntroButtons />
        </>
      )}
    </Box>
  );
}
