import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../services/firebase';

export default function useCheckUser() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      if (!currentUser) {
        navigate('/');
      }
    });
    return unsubscribe;
  }, [navigate]);
}
