import { mode } from '@chakra-ui/theme-tools';

const baseStyle = {
  letterSpacing: { base: '2px', md: '3px', lg: '4px' },
};

const variantPageTitle = (props) => ({
  textTransform: 'uppercase',
  fontWeight: 'bold',
  letterSpacing: '10px',
  fontSize: '3xl',
  zIndex: '0',
  position: 'relative',
  _before: {
    content: '""',
    position: 'absolute',
    zIndex: '-1',
    bottom: { base: '50%', lg: '62%' },
    width: '110%',
    height: '20%',
    transform: 'skew(-20deg) translateX(-10%)',
    background: mode(
      'linear-gradient(90deg, rgba(233, 191, 93, 0.3), rgba(233, 191, 93, 0.6))',
      'linear-gradient(90deg, rgba(59, 126, 158, 0.3), rgba(59, 126, 158, 0.6))'
    )(props),
  },
});

const variants = {
  pageTitle: variantPageTitle,
};

export default { baseStyle, variants };
