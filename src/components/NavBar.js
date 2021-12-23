import React from 'react';
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';
import NavLink from './NavLink';
import LanguageToggle from './LanguageToggle';

const Links = ['navbar.home', 'navbar.about', 'navbar.skills', 'navbar.projects', 'navbar.contact'];

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation();

  return (
    <>
      <Box
        bg={useColorModeValue('#C4C1BB', '#2c2c2c')}
        boxShadow="0px 4px 22px -2px rgba(10,10,8,0.43)"
        px={{ base: 5, md: 8, lg: 16 }}
        position="fixed"
        width="100%"
        zIndex={2}
      >
        <Flex alignItems="center" justifyContent="space-between" height="60px">
          <IconButton
            display={{ md: 'none' }}
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            onClick={isOpen ? onClose : onOpen}
            bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.300')}
          />
          <HStack alignItems="center">
            <HStack
              as="nav"
              spacing={{ md: 8, xl: 16 }}
              display={{ base: 'none', md: 'flex' }}
              textTransform="uppercase"
              letterSpacing="1.2px"
            >
              {Links.map((link) => (
                <NavLink key={t(link)}>{t(link)}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems="center" justifyContent="space-between">
            <LanguageToggle />
            <Button
              onClick={toggleColorMode}
              size="sm"
              border={`1px solid ${useColorModeValue('#E2E8F0', 'rgba(255, 255, 255, 0.16)')}`}
              bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.300')}
            >
              {colorMode === 'light' ? <MoonIcon color="#486693" /> : <SunIcon color="#F9E9C2" />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box py={4} display={{ md: 'none' }} textTransform="uppercase">
            <Stack as="nav" spacing={5}>
              {Links.map((link) => (
                <NavLink key={link} onClose={onClose}>
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default NavBar;
