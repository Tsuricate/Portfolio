import { Flex, Box, Heading, Image, Stack, Text, Wrap, useColorModeValue } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import ProjectActionButtons from './ProjectActionButtons';
import SkillTag from './SkillTag';

const ProjectCard = ({ image, name, description, url, specs }) => {
  return (
    <Flex
      direction="column"
      width={{ md: 'lg' }}
      p={6}
      overflow="hidden"
      bg={useColorModeValue('white', '#3B5C68')}
      borderRadius="15px"
    >
      <Box mt={-6} mx={-6} mb={6} height={{ base: 48, md: 56 }} borderWidth="1px" overflow="hidden">
        <Image fit="cover" src={image} alt="Image representing project" />
      </Box>

      <Stack
        direction="column"
        flexGrow="1"
        spacing={{ base: 5, lg: 0 }}
        justifyContent={{ base: 'space-between', md: 'none' }}
      >
        <Stack height={{ lg: 40 }}>
          <Heading color={useColorModeValue('gray.700', 'white.700')} fontSize="2xl">
            {name}
          </Heading>
          <Text color={useColorModeValue('gray.500')}>{description}</Text>
        </Stack>

        <Stack height={{ lg: 56 }}>
          <Text>Specs : </Text>
          <Wrap spacing={2}>
            {specs.map((spec) => (
              <SkillTag key={spec.name} name={spec.name} icon={spec.icon} />
            ))}
          </Wrap>
        </Stack>
        <ProjectActionButtons url={url} py={{ lg: 10 }} />
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
