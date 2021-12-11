import { mode } from '@chakra-ui/theme-tools';

const variantContrast = (props) => ({
  color: 'white',
  bg: 'black',
  _hover: {
    bg: mode('#403F3F', '#5F5E5E')(props),
  },
});

const variants = {
  variantContrast,
};

export default { variants };
