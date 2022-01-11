import React from 'react';
import PropTypes from 'prop-types';
import { Button, Stack, Link, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { SiGithub } from 'react-icons/si';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import PopoverMessage from './PopoverMessage';

const ProjectActionButtons = ({ githubUrl, url, githubMessage, urlMessage }) => {
  const { t } = useTranslation();

  return (
    <Stack direction="row" spacing={4}>
      <PopoverMessage isOpen={!githubUrl} message={githubMessage}>
        <Button
          as={githubUrl ? Link : Button}
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
      </PopoverMessage>
      <PopoverMessage isOpen={!url} message={urlMessage}>
        <Button
          as={url ? Link : Button}
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
      </PopoverMessage>
    </Stack>
  );
};

ProjectActionButtons.defaultProps = {
  githubUrl: undefined,
  url: undefined,
  githubMessage: undefined,
  urlMessage: undefined,
};

ProjectActionButtons.propTypes = {
  githubUrl: PropTypes.string,
  url: PropTypes.string,
  githubMessage: PropTypes.string,
  urlMessage: PropTypes.string,
};

export default ProjectActionButtons;
