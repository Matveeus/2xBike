import React from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import '../../assets/styles/plans&additions.css';
import AdditionCard from './AdditionCard';

export default function Additions() {
  const { t } = useTranslation();
  return (
    <Box className="container">
      <Box className="additions-block">
        <h1 className="heading">{t('additions.heading')}</h1>
        <Box className="additions">
          <AdditionCard
            title={t('additions.additions.addition1Title')}
            description={t('additions.additions.addition1Desc')}
            price={t('additions.additions.addition1Price')}
            buttonTitle={t('additions.additions.addition1Button')}
          />
          <AdditionCard
            title={t('additions.additions.addition2Title')}
            description={t('additions.additions.addition2Desc')}
            price={t('additions.additions.addition2Price')}
            buttonTitle={t('additions.additions.addition2Button')}
          />
        </Box>
      </Box>
    </Box>
  );
}
