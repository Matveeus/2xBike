import React from 'react';
import { Box } from '@mui/material';
import '../../assets/styles/overview.css';
import { useTranslation } from 'react-i18next';
import mileage from '../../assets/images/icons/mileage.svg';
import battery from '../../assets/images/icons/battery.svg';
import speed from '../../assets/images/icons/speed.svg';
import power from '../../assets/images/icons/power.svg';
import arrowLink from '../../assets/images/icons/link-arrow.svg';

export default function StatsCards() {
  const { t } = useTranslation();
  return (
    <Box className="all-stats">
      <Box className="stats-card">
        <Box>
          <img src={mileage} alt="mileage of bike" />
          <p>{t('overview.cards.card1title')}</p>
        </Box>
        <p>{t('overview.cards.card1text')}</p>
      </Box>
      <Box className="stats-card">
        <Box>
          <img src={speed} alt="mileage of bike" />
          <p>{t('overview.cards.card2title')}</p>
        </Box>
        <p>{t('overview.cards.card2text')}</p>
      </Box>
      <Box className="stats-card">
        <Box>
          <img src={battery} alt="mileage of bike" />
          <p>{t('overview.cards.card3title')}</p>
        </Box>
        <p>{t('overview.cards.card3text')}</p>
      </Box>
      <Box className="stats-card">
        <Box>
          <img src={power} alt="mileage of bike" />
          <p>{t('overview.cards.card4title')}</p>
        </Box>
        <p>{t('overview.cards.card4text')}</p>
      </Box>
      <Box className="dark-button">
        <Box>
          <p>{t('overview.cards.card5title')}</p>
          <img className="arrow-link" src={arrowLink} alt="mileage of bike" />
        </Box>
        <p>{t('overview.cards.card5text')}</p>
      </Box>
    </Box>
  );
}
