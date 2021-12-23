/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const languages = [
  { key: 'en', label: 'EN' },
  { key: 'fr', label: 'FR' },
];

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  // const [activeLanguage, setActiveLanguage] = useState('FR');

  const handleClick = (languageSelected) => {
    // setActiveLanguage(languageSelected);
    i18n.changeLanguage(languageSelected);
  };

  return (
    <ButtonGroup isAttached size="sm" mr="4">
      {languages.map((language) => (
        <Button
          key={language.key}
          variant={i18n.language === language.key ? 'activeLanguage' : 'outline'}
          onClick={() => handleClick(language.key)}
        >
          {language.label}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default LanguageToggle;
