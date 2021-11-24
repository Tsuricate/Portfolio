import React from 'react';
import {
  SimpleGrid,
  Tabs,
  Flex,
  TabList,
  Text,
  Tab,
  TabPanel,
  TabPanels,
  Stack,
  Image,
} from '@chakra-ui/react';
import SectionContainer from './SectionContainer';
import ActionButtons from './ActionButtons';
import aboutSections from '../data/aboutSections';

const AboutContent = () => (
  <SectionContainer background="#F0F7F4" sectionTitle="About">
    <SimpleGrid
      columns={{ base: 1, xl: 2 }}
      height={{ xl: '100%' }}
      gap={{ base: 5, md: 10, xl: 20 }}
      alignItems={{ xl: 'center' }}
    >
      <SimpleGrid
        columns={3}
        direction="row"
        justifyItems="center"
        spacing={{ base: 1, md: 3 }}
        p={{ xl: 10 }}
      >
        <Image src="/images/pano1.webp" width="100%" height="auto" objectFit="cover" />
        <Image src="/images/pano2.webp" width="100%" height="auto" objectFit="cover" />
        <Image src="/images/pano3.webp" width="100%" height="auto" objectFit="cover" />
      </SimpleGrid>

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
                <Stack direction="column" spacing={{ base: 5 }}>
                  {section.texts.map((text) => (
                    <Text key={text} lineHeight={1.7}>
                      {text}
                    </Text>
                  ))}
                </Stack>
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
