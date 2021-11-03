import React from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const SectionContainer = ({ children, bgColor, sectionTitle, fullWidth }) => {
  const paddingX = fullWidth ? 0 : { base: '7', lg: '16' };
  return (
    <Box
      height={{ lg: '100%' }}
      minHeight={{ base: '100%' }}
      bg={bgColor}
      py="70px"
      px={paddingX}
      className="SectionContainer"
    >
      <Flex direction="column" height="100%">
        {sectionTitle && (
          <Heading textAlign="center" pb={5}>
            {sectionTitle}
          </Heading>
        )}
        <Box flexGrow="1">{children}</Box>
      </Flex>
    </Box>
  );
};
export default SectionContainer;

SectionContainer.defaultProps = {
  sectionTitle: null,
  fullWidth: false,
};

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string.isRequired,
  sectionTitle: PropTypes.string,
  fullWidth: PropTypes.bool,
};
