import { createSystem, defaultConfig, defineConfig, defineTokens } from '@chakra-ui/react';
import { buttonRecipe } from './recipes';

const fonts = defineTokens.fonts({
  heading: { value: 'Fraunces' },
  body: { value: 'Nunito Sans' },
});

const colors = defineTokens.colors({
  paper: {
    100: { value: '#EDDFC8' },
    200: { value: '#E9DBC4' },
    300: { value: '#DFD0B3' },
  },
  light: {
    50: { value: '#F4EEDF' },
    100: { value: '#EDDFC8' },
    150: { value: '#F3EBDD' },
    200: { value: '#E5DCCC' },
  },
  orange: {
    50: { value: '#E6D2B8' },
    100: { value: '#D08A54' },
    200: { value: '#AA806D' },
    300: { value: '#86784A' },
  },
  black: {
    100: { value: '#1A1B1B' },
  },
});

const config = defineConfig({
  globalCss: {
    html: {
      height: '100%',
      width: '100%',
      overflowX: 'hidden',
    },

    '#root': {
      minHeight: '100%',
      width: '100%',
      overflowX: 'hidden',
    },

    body: {
      minHeight: '100%',
      width: '100%',
      margin: 0,
      overflowX: 'hidden',
      bg: { _light: 'light.100', _dark: 'brown.900' },
      color: { _light: 'dark.100', _dark: 'light.200' },
    },
  },
  theme: {
    breakpoints: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    tokens: {
      colors,
      fonts,
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: '{colors.brand.500}' },
        },
      },
    },
    recipes: {
      button: buttonRecipe,
    },
  },
});

export const system = createSystem(defaultConfig, config);
