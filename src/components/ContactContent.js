import React from 'react';
import { Flex, Text, SimpleGrid, Stack, Box } from '@chakra-ui/react';
import SectionContainer from './SectionContainer';
import SkillTag from './SkillTag';

const ContactContent = () => (
  <SectionContainer bgColor="#F9EBE0" sectionTitle="Contact">
    <SimpleGrid columns={{ base: 1, lg: 2 }} height="100%">
      <Flex p={8} direction="column" justifyContent="space-evenly">
        <Stack direction="column" spacing={{ base: 2, lg: 5 }}>
          <Text fontSize="2xl">Let&apos;s get in touch !</Text>
          <Text>
            Suspendisse vitae elit ante. Duis et efficitur velit, nec finibus massa. Phasellus
            facilisis facilisis ipsum non maximus. Morbi sit amet ultricies eros. Etiam volutpat
            nulla vel iaculis iaculis. Proin urna enim, hendrerit at rhoncus vitae, gravida
            elementum risus. Curabitur nec euismod lectus. Curabitur aliquet eleifend sagittis.
            Donec sit amet porttitor tortor, sit amet luctus nunc. Nam ac enim id orci lacinia
            lobortis.
          </Text>
        </Stack>
        <Stack direction="column" spacing={8}>
          <Box>
            <SkillTag name="Email" icon="SiGmail" />
          </Box>
          <Box>
            <SkillTag name="Linkedin" icon="SiLinkedin" />
          </Box>
          <Box>
            <SkillTag name="WeLoveDevs" />
          </Box>
          <Box>
            <SkillTag name="WelcomeToTheJungle" />
          </Box>
        </Stack>
      </Flex>
    </SimpleGrid>
  </SectionContainer>
);

export default ContactContent;
