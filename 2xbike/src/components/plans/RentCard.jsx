import React, { useState } from 'react';
import { Box, Divider, useMediaQuery, Collapse } from '@mui/material';
import { useTranslation } from 'react-i18next';
import '../../assets/styles/plans&additions.css';
import expandMoreArrow from '../../assets/images/icons/arrow-down-expand.svg';
import expandLessArrow from '../../assets/images/icons/arrow-up-less.svg';

export default function RentCard({ title, description, price, number }) {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box className="rent-card">
      <Box className="rent-card-inner">
        {isMobile ? (
          <>
            <Box className="mobile-card-header">
              <h3 className="rent-card-title">{title}</h3>
              <Box className="price-card-block">
                <p className="rent-card-price">{number}</p>
                <p className="small-card-price">{price}</p>
              </Box>
            </Box>
            <Box className="about-plan">
              <button type="button" className="dark-button">
                {t('plans.plans.planButton')}
              </button>
              <button type="button" className="expand-answer-text" onClick={handleClick}>
                {!open ? t('plans.plans.planButton2') : t('overview.close-modal')}
              </button>
            </Box>
          </>
        ) : (
          <>
            <h3 className="rent-card-title">{title}</h3>
            <Box className="price-card-block">
              <p className="rent-card-price">{number}</p>
              <p className="small-card-price">{price}</p>
            </Box>
            <Box className="about-plan">
              <button type="button" className="dark-button">
                {t('plans.plans.planButton')}
              </button>
              <button type="button" className="expand-answer" onClick={handleClick}>
                {open ? (
                  <img src={expandLessArrow} alt="expend less" />
                ) : (
                  <img src={expandMoreArrow} alt="expend more" />
                )}
              </button>
            </Box>
          </>
        )}
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider orientation="horizontal" />
        <p className="rent-card-desc">{description}</p>
      </Collapse>
    </Box>
  );
}
