import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { WorkExperience } from '../components/WorkExperience';
import { TeachingExperience } from '../components/TeachingExperience';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WorkExperience />
      <TeachingExperience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
