import React from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

export default function IntroButtons() {
  const { t } = useTranslation();
  return (
    <Box className="intro-buttons">
      <Link className="rent-button dark-button" to="rent" spy smooth offset={-150} duration={2000}>
        {t('intro.rent_button')}
      </Link>
      <Link className="login-button white-button" to="sign-up-form" spy smooth offset={-170} duration={2000}>
        {t('intro.login_button')}
      </Link>
    </Box>
  );
}
