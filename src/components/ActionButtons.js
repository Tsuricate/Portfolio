import React from 'react';
import { Stack, Button, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';
import { fadeUp } from '../utils/animations';

const ActionButtons = () => {
  const { i18n, t } = useTranslation();

  const downloadResume = () => {
    const resume = i18n.language === 'fr' ? 'CV_Zoe_AMAT.pdf' : 'Resume_Zoe_AMAT.pdf';
    const link = document.createElement('a');
    link.download = resume;
    link.href = resume;
    link.click();
  };
  return (
    <Stack
      direction={{ base: 'column', sm: 'row' }}
      spacing={{ base: 3, md: 8 }}
      pt={{ base: 6, md: 8 }}
      {...fadeUp}
    >
      <Button
        colorScheme="black"
        variant="outline"
        color={useColorModeValue('black', 'white')}
        bg={useColorModeValue('white')}
        p={6}
        isFullWidth={{ md: true }}
        onClick={downloadResume}
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
