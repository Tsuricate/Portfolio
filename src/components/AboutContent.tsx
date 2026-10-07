import { Box, Heading, Stack, Text, Flex, Image } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import SectionContainer from './SectionContainer';
import { skillGroups } from '../data/skills';
import SkillsContent from './SkillsContent';

const AboutContent = () => {
  const { t } = useTranslation('about');

  return (
    <SectionContainer
      id="about"
      background="linear-gradient(to bottom, #F1E5D2 85%, #E8DCCB 100%)"
      fullWidth
      sectionDivider
    >
      <Stack
        minH={{ lg: '100vh' }}
        px={{ base: 6, md: 10, xl: 16 }}
        pt={{ base: 24, md: 20, lg: 14 }}
        pb={{ base: 10, lg: 16 }}
        gap={{ base: 14, lg: 20 }}
        justify={{ base: 'flex-start', lg: 'center' }}
      >
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          gap={{ base: 12, lg: 8, xl: 16 }}
        >
          <Box
            flex={{ base: 'none', lg: '1 1 58%', xl: '1 1 48%' }}
            minW={0}
            w={{ base: '100%', lg: 'auto' }}
          >
            <Text
              fontSize="sm"
              fontWeight="800"
              letterSpacing="0.15em"
              textTransform="uppercase"
              color="orange.100"
            >
              {t('intro.eyebrow')}
            </Text>

            <Heading
              mt={4}
              fontSize={{ base: '3.5rem', md: '5rem', lg: '6rem' }}
              lineHeight="0.8"
              textTransform="uppercase"
            >
              {t('intro.title.line1')}
              <br />
              {t('intro.title.line2')}
            </Heading>

            <Text mt={8} maxW="600px" fontSize={{ base: '1rem', md: '1.1rem' }} lineHeight="1.75">
              {t('intro.description')}
            </Text>

            <Text mt={5} maxW="600px" fontSize={{ base: '1rem', md: '1.05rem' }} lineHeight="1.75">
              {t('intro.approach')}
            </Text>
          </Box>

          <Flex
            flex={{ base: 'none', lg: '1 1 42%', xl: '1 1 52%' }}
            minW={0}
            w="100%"
            justify="center"
            align="center"
            position="relative"
          >
            <Box
              position="relative"
              width="100%"
              maxW={{ base: '340px', md: '390px', lg: '330px', xl: '480px' }}
              height={{ base: '260px', md: '310px', lg: '290px', xl: '350px' }}
            >
              <Image
                src="/images/aboutImage.png"
                alt=""
                width="100%"
                height="100%"
                objectFit="contain"
                display="block"
              />

              <Box
                position="absolute"
                bottom="5%"
                left="0"
                px={4}
                py={3}
                bg="black.100"
                color="#EDDFC8"
                transform="rotate(-2deg)"
                zIndex={2}
              >
                <Text
                  fontSize="xs"
                  fontWeight="800"
                  letterSpacing="0.12em"
                  textTransform="uppercase"
                >
                  {t('intro.illustrationLabel')}
                </Text>
              </Box>
            </Box>
          </Flex>
        </Flex>

        <SkillsContent skillGroups={skillGroups} />
      </Stack>
    </SectionContainer>
  );
};

export default AboutContent;
