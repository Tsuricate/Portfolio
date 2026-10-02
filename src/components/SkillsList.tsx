import { Box, Flex, Text } from '@chakra-ui/react';

interface SkillsListProps {
  skills: string[];
}

const SkillsList = ({ skills }: SkillsListProps) => (
  <Box mt={4}>
    <Flex wrap="wrap" align="center" columnGap={2} rowGap={3}>
      {skills.map((skill, index) => (
        <Flex key={skill} align="center" gap={2}>
          <Box px={2.5} py={2} border="2px solid #1A1B1B" bg="#D0B9A2">
            <Text
              fontSize="1.05rem"
              lineHeight="1"
              fontWeight="900"
              letterSpacing="0.04em"
              color="#black.100"
              whiteSpace="nowrap"
            >
              {skill}
            </Text>
          </Box>

          {index < skills.length - 1 && (
            <Text color="orange.100" fontSize="1.1rem" fontWeight="900">
              ·
            </Text>
          )}
        </Flex>
      ))}
    </Flex>
  </Box>
);

export default SkillsList;
