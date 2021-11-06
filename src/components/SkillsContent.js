import React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import SectionContainer from './SectionContainer';
import SkillsGroup from './SkillsGroup';
import skills from '../data/skills';

const firstGroup = skills.slice(0, 3);
const secondGroup = skills.slice(-1);

const SkillsContent = () => (
  <SectionContainer bgColor="#F0EFF4" sectionTitle="Skills" fullWidth>
    {/* Banner */}
    <Box height={{ xl: '100%' }}>
      <Box background="#90BE6D" height="170px" />
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', xl: 'repeat(5, 1fr)' }}
        gap={{ md: 3, xl: 4 }}
        flexGrow={{ xl: '1' }}
        px={{ xl: 20 }}
      >
        <GridItem colSpan={{ base: 1, md: 3, xl: 4 }}>
          <SkillsGroup groupTitle="I have already work with" skills={firstGroup} />
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 3, xl: 1 }}>
          <SkillsGroup groupTitle="But I’m also interested in ..." skills={secondGroup} />
        </GridItem>
      </Grid>
    </Box>
  </SectionContainer>
);

export default SkillsContent;
