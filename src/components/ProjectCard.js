import { Flex, Box, Heading, Image, Stack, Text, Wrap } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import ProjectActionButtons from './ProjectActionButtons';
import SkillTag from './SkillTag';

const ProjectCard = ({ image, name, description, url, specs }) => {
  return (
    <Flex
      minWidth={{ md: 'md' }}
      width={{ md: 'md' }}
      bg="white"
      boxShadow="2xl"
      p={6}
      direction="column"
      borderRadius="15px"
      overflow="hidden"
      mx={{ md: 2 }}
      my={{ base: 2, md: 0 }}
    >
      <Box mt={-6} mx={-6} mb={6} height={{ base: 56, md: 64 }} borderWidth="1px" overflow="hidden">
        <Image fit="cover" src={image} alt="Image representing project" alignContent="center" />
      </Box>

      <Stack
        direction="column"
        flexGrow="1"
        spacing={{ base: 5, lg: 0 }}
        justifyContent={{ base: 'space-between', md: 'none' }}
      >
        <Stack height={{ md: 48 }}>
          <Heading color="gray.700" fontSize="2xl">
            {name}
          </Heading>
          <Text color="gray.500">{description}</Text>
        </Stack>
        <Stack height={{ md: 48 }}>
          <Text>Specs : </Text>
          <Wrap spacing={2}>
            {specs.map((spec) => (
              <SkillTag key={spec.name} name={spec.name} icon={spec.icon} />
            ))}
          </Wrap>
        </Stack>
        <ProjectActionButtons url={url} />
      </Stack>
    </Flex>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  specs: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired).isRequired).isRequired,
};

export default ProjectCard;
