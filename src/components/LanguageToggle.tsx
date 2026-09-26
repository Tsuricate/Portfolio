import { Button, ButtonGroup } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const languages = [
  { key: 'en', label: 'EN' },
  { key: 'fr', label: 'FR' },
];

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const handleClick = (languageSelected: string) => {
    i18n.changeLanguage(languageSelected);
  };

  return (
    <ButtonGroup
      gap={0}
      mr={{ base: 0, md: 4 }}
      mt={{ base: 3, md: 0 }}
      flexShrink={0}
      width="fit-content"
      alignSelf="flex-start"
      border="1px solid rgba(26, 27, 27, 0.7)"
      borderRadius={{ base: '4px', md: '14px 4px 14px 4px' }}
      overflow="hidden"
      bg="light.150"
    >
      {languages.map((language, index) => {
        const isActive = i18n.language.startsWith(language.key);

        return (
          <Button
            key={language.key}
            onClick={() => handleClick(language.key)}
            position="relative"
            minW={{ base: '52px', md: '35px' }}
            minH={{ base: '32px', md: '28px' }}
            px={{ base: 3, md: 1 }}
            fontSize={{ base: '0.78rem', md: '0.73rem' }}
            fontWeight={isActive ? '800' : '600'}
            letterSpacing="0.04em"
            color={isActive ? 'light.50' : 'black.100'}
            bg={isActive ? 'black.100' : 'light.150'}
            borderLeft={index === 1 ? '1px solid rgba(26, 27, 27, 0.7)' : undefined}
            borderRadius={{ base: 0, md: index === 0 ? '12px 0 0 2px' : '0 2px 12px 0' }}
            _after={{
              content: "''",
              position: 'absolute',
              left: '50%',
              bottom: { base: '5px', md: '2px' },
              width: isActive ? { base: '12px', md: '6px' } : '0',
              height: '1.5px',
              bg: '#C48A63',
              transform: 'translateX(-50%)',
            }}
            _hover={{
              bg: isActive ? 'black.100' : 'light.200',
            }}
          >
            {language.label}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default LanguageToggle;
