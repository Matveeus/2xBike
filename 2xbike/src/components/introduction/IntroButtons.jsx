import React from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

export default function IntroButtons() {
  const { t } = useTranslation();
  return (
    <Box className="intro-buttons">
      <button type="button" className="rent-button dark-button">
        <Link to="/">{t('intro.rent_button')}</Link>
      </button>
      <button type="button" className="login-button white-button">
        <Link to="/">{t('intro.login_button')}</Link>
      </button>
    </Box>
  );
}
