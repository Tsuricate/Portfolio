import React from 'react';
import PropTypes from 'prop-types';
import { Tag, TagLeftIcon, TagLabel } from '@chakra-ui/react';
import * as SIcons from 'react-icons/si';

const SkillTag = ({ name, icon }) => {
  const { ...icons } = SIcons;
  const TheIcon = icons[icon];

  return (
    <Tag variant="subtle" size="lg" background="blackAlpha.300" p={2} borderRadius="5px">
      <TagLeftIcon as={TheIcon} />
      <TagLabel>{name}</TagLabel>
    </Tag>
  );
};
export default SkillTag;

SkillTag.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
