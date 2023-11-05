import React from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Dialog, Slide } from '@mui/material';
import burgerMenu from '../../assets/images/icons/burger-menu.svg';
import closeCross from '../../assets/images/icons/close-cross.svg';
import Logo from '../Logo';
import LanguageSwitch from './LanguageSwitch';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AccountHeaderMobile() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNavigate = () => {
    navigate('/signup');
  };

  return (
    <>
      <button type="button" className="burger-menu" data-menu="11" onClick={handleClickOpen}>
        <img src={burgerMenu} alt="menu" />
      </button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <Box className="container" sx={{ height: '100%' }}>
          <Box className="menu-modal">
            <Box className="menu-header">
              <Logo />
              <button type="button" className="close-cross" data-menu="11" onClick={handleClose}>
                <img src={closeCross} alt="close" />
              </button>
            </Box>
            <nav className="mobile-navigation">
              <Link to="main" className="nav-item" spy smooth offset={-160} duration={2000} onClick={handleClose}>
                {t('header.navigation.main').toUpperCase()}
              </Link>
              <Link to="bikes" className="nav-item" spy smooth offset={-150} duration={2000} onClick={handleClose}>
                {t('header.navigation.bikes').toUpperCase()}
              </Link>
              <Link to="rent" className="nav-item" spy smooth offset={-150} duration={2000} onClick={handleClose}>
                {t('header.navigation.rent').toUpperCase()}
              </Link>
              <Link
                to="about-company"
                className="nav-item"
                spy
                smooth
                offset={-100}
                duration={2000}
                onClick={handleClose}
              >
                {t('header.navigation.about_company').toUpperCase()}
              </Link>
              <Link to="reviews" className="nav-item" spy smooth offset={-160} duration={2000} onClick={handleClose}>
                {t('header.navigation.reviews').toUpperCase()}
              </Link>
              <Link to="contacts" className="nav-item" spy smooth offset={-90} duration={2000} onClick={handleClose}>
                {t('header.navigation.contacts').toUpperCase()}
              </Link>
            </nav>
            <Box className="bottom-buttons">
              <LanguageSwitch />
              <button onClick={handleNavigate} type="button" className="dark-button login-button">
                {t('header.login')}
              </button>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}
