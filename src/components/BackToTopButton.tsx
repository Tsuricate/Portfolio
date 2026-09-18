import React from 'react';
import { Flex, LinkBox, Stack, LinkOverlay, useColorModeValue } from '@chakra-ui/react';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import { FaAngleDoubleUp } from 'react-icons/fa';

const BackToTopButton = () => {
  const { t } = useTranslation();
  return (
    <Flex
      justifyContent={{ base: 'center', md: 'flex-end' }}
      mx={{ base: 8 }}
      my={{ base: 5, md: 0 }}
    >
      <LinkBox width={{ base: '100%', md: 'inherit' }}>
        <Stack
          align="center"
          p={{ base: 2, md: 4, xl: 5 }}
          borderRadius={5}
          bg={useColorModeValue('whiteAlpha.500', 'blackAlpha.500')}
        >
          <FaAngleDoubleUp color="#738C94" />
          <LinkOverlay as={HashLink} to="#" smooth fontSize="smaller">
            {t('buttons.backToTop')}
          </LinkOverlay>
        </Stack>
      </LinkBox>
    </Flex>
  );
};

export default BackToTopButton;
