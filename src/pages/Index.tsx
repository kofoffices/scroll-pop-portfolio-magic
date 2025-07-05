import { HeroSection } from '../components/HeroSection';
import { WorkExperience } from '../components/WorkExperience';
import { TeachingExperience } from '../components/TeachingExperience';
import { Projects } from '../components/Projects';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WorkExperience />
      <TeachingExperience />
      <Projects />
    </div>
  );
};

export default Index;
