import { Button, Link, Stack, Text, Container, Heading, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FaLinkedin, FaRegEnvelope, FaUserCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import BackToTopButton from './BackToTopButton';
import SectionContainer from './SectionContainer';
import { fadeDown, fadeRight, fadeUp } from '../utils/animations';

const ContactContent = () => {
  const responsiveBgColor = useColorModeValue('#E8E8E4', '#403f3f');
  const { t } = useTranslation();

  return (
    <SectionContainer
      background={`url("/images/leftHand.webp") no-repeat bottom left, url("/images/rightHand.webp") no-repeat top right, ${responsiveBgColor}`}
      sectionTitle={t('sectionTitle.contact')}
    >
      <Container maxW={{ md: 'container.sm', xl: 'container.lg' }} height={{ xl: '90%' }}>
        <Stack
          p={{ md: 8 }}
          spacing={{ base: 8, md: 14, xl: 20 }}
          align="center"
          height={{ xl: '100%' }}
          justify={{ xl: 'center' }}
        >
          <Stack spacing={{ base: 5, md: 8, xl: 12 }}>
            <Heading
              fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }}
              fontWeight="bold"
              textAlign="center"
              {...fadeDown}
            >
              {t('contact.subtitle')}
            </Heading>
            <Text
              fontSize={{ md: 'lg', xl: '2xl' }}
              dangerouslySetInnerHTML={{
                __html: t('contact.text'),
              }}
              {...fadeRight}
            />
          </Stack>
          <Container pb={{ base: 5, md: 0 }}>
            <Stack
              direction={{ base: 'column', lg: 'row' }}
              spacing={{ base: 4, xl: 10 }}
              justify="center"
              {...fadeUp}
            >
              <Button
                as={Link}
                href="mailto:zoeamat.pro@gmail.com"
                leftIcon={<FaRegEnvelope />}
                variant="variantContrast"
                px={10}
              >
                Email
              </Button>
              <Button
                as={Link}
                href="https://www.linkedin.com/in/zo%C3%A9amat/"
                leftIcon={<FaLinkedin />}
                variant="outline"
                colorScheme="blue"
              >
                Linkedin
              </Button>
              <Button
                as={Link}
                href="https://zoe-amat.welovedevs.com"
                leftIcon={<FaUserCircle />}
                variant="outline"
                colorScheme="purple"
              >
                WeLoveDevs
              </Button>
            </Stack>
          </Container>
        </Stack>
      </Container>
      <BackToTopButton />
    </SectionContainer>
  );
};
export default ContactContent;
