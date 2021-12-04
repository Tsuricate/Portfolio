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
  useColorModeValue,
} from '@chakra-ui/react';
import SectionContainer from './SectionContainer';
import ActionButtons from './ActionButtons';
import aboutSections from '../data/aboutSections';

const AboutContent = () => (
  <SectionContainer background={useColorModeValue('#DAD7CD', '#505050')} sectionTitle="About">
    <SimpleGrid
      columns={{ base: 1, xl: 2 }}
      gap={{ base: 5, md: 10, xl: 20 }}
      height={{ xl: '100%' }}
      alignItems={{ xl: 'center' }}
    >
      <SimpleGrid
        columns={3}
        justifyItems="center"
        spacing={{ base: 1.5, md: 3 }}
        p={{ lg: 5, xl: 8 }}
      >
        <Image src="/images/pano1.webp" width="100%" height="auto" objectFit="cover" />
        <Image src="/images/pano2.webp" width="100%" height="auto" objectFit="cover" />
        <Image src="/images/pano3.webp" width="100%" height="auto" objectFit="cover" />
      </SimpleGrid>

      <Flex flexDirection="column" justifyContent={{ xl: 'center' }}>
        <Tabs variant="soft-rounded" isFitted isLazy lazyBehavior="unmount">
          <TabList pb={{ md: 5 }}>
            {aboutSections.map((section) => (
              <Tab
                key={section.title}
                _selected={{
                  bg: '#95928aa6',
                  boxShadow: 'none',
                }}
                color={useColorModeValue('black', 'white')}
              >
                <Text fontWeight="semibold" fontSize={{ base: 'sm', md: 'lg' }}>
                  {section.title}
                </Text>
              </Tab>
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
