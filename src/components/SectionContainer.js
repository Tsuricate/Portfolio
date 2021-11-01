import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const SectionContainer = ({ children, bgColor, sectionTitle }) => (
  <Box
    height={{ lg: '100%' }}
    minHeight={{ base: '100%' }}
    bg={bgColor}
    py="70px"
    px={{ base: '7', lg: '16' }}
    overflow={{ lg: 'hidden' }}
    className="SectionContainer"
  >
    <Heading textAlign="center">{sectionTitle}</Heading>

    {children}
  </Box>
);

export default SectionContainer;

SectionContainer.defaultProps = {
  sectionTitle: null,
};

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string.isRequired,
  sectionTitle: PropTypes.string,
};
