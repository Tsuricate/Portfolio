import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Stack,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import NavLink from './NavLink';
import LanguageToggle from './LanguageToggle';

const links = [
  'sectionTitle.home',
  'sectionTitle.about',
  'sectionTitle.skills',
  'sectionTitle.projects',
  'sectionTitle.contact',
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setIsOpen((open) => !open);

  return (
    <Box
      bg="#C4C1BB"
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
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          onClick={toggleMenu}
        >
        </IconButton>

        <HStack alignItems="center">
          <HStack
            as="nav"
            gap={{ md: 8, xl: 16 }}
            display={{ base: 'none', md: 'flex' }}
            textTransform="uppercase"
            letterSpacing="1.2px"
          >
            {links.map((link) => (
              <NavLink key={link}>{t(link)}</NavLink>
            ))}
          </HStack>
        </HStack>

        <Flex alignItems="center" justifyContent="space-between">
          <LanguageToggle />

          <Button
            size="sm"
            border="1px solid #E2E8F0"
            bg="whiteAlpha.700"
          >
          </Button>
        </Flex>
      </Flex>

      {isOpen && (
        <Box py={4} display={{ md: 'none' }} textTransform="uppercase">
          <Stack as="nav" gap={5}>
            {links.map((link) => (
              <NavLink key={link} onClose={() => setIsOpen(false)}>
                {t(link)}
              </NavLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default NavBar;