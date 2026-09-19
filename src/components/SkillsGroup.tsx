import React from 'react';
import {
  Tag,
  Box,
  Stack,
  Heading,
  TagLabel,
  TagStartElement,
} from '@chakra-ui/react';
import SkillsList from './SkillsList';

interface SkillsGroupProps {
  groupTitle: string;
  skills?: {
    title?: string;
    list?: string[];
  }[];
  icon: React.ElementType;
  cardHeight?: string;
}

const SkillsGroup = ({ groupTitle, skills, icon, cardHeight }: SkillsGroupProps) => (
  <Stack height={{ xl: '100%' }} mx={5}>
    <Box
      textAlign="center"
      filter="drop-shadow(rgba(50, 50, 93, 0.25) 0px 2px 5px) drop-shadow(rgba(0, 0, 0, 0.3) 0px 1px 3px)"
      mt={{ base: 8, xl: '-32px' }}
    >
      <Tag.Root
        p={8}
        mb={5}
        height="50px"
        clipPath="polygon(5% 0, 95% 0, 100% 25%, 100% 75%, 95% 100%, 5% 100%, 0 75%, 0 25%)"
      >
        <TagStartElement boxSize="30px" as={icon} />
        <TagLabel>
          <Heading as="h3" fontSize={16} letterSpacing="1px" whiteSpace="pre-wrap">
            {groupTitle}
          </Heading>
        </TagLabel>
      </Tag.Root>
    </Box>

    <Stack
      flexGrow={{ xl: '1' }}
      direction={{ base: 'column', lg: 'row' }}
      gap={{ base: 5, md: 10, xl: 5 }}
      alignItems={{ base: 'center' }}
      justifyContent="center"
    >
      {skills?.map((skill) => (
        <SkillsList
          key={skill.title}
          category={skill.title}
          cardHeight={cardHeight || 'sm'}
        />
      ))}
    </Stack>
  </Stack>
);

export default SkillsGroup;
