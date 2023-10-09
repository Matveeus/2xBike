import React from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import BikeIntro from './BikeIntro';
import '../../assets/styles/introduction.css';
import IntroButtons from './IntroButtons';

export default function Introduction() {
  const { t } = useTranslation();
  return (
    <Box className="container">
      <Box className="intro-block" id="main">
        <h1 className="heading">{t('intro.heading1')}</h1>
        <Box className="intro-content">
          <Box className="left-side">
            <h1 className="heading under-text">{t('intro.heading2')}</h1>
            <p>{t('intro.body-text')}</p>
            <IntroButtons />
          </Box>
          <BikeIntro />
        </Box>
      </Box>
    </Box>
  );
}
