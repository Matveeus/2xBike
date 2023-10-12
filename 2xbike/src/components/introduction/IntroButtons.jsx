import React from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

export default function IntroButtons() {
  const { t } = useTranslation();
  return (
    <Box className="intro-buttons">
      <button type="button" className="rent-button dark-button">
        <Link to="rent" spy smooth offset={-150} duration={2000}>
          {t('intro.rent_button')}
        </Link>
      </button>
      <button type="button" className="login-button white-button">
        <Link to="sign-up-form" spy smooth offset={-170} duration={2000}>
          {t('intro.login_button')}
        </Link>
      </button>
    </Box>
  );
}
