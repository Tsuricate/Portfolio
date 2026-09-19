import { Flex, Box, Heading, Image, Stack, Text, Wrap } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import customScrollbar from '../utils/customScrollbar';
import ProjectActionButtons from './ProjectActionButtons';
import SkillTag from './SkillTag';
import { fade } from '../utils/animations';

interface ProjectCardProps {
  image: string;
  name: string;
  description: string;
  githubUrl?: string;
  githubMessage?: string;
  url: string;
  urlMessage?: string;
  specs?: {
    name: string;
    icon: React.ElementType;
  }[];
}

const ProjectCard = ({
  image,
  name,
  description,
  githubUrl,
  githubMessage,
  url,
  urlMessage,
  specs,
}: ProjectCardProps) => {
  const { t } = useTranslation();
  return (
    <Flex
      direction="column"
      width={{ md: 'lg' }}
      height={{ lg: '2xl' }}
      p={6}
      overflow="hidden"
      borderRadius="15px"
      boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
      {...fade}
    >
      <Box mt={-6} mx={-6} mb={6} overflow={{ base: 'hidden' }} height={{ base: 48, md: 72 }}>
        <Image
          src={image}
          alt={`Illustration representing project ${name}`}
          height="100%"
          width="100%"
          fit="cover"
          align="50% 50%"
        />
      </Box>

      <Stack direction="column" flexGrow="1" gap={{ base: 5, lg: 0 }}>
        <Stack height={{ lg: 36 }} overflowY={{ lg: 'auto' }}>
          <Heading
            fontSize="2xl"
            letterSpacing={5}
          >
            {name}
          </Heading>
          <Text pr={{ lg: 2 }}>{description}</Text>
        </Stack>

        <Stack height={{ lg: 56, xl: 48 }}>
          <Text mt={{ lg: 2 }} textDecoration="underline">
            {t('projects.stack')}
          </Text>
          <Wrap gap={2}>
            {specs?.map((spec) => (
              <SkillTag key={spec.name} name={spec.name} />
            ))}
          </Wrap>
        </Stack>
        <ProjectActionButtons
          githubUrl={githubUrl}
          url={url}
          githubMessage={githubMessage}
          urlMessage={urlMessage}
        />
      </Stack>
    </Flex>
  );
};

export default ProjectCard;
