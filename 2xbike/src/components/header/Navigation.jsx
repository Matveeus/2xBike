/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

export default function Navigation() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState(null);

  // Функция, которая обновляет активную секцию при прокрутке
  const handleScroll = () => {
    const sections = ['main', 'bikes', 'rent', 'reviews', 'about-company', 'contacts'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 40 && rect.bottom >= 40) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  // Слушайте событие прокрутки страницы и обновляйте активную секцию
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navigation">
      <Link
        to="main"
        className={`nav-item ${activeSection === 'main' ? 'active' : ''}`}
        spy
        smooth
        offset={-160}
        duration={2000}
      >
        {t('header.navigation.main')}
      </Link>
      <Link
        to="bikes"
        className={`nav-item ${activeSection === 'bikes' ? 'active' : ''}`}
        spy
        smooth
        offset={-100}
        duration={2000}
      >
        {t('header.navigation.bikes')}
      </Link>
      <Link
        to="rent"
        className={`nav-item ${activeSection === 'rent' ? 'active' : ''}`}
        spy
        smooth
        offset={-150}
        duration={2000}
      >
        {t('header.navigation.rent')}
      </Link>
      <Link
        to="about-company"
        className={`nav-item ${activeSection === 'about-company' ? 'active' : ''}`}
        spy
        smooth
        offset={-100}
        duration={2000}
      >
        {t('header.navigation.about_company')}
      </Link>
      <Link
        to="reviews"
        className={`nav-item ${activeSection === 'reviews' ? 'active' : ''}`}
        spy
        smooth
        offset={-160}
        duration={2000}
      >
        {t('header.navigation.reviews')}
      </Link>
      <Link
        to="contacts"
        className={`nav-item ${activeSection === 'contacts' ? 'active' : ''}`}
        spy
        smooth
        offset={-90}
        duration={2000}
      >
        {t('header.navigation.contacts')}
      </Link>
    </nav>
  );
}
