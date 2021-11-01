import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import SectionContainer from './SectionContainer';
import ActionButtons from './ActionButtons';

const HomeContent = () => (
  <SectionContainer bgColor="lightGray">
    <Flex
      display="flex"
      height="100%"
      justifyContent="center"
      alignItems="center"
      width={{ lg: '50%' }}
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
        <ActionButtons />
      </Flex>
    </Flex>
  </SectionContainer>
);

export default HomeContent;
