/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Heading, Wrap, Box, Text, Link } from '@chakra-ui/react';
import SkillTag from './SkillTag';

const SkillsList = ({ category, skillList }) => (
  <Stack
    minHeight={{ xl: 'sm' }}
    p={{ base: 3, md: 4, xl: 5 }}
    bg="#D9D9D3"
    spacing={5}
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
      <>
        <Heading as="h4" textAlign="center" fontSize="lg">
          {category}
        </Heading>
        <Wrap spacing={5} justify="center">
          {skillList.map((skill) => (
            <SkillTag key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </Wrap>
      </>
    ) : (
      <Box p={5} zIndex={1}>
        <Text>
          &#8220;Maîtrise de la qualité en projet Web&#8220; délivré par{' '}
          <Link color="teal.500" href="https://www.opquast.com/">
            Opquast
          </Link>{' '}
          - Niveau experte (930 points)
        </Text>
        <Text>
          -
          <Link color="teal.500" href="https://directory.opquast.com/fr/certifies/">
            Voir cette certification{' '}
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
};
