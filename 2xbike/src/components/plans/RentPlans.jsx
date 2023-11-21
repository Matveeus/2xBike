/* eslint-disable prefer-template */
import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import '../../assets/styles/plans&additions.css';
import RentCard from './RentCard';

export default function RentPlans() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 850px)');
  return (
    <Box className="container">
      <Box className="plans-block" id="rent">
        {isMobile ? (
          <h2 className="heading0">{t('plans.heading0').toUpperCase()}</h2>
        ) : (
          <h2 className="heading0">{t('plans.heading0')}</h2>
        )}
        <h2 className="heading">{t('plans.heading')}</h2>
        <RentCard
          title={t('plans.plans.plan1Title')}
          description={t('plans.plans.plan1Desc')}
          number="200"
          price={t('plans.plans.plan1Price')}
        />
        <RentCard
          title={t('plans.plans.plan3Title')}
          description={t('plans.plans.plan3Desc')}
          number="70"
          price={t('plans.plans.plan3Price')}
        />
        <RentCard
          title={t('plans.plans.plan4Title')}
          description={t('plans.plans.plan4Desc')}
          number="50"
          price={t('plans.plans.plan4Price')}
        />
      </Box>
    </Box>
  );
}
