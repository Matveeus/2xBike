import React from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import '../../assets/styles/overview.css';
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/scrollbar';
import StatsCards from './StatsCards';
import bikeFront from '../../assets/images/bike/front.png';
import bikeBack from '../../assets/images/bike/back.png';
import bikeFrontZoom from '../../assets/images/bike/front-zoom.png';
import bikeSide from '../../assets/images/bike/side.png';
import arrowLeft from '../../assets/images/arrow-left.png';
import arrowRight from '../../assets/images/arrow-right.png';

export default function Overview() {
  const { t } = useTranslation();
  return (
    <Box className="container">
      <Box className="overview-block" id="bikes">
        <h2 className="heading">{t('overview.heading')}</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          speed={1000}
          loop
          navigation={{
            nextEl: '.next-photo',
            prevEl: '.prev-photo',
          }}
          centeredSlides
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            scale: 0.5,
            slideShadows: false,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[Navigation, Autoplay, EffectCoverflow]}
          className="mySwiper"
        >
          <button type="button" className="prev-photo dark-button">
            <img src={arrowLeft} alt="arrow left" />
          </button>
          <button type="button" className="next-photo dark-button">
            <img src={arrowRight} alt="arrow right" />
          </button>
          <SwiperSlide>
            <img src={bikeBack} alt="bike back" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bikeFrontZoom} alt="bike front zoom" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bikeSide} alt="bike side" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bikeFront} alt="bike front" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bikeBack} alt="bike back" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bikeFrontZoom} alt="bike front zoom" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bikeSide} alt="bike side" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bikeFront} alt="bike front" />
          </SwiperSlide>
        </Swiper>
        <StatsCards />
      </Box>
    </Box>
  );
}