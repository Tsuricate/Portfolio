import React from 'react';
import { Flex } from '@chakra-ui/react';
import SectionContainer from './SectionContainer';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const ProjectsContent = () => (
  <SectionContainer bgColor="#F46197" sectionTitle="Projects">
    <Flex
      height={{ md: '100%' }}
      p={6}
      justifyContent={{ md: 'space-between' }}
      alignItems="center"
      direction={{ base: 'column', md: 'row' }}
      overflowX={{ md: 'auto' }}
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          image={project.image}
          name={project.title}
          description={project.description}
          url={project.url}
          specs={project.skills}
        />
      ))}
    </Flex>
  </SectionContainer>
);

export default ProjectsContent;
