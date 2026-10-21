import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';
import SectionContainer from './SectionContainer';
import { useTranslation } from 'react-i18next';
import ContactLink from './ContactLink';

const ContactContent = () => {
  const { t } = useTranslation('contact');

  return (
    <SectionContainer id="contact" background="#F8F0E3" sectionDivider>
      <Stack
        direction={{ base: 'column', xl: 'row' }}
        justify="center"
        align="center"
        flexGrow={1}
        gap={{ base: 8, md: 0, xl: 10, '2xl': 16 }}
        width="100%"
        minWidth={0}
        pl={{ base: 6, md: 10, xl: 12, '2xl': 20 }}
        pr={{ base: 6, xl: 0 }}
        pb={{ base: 10, xl: 0 }}
      >
        <Box
          width={{ base: '100%', xl: '40%', '2xl': '42%' }}
          maxWidth={{ base: '280px', md: 'none' }}
          minWidth={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexShrink={0}
        >
          <Image
            src="/images/contactImage.png"
            alt=""
            width="100%"
            maxWidth={{ base: '280px', md: '100%' }}
            height={{ base: 'auto', md: '50dvh', xl: '85dvh' }}
            maxHeight={{ base: 'none', md: '50dvh', xl: '85dvh' }}
            objectFit="contain"
            display="block"
          />
        </Box>

        <Box
          position="relative"
          flex="1"
          minWidth={0}
          width="100%"
          maxWidth={{ base: '600px', md: '800px', xl: 'none' }}
          display="flex"
          alignItems="center"
        >
          <Text
            aria-hidden="true"
            display={{ base: 'none', '2xl': 'block' }}
            position="absolute"
            right="-10px"
            top="50%"
            transform="translateY(-50%) rotate(180deg)"
            writingMode="vertical-rl"
            textTransform="uppercase"
            fontFamily="heading"
            fontWeight="700"
            fontSize="8rem"
            lineHeight="0.8"
            letterSpacing="-0.075em"
            opacity={0.17}
            pointerEvents="none"
          >
            {t('contact')}
          </Text>

          <Stack
            position="relative"
            zIndex={1}
            width="100%"
            minWidth={0}
            maxWidth={{ xl: '600px', '2xl': '660px' }}
            gap={{ base: 6, xl: 5, '2xl': 6 }}
          >
            <Box>
              <Heading
                as="h2"
                fontFamily="heading"
                fontSize={{ base: '3rem', md: '4rem', '2xl': '5rem' }}
                fontWeight="600"
                lineHeight="0.98"
                letterSpacing="-0.055em"
              >
                {t('titleLine1')}
                <br />
                {t('titleLine2')}
              </Heading>

              <Box mt={3} width={{ base: '160px', md: '200px', xl: '190px', '2xl': '230px' }}>
                <svg viewBox="0 0 230 20" width="100%" aria-hidden="true">
                  <path
                    d="M3 13 C45 4, 76 18, 116 9 S184 4, 226 10"
                    fill="none"
                    stroke="#D08A54"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </Box>
            </Box>

            <Text fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.8" color="#39352F">
              {t('subtitle')}
            </Text>

            <Stack
              gap={{ base: 4, xl: 3, '2xl': 4 }}
              width="100%"
              minWidth={0}
              alignItems="stretch"
            >
              <ContactLink
                href="mailto:zoeamat.pro@gmail.com"
                bgColor="#D08A54"
                eyebrow={t('emailEyebrow')}
                title={t('emailTitle')}
                transform="rotate(-1deg)"
              />

              <ContactLink
                href="https://www.linkedin.com/in/zo%C3%A9amat/"
                bgColor="#ECDEC8"
                eyebrow={t('linkedinEyebrow')}
                title={t('linkedinTitle')}
                external
              />
            </Stack>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              gap={3}
              flexWrap="wrap"
              borderTop="1px solid rgba(26, 27, 27, 0.3)"
              pt={4}
              fontSize="md"
              minWidth={0}
            >
              <Text display="flex" alignItems="center" gap={2} fontWeight="600">
                <Box
                  as="span"
                  aria-hidden="true"
                  flexShrink={0}
                  width="7px"
                  height="7px"
                  borderRadius="full"
                  bg="#D08A54"
                />
                {t('location')}
              </Text>

              <Text fontStyle="italic" color="#51483D">
                {t('workMode')}
              </Text>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </SectionContainer>
  );
};

export default ContactContent;
