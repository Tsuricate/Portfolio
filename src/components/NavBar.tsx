import { useEffect, useState } from 'react';
import { Box, Flex, HStack, IconButton } from '@chakra-ui/react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import NavLink from './NavLink';
import LanguageToggle from './LanguageToggle';

const links = [
  { id: 'home', key: 'sectionTitle.home' },
  { id: 'about', key: 'sectionTitle.about' },
  { id: 'projects', key: 'sectionTitle.projects' },
  { id: 'contact', key: 'sectionTitle.contact' },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const { t } = useTranslation();

  useEffect(() => {
    const root = document.getElementById('root');

    if (!root) return;

    let lastScrollTop = root.scrollTop;

    const handleScroll = () => {
      const currentScrollTop = root.scrollTop;
      const scrollDifference = currentScrollTop - lastScrollTop;

      if (Math.abs(scrollDifference) < 8) {
        return;
      }

      if (currentScrollTop <= 20) {
        setIsVisible(true);
      } else if (scrollDifference > 0) {
        setIsVisible(false);
        setIsOpen(false);
      } else {
        setIsVisible(true);
      }

      lastScrollTop = currentScrollTop;
    };

    root.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      root.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.5, 0.75],
        rootMargin: '-20% 0px -50% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <Flex
      position="fixed"
      top={{ base: 4, lg: 12 }}
      right={{ base: 4, lg: '5%' }}
      width={{ base: 'auto', lg: '45%' }}
      zIndex="sticky"
      opacity={isVisible ? 1 : 0}
      visibility={isVisible ? 'visible' : 'hidden'}
      transition="opacity 0.25s ease, visibility 0.25s ease"
      pointerEvents={isVisible ? 'auto' : 'none'}
    >
      <Box width="100%" px={{ base: 0, lg: { md: 8, xl: 10 } }}>
        <Flex minH="48px" align="center" justify="flex-end">
          <Box display={{ base: 'block', lg: 'none' }} position="relative">
            <IconButton
              variant="ghost"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsOpen((open) => !open)}
              color="black.100"
              fontSize="24px"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </IconButton>

            {isOpen && (
              <Box
                position="absolute"
                top="100%"
                right="0"
                mt={3}
                width="min(90vw, 400px)"
                px={7}
                py={6}
                bg="#F8F2E5"
                border="2px solid #1A1B1B"
                borderRadius="2px 5px 3px 4px"
                _before={{
                  content: "''",
                  position: 'absolute',
                  inset: '2px -1px -2px 2px',
                  border: '1px solid #1A1B1B',
                  borderRadius: '2px 5px 3px 4px',
                  zIndex: -1,
                  opacity: 0.75,
                }}
              >
                <HStack as="nav" align="stretch" flexDirection="column" gap={1}>
                  {links.map((link) => (
                    <NavLink
                      key={link.id}
                      href={`#${link.id}`}
                      active={activeSection === link.id}
                      mobile
                      onClose={() => setIsOpen(false)}
                    >
                      {t(link.key)}
                    </NavLink>
                  ))}

                  <Box width="100%" height="1px" bg="black.100" opacity={0.18} mt={5} mb={3} />

                  <LanguageToggle />
                </HStack>
              </Box>
            )}
          </Box>

          <Box display={{ base: 'none', lg: 'block' }} position="relative" height="48px">
            <Box
              position="absolute"
              inset="auto -80px 0 -120px"
              height="1px"
              bg="black.100"
              zIndex={0}
            />

            <HStack
              as="nav"
              position="relative"
              height="48px"
              gap={{ lg: 12, xl: 14 }}
              align="center"
              zIndex={1}
            >
              {links.map((link) => (
                <NavLink key={link.id} href={`#${link.id}`} active={activeSection === link.id}>
                  {t(link.key)}
                </NavLink>
              ))}

              <LanguageToggle />
            </HStack>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default NavBar;
