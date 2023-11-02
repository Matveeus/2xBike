import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../assets/styles/additionalImages.css';
import girl from '../../assets/images/bike/girlWithBike.png';
import man from '../../assets/images/bike/amnWithBike.png';
import bike from '../../assets/images/bike/bikeZoomed.png';

export default function AdditionalImages() {
  const isMobile = useMediaQuery('(max-width: 850px)');
  return (
    <Box className="addition-images">
      {isMobile ? (
        <Swiper slidesPerView={3} spaceBetween={30} loop centeredSlides className="AddImagesSwiper">
          <SwiperSlide>
            <img src={girl} alt="e-bike" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bike} alt="e-bike" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={man} alt="e-bike" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={girl} alt="e-bike" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bike} alt="e-bike" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={man} alt="e-bike" />
          </SwiperSlide>
        </Swiper>
      ) : (
        <Box className="container">
          <Box className="images-inner">
            <Box className="addition-image">
              <img src={girl} alt="e-bike" />
            </Box>
            <Box className="addition-image">
              <img src={bike} alt="e-bike" />
            </Box>
            <Box className="addition-image">
              <img src={man} alt="e-bike" />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
