import React from 'react';
import { Grid, GridItem, Heading, Text, Wrap, Box, Image } from '@chakra-ui/react';
import SectionContainer from './SectionContainer';
import ActionButtons from './ActionButtons';

const HomeContent = () => (
  <SectionContainer background="#E8E8E4">
    <Grid
      height={{ xl: '100%' }}
      templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }}
      justifyItems="center"
      alignItems="center"
      gap={{ base: 9, md: 16, lg: 9 }}
      pt={{ lg: 16 }}
    >
      <GridItem colSpan={1} mt={{ base: 10 }}>
        <Wrap direction="column" spacing={{ base: 5, md: 10, xl: 12 }}>
          <Box>
            <Text fontSize={{ base: '3xl' }}>Hi, I&apos;m Zoé.</Text>
            <Heading fontSize={{ base: '4xl' }}>Front-end web developper</Heading>
          </Box>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor lacus, dapibus quis
            pharetra at, molestie nec lorem. Nullam sit amet maximus lectus, in auctor risus.
            Praesent id velit ac ligula auctor accumsan. Phasellus consectetur enim dignissim
            lobortis ultrices.
          </Text>
          <ActionButtons />
        </Wrap>
      </GridItem>

      <GridItem colSpan={{ base: 1, xl: 2 }}>
        <Box>
          <Image src="/images/homeImage.webp" />
        </Box>
      </GridItem>
    </Grid>
  </SectionContainer>
);

export default HomeContent;
