import { FaNodeJs, FaReact } from 'react-icons/fa';
import {
  SiDocker,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTypescript,
  SiChakraui,
  SiRedux,
  SiApollographql,
  SiGoogledrive,
  SiI18Next,
  SiSymfony,
  SiPhp,
  SiSemanticui,
  SiPusher,
} from 'react-icons/si';

import type { ElementType } from 'react';

export interface ProjectSpec {
  name: string;
  icon: ElementType;
}

export interface Project {
  title: string;
  translationKey: string;
  image: string;
  githubUrl?: string;
  url?: string;
  specs?: ProjectSpec[];
}

export const projects: Project[] = [
  {
    title: 'BlablaBook',
    translationKey: 'blablaBook',
    image: '/images/blablaBook.png',
    githubUrl: 'https://github.com/',
    url: 'https://example.com/',
    specs: [
      { name: 'React', icon: FaReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Chakra UI', icon: SiChakraui },
      { name: 'Node.js · Express', icon: FaNodeJs },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'Docker', icon: SiDocker },
      { name: 'i18next', icon: SiI18Next },
    ],
  },
  {
    title: 'Wingco',
    translationKey: 'wingco',
    image: '/images/wingco.png',
    githubUrl: 'https://github.com/',
    url: 'https://example.com/',
    specs: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Chakra UI', icon: SiChakraui },
      { name: 'GraphQL · Apollo', icon: SiApollographql },
      { name: 'Redux', icon: SiRedux },
      { name: 'i18next', icon: SiI18Next },
      { name: 'Pusher', icon: SiPusher },
    ],
  },
  {
    title: 'Yet Another Avatar Creator',
    translationKey: 'avatarCreator',
    image: '/images/avatarCreator.png',
    githubUrl: 'https://github.com/',
    url: 'https://example.com/',
    specs: [
      { name: 'React', icon: FaReact },
      { name: 'Chakra UI', icon: SiChakraui },
      { name: 'Node.js / Express', icon: FaNodeJs },
      { name: 'Google APIs', icon: SiGoogledrive },
    ],
  },
  {
    title: 'Portfolio',
    translationKey: 'portfolio',
    image: '/images/portfolio.png',
    githubUrl: 'https://github.com/',
    specs: [
      { name: 'React', icon: FaReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Chakra UI', icon: SiChakraui },
      { name: 'i18next', icon: SiI18Next },
    ],
  },
  {
    title: 'TaleMe',
    translationKey: 'taleMe',
    image: '/images/taleMe.png',
    githubUrl: 'https://github.com/',
    specs: [
      { name: 'React', icon: FaReact },
      { name: 'Redux', icon: SiRedux },
      { name: 'Symfony', icon: SiSymfony },
      { name: 'PHP', icon: SiPhp },
      { name: 'Semantic UI', icon: SiSemanticui },
    ],
  },
];
