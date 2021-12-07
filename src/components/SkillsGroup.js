import React from 'react';
import PropTypes from 'prop-types';
import {
  Tag,
  Box,
  Stack,
  Heading,
  useColorModeValue,
  TagLabel,
  TagLeftIcon,
} from '@chakra-ui/react';
import SkillsList from './SkillsList';

const SkillsGroup = ({ groupTitle, skills, icon }) => (
  <Stack pt={{ base: 5, xl: 0 }} height={{ xl: '100%' }} alignItems={{ xl: 'center' }}>
    <Box
      textAlign="center"
      mt={{ xl: '-25px' }}
      mb={{ base: 5 }}
      filter="drop-shadow(rgba(0, 0, 0, 0.16) 0px 3px 6px) drop-shadow( rgba(0, 0, 0, 0.23) 0px 3px 6px)"
    >
      <Tag
        p={{ base: 8 }}
        height="50px"
        alignItems="center"
        fontSize="1.5xl"
        fontWeight="bold"
        background={useColorModeValue('#bfd0dd', '#95B2B0')}
        color={useColorModeValue('#2B4141', '#1D2A2A')}
        clipPath="polygon(5% 0, 95% 0, 100% 25%, 100% 75%, 95% 100%, 5% 100%, 0 75%, 0 25%)"
      >
        <TagLeftIcon boxSize="25px" as={icon} color={useColorModeValue('#2B4141', '#293D3D')} />
        <TagLabel>
          <Heading as="h3" fontSize={16} letterSpacing="1px">
            {groupTitle}
          </Heading>
        </TagLabel>
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
  icon: PropTypes.func.isRequired,
};
