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
      height={{ lg: '2xl' }}
      p={{ base: 6 }}
      overflow="hidden"
      bg={useColorModeValue('#E8E8E4', '#3B5C68')}
      borderRadius="15px"
    >
      <Box
        mt={-6}
        mx={-6}
        mb={6}
        borderWidth="1px"
        overflow={{ base: 'hidden' }}
        height={{ base: 48, md: 72 }}
      >
        <Image
          src={image}
          alt="Image representing project"
          height="100%"
          width="100%"
          fit="cover"
          align="50% 50%"
        />
      </Box>

      <Stack direction="column" flexGrow="1" spacing={{ base: 5, lg: 0 }}>
        <Stack height={{ lg: 36 }}>
          <Heading color={useColorModeValue('gray.700', 'white.700')} fontSize="2xl">
            {name}
          </Heading>
          <Text color={useColorModeValue('gray.500')}>{description}</Text>
        </Stack>

        <Stack height={{ lg: 56, xl: 48 }}>
          <Text>Technologies : </Text>
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
