/* eslint-disable no-restricted-syntax */
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function NavigationAccount() {
  const { t } = useTranslation();

  return (
    <nav className="navigation">
      <a href="/" className="nav-item">
        {t('header.navigation.plans')}
      </a>
      <a href="/" className="nav-item">
        {t('header.navigation.bikes')}
      </a>
      <a href="/" className="nav-item">
        {t('header.navigation.rent')}
      </a>
      <a href="/" className="nav-item">
        {t('header.navigation.about_company')}
      </a>
      <a href="/" className="nav-item">
        {t('header.navigation.FAQ')}
      </a>
      <a href="/" className="nav-item">
        {t('header.navigation.profile')}
      </a>
    </nav>
  );
}
