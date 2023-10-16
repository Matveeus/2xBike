import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import BikeIntro from './BikeIntro';
import '../../assets/styles/introduction.css';
import IntroButtons from './IntroButtons';

export default function Introduction() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 1024px)');
  return (
    <Box className="container">
      <Box className="intro-block" id="main">
        {isMobile ? (
          <>
            <h1 className="heading">{t('intro.heading-full')}</h1>
            <p className="intro-info">{t('intro.body-text')}</p>
            <BikeIntro />
            <IntroButtons />
          </>
        ) : (
          <>
            <h1 className="heading">{t('intro.heading1')}</h1>
            <Box className="intro-content">
              <Box className="left-side">
                <h1 className="heading under-text">{t('intro.heading2')}</h1>
                <p className="intro-info">{t('intro.body-text')}</p>
                <IntroButtons />
              </Box>
              <BikeIntro />
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
