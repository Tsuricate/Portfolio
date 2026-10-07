import { Box, Grid, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { projects } from '../data/projects';
import SectionContainer from './SectionContainer';
import ProjectCard from './CurrentProjectCard';
import ArchiveProjectCard from './ArchiveProjectCard';

const ProjectsContent = () => {
  const { t } = useTranslation('projects');

  const featuredProjects = projects.slice(0, 3);
  const archivedProjects = projects.slice(3);

  return (
    <SectionContainer id="projects" background="#E8DCCB" fullWidth>
      <VStack
        minH={{ lg: '100vh' }}
        align="stretch"
        justify={{ base: 'flex-start', lg: 'space-between' }}
        px={{ base: 5, sm: 6, md: 10, lg: 12, xl: 16, '2xl': 20 }}
        pt={{ base: 16, md: 20, lg: 20, xl: 24 }}
        pb={{ base: 16, md: 20, lg: 14 }}
        gap={{ base: 12, lg: 14, xl: 16 }}
      >
        <Box>
          <Grid
            templateColumns="1fr auto"
            templateRows="auto auto"
            columnGap={{ base: 3, sm: 4, md: 6, lg: 8 }}
            rowGap={{ base: 6, sm: 3, md: 2 }}
          >
            <Heading
              gridColumn="2"
              gridRow="1"
              justifySelf="end"
              fontSize={{ base: '3rem', sm: '3.5rem', md: '5rem', lg: '6rem' }}
              fontWeight="600"
              letterSpacing="0.045em"
              lineHeight="0.7"
              textTransform="uppercase"
            >
              {t('common:sectionTitle.projects')}
            </Heading>

            <HStack gridColumn="1 / -1" gridRow="2" minW={0}>
              <Heading
                flexShrink={0}
                fontSize={{ base: '1.25rem', sm: '1.4rem', md: '1.8rem', lg: '2rem' }}
                lineHeight="0.9"
                textTransform="uppercase"
              >
                {t('currentProjects')}
              </Heading>

              <Box flex="1" height="2px" bg="black.100" ml={{ base: 2, sm: 3, md: 5, lg: 6 }} />
            </HStack>

            <Text
              gridColumn="1 / -1"
              mt={{ base: 0, md: 3 }}
              ml={{ base: '0.5rem', md: '1rem', lg: '1.25rem' }}
              maxW={{ base: '240px', md: '420px', lg: '600px' }}
              color="brown.100"
              lineHeight="1.5"
            >
              {t('intro')}
            </Text>
          </Grid>

          <Grid
            mt={8}
            templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }}
            gap={{ base: 6, lg: 4 }}
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard project={project} index={index} />
            ))}
          </Grid>
        </Box>

        <Box>
          <Heading
            fontSize={{ base: '1.7rem', md: '2rem' }}
            lineHeight="0.9"
            textTransform="uppercase"
          >
            {t('archive.title')}
          </Heading>

          <Text
            mt={{ base: 2, md: 3 }}
            ml={{ base: '0.5rem', md: '1rem' }}
            maxW={{ base: '300px', md: '620px' }}
            fontSize={{ base: '0.85rem', md: '1rem' }}
            color="brown.100"
            lineHeight="1.5"
          >
            {t('archive.description')}
          </Text>

          <Grid mt={8} templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={4}>
            {archivedProjects.map((project) => (
              <ArchiveProjectCard project={project} />
            ))}
          </Grid>
        </Box>
      </VStack>
    </SectionContainer>
  );
};

export default ProjectsContent;
