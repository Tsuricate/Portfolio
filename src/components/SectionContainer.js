import React from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const SectionContainer = ({ children }) => (
  <Box height="calc(100% - 60px)" bg="lightGray">
    {children}
  </Box>
);

export default SectionContainer;

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
