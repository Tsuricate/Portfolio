import { Button, Link, Stack, Text, Container, Heading, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FaLinkedin, FaRegEnvelope, FaUserCircle } from 'react-icons/fa';
import BackToTopButton from './BackToTopButton';
import SectionContainer from './SectionContainer';

const ContactContent = () => {
  const responsiveBgColor = useColorModeValue('#E8E8E4', '#403f3f');

  return (
    <SectionContainer
      background={`url("/images/leftHand.webp") no-repeat bottom left, url("/images/rightHand.webp") no-repeat top right, ${responsiveBgColor}`}
      sectionTitle="Contact"
    >
      <Container maxW={{ lg: 'container.md', xl: 'container.lg' }} height={{ xl: '90%' }}>
        <Stack
          p={{ md: 8 }}
          spacing={{ base: 8, md: 14, xl: 20 }}
          align="center"
          height={{ xl: '100%' }}
          justify={{ xl: 'center' }}
        >
          <Stack spacing={{ base: 5, md: 8, xl: 12 }} textAlign="center">
            <Heading fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }} fontWeight="bold">
              Let&apos;s get in touch !
            </Heading>
            <Text fontSize={{ md: 'lg', xl: '2xl' }}>
              Suspendisse vitae elit ante. Duis et efficitur velit, nec finibus massa. Phasellus
              facilisis facilisis ipsum non maximus. Morbi sit amet ultricies eros. Etiam volutpat
              nulla vel iaculis iaculis. Proin urna enim, hendrerit at rhoncus vitae, gravida
              elementum risus. Curabitur nec euismod lectus. Curabitur aliquet eleifend sagittis.
              Donec sit amet porttitor tortor, sit amet luctus nunc. Nam ac enim id orci lacinia
              lobortis.
            </Text>
          </Stack>
          <Container pb={{ base: 5, md: 0 }}>
            <Stack
              direction={{ base: 'column', lg: 'row' }}
              spacing={{ base: 4, xl: 10 }}
              justify="center"
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
                href="https://welovedevs.com/app/developer/zoe-developpeuse-react"
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
