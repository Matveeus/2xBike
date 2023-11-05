import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useTranslation } from 'react-i18next';
import LogoutIcon from '@mui/icons-material/Logout';
import auth from '../services/firebase';

function LogOutButton() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      if (!currentUser) {
        navigate('/');
      }
    });
    return unsubscribe;
  }, [navigate]);

  const handleSignOut = () => {
    signOut(auth).then();
  };
  return (
    <button type="button" className="log-out" onClick={handleSignOut}>
      <LogoutIcon />
      {t('profile.logout')}
    </button>
  );
}

export default LogOutButton;
