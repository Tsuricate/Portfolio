import React from 'react';
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Stack,
  Switch,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import NavLink from './NavLink';

const Links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg={useColorModeValue('#C4C1BB', '#2c2c2c')}
        boxShadow="0px 4px 22px -2px rgba(10,10,8,0.43)
        "
        px={{ base: 4, lg: 8 }}
        position="fixed"
        width="100%"
        zIndex={1}
      >
        <Flex h={16} alignItems="center" justifyContent="space-between" height="60px">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack alignItems="center">
            <HStack as="nav" spacing={8} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems="baseline" justifyContent="space-between">
            <Switch colorScheme="none" p="5" />
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default NavBar;
