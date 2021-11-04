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
    <Box background="#90BE6D" height="170px" />
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }}
      gap={4}
      height="calc(100% - 170px)"
    >
      <GridItem colSpan={3}>
        <SkillsGroup groupTitle="I have already work with" skills={firstGroup} />
      </GridItem>
      <GridItem colSpan={1}>
        <SkillsGroup groupTitle="But I’m also interested in ..." skills={secondGroup} />
      </GridItem>
    </Grid>
  </SectionContainer>
);

export default SkillsContent;
