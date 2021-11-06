/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Text, Wrap } from '@chakra-ui/react';
import SkillTag from './SkillTag';

const SkillsList = ({ category, skillList }) => (
  <Stack
    width={{ base: 'full', xl: 'auto' }}
    height={{ xl: 'xs' }}
    p={{ base: 3, md: 4, xl: 5 }}
    borderRadius="10px"
    spacing={5}
    border="2px solid #F4A259"
  >
    <Text textAlign="center" fontWeight="bold">
      {category}
    </Text>
    <Wrap spacing={5} justify="center">
      {skillList.map((skill) => (
        <SkillTag key={skill.name} name={skill.name} icon={skill.icon} />
      ))}
    </Wrap>
  </Stack>
);

export default SkillsList;

SkillsList.propTypes = {
  category: PropTypes.string.isRequired,
  skillList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
