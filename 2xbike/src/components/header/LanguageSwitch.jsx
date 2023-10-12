import React, { useState } from 'react';
import '../../assets/styles/header.css';
import Menu from '@mui/material/Menu';
import { Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import en from '../../assets/images/flags/en.png';
import pl from '../../assets/images/flags/pl.png';
import ua from '../../assets/images/flags/ua.png';
import ru from '../../assets/images/flags/ru.png';

export default function LanguageSwitch() {
  const { i18n } = useTranslation();
  let initLanguage;

  switch (i18n.language) {
    case 'en':
      initLanguage = { abrr: 'Eng', image: en, name: 'English', locale: 'en' };
      break;
    case 'pl':
      initLanguage = { abrr: 'Pol', image: pl, name: 'Polski', locale: 'pl' };
      break;
    case 'ua':
      initLanguage = { abrr: 'Укр', image: ua, name: 'Український', locale: 'ua' };
      break;
    case 'ru':
      initLanguage = { abrr: 'Рус', image: ru, name: 'Русский', locale: 'ru' };
      break;
    default:
      initLanguage = { abrr: 'Eng', image: en, name: 'English', locale: 'en' };
      break;
  }
  const [selectedLanguage, setSelectedLanguage] = useState(initLanguage);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const languages = [
    { abrr: 'Eng', image: en, name: 'English', locale: 'en' },
    { abrr: 'Pol', image: pl, name: 'Polski', locale: 'pl' },
    { abrr: 'Укр', image: ua, name: 'Український', locale: 'ua' },
    { abrr: 'Рус', image: ru, name: 'Русский', locale: 'ru' },
    { abrr: 'Бел', image: ru, name: 'Белорусский ', locale: 'by' },
  ];

  const handleClose = () => {
    setOpen(isOpen => !isOpen);
    setAnchorEl(null);
  };

  const handleButtonClick = event => {
    setOpen(isOpen => !isOpen);
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageSelect = language => {
    i18n.changeLanguage(language.locale);
    setSelectedLanguage(language);
    handleClose();
  };

  return (
    <>
      <button
        className="language-button"
        onClick={handleButtonClick}
        type="button"
        aria-controls={open ? 'simple-menu' : undefined}
        aria-expanded={open || undefined}
        aria-haspopup="menu"
      >
        <img src={selectedLanguage.image} alt="language" />
        <p>{selectedLanguage.abrr}</p>
        <ExpandMoreIcon className={open ? 'expand-open' : 'expand-close'} />
      </button>
      <Menu className="language-dropdown" anchorEl={anchorEl} open={open} onClose={handleClose}>
        {languages.map(language => (
          <Box key={language.name} className="language" onClick={() => handleLanguageSelect(language)}>
            <img src={language.image} alt={`${language.name} language`} />
            {language.name}
          </Box>
        ))}
      </Menu>
    </>
  );
}
