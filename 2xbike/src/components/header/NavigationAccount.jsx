/* eslint-disable no-restricted-syntax */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import '../../assets/styles/account.css';

export default function NavigationAccount() {
  const location = useLocation();
  const currentURL = location.pathname;
  const { t } = useTranslation();

  return (
    <nav className="navigation account-nav">
      <a href="/account/plans" className={`nav-item ${currentURL === '/account/plans' ? 'active-url' : ''}`}>
        {t('header.navigation.plans')}
      </a>
      <a href="/account/contacts" className={`nav-item ${currentURL === '/account/contacts' ? 'active-url' : ''}`}>
        {t('header.navigation.contacts')}
      </a>
      <a href="/account/faq" className={`nav-item ${currentURL === '/account/faq' ? 'active-url' : ''}`}>
        {t('header.navigation.FAQ')}
      </a>
      <a href="/account/profile" className={`nav-item ${currentURL === '/account/profile' ? 'active-url' : ''}`}>
        {t('header.navigation.profile')}
      </a>
    </nav>
  );
}
