import React from 'react';
import { Box, Divider, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import '../../assets/styles/aboutus.css';
import office from '../../assets/images/2xbikeoffice.jpeg';

export default function AboutUs() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 1024px)');
  return (
    <Box className="container">
      <Box className="about-us-block" id="about-company">
        {isMobile ? (
          <>
            <h2 className="heading">{t('aboutus.heading')}</h2>
            <img className="office-image" src={office} alt="2xbike" />
            <Box className="text-part">
              <Box className="text-block">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <Divider />
              </Box>
            </Box>
          </>
        ) : (
          <>
            <img className="office-image" src={office} alt="2xbike" />
            <Box className="text-part">
              <h2>{t('aboutus.heading')}</h2>
              <Box className="text-block">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <Divider />
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
