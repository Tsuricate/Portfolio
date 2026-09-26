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
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});
