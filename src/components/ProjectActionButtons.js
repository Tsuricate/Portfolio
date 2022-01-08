import React from 'react';
import PropTypes from 'prop-types';
import { Button, Stack, Link, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { SiGithub } from 'react-icons/si';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const ProjectActionButtons = ({ githubUrl, url }) => {
  const { t } = useTranslation();
  return (
    <Stack direction="row" spacing={4}>
      <Button
        as={Link}
        href={githubUrl}
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
        {t('buttons.website')}
      </Button>
    </Stack>
  );
};

ProjectActionButtons.propTypes = {
  githubUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ProjectActionButtons;
