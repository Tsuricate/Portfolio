import { Tag, TagLabel, TagStartElement } from '@chakra-ui/react';
import * as SIcons from 'react-icons/si';

interface SkillTagProps {
  name: string;
  icon?: string;
}

const SkillTag = ({ name, icon }: SkillTagProps) => {
  const { ...icons } = SIcons;

  return (
    <Tag.Root
      size="lg"
      boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;"
      p={{ base: 4, lg: 2.5 }}
      borderRadius="5px"
    >
      {icon && <TagStartElement  boxSize={5} />}
      <TagLabel fontWeight="semibold">{name}</TagLabel>
    </Tag.Root>
  );
};
export default SkillTag;
