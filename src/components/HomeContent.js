import React from 'react';
import { Flex, Heading, Text, Wrap, Box } from '@chakra-ui/react';
import SectionContainer from './SectionContainer';
import ActionButtons from './ActionButtons';

const HomeContent = () => (
  <SectionContainer bgColor="lightGray">
    <Flex
      height={{ base: '100%' }}
      width={{ lg: '50%' }}
      justifyContent={{ xl: 'center' }}
      alignItems={{ xl: 'center' }}
      py={{ base: 10, lg: 40 }}
    >
      <Wrap direction="column" spacing={{ base: 10 }}>
        <Box>
          <Text fontSize={{ base: '3xl' }}>Hi, I&apos;m Zoé.</Text>
          <Heading fontSize={{ base: '4xl' }}>Front-end web developper</Heading>
        </Box>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor lacus, dapibus quis
          pharetra at, molestie nec lorem. Nullam sit amet maximus lectus, in auctor risus. Praesent
          id velit ac ligula auctor accumsan. Phasellus consectetur enim dignissim lobortis
          ultrices.
        </Text>
        <ActionButtons />
      </Wrap>
    </Flex>
  </SectionContainer>
);

export default HomeContent;
