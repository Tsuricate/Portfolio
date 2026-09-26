import { Box, Heading, Stack, Text, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import SectionContainer from './SectionContainer';
import ActionButtons from './ActionButtons';

const HomeContent = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer background="light.100" id="home">
      <Flex minH="100vh" pt={{ base: '130px', lg: 0 }} direction={{ base: 'column', lg: 'row' }}>
        <Box
          order={{ base: 2, lg: 1 }}
          flex={{ base: 'none', lg: '0 0 50%' }}
          w={{ base: '100%', lg: 'auto' }}
          h={{ base: 'min(65vh, 650px)', lg: '100vh' }}
          minH={{ base: '420px', lg: '100vh' }}
          backgroundImage="url('/images/homeImage.png')"
          backgroundRepeat="no-repeat"
          backgroundSize={{ base: 'auto 100%', lg: 'contain' }}
          backgroundPosition={{ base: 'left center', lg: 'center' }}
          flexShrink={0}
        />

        <Box
          order={{ base: 1, lg: 2 }}
          flex={{ base: 'none', lg: '0 0 45%' }}
          display="flex"
          alignItems="center"
          w={{ base: '100%', lg: 'auto' }}
        >
          <Stack
            gap={{ base: 8, lg: 10 }}
            w="100%"
            ml="auto"
            px={{ base: 6, lg: 8, xl: 10 }}
            pb={{ base: 10, lg: 0 }}
            align={{ base: 'flex-start', lg: 'flex-end' }}
            textAlign={{ base: 'left', lg: 'right' }}
          >
            <Box>
              <Heading fontSize={{ base: '4em', lg: '5.2em', xl: '6.5em' }} lineHeight="0.8">
                {t('home.salutation')}
              </Heading>

              <Box mt={{ base: 7, lg: 9 }} ml={{ base: 0, lg: '12%' }}>
                <Heading
                  fontSize={{ base: '1.45em', lg: '1.8em', xl: '2.1em' }}
                  lineHeight="0.95"
                  textTransform="uppercase"
                  letterSpacing="0.03em"
                >
                  {t('home.role')}
                </Heading>

                <Box
                  mt={3}
                  ml={{ base: 0, lg: 'auto' }}
                  w={{ base: '45px', lg: '70px' }}
                  h="4px"
                  bg="orange.100"
                />
              </Box>
            </Box>

            <Text
              maxW={{ base: '600px', lg: '500px' }}
              fontSize={{ base: '1em', lg: '1.05em', xl: '1.15em' }}
              lineHeight="1.65"
            >
              {t('home.presentation')}
            </Text>

            <ActionButtons />
          </Stack>
        </Box>
      </Flex>
    </SectionContainer>
  );
};

export default HomeContent;
