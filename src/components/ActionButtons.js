import React from 'react';
import { Stack, Button, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';

const ActionButtons = () => {
  const { t } = useTranslation();
  return (
    <Stack
      direction={{ base: 'column', sm: 'row' }}
      spacing={{ base: 3, md: 8 }}
      pt={{ base: 6, md: 8 }}
    >
      <Button
        colorScheme="black"
        variant="outline"
        color={useColorModeValue('black', 'white')}
        bg={useColorModeValue('white')}
        p={6}
        isFullWidth={{ md: true }}
      >
        {t('buttons.resume')}
      </Button>
      <Button
        as={HashLink}
        to="#Contact"
        smooth
        variant="variantContrast"
        p={6}
        isFullWidth={{ md: true }}
      >
        {t('buttons.contact')}
      </Button>
    </Stack>
  );
};

export default ActionButtons;
