import React from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import '../../assets/styles/plans&additions.css';
import RentCard from './RentCard';

export default function RentPlans() {
  const { t } = useTranslation();
  return (
    <Box className="container">
      <Box className="plans-block" id="rent">
        <h2 className="heading">{t('plans.heading')}</h2>
        <RentCard
          title={t('plans.plans.plan1Title')}
          description={t('plans.plans.plan1Desc')}
          price={t('plans.plans.plan1Price')}
          buttonTitle={t('plans.plans.plan1Button')}
        />
        <RentCard
          title={t('plans.plans.plan2Title')}
          description={t('plans.plans.plan2Desc')}
          price={t('plans.plans.plan2Price')}
          buttonTitle={t('plans.plans.plan2Button')}
        />
        <RentCard
          title={t('plans.plans.plan3Title')}
          description={t('plans.plans.plan3Desc')}
          price={t('plans.plans.plan3Price')}
          buttonTitle={t('plans.plans.plan3Button')}
        />
        <RentCard
          title={t('plans.plans.plan4Title')}
          description={t('plans.plans.plan4Desc')}
          price={t('plans.plans.plan4Price')}
          buttonTitle={t('plans.plans.plan4Button')}
        />
      </Box>
    </Box>
  );
}
