import React from 'react';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import { chakra, useColorModeValue } from '@chakra-ui/react';

const NavLink = ({ children, onClose }) => {
  const ChakraHashLink = chakra(HashLink);
  const anchor = children === 'Home' ? '#' : `#${children}`;

  return (
    <ChakraHashLink
      smooth
      to={anchor}
      _hover={{
        borderBottom: `1px solid ${useColorModeValue(
          'rgba(0, 0, 0, 0.64)',
          'rgba(255, 255, 255, 0.64)'
        )}`,
      }}
      onClick={onClose}
    >
      {children}
    </ChakraHashLink>
  );
};

NavLink.defaultProps = {
  onClose: null,
};

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
};

export default NavLink;
