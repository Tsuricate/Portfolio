import { defineRecipe } from '@chakra-ui/react';

export const buttonRecipe = defineRecipe({
  base: {
    minH: '58px',
    paddingLeft: '28px',
    paddingRight: '28px',
    paddingBlock: '20px',
    color: '#1A1B1B',
    fontWeight: '800',
    border: '2px solid #1A1B1B',
    borderRadius: '4px',
    boxShadow: 'none',
    letterSpacing: '0.06em',
  },

  variants: {
    variant: {
      primary: {
        bg: '#D08A54',
        fontSize: 'lg',
      },
      secondary: {
        bg: '#A99E72',
        fontSize: 'lg',
      },
      outline: {
        minH: '40px',
        px: 4,
        border: '1.5px solid #1A1B1B',
        borderRadius: '2px',
        bg: '#EADBC8',
        color: '#1A1B1B',
        fontSize: '0.85rem',
        fontWeight: '900',
        letterSpacing: '0.04em',
        transition: 'transform 0.15s ease, background 0.15s ease',
        _hover: {
          bg: '#D0B9A2',
          transform: 'translateY(-2px)',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});
