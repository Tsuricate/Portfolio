import {
  SimpleGrid,
  Tabs,
  Flex,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import SectionContainer from './SectionContainer';
import ActionButtons from './ActionButtons';
import aboutSections from '../data/aboutSections';
import customScrollbar from '../utils/customScrollbar';
import { fade } from '../utils/animations';

const AboutContent = () => {
  const { t } = useTranslation();

  const aboutImages = ['/images/pano1.webp', '/images/pano2.webp', '/images/pano3.webp'];

  return (
    <SectionContainer
      background='#505050'
      sectionTitle={t('sectionTitle.about')}
    >
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        gap={{ base: 5, md: 10, xl: 20 }}
        height={{ xl: '100%' }}
        alignItems={{ xl: 'center' }}
        justifyItems={{ lg: 'center' }}
      >
        <SimpleGrid
          columns={3}
          gap={{ base: 1.5, md: 3 }}
          width={{ lg: '75%', xl: '100%' }}
        >
          {aboutImages.map((image) => (
            <Image
              key={image}
              src={image}
              alt="A third of the image representing woman in Japan"
              width="100%"
              height="auto"
              objectFit="cover"
              loading="lazy"
              filter="saturate(75%)"
              {...fade}
            />
          ))}
        </SimpleGrid>

        <Flex
          flexDirection="column"
          justifyContent={{ xl: 'center' }}
          height={{ xl: '100%' }}
        >
          <Tabs.Root
            defaultValue={aboutSections[0]?.title}
            fitted
            lazyMount
            unmountOnExit
          >
            <Tabs.List paddingBottom={{ md: 5 }}>
              {aboutSections.map((section) => (
                <Tabs.Trigger
                  key={section.title}
                  value={section.title}
                  color={{ base: '#6B7676', _dark: '#C1C7C7' }}
                  borderRadius="10px"
                  css={{
                    WebkitTapHighlightColor: 'transparent',
                  }}
                  _selected={{
                    bg: { base: '#bfd0dd', _dark: '#95928aa6' },
                    boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px 4px',
                    color: { base: '#264653', _dark: '#F5F7FA' },
                  }}
                >
                  <Text fontSize={{ base: 'sm', md: 'lg' }}>
                    {t(section.title)}
                  </Text>
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            <Tabs.ContentGroup
              overflowY="auto"
              height={{ xl: '450px' }}
              css={customScrollbar}
            >
              {aboutSections.map((section) => (
                <Tabs.Content key={section.title} value={section.title}>
                  <Stack direction="column" gap={{ base: 5 }}>
                    {section.texts.map((text) => (
                      <Text
                        maxW={{ xl: '82ch' }}
                        key={text}
                        lineHeight={1.7}
                        dangerouslySetInnerHTML={{
                          __html: t(text),
                        }}
                        css={{
                          '& a': {
                            textDecoration: 'underline',
                          },
                          '& ul': {
                            paddingLeft: '40px',
                          },
                        }}
                      />
                    ))}
                  </Stack>
                </Tabs.Content>
              ))}
            </Tabs.ContentGroup>
          </Tabs.Root>

          <ActionButtons />
        </Flex>
      </SimpleGrid>
    </SectionContainer>
  );
};

export default AboutContent;