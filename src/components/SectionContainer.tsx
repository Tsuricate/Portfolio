import { Box } from '@chakra-ui/react';

interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
  background: string;
  backgroundImage?: string;
  backgroundRepeat?: string;
  backgroundSize?: string;
  sectionDivider?: boolean;
}

const SectionContainer = ({
  id,
  children,
  background,
  backgroundImage,
  backgroundSize,
  backgroundRepeat,
  sectionDivider = false,
}: SectionContainerProps) => (
  <Box
    id={id}
    position="relative"
    minH="100dvh"
    display="flex"
    flexDirection="column"
    background={background}
    backgroundImage={backgroundImage}
    backgroundRepeat={backgroundRepeat}
    backgroundSize={backgroundSize}
    overflow="visible"
  >
    {sectionDivider && (
      <Box>
        <Box
          position="absolute"
          top={{ base: '28px', md: '16px', lg: '0' }}
          left={{ base: '50%', md: '50%', lg: '72px' }}
          width={{ base: '70%', md: '58%', lg: '36%' }}
          height="1px"
          bg="black.100"
          transform={{
            base: 'translate(-50%, -50%)',
            md: 'translate(-50%, -50%)',
            lg: 'translateY(-50%)',
          }}
          zIndex={3}
        />

        <Box
          position="absolute"
          top={{ base: '28px', md: '16px', lg: '0' }}
          left={{ base: '50%', md: '50%', lg: 'calc(72px + 36%)' }}
          width={{ base: '15px', md: '16px' }}
          height={{ base: '15px', md: '16px' }}
          bg="orange.100"
          border="2px solid black.100"
          borderRadius="50%"
          transform="translate(-50%, -50%)"
          zIndex={4}
        />
      </Box>
    )}

    <Box flex="1" display="flex" flexDirection="column">
      {children}
    </Box>
  </Box>
);

export default SectionContainer;
