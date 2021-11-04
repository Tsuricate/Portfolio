import React from 'react';
import PropTypes from 'prop-types';
import { Button, Stack, Link } from '@chakra-ui/react';
import { SiGithub } from 'react-icons/si';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const ProjectActionButtons = ({ url }) => (
  <Stack direction="row" spacing={4}>
    <Button
      as={Link}
      href={url}
      isFullWidth
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
      bg="blue.400"
      color="white"
      rightIcon={<ArrowForwardIcon />}
    >
      Visit website
    </Button>
  </Stack>
);

ProjectActionButtons.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ProjectActionButtons;
