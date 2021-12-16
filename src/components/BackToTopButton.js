import React from 'react';
import { Flex, LinkBox, Stack, LinkOverlay } from '@chakra-ui/react';
import { HashLink } from 'react-router-hash-link';
import { FaAngleDoubleUp } from 'react-icons/fa';

const BackToTopButton = () => (
  <Flex
    justifyContent={{ base: 'center', md: 'flex-end' }}
    mx={{ base: 8 }}
    my={{ base: 5, md: 0 }}
  >
    <LinkBox width={{ base: '100%', md: 'inherit' }}>
      <Stack align="center" p={{ base: 2, md: 4, xl: 5 }} borderRadius={5} bg="whiteAlpha.700">
        <FaAngleDoubleUp />
        <LinkOverlay as={HashLink} to="#" smooth>
          Back to top
        </LinkOverlay>
      </Stack>
    </LinkBox>
  </Flex>
);

export default BackToTopButton;
