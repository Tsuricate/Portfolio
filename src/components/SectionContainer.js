import React from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const SectionContainer = ({ children, background, sectionTitle, fullWidth }) => {
  const paddingX = fullWidth ? 0 : { base: '7', lg: '16' };
  return (
    <Box
      height={{ xl: '100%' }}
      minHeight={{ base: '100%' }}
      py={{ base: '40px', lg: '80px' }}
      px={paddingX}
      className="SectionContainer"
      id={sectionTitle}
      background={background}
      backgroundSize="24%"
    >
      <Flex direction="column" height={{ xl: '100%' }}>
        {sectionTitle && (
          <Flex justifyContent="center">
            <Heading variant="pageTitle" textAlign="center" pb={{ base: '40px', lg: '80px' }}>
              {sectionTitle}
            </Heading>
          </Flex>
        )}
        <Box flexGrow={{ xl: '1' }}>{children}</Box>
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
  background: PropTypes.string.isRequired,
  sectionTitle: PropTypes.string,
  fullWidth: PropTypes.bool,
};
