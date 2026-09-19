import { chakra, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import SectionContainer from './SectionContainer';

const ProjectsContent = () => {
  const useCarousel = useBreakpointValue({
    base: false,
    lg: true,
  });

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
      background='#DAD7CD'
      sectionTitle={t('sectionTitle.projects')}
    >
      {useCarousel ? (
        <ChakraCarousel
          responsive={responsive}
          height={{ lg: '100%' }}
          paddingBottom={{ lg: 10 }}
          showDots
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              image={project.image}
              name={project.title}
              description={t(project.description)}
              githubUrl={project.githubUrl}
              urlMessage=""
              url={project.url}
            />
          ))}
        </ChakraCarousel>
      ) : (
     <SimpleGrid
  columns={{ base: 1, md: 2, xl: 3 }}
  gap={5}
  justifyItems="center"
  p={3}
>
  {projects.map((project) => (
    <ProjectCard
      key={project.title}
      image={project.image}
      name={project.title}
      description={t(project.description)}
      githubUrl={project.githubUrl}
      githubMessage=""
      urlMessage=""
      url={project.url}
    />

  ))}

</SimpleGrid>
      )}
    </SectionContainer>
  );
};

export default ProjectsContent;