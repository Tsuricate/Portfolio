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
}

const SectionContainer = ({
  id,
  children,
  background,
  backgroundImage,
  backgroundSize,
  backgroundRepeat,
  sectionTitle,
}: SectionContainerProps) => {
  return (
    <Box
      id={id}
      height={{ xl: '100%' }}
      className="SectionContainer"
      key={sectionTitle}
      background={background}
      backgroundImage={backgroundImage}
      backgroundRepeat={backgroundRepeat}
      backgroundSize={backgroundSize}
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
