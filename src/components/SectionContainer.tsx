import { Box, Heading, Flex } from '@chakra-ui/react';

interface SectionContainerProps {
  children: React.ReactNode;
  background: string;
  sectionTitle?: string | null;
  fullWidth?: boolean;
}

const SectionContainer = ({ children, background, sectionTitle, fullWidth }: SectionContainerProps) => {
  const paddingX = fullWidth ? 0 : { base: '7', lg: '16' };
  return (
    <Box
      height={{ xl: '100%' }}
      py={{ base: '65px', lg: '80px' }}
      px={paddingX}
      className="SectionContainer"
      key={sectionTitle}
      background={background}
      backgroundSize={{ base: '20%', lg: '24%' }}
    >
      <Flex direction="column" height={{ xl: '100%' }}>
        {sectionTitle && (
          <Flex justifyContent="center">
            <Heading textAlign="center" pb={10}>
              {sectionTitle}
            </Heading>
          </Flex>
        )}
        <Box flexGrow={{ xl: '1' }}>{children}</Box>
      </Flex>
    </Box>
  );
};
export default SectionContainer;
