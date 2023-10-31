/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import '../../assets/styles/aboutus.css';
import us from '../../assets/images/our-photo.png';

export default function AboutUs() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 1024px)');
  return (
    <>
      {isMobile ? (
        <>
          <Box className="container">
            <Box className="about-us-block" id="about-company">
              <h2 className="heading">{t('aboutus.heading')}</h2>
              <Box className="text-block">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </Box>
            </Box>
          </Box>
          <img className="bikes-image" src={us} alt="2xbike" />
        </>
      ) : (
        <Box className="container">
          <Box className="about-us-block" id="about-company">
            <h2 className="heading">{t('aboutus.heading')}</h2>
            <Box className="text-block">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </Box>
            <img className="bikes-image" src={us} alt="2xbike" />
          </Box>
        </Box>
      )}
    </>
  );
}
