/* eslint-disable react/jsx-props-no-spreading */
import { Wrap, WrapItem, useBreakpointValue, chakra } from '@chakra-ui/react';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import SectionContainer from './SectionContainer';

const ProjectsContent = () => {
  const useCarousel = useBreakpointValue({ base: false, lg: true });
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1985 },
      items: 3,
      slidesToSlide: 1,
    },
    smallDesktop: {
      breakpoint: { max: 1985, min: 1525 },
      items: 2,
      slidesToSlide: 1,
    },
    superSmallDesktop: {
      breakpoint: { max: 1525, min: 992 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const ChakraCarousel = chakra(Carousel);
  return (
    <SectionContainer bgColor="#F7F7FF" sectionTitle="Projects">
      {useCarousel ? (
        <ChakraCarousel responsive={responsive} height={{ lg: '100%' }} p={10} showDots centerMode>
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
        </ChakraCarousel>
      ) : (
        <Wrap spacing={5} justify="center" align="center" p={3}>
          {projects.map((project) => (
            <WrapItem key={project.title}>
              <ProjectCard
                key={project.title}
                image={project.image}
                name={project.title}
                description={project.description}
                url={project.url}
                specs={project.skills}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </SectionContainer>
  );
};
export default ProjectsContent;
