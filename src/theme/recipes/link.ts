import { defineRecipe } from '@chakra-ui/react';

export const linkRecipe = defineRecipe({
  base: {},

  variants: {
    variant: {
      primary: {
        fontSize: 'lg',
      },
      navLink: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        fontWeight: '800',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        textDecoration: 'none',
        isolation: 'isolate',
        transition: 'color .2s ease',
      },
      contact: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: { base: 'stretch', md: 'flex-end' },
        width: { base: '100%', md: '96%' },
        maxWidth: '100%',
        minWidth: 0,
        minHeight: { base: '100px', md: '110px', xl: '90px', '2xl': '100px' },
        p: { base: 4, md: 6, xl: 4, '2xl': 5 },
        border: '2px solid #1A1B1B',
        transform: 'rotate(0.7deg)',
        transition: 'transform 180ms ease, box-shadow 180ms ease',
        boxShadow: '5px 5px 0 #1A1B1B',
        _hover: {
          transform: 'rotate(0deg) translate(-2px, -2px)',
          boxShadow: '7px 7px 0 #1A1B1B',
          textDecoration: 'none',
        },
        _focusVisible: {
          outline: '3px solid #1A1B1B',
          outlineOffset: '5px',
        },
      },
      actionButton: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minH: '58px',
        paddingLeft: '28px',
        paddingRight: '28px',
        paddingBlock: '20px',
        bg: '#A99E72',
        color: '#1A1B1B',
        fontSize: 'lg',
        fontWeight: '800',
        border: '2px solid #1A1B1B',
        borderRadius: '4px',
        boxShadow: 'none',
        letterSpacing: '0.06em',
        textDecoration: 'none',
        transition: 'transform 180ms ease',
        _hover: {
          transform: 'translate(-2px, -2px)',
          textDecoration: 'none',
        },
        _focusVisible: {
          outline: '3px solid #1A1B1B',
          outlineOffset: '5px',
        },
      },
    },
  },
});
