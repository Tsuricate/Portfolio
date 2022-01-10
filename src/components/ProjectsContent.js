import { Wrap, WrapItem, useBreakpointValue, chakra, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import SectionContainer from './SectionContainer';

const ProjectsContent = () => {
  const useCarousel = useBreakpointValue({ base: false, lg: true });
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    largeDesktop: {
      breakpoint: { max: 3000, min: 2300 },
      items: 3,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 2300, min: 1700 },
      items: 2,
      slidesToSlide: 1,
    },
    smallDesktop: {
      breakpoint: { max: 1700, min: 1200 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1200, min: 992 },
      items: 0.5,
      slidesToSlide: 1,
    },
  };

  const ChakraCarousel = chakra(Carousel);
  const { t } = useTranslation();

  return (
    <SectionContainer
      background={useColorModeValue('#DAD7CD', '#505050')}
      sectionTitle={t('sectionTitle.projects')}
    >
      {useCarousel ? (
        <ChakraCarousel
          responsive={responsive}
          height={{ lg: '100%' }}
          pb={{ lg: 10 }}
          showDots
          centerMode={{ xl: true }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              image={project.image}
              name={project.title}
              description={t(project.description)}
              githubUrl={project.githubUrl}
              githubMessage={project.githubMessage}
              urlMessage={project.urlMessage}
              url={project.url}
              specs={project.skills}
            />
          ))}
        </ChakraCarousel>
      ) : (
        <Wrap spacing={5} justify="center" p={3}>
          {projects.map((project) => (
            <WrapItem key={project.title}>
              <ProjectCard
                key={project.title}
                image={project.image}
                name={project.title}
                description={t(project.description)}
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
