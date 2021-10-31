import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import SectionContainer from './SectionContainer';

const HomeContent = () => (
  <SectionContainer>
    <Flex
      display="flex"
      height="100%"
      alignItems="center"
      width={{ lg: '50%' }}
      justifyContent="center"
      px={{ base: '7', lg: '16' }}
    >
      <Flex flexDirection="column">
        <Text fontSize="6xl">Hi, I&apos;m Zoé.</Text>
        <Heading>Front-end web developper</Heading>
        <Text mt={5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor lacus, dapibus quis
          pharetra at, molestie nec lorem. Nullam sit amet maximus lectus, in auctor risus. Praesent
          id velit ac ligula auctor accumsan. Phasellus consectetur enim dignissim lobortis
          ultrices.
        </Text>
      </Flex>
    </Flex>
  </SectionContainer>
);

export default HomeContent;
