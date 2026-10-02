import React from 'react';
import { Link } from '@chakra-ui/react';

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  active?: boolean;
  mobile?: boolean;
  onClose?: () => void;
}

const NavLink = ({ children, href, active = false, mobile = false, onClose }: NavLinkProps) => (
  <Link
    href={href}
    position="relative"
    display="inline-flex"
    alignItems="center"
    justifyContent={mobile ? 'flex-start' : 'center'}
    height={mobile ? '50px' : '48px'}
    width={mobile ? '100%' : 'auto'}
    px={mobile ? 3 : { md: 3, lg: 4 }}
    fontSize={mobile ? '18px' : { md: '17px', lg: '19px' }}
    fontWeight="800"
    letterSpacing={mobile ? '0.08em' : '0.065em'}
    textTransform="uppercase"
    whiteSpace="nowrap"
    color={active ? 'light.50' : 'black.100'}
    textDecoration="none"
    isolation="isolate"
    transition="color .2s ease"
    _before={
      mobile
        ? {
            content: "''",
            position: 'absolute',
            zIndex: -1,
            left: '-5px',
            right: active ? '8px' : '100%',
            top: '4px',
            bottom: '4px',
            bg: 'black.100',
            borderRadius: '1px 3px 2px 2px',
            transition: 'right .2s ease',
          }
        : {
            content: "''",
            position: 'absolute',
            zIndex: -2,
            inset: '1px -9px 0',
            bg: 'black.100',
            borderRadius: '2px 3px 0 2px',
            transform: active ? 'rotate(-0.8deg) scale(1)' : 'rotate(-0.8deg) scale(0)',
            transformOrigin: 'center bottom',
            transition: 'transform .2s ease',
          }
    }
    _after={
      mobile
        ? {
            content: "''",
            position: 'absolute',
            zIndex: 1,
            left: '-10px',
            top: '50%',
            width: active ? '4px' : '0',
            height: active ? '20px' : '0',
            bg: 'orange.100',
            borderRadius: '1px',
            transform: 'translateY(-50%)',
            transition: 'width .2s ease, height .2s ease',
          }
        : {
            content: "''",
            position: 'absolute',
            zIndex: -2,
            left: '50%',
            bottom: '-8px',
            width: 0,
            height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: active ? '7px solid #1A1B1B' : '0 solid transparent',
            transform: 'translateX(-50%)',
            transition: 'border-top-width .2s ease',
          }
    }
    _hover={
      mobile
        ? {
            color: 'light.50',
            _before: {
              right: '8px',
            },
          }
        : {
            color: 'light.50',
            _before: {
              transform: 'rotate(-0.8deg) scale(1)',
            },
            _after: {
              borderTopWidth: '7px',
            },
          }
    }
    onClick={onClose}
  >
    {children}
  </Link>
);

export default NavLink;
