import { Box, Text } from '@chakra-ui/react';
import SkillsList from './SkillsList';

interface SkillGroupProps {
  skill: {
    title: string;
    skills: string[];
    rotation: string;
    counterRotation: string;
  };
  index: number;
}

const SkillGroup = ({ skill, index }: SkillGroupProps) => (
  <Box
    key={skill.title}
    position="relative"
    bg="#EADBC8"
    border="2px solid #1A1B1B"
    transform={`rotate(${skill.rotation})`}
    px={{ base: 3, md: 6 }}
    py={6}
    minH="235px"
    overflow="hidden"
    _before={{
      content: "''",
      position: 'absolute',
      inset: '-1px',
      border: '1px solid #1A1B1B',
      transform: 'translate(4px, 4px)',
      zIndex: -1,
    }}
  >
    <Box transform={`rotate(${skill.counterRotation})`}>
      <Box position="relative" minH="64px">
        <Text
          position="absolute"
          left="-10px"
          top="-22px"
          fontSize="5.5rem"
          lineHeight="1"
          fontWeight="900"
          color="orange.200"
          opacity={0.12}
          pointerEvents="none"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, '0')}
        </Text>

        <Box position="relative" pt={4} pl={{ base: 3, md: 5 }}>
          <Text
            fontSize={{ base: '1.15rem', md: '1.3rem' }}
            lineHeight="1"
            fontWeight="900"
            letterSpacing="0.1em"
            textTransform="uppercase"
            color="#1A1B1B"
          >
            {skill.title}
          </Text>

          <Box mt={3} mb={6} width="52px" height="4px" bg="orange.100" />
          <SkillsList skills={skill.skills} />
        </Box>
      </Box>
    </Box>
  </Box>
);

export default SkillGroup;
