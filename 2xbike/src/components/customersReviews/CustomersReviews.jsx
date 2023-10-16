import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import '../../assets/styles/customers-reviews.css';
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import arrowLeft from '../../assets/images/arrow-left.png';
import arrowRight from '../../assets/images/arrow-right.png';
import customer1 from '../../assets/images/customers/ivan.jpeg';

export default function CustomersReviews() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 1130px)');
  return (
    <Box className="reviews-block" id="reviews">
      <Box className="container">
        <h2 className="heading">{t('reviews.heading')}</h2>
      </Box>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop
        centeredSlides
        speed={1000}
        modules={[Navigation]}
        navigation={{
          nextEl: '.next-review',
          prevEl: '.prev-review',
        }}
        className="ReviewsSwiper"
      >
        <SwiperSlide>
          <Box className="review">
            {isMobile ? (
              <>
                <Box className="review-inner">
                  <img src={customer1} alt="our customer" />
                  <Box>
                    <Box className="customer-name">
                      <p>Olzhas</p>
                      <p>Amanzhan</p>
                    </Box>
                  </Box>
                </Box>
                <p className="review-text">{t('reviews.review1')}</p>
              </>
            ) : (
              <Box className="review-inner">
                <img src={customer1} alt="our customer" />
                <Box>
                  <Box className="customer-name">
                    <p>Olzhas</p>
                    <p>Amanzhan</p>
                  </Box>
                  <p className="review-text">{t('reviews.review1')}</p>
                </Box>
              </Box>
            )}
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="review">
            {isMobile ? (
              <>
                <Box className="review-inner">
                  <img src={customer1} alt="our customer" />
                  <Box>
                    <Box className="customer-name">
                      <p>么ᎷᎬᏞᏆᎾᎠᎪᎦ乡</p>
                    </Box>
                  </Box>
                </Box>
                <p className="review-text">{t('reviews.review2')}</p>
              </>
            ) : (
              <Box className="review-inner">
                <img src={customer1} alt="our customer" />
                <Box>
                  <Box className="customer-name">
                    <p>么ᎷᎬᏞᏆᎾᎠᎪᎦ乡</p>
                  </Box>
                  <p className="review-text">{t('reviews.review2')}</p>
                </Box>
              </Box>
            )}
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="review">
            {isMobile ? (
              <>
                <Box className="review-inner">
                  <img src={customer1} alt="our customer" />
                  <Box>
                    <Box className="customer-name">
                      <p>Mikita</p>
                      <p>Hanusenka</p>
                    </Box>
                  </Box>
                </Box>
                <p className="review-text">{t('reviews.review3')}</p>
              </>
            ) : (
              <Box className="review-inner">
                <img src={customer1} alt="our customer" />
                <Box>
                  <Box className="customer-name">
                    <p>Mikita</p>
                    <p>Hanusenka</p>
                  </Box>
                  <p className="review-text">{t('reviews.review3')}</p>
                </Box>
              </Box>
            )}
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="review">
            {isMobile ? (
              <>
                <Box className="review-inner">
                  <img src={customer1} alt="our customer" />
                  <Box>
                    <Box className="customer-name">
                      <p>Mikita</p>
                      <p>Hanusenka</p>
                    </Box>
                  </Box>
                </Box>
                <p className="review-text">{t('reviews.review4')}</p>
              </>
            ) : (
              <Box className="review-inner">
                <img src={customer1} alt="our customer" />
                <Box>
                  <Box className="customer-name">
                    <p>Mikita</p>
                    <p>Hanusenka</p>
                  </Box>
                  <p className="review-text">{t('reviews.review4')}</p>
                </Box>
              </Box>
            )}
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="review">
            {isMobile ? (
              <>
                <Box className="review-inner">
                  <img src={customer1} alt="our customer" />
                  <Box>
                    <Box className="customer-name">
                      <p>Alex</p>
                    </Box>
                  </Box>
                </Box>
                <p className="review-text">{t('reviews.review5')}</p>
              </>
            ) : (
              <Box className="review-inner">
                <img src={customer1} alt="our customer" />
                <Box>
                  <Box className="customer-name">
                    <p>Alex</p>
                  </Box>
                  <p className="review-text">{t('reviews.review5')}</p>
                </Box>
              </Box>
            )}
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="review">
            {isMobile ? (
              <>
                <Box className="review-inner">
                  <img src={customer1} alt="our customer" />
                  <Box>
                    <Box className="customer-name">
                      <p>Kirill</p>
                      <p>Morozov</p>
                    </Box>
                  </Box>
                </Box>
                <p className="review-text">{t('reviews.review6')}</p>
              </>
            ) : (
              <Box className="review-inner">
                <img src={customer1} alt="our customer" />
                <Box>
                  <Box className="customer-name">
                    <p>Kirill</p>
                    <p>Morozov</p>
                  </Box>
                  <p className="review-text">{t('reviews.review6')}</p>
                </Box>
              </Box>
            )}
          </Box>
        </SwiperSlide>
      </Swiper>
      <Box className="slider-buttons">
        <button type="button" className="prev-review dark-button">
          <img src={arrowLeft} alt="arrow left" />
        </button>
        <button type="button" className="next-review dark-button">
          <img src={arrowRight} alt="arrow right" />
        </button>
      </Box>
    </Box>
  );
}
