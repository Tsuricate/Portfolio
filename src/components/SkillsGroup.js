import React from 'react';
import PropTypes from 'prop-types';
import { Tag, Flex, Box } from '@chakra-ui/react';
import SkillsList from './SkillsList';

const SkillsGroup = ({ groupTitle, skills }) => (
  <>
    <Box textAlign="center" mt={{ lg: '-25px' }}>
      <Tag fontSize="1.5xl" height="50px" variant="subtle" border="1px solid black">
        {groupTitle}
      </Tag>
    </Box>

    <Flex
      height="calc(100% - 50px)"
      direction={{ base: 'column', lg: 'row' }}
      alignItems="center"
      justifyContent="space-evenly"
    >
      {skills.map((skill) => (
        <SkillsList key={skill.title} category={skill.title} skillList={skill.list} />
      ))}
    </Flex>
  </>
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
