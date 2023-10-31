import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import BikeIntro from './BikeIntro';
import '../../assets/styles/introduction.css';
import bikeMain from '../../assets/images/main-bike.png';
import IntroButtons from './IntroButtons';

export default function Introduction() {
  const isMobile = useMediaQuery('(max-width: 850px)');
  return (
    <Box sx={{ overflow: 'hidden' }}>
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
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
