import type { Project } from '../data/projects';
import {
  Box,
  Center,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import ProjectActionButton from './ProjectActionButton';
interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { t } = useTranslation('projects');
  return (
    <Box
      key={project.title}
      bg="black.100"
      clipPath="polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 0 100%)"
      p="1.75px"
    >
      <VStack
        h="100%"
        align="stretch"
        bg="light.100"
        clipPath="polygon(0 0, calc(100% - 20.25px) 0, 100% 20.25px, 100% 100%, 0 100%)"
      >
        <Box
          position="relative"
          height={{ base: '200px', sm: '220px', md: '225px', lg: '165px', xl: '190px' }}
        >
          <Image src={project.image} alt="" width="100%" height="100%" objectFit="cover" />

          <Center
            position="absolute"
            bottom="17px"
            right="17px"
            width="62px"
            height="48px"
            bg="black.100"
            clipPath="polygon(3% 10%, 96% 3%, 100% 88%, 7% 100%)"
            transform="rotate(-2deg)"
          >
            <Text fontFamily="heading" fontSize="1.7rem" fontWeight="700" color="paper.50">
              {'0' + (index + 1)}
            </Text>
          </Center>
        </Box>

        <Grid
          flex="1"
          p={{ base: 5, md: 6, xl: 7 }}
          templateColumns={{
            base: '1fr',
            lg: '1fr 0.82fr',
          }}
        >
          <VStack align="stretch" pr={{ lg: 7, xl: 8 }}>
            <Heading
              fontSize={{
                base: '1.6rem',
                lg: project.translationKey === 'avatarCreator' ? '1.35rem' : '1.8rem',
                xl: project.translationKey === 'avatarCreator' ? '1.5rem' : '1.95rem',
              }}
              lineHeight="0.95"
              textTransform="uppercase"
            >
              {t(`${project.translationKey}.name`)}
            </Heading>

            <Text mt={5} fontSize="sm" lineHeight="1.65">
              {t(`${project.translationKey}.description`)}
            </Text>

            <HStack mt="auto" pt={{ base: 6, lg: 8 }} gap={3} wrap="wrap">
              {project.githubUrl && <ProjectActionButton url={project.githubUrl} text=" GitHub" />}

              {project.url && (
                <ProjectActionButton url={project.url} text={t('common:buttons.website')} />
              )}
            </HStack>
          </VStack>

          <Box
            pt={{ base: 6, lg: 0 }}
            pl={{ lg: 7, xl: 8 }}
            borderLeft={{ base: 'none', lg: '1px solid #AA806D' }}
          >
            <Text
              mb={4}
              fontSize="0.9rem"
              fontWeight="900"
              letterSpacing="0.16em"
              textTransform="uppercase"
              color="orange.200"
            >
              {t('stack')}
            </Text>

            <Wrap gap={2}>
              {project.specs?.map((spec) => (
                <WrapItem key={spec.name}>
                  <HStack gap={1.5} px={2} py={1.5} bg="beige.100">
                    <spec.icon size="14" />

                    <Text fontSize="0.85rem" fontWeight="800" whiteSpace="nowrap">
                      {spec.name}
                    </Text>
                  </HStack>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        </Grid>
      </VStack>
    </Box>
  );
};

export default ProjectCard;
