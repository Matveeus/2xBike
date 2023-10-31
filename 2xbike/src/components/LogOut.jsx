import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import auth from '../services/firebase';

function LogOutButton() {
  const navigate = useNavigate();

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
    <Button
      sx={{
        border: '1px solid #000000',
        color: '#000000',
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.5);',
        },
        height: '100%',
      }}
      onClick={handleSignOut}
    >
      <LogoutIcon />
    </Button>
  );
}

export default LogOutButton;
