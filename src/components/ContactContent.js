import { Button, Link, Stack, Text, Container } from '@chakra-ui/react';
import React from 'react';
import { FaLinkedin, FaRegEnvelope, FaUserCircle } from 'react-icons/fa';
import SectionContainer from './SectionContainer';

const ContactContent = () => (
  <SectionContainer
    background={
      'url("/images/leftHand.webp") no-repeat bottom left, url("/images/rightHand.webp") no-repeat top right #F9EBE0'
    }
    sectionTitle="Contact"
  >
    <Container
      maxW={{ base: 'container.2xs', xl: 'container.lg' }}
      centerContent
      align="center"
      height={{ xl: '100%' }}
    >
      <Stack
        p={{ md: 8 }}
        direction="column"
        spacing={{ base: 8, md: 14 }}
        height={{ xl: '100%' }}
        justify={{ xl: 'space-evenly' }}
        align={{ xl: 'center' }}
      >
        <Stack direction="column" spacing={{ base: 4, md: 8 }}>
          <Text fontSize={{ base: '2xl', xl: '4xl' }}>Let&apos;s get in touch !</Text>
          <Text>
            Suspendisse vitae elit ante. Duis et efficitur velit, nec finibus massa. Phasellus
            facilisis facilisis ipsum non maximus. Morbi sit amet ultricies eros. Etiam volutpat
            nulla vel iaculis iaculis. Proin urna enim, hendrerit at rhoncus vitae, gravida
            elementum risus. Curabitur nec euismod lectus. Curabitur aliquet eleifend sagittis.
            Donec sit amet porttitor tortor, sit amet luctus nunc. Nam ac enim id orci lacinia
            lobortis.
          </Text>
        </Stack>
        <Stack direction={{ base: 'column', xl: 'row' }} spacing={5} align={{ lg: 'baseline' }}>
          <Button
            as={Link}
            href="mailto:zoeamat.pro@gmail.com"
            leftIcon={<FaRegEnvelope />}
            size="lg"
          >
            Email
          </Button>
          <Button
            as={Link}
            href="https://www.linkedin.com/in/zo%C3%A9amat/"
            leftIcon={<FaLinkedin />}
            size="lg"
          >
            Linkedin
          </Button>
          <Button
            as={Link}
            href="https://welovedevs.com/app/developer/zoe-developpeuse-react"
            leftIcon={<FaUserCircle />}
            size="lg"
          >
            WeLoveDevs
          </Button>
        </Stack>
      </Stack>
    </Container>
  </SectionContainer>
);

export default ContactContent;
