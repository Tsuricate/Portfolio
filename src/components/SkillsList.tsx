import {
  Flex,
  Stack,
  Heading,
  Wrap,
  WrapItem,
  Box,
  Text,
  Link,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { fade } from '../utils/animations';

interface SkillsListProps {
  category?: string;
  skillList?: {
    name?: string;
    icon?: React.ElementType;
  }[];
  cardHeight: string;
}

const SkillsList = ({ category, skillList, cardHeight }: SkillsListProps) => {
  const { t } = useTranslation();
  return (
    <Stack
      height={{ lg: cardHeight, xl: 'sm' }}
      width="100%"
      p={{ base: 5, xl: 3 }}
      border="2px solid #AAAA9D"
      borderRadius="2% 6% 5% 4% / 1% 1% 2% 4%"
      position="relative"
      _before={{
        content: "''",
        border: '2px solid #AAAA9D',
        display: 'block',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate3d(-49%, -49%, 0) scale(1.015) rotate(0.5deg)',
        borderRadius: ' 1% 1% 2% 4% / 2% 6% 5% 4%',
      }}
      {...fade}
    >
      {skillList ? (
        <Flex height={{ xl: '100%' }} flexDirection="column" zIndex="1">
          <Heading as="h4" textAlign="center" fontSize="lg" pb={{ base: 4, xl: 10 }}>
            {category ? <Text>⦁ {t(category)} ⦁ </Text> : ''}
          </Heading>
          <Wrap
            gap={{ base: 3, lg: 2, xl: 4 }}
            justify="center"
            flexGrow="1"
            overflowY={{ base: 'hidden', xl: 'auto' }}
            overflowX="hidden"
          >
            {skillList.map((skill) => (
              <WrapItem key={skill.name}>
              </WrapItem>
            ))}
          </Wrap>
        </Flex>
      ) : (
        <Box
          p={{ base: 2, xl: 8 }}
          zIndex={1}
          fontSize="lg"
          textAlign={{ md: 'center', lg: 'start' }}
        >
          <Text>
            {t('skills.opquast.label')}{' '}
            <Link
              href="https://www.opquast.com/"
              whiteSpace="nowrap"
            >
              Opquast 
            </Link>{' '}
          </Text>
          <Text>{t('skills.opquast.level')}</Text>
          <Text>
            <Link
              fontWeight="semibold"
              href="https://directory.opquast.com/fr/certifies/"
              whiteSpace="nowrap"
            >
              {t('skills.opquast.checking')}
            </Link>
            {t('skills.opquast.key')}
          </Text>
        </Box>
      )}
    </Stack>
  );
};
export default SkillsList;
