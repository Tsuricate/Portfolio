import type { Project } from '../data/projects';
import { Box, Grid, Heading, HStack, Image, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import ProjectActionButton from './ProjectActionButton';

interface ProjectCardProps {
  project: Project;
}

const ArchiveProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation('projects');
  return (
    <Box
      key={project.title}
      bg="light.100"
      borderLeft="2px solid #AA806D"
      px={{ base: 3, md: 5 }}
      py={5}
    >
      <Grid
        templateColumns={{
          base: '90px minmax(0, 1fr)',
          sm: '22% minmax(0, 1fr)',
        }}
        columnGap={{ base: 3, md: 5 }}
        rowGap={{ base: 3, md: 0 }}
      >
        <Box alignSelf="start" p="5px" bg="light.200">
          <Box overflow="hidden" bg="#C8B9A7">
            <Image
              src={project.image}
              alt=""
              width="100%"
              height="100%"
              objectFit="cover"
              filter="grayscale(30%) saturate(0.4)"
              opacity={0.82}
            />
          </Box>
        </Box>

        <VStack align="stretch" minW={0}>
          <HStack align="flex-start" justify="space-between" gap={2}>
            <VStack align="flex-start" gap={0}>
              <Heading fontSize={{ base: '1.05rem', md: '1.45rem' }} textTransform="uppercase">
                {t(`${project.translationKey}.name`)}
              </Heading>

              <Box width="48px" height="2px" bg="orange.200" mt={{ base: 2.5, md: 3 }} />
            </VStack>

            {project.githubUrl && <ProjectActionButton url={project.githubUrl} text=" GitHub" />}
          </HStack>

          <Text
            mt={{ base: 2.5, md: 3 }}
            fontSize={{ base: '0.78rem', md: 'sm' }}
            maxW={{ base: '100%', sm: '75%', lg: '68%' }}
          >
            {t(`${project.translationKey}.description`)}
          </Text>

          <Wrap mt={{ base: 3, md: 4 }} gap={{ base: 1.5, md: 2 }}>
            {project.specs?.map((spec) => (
              <WrapItem key={spec.name}>
                <HStack gap={1.5} px={2} py={1.5} bg="beige.200">
                  <spec.icon size="14" />

                  <Text fontSize="0.78rem" fontWeight="800" whiteSpace="nowrap">
                    {spec.name}
                  </Text>
                </HStack>
              </WrapItem>
            ))}
          </Wrap>

          {project.url && (
            <ProjectActionButton url={project.url} text={t('common:buttons.website')} />
          )}
        </VStack>
      </Grid>
    </Box>
  );
};

export default ArchiveProjectCard;
