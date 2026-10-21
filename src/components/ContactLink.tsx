import { Box, Link, Text } from '@chakra-ui/react';
import { LuCircleArrowRight } from 'react-icons/lu';

interface ContactLinkProps {
  href: string;
  bgColor: string;
  eyebrow: string;
  title: string;
  transform?: string;
  external?: boolean;
}

const ContactArrow = () => (
  <LuCircleArrowRight
    aria-hidden="true"
    size="44px"
    strokeWidth={1.2}
    style={{ transform: 'rotate(-45deg)', flexShrink: 0 }}
  />
);

const ContactLink = ({ href, bgColor, eyebrow, title, transform, external }: ContactLinkProps) => {
  return (
    <Link
      href={href}
      variant="contact"
      bg={bgColor}
      transform={transform}
      target={external ? '_blank' : undefined}
    >
      <Box minWidth={0}>
        <Text
          fontSize="xs"
          fontWeight="700"
          textTransform="uppercase"
          letterSpacing="0.12em"
          mb={2}
        >
          {eyebrow}
        </Text>

        <Text
          fontFamily="heading"
          fontSize={{ base: 'xl', md: '3xl', xl: '2xl', '2xl': '3xl' }}
          fontWeight="600"
          lineHeight="1.1"
        >
          {title}
        </Text>
      </Box>

      <ContactArrow />
    </Link>
  );
};

export default ContactLink;
