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
        boxShadow="0px 4px 22px -2px rgba(10,10,8,0.43)"
        px={{ base: 7, lg: 16 }}
        position="fixed"
        width="100%"
        zIndex={2}
      >
        <Flex alignItems="center" justifyContent="space-between" height="60px">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack alignItems="center">
            <HStack
              as="nav"
              spacing={{ md: 8, xl: 16 }}
              display={{ base: 'none', md: 'flex' }}
              textTransform="uppercase"
              fontWeight="medium"
            >
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
          <Box pb={4} display={{ md: 'none' }} textTransform="uppercase">
            <Stack as="nav" spacing={5}>
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
