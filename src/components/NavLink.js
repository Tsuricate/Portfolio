import React from 'react';
import PropTypes from 'prop-types';
import { NavHashLink } from 'react-router-hash-link';
import { useColorModeValue } from '@chakra-ui/react';

const NavLink = ({ children }) => {
  const anchor = children === 'Home' ? '#' : `#${children}`;

  return (
    <NavHashLink
      smooth
      to={anchor}
      px={2}
      py={1}
      rounded="md"
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
    >
      {children}
    </NavHashLink>
  );
};
NavLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavLink;
