import { mode } from '@chakra-ui/theme-tools';

const variantContrast = (props) => ({
  color: 'white',
  bg: 'black',
  _hover: {
    bg: mode('#403F3F', '#5F5E5E')(props),
  },
});

const variantActiveLanguage = (props) => ({
  color: mode('#383838', 'white')(props),
  bg: mode('#BFD0DD', '#5A6D73')(props),
  border: `1px solid ${mode('#E2E8F0', 'rgba(255, 255, 255, 0.16)')(props)}`,
  _active: {
    color: mode('#383838', 'white')(props),
  },
});

const variants = {
  variantContrast,
  activeLanguage: variantActiveLanguage,
};

export default { variants };
