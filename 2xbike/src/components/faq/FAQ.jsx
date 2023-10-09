import React from 'react';
import { Box } from '@mui/material';
import '../../assets/styles/faq.css';
import Question from './Question';

export default function FAQ() {
  return (
    <Box className="container">
      <Box className="faq">
        <h2 className="heading">FAQ</h2>
        <Box sx={{ width: '100%' }}>
          <Question
            number="01"
            question="How to use e-bike?"
            answer="You can find our terms of use by following the provided link. To make sure you have a safe and enjoyable ride, we recommend that you also take a moment to familiarize yourself with the bicycle rules for NYC by following the link."
          />
          <Question
            number="02"
            question="How to use e-bike?"
            answer="You can find our terms of use by following the provided link. To make sure you have a safe and enjoyable ride, we recommend that you also take a moment to familiarize yourself with the bicycle rules for NYC by following the link."
          />
        </Box>
      </Box>
    </Box>
  );
}
