import React from 'react';
import { Stack, Button } from '@chakra-ui/react';

const ActionButtons = () => (
  <Stack direction={{ base: 'column', sm: 'row' }} spacing={{ base: 3, md: 8 }} pt={6}>
    <Button colorScheme="black" variant="outline" bg="white" p={6}>
      Download my resume
    </Button>
    <Button colorScheme="white" bg="black" variant="solid" p={6}>
      Contact me
    </Button>
  </Stack>
);

export default ActionButtons;
