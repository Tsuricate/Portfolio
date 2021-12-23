import React from 'react';
import { Flex, Box, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import { GiPineTree, GiSprout, GiRibbonMedal } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';
import SectionContainer from './SectionContainer';
import SkillsGroup from './SkillsGroup';
import skills from '../data/skills';

const firstGroup = skills.slice(0, 3);
const secondGroup = skills.slice(3, 4);
const certifications = skills.slice(-1);

const SkillsContent = () => {
  const { t } = useTranslation();
  return (
    <SectionContainer
      background={useColorModeValue('#E8E8E4', '#403f3f')}
      sectionTitle={t('sectionTitle.skills')}
      fullWidth
    >
      <Flex height={{ xl: '100%' }} flexDirection="column">
        {/* Banner */}
        <Box
          width="100%"
          height="200px"
          overflowX="hidden"
          bg="url(/images/skillsImage.webp) center"
          filter="grayscale(50%) brightness(0.9)"
        />

        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(5, 1fr)' }}
          flexGrow={{ xl: '1' }}
          px={{ xl: 5 }}
          gap={{ lg: 1 }}
        >
          <GridItem colSpan={{ base: 1, lg: 3, xl: 3 }}>
            <SkillsGroup
              groupTitle={t('skills.known')}
              skills={firstGroup}
              icon={GiPineTree}
              cardHeight="sm"
            />
          </GridItem>
          <GridItem colSpan={{ base: 1, lg: 2, xl: 1 }}>
            <SkillsGroup groupTitle={t('skills.unknown')} skills={secondGroup} icon={GiSprout} />
          </GridItem>
          <GridItem colSpan={{ base: 1, lg: 1, xl: 1 }}>
            <SkillsGroup
              groupTitle={t('skills.certification')}
              skills={certifications}
              icon={GiRibbonMedal}
            />
          </GridItem>
        </Grid>
      </Flex>
    </SectionContainer>
  );
};
export default SkillsContent;
