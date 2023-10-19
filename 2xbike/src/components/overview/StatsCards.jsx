import React from 'react';
import { Box, Dialog, Slide, useMediaQuery } from '@mui/material';
import '../../assets/styles/overview.css';
import { useTranslation } from 'react-i18next';
import mileage from '../../assets/images/icons/mileage.svg';
import battery from '../../assets/images/icons/battery.svg';
import speed from '../../assets/images/icons/speed.svg';
import power from '../../assets/images/icons/power.svg';
import arrowLink from '../../assets/images/icons/link-arrow.svg';
import closeModal from '../../assets/images/icons/close-cross.svg';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function StatsCards() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className="all-stats">
      {isMobile ? (
        <>
          <Box className="stats-card">
            <Box>
              <img src={mileage} alt="mileage of bike" />
              <p>{t('overview.cards.card1title')}</p>
              <p className="bike-stat">{t('overview.cards.card1text')}</p>
            </Box>
            <Box>
              <img src={speed} alt="mileage of bike" />
              <p>{t('overview.cards.card2title')}</p>
              <p className="bike-stat">{t('overview.cards.card2text')}</p>
            </Box>
            <Box>
              <img src={battery} alt="mileage of bike" />
              <p>{t('overview.cards.card3title')}</p>
              <p className="bike-stat">{t('overview.cards.card3text')}</p>
            </Box>
            <Box>
              <img src={power} alt="mileage of bike" />
              <p>{t('overview.cards.card4title')}</p>
              <p className="bike-stat">{t('overview.cards.card4text')}</p>
            </Box>
          </Box>
          <button type="button" onClick={handleClickOpen} className="dark-button">
            <p>{t('overview.cards.card5mobile-text')}</p>
          </button>
        </>
      ) : (
        <>
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
          <button onClick={handleClickOpen} type="button" className="dark-button">
            <Box>
              <p>{t('overview.cards.card5title')}</p>
              <img className="arrow-link" src={arrowLink} alt="mileage of bike" />
            </Box>
            <p>{t('overview.cards.card5text')}</p>
          </button>
        </>
      )}
      <Dialog open={open} onClose={handleClose} TransitionComponent={Transition}>
        <Box className="characteristic-modal">
          <h3>CHARACTERISTICS</h3>
          <Box className="full-stat">
            <p className="characteristic-name">{t('overview.stat1name')}</p>
            <p className="characteristics-stat">{t('overview.stat1')}</p>
          </Box>
          <Box className="full-stat">
            <p className="characteristic-name">{t('overview.stat2name')}</p>
            <p className="characteristics-stat">{t('overview.stat2')}</p>
          </Box>
          <Box className="full-stat">
            <p className="characteristic-name">{t('overview.stat3name')}</p>
            <p className="characteristics-stat">21</p>
          </Box>
          <Box className="full-stat">
            <p className="characteristic-name">{t('overview.stat4name')}</p>
            <p className="characteristics-stat">{t('overview.stat4')}</p>
          </Box>
          <Box className="full-stat">
            <p className="characteristic-name">{t('overview.stat5name')}</p>
            <p className="characteristics-stat">{t('overview.stat5')}</p>
          </Box>
          <Box className="full-stat">
            <p className="characteristic-name">{t('overview.stat6name')}</p>
            <p className="characteristics-stat">{t('overview.stat6')}</p>
          </Box>
          <Box className="full-stat">
            <p className="characteristic-name">{t('overview.stat7name')}</p>
            <p className="characteristics-stat">2023</p>
          </Box>
          {isMobile ? (
            <button type="button" className="white-button close-modal" onClick={handleClose}>
              {t('overview.close-modal')}
            </button>
          ) : (
            <button className="close-icon" type="button" onClick={handleClose}>
              <img src={closeModal} alt="close" />
            </button>
          )}
        </Box>
      </Dialog>
    </Box>
  );
}
