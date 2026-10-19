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
    },
  },
});
