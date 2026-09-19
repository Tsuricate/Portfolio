import React from 'react';
import { Link } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

interface NavLinkProps {
  children: React.ReactNode;
  onClose?: () => void;
}

const NavLink = ({ children, onClose }: NavLinkProps) => {
  const { t } = useTranslation();
  const anchor = t('sectionTitle.home') === children ? '#' : `#${children}`;

  return (
    <Link
      href={anchor}
      position="relative"
      _before={{
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '1px',
        bottom: '0',
        left: '0',
        visibility: 'hidden',
        transform: 'scaleX(0)',
        transition: 'all .25s cubic-bezier(1,.25,0,.75) 0s',
      }}
      onClick={onClose}
    >
      {children}
    </Link>
  );
};


export default NavLink;
