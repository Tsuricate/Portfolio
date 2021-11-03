/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Wrap } from '@chakra-ui/react';
import SkillTag from './SkillTag';

const SkillsList = ({ category, skillList }) => (
  <Box background="#F4A259" p={6} height={{ lg: '80%' }} w="350px" borderRadius="10px">
    <Text textAlign="center" fontWeight="bold">
      {category}
    </Text>
    <Wrap spacing={5} py={{ base: 5, lg: 10 }}>
      {skillList.map((skill) => (
        <SkillTag key={skill.name} name={skill.name} icon={skill.icon} />
      ))}
    </Wrap>
  </Box>
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
