import React from 'react';
import { Box, Text, Link, useColorModeValue } from '@chakra-ui/react';

const Footer = () => (
  <Box
    width="100%"
    bg={useColorModeValue('#C4C1BB', '#2c2c2c')}
    py={{ base: 2 }}
    textAlign="center"
  >
    <Text fontSize="sm">
      Illustrations by <Link href="https://icons8.com/">Icons 8 </Link> and{' '}
      <Link href="https://pixabay.com/fr/users/cdd20-1193381/">CDD20</Link> on{' '}
      <Link href="https://pixabay.com/fr/">Pixabay</Link>
    </Text>
  </Box>
);

export default Footer;
