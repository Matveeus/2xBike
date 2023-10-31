import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../services/firebase';

export default function useAuthState() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigate('/account');
      }
    });
    return unsubscribe;
  }, [navigate]);
}
