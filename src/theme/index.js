import { extendTheme } from '@chakra-ui/react';
import fonts from './fonts';
import Heading from './components/heading';

const overrides = {
  fonts,
  components: {
    Heading,
  },
};

export default extendTheme(overrides);
