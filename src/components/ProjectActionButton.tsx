import { Button } from '@chakra-ui/react';

interface ProjectActionButtonProps {
  url: string;
  text: string;
}

const ProjectActionButton = ({ url, text }: ProjectActionButtonProps) => {
  return (
    <Button asChild variant="outline">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {`${text} ↗`}
      </a>
    </Button>
  );
};

export default ProjectActionButton;
