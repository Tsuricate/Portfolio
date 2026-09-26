import { Box, Stack, Button, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

interface ScreenprintButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

const ScreenprintButton = ({ variant, children, onClick }: ScreenprintButtonProps) => (
  <Box position="relative">
    <Box
      position="absolute"
      inset="0"
      bg="#1A1B1B"
      borderRadius="5px 3px 4px 5px"
      transform="translate(5px, 5px) rotate(0.5deg)"
    />

    <Box
      position="absolute"
      inset="-4px -1px -2px -4px"
      border="1.5px solid #1A1B1B"
      borderRadius="3px 5px 2px 4px"
      transform="rotate(-0.5deg)"
    />

    <Button width="100%" variant={variant} position="relative" zIndex={1} onClick={onClick}>
      {children}
    </Button>
  </Box>
);

const ActionButtons = () => {
  const { i18n, t } = useTranslation();

  const downloadResume = () => {
    const resume = i18n.language.includes('fr') ? 'CV_Zoe_AMAT.pdf' : 'Resume_Zoe_AMAT.pdf';

    const link = document.createElement('a');
    link.download = resume;
    link.href = resume;
    link.click();
  };

  return (
    <Stack
      direction="column"
      gap={6}
      pt={{ base: 6, md: 8 }}
      w={{ base: '100%', md: 'min(100%, 420px)', xl: '460px' }}
    >
      <ScreenprintButton variant="primary" onClick={downloadResume}>
        <Text>{t('buttons.resume')}</Text>
      </ScreenprintButton>

      <ScreenprintButton variant="secondary">
        <Text>{t('buttons.contact')}</Text>
      </ScreenprintButton>
    </Stack>
  );
};

export default ActionButtons;
