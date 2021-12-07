import React from 'react';
import { Box, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import { GiPineTree, GiSprout } from 'react-icons/gi';
import SectionContainer from './SectionContainer';
import SkillsGroup from './SkillsGroup';
import skills from '../data/skills';

const firstGroup = skills.slice(0, 3);
const secondGroup = skills.slice(-1);

const SkillsContent = () => (
  <SectionContainer
    background={useColorModeValue('#E8E8E4', '#403f3f')}
    sectionTitle="Skills"
    fullWidth
  >
    <Box height={{ xl: '100%' }}>
      {/* Banner */}
      <Box
        width="100%"
        height="200px"
        overflowX="hidden"
        bg="url(/images/skillsImage.webp) center"
        filter="grayscale(50%) brightness(0.9)"
      />

      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', xl: 'repeat(5, 1fr)' }}
        gap={{ md: 3, xl: 10 }}
        flexGrow={{ xl: '1' }}
        px={{ xl: 20 }}
      >
        <GridItem colSpan={{ base: 1, md: 3, xl: 4 }}>
          <SkillsGroup
            groupTitle="I have already work with"
            skills={firstGroup}
            icon={GiPineTree}
          />
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 3, xl: 1 }}>
          <SkillsGroup
            groupTitle="But I’m also interested in "
            skills={secondGroup}
            icon={GiSprout}
          />
        </GridItem>
      </Grid>
    </Box>
  </SectionContainer>
);

export default SkillsContent;
