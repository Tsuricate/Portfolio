import React from 'react';
import { Text, SimpleGrid, Stack, Wrap } from '@chakra-ui/react';
import SectionContainer from './SectionContainer';
import SkillTag from './SkillTag';

const ContactContent = () => (
  <SectionContainer bgColor="#F9EBE0" sectionTitle="Contact">
    <SimpleGrid columns={{ base: 1, lg: 2 }} height={{ xl: '100%' }}>
      <Stack
        p={{ md: 8 }}
        direction="column"
        spacing={{ base: 8, md: 14 }}
        height={{ xl: '100%' }}
        justify={{ xl: 'space-evenly' }}
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
        <Wrap direction="column" spacing={{ base: 5 }}>
          <SkillTag name="Email" icon="SiGmail" />
          <SkillTag name="Linkedin" icon="SiLinkedin" />
          <SkillTag name=" 💻 WeLoveDevs" />
          <SkillTag name=" 💻 WelcomeToTheJungle" />
        </Wrap>
      </Stack>
    </SimpleGrid>
  </SectionContainer>
);

export default ContactContent;
