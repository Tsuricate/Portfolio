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

const SkillsGroup = ({ groupTitle, skills, icon, cardHeight }) => (
  <Stack height={{ xl: '100%' }} mx={5}>
    <Box
      textAlign="center"
      filter="drop-shadow(rgba(50, 50, 93, 0.25) 0px 2px 5px) drop-shadow(rgba(0, 0, 0, 0.3) 0px 1px 3px)"
      mt={{ base: 8, xl: '-32px' }}
    >
      <Tag
        p={8}
        mb={5}
        height="50px"
        background={useColorModeValue('#bfd0dd', '#5A6D73')}
        color={useColorModeValue('#2B4141', '#DEDEDE')}
        clipPath="polygon(5% 0, 95% 0, 100% 25%, 100% 75%, 95% 100%, 5% 100%, 0 75%, 0 25%)"
      >
        <TagLeftIcon boxSize="30px" as={icon} />
        <TagLabel>
          <Heading as="h3" fontSize={16} letterSpacing="1px" whiteSpace="pre-wrap">
            {groupTitle}
          </Heading>
        </TagLabel>
      </Tag>
    </Box>

    <Stack
      flexGrow={{ xl: '1' }}
      direction={{ base: 'column', lg: 'row' }}
      spacing={{ base: 5, md: 10, xl: 5 }}
      alignItems={{ base: 'center' }}
      justifyContent="center"
    >
      {skills.map((skill) => (
        <SkillsList
          key={skill.title}
          category={skill.title}
          skillList={skill.list}
          cardHeight={cardHeight}
        />
      ))}
    </Stack>
  </Stack>
);

export default SkillsGroup;

SkillsGroup.defaultProps = {
  cardHeight: '2xs',
};

SkillsGroup.propTypes = {
  groupTitle: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.array.isRequired])
    ).isRequired
  ).isRequired,
  icon: PropTypes.func.isRequired,
  cardHeight: PropTypes.string,
};
