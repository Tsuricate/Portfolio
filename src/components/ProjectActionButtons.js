import React from 'react';
import PropTypes from 'prop-types';
import { Button, Stack, Link, useColorModeValue } from '@chakra-ui/react';
import { SiGithub } from 'react-icons/si';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const ProjectActionButtons = ({ url }) => (
  <Stack direction="row" spacing={4}>
    <Button
      as={Link}
      href={url}
      isFullWidth
      variant="outline"
      colorScheme="black"
      fontSize="sm"
      borderRadius="10px"
      leftIcon={<SiGithub />}
    >
      GitHub
    </Button>
    <Button
      as={Link}
      href={url}
      isFullWidth
      fontSize="sm"
      borderRadius="10px"
      bg={useColorModeValue('#397E9D', 'white')}
      color={useColorModeValue('white', 'black')}
      rightIcon={<ArrowForwardIcon />}
      _hover={{
        bg: '#738C94',
      }}
    >
      Visit website
    </Button>
  </Stack>
);

ProjectActionButtons.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ProjectActionButtons;
