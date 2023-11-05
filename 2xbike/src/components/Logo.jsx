import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/x2bike-logo.svg';

export default function Logo() {
  const navigate = useNavigate();
  const navigateMain = () => {
    navigate('/');
  };

  return (
    <button type="button" onClick={navigateMain} className="logo">
      <img src={logo} alt="2xbike" loading="lazy" />
    </button>
  );
}
