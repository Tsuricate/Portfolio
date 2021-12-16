import React from 'react';
import {
  Grid,
  GridItem,
  Heading,
  Text,
  Wrap,
  Box,
  Stack,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import SectionContainer from './SectionContainer';
import ActionButtons from './ActionButtons';

const HomeContent = () => (
  <SectionContainer background={useColorModeValue('#E8E8E4', '#403f3f')}>
    <Grid
      height={{ xl: '100%' }}
      templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }}
      justifyItems="center"
      alignItems="center"
      gap={{ base: 9, md: 16, lg: 9 }}
      pt={{ lg: 28, xl: 10 }}
    >
      <GridItem colSpan={1} mt={{ base: 10 }}>
        <Wrap direction="column" spacing={{ base: 5, md: 10, xl: 12 }}>
          <Stack>
            <Heading fontSize={{ base: '1.7em', md: '2.1em', xl: '3em' }}>Hi, I&apos;m Zoé</Heading>
            <Heading fontSize={{ base: '1.2em', md: '1.5em', xl: '2em' }}>
              Front-end web developper
            </Heading>
          </Stack>
          <Text fontSize={{ xl: '1.1em' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor lacus, dapibus quis
            pharetra at, molestie nec lorem. Nullam sit amet maximus lectus, in auctor risus.
            Praesent id velit ac ligula auctor accumsan.
          </Text>
          <ActionButtons />
        </Wrap>
      </GridItem>

      <GridItem colSpan={{ base: 1, xl: 2 }}>
        <Box>
          <Image
            src="/images/homeImage.webp"
            alt="Picture representing web developper"
            loading="lazy"
          />
        </Box>
      </GridItem>
    </Grid>
  </SectionContainer>
);

export default HomeContent;
