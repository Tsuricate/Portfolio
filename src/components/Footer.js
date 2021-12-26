import React from 'react';
import { Box, Text, Link, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box
      width="100%"
      bg={useColorModeValue('#C4C1BB', '#2c2c2c')}
      py={{ base: 2 }}
      textAlign="center"
    >
      <Text fontSize="sm">
        Illustrations {t('footer.by')} <Link href="https://icons8.com/">Icons 8</Link>{' '}
        {t('footer.and')} <Link href="https://pixabay.com/fr/users/cdd20-1193381/">CDD20</Link>{' '}
        {t('footer.on')} <Link href="https://pixabay.com/fr/">Pixabay</Link>
      </Text>
    </Box>
  );
};

export default Footer;
