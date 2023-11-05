import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import '../../assets/styles/faq.css';
import { useTranslation } from 'react-i18next';
import Question from './Question';

export default function AccountFAQ() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 850px)');
  return (
    <Box className="container">
      <Box className="faq account-faq">
        {isMobile ? (
          <h2 className="heading0">{t('FAQ.heading0').toUpperCase()}</h2>
        ) : (
          <h2 className="heading0">{t('FAQ.heading0')}</h2>
        )}
        <h2 className="heading">FAQ</h2>
        <Box sx={{ width: '100%' }}>
          <Question number="01" question={t('FAQ.question1')} answer={t('FAQ.answer1')} />
          <Question number="02" question={t('FAQ.question2')} answer={t('FAQ.answer2')} />
          <Question number="03" question={t('FAQ.question3')} answer={t('FAQ.answer3')} />
          <Question number="04" question={t('FAQ.question10')} answer={t('FAQ.answer10')} />
          <Question number="05" question={t('FAQ.question12')} answer={t('FAQ.answer12')} />
          <Question number="06" question={t('FAQ.question4')} answer={t('FAQ.answer4')} />
          <Question number="07" question={t('FAQ.question5')} answer={t('FAQ.answer5')} />
          <Question number="08" question={t('FAQ.question6')} answer={t('FAQ.answer6')} />
          <Question number="09" question={t('FAQ.question7')} answer={t('FAQ.answer7')} />
          <Question number="10" question={t('FAQ.question8')} answer={t('FAQ.answer8')} />
          <Question number="11" question={t('FAQ.question9')} answer={t('FAQ.answer9')} />
          <Question number="12" question={t('FAQ.question11')} answer={t('FAQ.answer11')} />
          <Question number="13" question={t('FAQ.question13')} answer={t('FAQ.answer13')} />
          <Question number="14" question={t('FAQ.question14')} answer={t('FAQ.answer14')} />
          <Question number="15" question={t('FAQ.question15')} answer={t('FAQ.answer15')} />
          <Question number="16" question={t('FAQ.question16')} answer={t('FAQ.answer16')} />
          <Question number="17" question={t('FAQ.question17')} answer={t('FAQ.answer17')} />
          <Question number="18" question={t('FAQ.question18')} answer={t('FAQ.answer18')} />
          <Question number="19" question={t('FAQ.question19')} answer={t('FAQ.answer19')} />
        </Box>
      </Box>
    </Box>
  );
}