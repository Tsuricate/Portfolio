import { Stack, Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { fadeUp } from '../utils/animations';

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
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 3, md: 8 }}
      pt={{ base: 6, md: 8 }}
      {...fadeUp}
    >
      <Button
        colorScheme="black"
        variant="outline"
        p={6}
        onClick={downloadResume}
      >
        {t('buttons.resume')}
      </Button>

      <Button
        p={6}
      >
        {t('buttons.contact')}
      </Button>
    </Stack>
  );
};

export default ActionButtons;
