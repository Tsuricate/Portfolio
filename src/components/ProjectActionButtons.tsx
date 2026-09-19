import { Button, Stack, Link } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { SiGithub } from 'react-icons/si';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import PopoverMessage from './PopoverMessage';

interface ProjectActionButtonsProps {
  githubUrl?: string;
  url?: string;
  githubMessage?: string;
  urlMessage?: string;
}

const ProjectActionButtons = ({ githubUrl, url, githubMessage, urlMessage }: ProjectActionButtonsProps) => {
  const { t } = useTranslation();

  return (
    <Stack direction="row" gap={4}>
      <PopoverMessage isOpen={!githubUrl} message={githubMessage}>
        <Button
          as={githubUrl ? Link : Button}
          variant="outline"
          colorScheme="black"
          fontSize="sm"
          borderRadius="10px"
        >
          GitHub
        </Button>
      </PopoverMessage>
      <PopoverMessage isOpen={!url} message={urlMessage}>
        <Button
          as={url ? Link : Button}
          fontSize="sm"
          borderRadius="10px"
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

export default ProjectActionButtons;
