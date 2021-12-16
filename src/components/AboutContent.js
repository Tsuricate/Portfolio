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
import customScrollbar from '../utils/customScrollbar';

const AboutContent = () => (
  <SectionContainer background={useColorModeValue('#DAD7CD', '#505050')} sectionTitle="About">
    <SimpleGrid
      columns={{ base: 1, xl: 2 }}
      gap={{ base: 5, md: 10, xl: 20 }}
      height={{ xl: '100%' }}
      alignItems={{ xl: 'center' }}
      justifyItems={{ lg: 'center' }}
    >
      <SimpleGrid columns={3} spacing={{ base: 1.5, md: 3 }} width={{ lg: '75%', xl: '100%' }}>
        <Image
          src="/images/pano1.webp"
          alt="Image reprensenting woman in Japan part 1"
          width="100%"
          height="auto"
          objectFit="cover"
          loading="lazy"
        />
        <Image
          src="/images/pano2.webp"
          alt="Image reprensenting woman in Japan part 2"
          width="100%"
          height="auto"
          objectFit="cover"
          loading="lazy"
        />
        <Image
          src="/images/pano3.webp"
          alt="Image reprensenting woman in Japan part 3"
          width="100%"
          height="auto"
          objectFit="cover"
          loading="lazy"
        />
      </SimpleGrid>

      <Flex flexDirection="column" justifyContent={{ xl: 'center' }} height={{ xl: '100%' }}>
        <Tabs variant="solid-rounded" isFitted isLazy lazyBehavior="unmount">
          <TabList pb={{ md: 5 }}>
            {aboutSections.map((section) => (
              <Tab
                key={section.title}
                _selected={{
                  bg: useColorModeValue('#bfd0dd', '#95928aa6'),
                  boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px 4px;',
                  color: useColorModeValue('#264653', '#F5F7FA'),
                }}
                color={useColorModeValue('#6B7676', '#C1C7C7')}
                sx={{ WebkitTapHighlightColor: 'transparent' }}
                borderRadius="10px"
              >
                <Text fontSize={{ base: 'sm', md: 'lg' }}>{section.title}</Text>
              </Tab>
            ))}
          </TabList>

          <TabPanels overflowY="auto" height={{ xl: '450px' }} sx={customScrollbar}>
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
