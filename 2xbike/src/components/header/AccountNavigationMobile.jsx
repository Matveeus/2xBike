import React from 'react';
import { signOut } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Dialog, Slide } from '@mui/material';
import burgerMenu from '../../assets/images/icons/burger-menu.svg';
import closeCross from '../../assets/images/icons/close-cross.svg';
import Logo from '../Logo';
import LanguageSwitch from './LanguageSwitch';
import auth from '../../services/firebase';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AccountNavigationMobile() {
  const location = useLocation();
  const currentURL = location.pathname;
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignOut = () => {
    signOut(auth).then();
    navigate('/');
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
            <nav className="mobile-navigation mobile-nav-account">
              <a href="/account/plans" className={`nav-item ${currentURL === '/account/plans' ? 'active-url' : ''}`}>
                {t('header.navigation.plans').toUpperCase()}
              </a>
              <a
                href="/account/contacts"
                className={`nav-item ${currentURL === '/account/contacts' ? 'active-url' : ''}`}
              >
                {t('header.navigation.contacts').toUpperCase()}
              </a>
              <a href="/account/faq" className={`nav-item ${currentURL === '/account/faq' ? 'active-url' : ''}`}>
                {t('header.navigation.FAQ').toUpperCase()}
              </a>
              <a
                href="/account/profile"
                className={`nav-item ${currentURL === '/account/profile' ? 'active-url' : ''}`}
              >
                {t('header.navigation.profile').toUpperCase()}
              </a>
            </nav>
            <Box className="bottom-buttons">
              <LanguageSwitch />
              <button onClick={handleSignOut} type="button" className="dark-button login-button">
                {t('profile.logout')}
              </button>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}
