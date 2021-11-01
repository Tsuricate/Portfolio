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
} from '@chakra-ui/react';
import SectionContainer from './SectionContainer';
import ActionButtons from './ActionButtons';

const AboutContent = () => (
  <SectionContainer bgColor="#F0F7F4" sectionTitle="About">
    <SimpleGrid columns={{ base: 1, lg: 2 }} className="Grid on top" height="100%" p={16}>
      <Box>Image to come</Box>

      <Flex flexDirection="column" justifyContent="center" className="Container Flex">
        <Tabs variant="soft-rounded" colorScheme="purple" height="60%" isFitted>
          <TabList>
            <Tab>Background</Tab>
            <Tab>Values</Tab>
            <Tab>Hobbies</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat metus at
                viverra interdum. Cras libero est, aliquam quis aliquam nec, vehicula at ante. Fusce
                gravida posuere nisl sodales feugiat. Phasellus mollis tortor a ligula egestas
                pulvinar. Aliquam vehicula velit non sapien tempor, ac varius leo commodo. Etiam
                convallis nunc at felis elementum pretium. Fusce et tristique arcu, non auctor
                massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam at
                nisl sit amet pulvinar. Suspendisse id sem non augue porta congue id eget quam.
              </Text>
              <Text>
                Quisque dignissim, dolor elementum efficitur elementum, libero est aliquam mauris,
                sed sodales est arcu quis turpis. Ut urna lorem, rhoncus vel erat sit amet, aliquam
                viverra orci. Vivamus lacus urna, egestas vel auctor a, malesuada in libero. Proin
                aliquet posuere consectetur. Sed imperdiet nunc lacus, sit amet fringilla risus
                lobortis vitae. Maecenas condimentum posuere mauris ut fermentum. Etiam tempor eros
                neque, et suscipit lorem.
              </Text>
            </TabPanel>
            <TabPanel>
              <Text>
                Quisque dignissim, dolor elementum efficitur elementum, libero est aliquam mauris,
                sed sodales est arcu quis turpis. Ut urna lorem, rhoncus vel erat sit amet, aliquam
                viverra orci. Vivamus lacus urna, egestas vel auctor a, malesuada in libero. Proin
                aliquet posuere consectetur. Sed imperdiet nunc lacus, sit amet fringilla risus
                lobortis vitae. Maecenas condimentum posuere mauris ut fermentum. Etiam tempor eros
                neque, et suscipit lorem.
              </Text>
            </TabPanel>
            <TabPanel>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat metus at
                viverra interdum. Cras libero est, aliquam quis aliquam nec, vehicula at ante. Fusce
                gravida posuere nisl sodales feugiat. Phasellus mollis tortor a ligula egestas
                pulvinar. Aliquam vehicula velit non sapien tempor, ac varius leo commodo. Etiam
                convallis nunc at felis elementum pretium. Fusce et tristique arcu, non auctor
                massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam at
                nisl sit amet pulvinar. Suspendisse id sem non augue porta congue id eget quam.
              </Text>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <ActionButtons />
      </Flex>
    </SimpleGrid>
  </SectionContainer>
);

export default AboutContent;
