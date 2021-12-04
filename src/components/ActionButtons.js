import React from 'react';
import { Stack, Button, useColorModeValue } from '@chakra-ui/react';
import { HashLink } from 'react-router-hash-link';

const ActionButtons = () => (
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
      Download my resume
    </Button>
    <Button
      as={HashLink}
      to="#Contact"
      smooth
      color="white"
      bg="black"
      variant="solid"
      p={6}
      isFullWidth={{ md: true }}
    >
      Contact me
    </Button>
  </Stack>
);

export default ActionButtons;
