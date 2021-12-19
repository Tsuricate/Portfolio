/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';

const LanguageToggle = () => {
  const [activeLanguage, setActiveLanguage] = useState('FR');

  const availableLanguages = ['FR', 'EN'];

  const handleClick = (languageSelected) => {
    setActiveLanguage(languageSelected);
  };

  return (
    <ButtonGroup isAttached size="sm" mr="4">
      {availableLanguages.map((language) => (
        <Button
          key={language}
          variant={activeLanguage === language ? 'activeLanguage' : 'outline'}
          onClick={() => handleClick(language)}
        >
          {language}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default LanguageToggle;
