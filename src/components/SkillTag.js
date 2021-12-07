import React from 'react';
import PropTypes from 'prop-types';
import { Tag, TagLeftIcon, TagLabel, useColorModeValue } from '@chakra-ui/react';
import * as SIcons from 'react-icons/si';

const SkillTag = ({ name, icon }) => {
  const { ...icons } = SIcons;
  const TheIcon = icons[icon];

  return (
    <Tag
      size="lg"
      background={useColorModeValue('#e8e8e4', 'whiteAlpha.800')}
      boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;"
      color="#020202"
      p={4}
      borderRadius="5px"
    >
      {icon && <TagLeftIcon as={TheIcon} boxSize={5} />}
      <TagLabel fontWeight="semibold">{name}</TagLabel>
    </Tag>
  );
};
export default SkillTag;

SkillTag.defaultProps = {
  icon: null,
};

SkillTag.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
