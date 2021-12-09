/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Flex,
  Stack,
  Heading,
  Wrap,
  WrapItem,
  Box,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import customScrollbar from '../utils/customScrollbar';
import SkillTag from './SkillTag';

const SkillsList = ({ category, skillList, cardHeight }) => (
  <Stack
    height={{ lg: cardHeight, xl: 'sm' }}
    width="100%"
    p={{ base: 5, xl: 3 }}
    bg={useColorModeValue('#D9D9D3', '#7d7b76ad ')}
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
  >
    {skillList ? (
      <Flex height={{ xl: '100%' }} flexDirection="column" zIndex="1" sx={customScrollbar}>
        <Heading as="h4" textAlign="center" fontSize="lg" pb={4}>
          {category}
        </Heading>
        <Wrap
          spacing={{ base: 3, lg: 2, xl: 4 }}
          justify="center"
          flexGrow="1"
          overflowY={{ base: 'hidden', xl: 'auto' }}
          overflowX="hidden"
          sx={customScrollbar}
        >
          {skillList.map((skill) => (
            <WrapItem key={skill.name}>
              <SkillTag name={skill.name} icon={skill.icon} />
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
          &#8220;<strong>Maîtrise de la qualité en projet Web</strong>&#8220; délivré par{' '}
          <Link
            color={useColorModeValue('teal.500', 'blue.200')}
            href="https://www.opquast.com/"
            whiteSpace="nowrap"
          >
            Opquast <ExternalLinkIcon />
          </Link>{' '}
        </Text>
        <Text>Niveau experte (930 points)</Text>
        <Text>
          <Link
            fontWeight="semibold"
            color={useColorModeValue('teal.500', 'blue.200')}
            href="https://directory.opquast.com/fr/certifies/"
            whiteSpace="nowrap"
          >
            Voir cette certification <ExternalLinkIcon mx="2px" />
          </Link>
          (clé X1UBZA)
        </Text>
      </Box>
    )}
  </Stack>
);

export default SkillsList;

SkillsList.defaultProps = {
  category: null,
  skillList: null,
};

SkillsList.propTypes = {
  category: PropTypes.string,
  skillList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string,
    }).isRequired
  ),
  cardHeight: PropTypes.string.isRequired,
};
