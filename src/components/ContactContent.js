import {
  Box,
  Button,
  Link,
  SimpleGrid,
  Stack,
  Text,
  LinkOverlay,
  LinkBox,
  Flex,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import { FaAngleDoubleUp, FaLinkedin, FaRegEnvelope, FaUserCircle } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import SectionContainer from './SectionContainer';

const ContactContent = () => (
  <SectionContainer bgColor="#F9EBE0" sectionTitle="Contact">
    <SimpleGrid columns={{ base: 1, lg: 2 }} height={{ xl: '100%' }}>
      <Stack
        p={{ md: 8 }}
        direction="column"
        spacing={{ base: 8, md: 14 }}
        height={{ xl: '100%' }}
        justify={{ xl: 'space-evenly' }}
      >
        <Stack direction="column" spacing={{ base: 4, md: 8 }}>
          <Text fontSize={{ base: '2xl', xl: '4xl' }}>Let&apos;s get in touch !</Text>
          <Text>
            Suspendisse vitae elit ante. Duis et efficitur velit, nec finibus massa. Phasellus
            facilisis facilisis ipsum non maximus. Morbi sit amet ultricies eros. Etiam volutpat
            nulla vel iaculis iaculis. Proin urna enim, hendrerit at rhoncus vitae, gravida
            elementum risus. Curabitur nec euismod lectus. Curabitur aliquet eleifend sagittis.
            Donec sit amet porttitor tortor, sit amet luctus nunc. Nam ac enim id orci lacinia
            lobortis.
          </Text>
        </Stack>
        <Stack direction="column" spacing={5} align={{ lg: 'baseline' }}>
          <Button
            as={Link}
            href="mailto:zoeamat.pro@gmail.com"
            leftIcon={<FaRegEnvelope />}
            size="lg"
          >
            Email
          </Button>
          <Button
            as={Link}
            href="https://www.linkedin.com/in/zo%C3%A9amat/"
            leftIcon={<FaLinkedin />}
            size="lg"
          >
            Linkedin
          </Button>
          <Button
            as={Link}
            href="https://welovedevs.com/app/developer/zoe-developpeuse-react"
            leftIcon={<FaUserCircle />}
            size="lg"
          >
            WeLoveDevs
          </Button>
        </Stack>
      </Stack>

      <Box>
        <Flex
          height={{ xl: '100%' }}
          justify={{ xl: 'space-between' }}
          alignItems="center"
          direction="column"
          p={10}
        >
          <Box boxSize={{ base: '2xs', lg: 'md', xl: 'xl' }}>
            <Image
              src="https://cdn.pixabay.com/photo/2020/05/19/13/54/cartoon-5190961_960_720.jpg"
              alt="Contact"
              borderRadius="full"
            />
          </Box>
          <Box alignSelf={{ lg: 'flex-end' }}>
            <LinkBox>
              <Stack
                direction="column"
                align="center"
                p={5}
                borderRadius={5}
                mt={10}
                bg="whiteAlpha.700"
              >
                <FaAngleDoubleUp />
                <LinkOverlay as={HashLink} to="#" smooth>
                  Back to top
                </LinkOverlay>
              </Stack>
            </LinkBox>
          </Box>
        </Flex>
      </Box>
    </SimpleGrid>
  </SectionContainer>
);

export default ContactContent;
