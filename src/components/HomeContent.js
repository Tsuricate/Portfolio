import React from 'react';
import { Grid, GridItem, Heading, Text, Wrap, Box, Image } from '@chakra-ui/react';
import SectionContainer from './SectionContainer';
import ActionButtons from './ActionButtons';
import test from '../data/test.png';

const HomeContent = () => (
  <SectionContainer bgColor="white">
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(3, 1fr)' }}
      height={{ xl: '100%' }}
      justifyContent="center"
      alignItems="baseline"
    >
      <GridItem colSpan={{ base: 1, xl: 1 }}>
        <Wrap direction="column" spacing={{ base: 10 }} mt={{ xl: 20 }}>
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
        <Image src={test} />
      </GridItem>
    </Grid>
  </SectionContainer>
);

export default HomeContent;
