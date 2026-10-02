import { Flex, Box, Grid, Heading, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import SkillsGroup from './SkillsGroup';

interface SkillContentProps {
  skillGroups: {
    title: string;
    skills: string[];
    rotation: string;
    counterRotation: string;
  }[];
}

const SkillContent = ({ skillGroups }: SkillContentProps) => {
  const { t } = useTranslation('about');
  return (
    <Box>
      <Flex align="flex-start" gap={4} mb={10}>
        <Box width="12px" height="42px" bg="orange.100" flexShrink={0} />

        <Box>
          <Heading
            fontSize={{ base: '2.5rem', md: '3.6rem' }}
            lineHeight="0.9"
            textTransform="uppercase"
          >
            {t('toolbox.title')}
          </Heading>

          <Text
            mt={3}
            fontSize="0.75rem"
            fontWeight="800"
            letterSpacing="0.16em"
            textTransform="uppercase"
            color="orange.300"
          >
            {t('toolbox.subtitle')}
          </Text>
        </Box>
      </Flex>

      <Box position="relative">
        <Box
          display={{ base: 'none', md: 'block' }}
          position="absolute"
          left="0"
          right="0"
          top="50%"
          height="18px"
          bg="orange.200"
          opacity={0.23}
          transform="translateY(-50%) rotate(0.8deg)"
          zIndex={0}
        />

        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          gap={{ base: 6, lg: 8 }}
          position="relative"
          zIndex={1}
        >
          {skillGroups.map((skill, index) => (
            <SkillsGroup skill={skill} index={index} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default SkillContent;
