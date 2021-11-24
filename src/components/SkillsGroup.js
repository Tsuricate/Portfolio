import React from 'react';
import PropTypes from 'prop-types';
import { Tag, Box, Stack } from '@chakra-ui/react';
import SkillsList from './SkillsList';

const SkillsGroup = ({ groupTitle, skills }) => (
  <Stack
    pt={{ base: 5, xl: 0 }}
    height={{ xl: '100%' }}
    alignItems={{ xl: 'center' }}
    spacing={{ xl: 20 }}
  >
    <Box textAlign="center" mt={{ xl: '-30px' }}>
      <Tag fontSize="1.5xl" height="50px" variant="subtle" border="1px solid black">
        {groupTitle}
      </Tag>
    </Box>

    <Stack
      flexGrow={{ xl: '1' }}
      direction={{ base: 'column', md: 'row' }}
      spacing={{ base: 5, md: 10, xl: 5 }}
    >
      {skills.map((skill) => (
        <SkillsList key={skill.title} category={skill.title} skillList={skill.list} />
      ))}
    </Stack>
  </Stack>
);

export default SkillsGroup;

SkillsGroup.propTypes = {
  groupTitle: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.array.isRequired])
    ).isRequired
  ).isRequired,
};
