import React from 'react';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import { chakra, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const NavLink = ({ children, onClose }) => {
  const ChakraHashLink = chakra(HashLink);
  const { t } = useTranslation();
  const anchor = t('sectionTitle.home') === children ? '#' : `#${children}`;

  return (
    <ChakraHashLink
      smooth
      to={anchor}
      position="relative"
      _before={{
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '1px',
        bottom: '0',
        left: '0',
        bgColor: `${useColorModeValue('rgba(0, 0, 0, 0.64)', 'rgba(255, 255, 255, 0.64)')}`,
        visibility: 'hidden',
        transform: 'scaleX(0)',
        transition: 'all .25s cubic-bezier(1,.25,0,.75) 0s',
      }}
      sx={{
        '&:hover:before': {
          visibility: 'visible',
          transform: 'scaleX(1)',
        },
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
