import { extendTheme } from '@chakra-ui/react';
import fonts from './fonts';
import breakpoints from './breakpoints';
import components from './components';

const overrides = {
  fonts,
  breakpoints,
  components,
};

export default extendTheme(overrides);
