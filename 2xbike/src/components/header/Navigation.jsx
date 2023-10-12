import React from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

export default function Navigation() {
  const { t } = useTranslation();
  return (
    <nav className="navigation">
      <Link to="main" className="nav-item" spy smooth offset={-160} duration={2000}>
        {t('header.navigation.main')}
      </Link>
      <Link to="bikes" className="nav-item" spy smooth offset={-100} duration={2000}>
        {t('header.navigation.bikes')}
      </Link>
      <Link to="rent" className="nav-item" spy smooth offset={-150} duration={2000}>
        {t('header.navigation.rent')}
      </Link>
      <Link to="reviews" className="nav-item" spy smooth offset={-160} duration={2000}>
        {t('header.navigation.reviews')}
      </Link>
      <Link to="about-company" className="nav-item" spy smooth offset={-100} duration={2000}>
        {t('header.navigation.about_company')}
      </Link>
      <Link to="contacts" className="nav-item" spy smooth offset={-90} duration={2000}>
        {t('header.navigation.contacts')}
      </Link>
    </nav>
  );
}
