import { Box, Heading, Flex } from '@chakra-ui/react';

interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
  background: string;
  backgroundImage?: string;
  backgroundRepeat?: string;
  backgroundSize?: string;
  sectionTitle?: string | null;
  fullWidth?: boolean;
  sectionDivider?: boolean;
}

const SectionContainer = ({
  id,
  children,
  background,
  backgroundImage,
  backgroundSize,
  backgroundRepeat,
  sectionTitle,
  sectionDivider = false,
}: SectionContainerProps) => (
  <Box
    id={id}
    position="relative"
    minH="100dvh"
    className="SectionContainer"
    background={background}
    backgroundImage={backgroundImage}
    backgroundRepeat={backgroundRepeat}
    backgroundSize={backgroundSize}
    overflow="visible"
  >
    {sectionDivider && (
      <>
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
          left={{
            base: '50%',
            md: '50%',
            lg: 'calc(72px + 36%)',
          }}
          width={{ base: '15px', md: '16px' }}
          height={{ base: '15px', md: '16px' }}
          bg="orange.100"
          border="2px solid black.100"
          borderRadius="50%"
          transform="translate(-50%, -50%)"
          zIndex={4}
        />
      </>
    )}

    <Box position="relative" zIndex={1}>
      <Flex direction="column" minH="100dvh">
        {sectionTitle && (
          <Flex justifyContent="center">
            <Heading textAlign="center" pb={10}>
              {sectionTitle}
            </Heading>
          </Flex>
        )}

        <Box flexGrow={1}>{children}</Box>
      </Flex>
    </Box>
  </Box>
);

export default SectionContainer;
