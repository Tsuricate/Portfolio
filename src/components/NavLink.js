import React from 'react';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';

const NavLink = ({ children, onClose }) => {
  const anchor = children === 'Home' ? '#' : `#${children}`;

  return (
    <HashLink smooth to={anchor} px={2} py={1} rounded="md" onClick={onClose}>
      {children}
    </HashLink>
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
