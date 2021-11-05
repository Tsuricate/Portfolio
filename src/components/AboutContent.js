import React from 'react';
import {
  SimpleGrid,
  Box,
  Tabs,
  Flex,
  TabList,
  Text,
  Tab,
  TabPanel,
  TabPanels,
  VStack,
} from '@chakra-ui/react';
import SectionContainer from './SectionContainer';
import ActionButtons from './ActionButtons';
import aboutSections from '../data/aboutSections';

const AboutContent = () => (
  <SectionContainer bgColor="#F0F7F4" sectionTitle="About">
    <SimpleGrid columns={{ base: 1, xl: 2 }} height={{ xl: '100%' }} p={{ xl: 16 }}>
      <Box>Image to come</Box>

      <Flex flexDirection="column" justifyContent={{ xl: 'center' }}>
        <Tabs variant="soft-rounded" colorScheme="purple" isFitted>
          <TabList>
            {aboutSections.map((section) => (
              <Tab key={section.title}>{section.title}</Tab>
            ))}
          </TabList>

          <TabPanels>
            {aboutSections.map((section) => (
              <TabPanel key={section.title}>
                <VStack spacing={{ base: 5 }}>
                  {section.texts.map((text) => (
                    <Text key={text} lineHeight={1.7}>
                      {text}
                    </Text>
                  ))}
                </VStack>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
        <ActionButtons />
      </Flex>
    </SimpleGrid>
  </SectionContainer>
);

export default AboutContent;
