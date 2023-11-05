import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import '../../assets/styles/contacts.css';

export default function Contacts() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 850px)');
  return (
    <Box className="contacts-wrapper">
      <Box className="contacts-block" id="contacts">
        <Box className="container">
          <Box sx={{ width: '100%' }}>
            {isMobile ? (
              <h2 className="heading0">{t('contacts.heading0').toUpperCase()}</h2>
            ) : (
              <h2 className="heading0">{t('contacts.heading0')}</h2>
            )}
            <h2 className="heading">{t('contacts.heading')}</h2>
          </Box>
        </Box>
        <Box className="all-contacts container">
          <Box className="contact-block address-block">
            <p className="contact-label">{t('contacts.address-label')}</p>
            <p className="contact">
              Mesyńska 17,
              <br /> 02-761 Warszawa
            </p>
          </Box>
          <Box className="contact-block address-block">
            <p className="contact-label">{t('contacts.phone-label')}</p>
            <p className="contact">+48513280633</p>
          </Box>
          <Box className="contact-block email-block">
            <p className="contact-label">{t('contacts.email-label')}</p>
            <p className="contact">x2bike.eu@gmail.com</p>
          </Box>
          <Box className="contact-block address-block">
            <p className="contact-label">{t('contacts.hours-label')}</p>
            <p className="contact work-hours">{t('contacts.monday-friday')}</p>
            <p className="contact work-hours">{t('contacts.saturday')}</p>
            <p className="contact work-hours">{t('contacts.sunday')}</p>
          </Box>
        </Box>
        <Box className="container map">
          <iframe
            title="google maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.8217038975754!2d21.057165277183227!3d52.17393507197252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471933ff1148c8df%3A0xa6a7b2b8355b990c!2sX2Bike!5e0!3m2!1sru!2spl!4v1696671441833!5m2!1sru!2spl"
            width="100%"
            className="google-map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </Box>
    </Box>
  );
}
