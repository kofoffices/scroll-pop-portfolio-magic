import { Github, Linkedin } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-subtle">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            <ScrollAnimation animation="slideInLeft">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Hi, I'm <span className="text-gradient">Hasan</span>
                </h1>
                
                <div className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                  I'm a <span className="text-primary font-semibold">Software Engineer</span> at{' '}
                  <span className="text-primary font-semibold">Google</span>, San Francisco Bay Area, California. 
                  I received my master's degree in Computer Science from the{' '}
                  <span className="text-primary font-semibold">University of Southern California</span>, and 
                  my bachelor's degree in Computer Science from{' '}
                  <span className="text-primary font-semibold">IIIT-Delhi</span>.
                </div>
                
                <div className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  I enjoy solving problems, developing stuff, and learning new things. 
                  Outside of work, I can usually be found listening to music or playing an instrument.
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <p className="text-muted-foreground">
                    You can check out some of my work below, or head over to{' '}
                    <a 
                      href="#" 
                      className="text-primary hover:text-primary-glow transition-colors font-medium underline decoration-primary/30 hover:decoration-primary"
                    >
                      my GitHub profile
                    </a>.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            
            {/* Social Links */}
            <ScrollAnimation animation="slideInLeft" delay={200}>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 rounded-xl bg-card border border-card-border hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                >
                  <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-xl bg-card border border-card-border hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                >
                  <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </ScrollAnimation>
          </div>
          
          {/* Profile Image */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <ScrollAnimation animation="slideInRight" delay={400}>
              <div className="relative">
                <div className="w-72 h-72 rounded-full overflow-hidden card-elevated group">
                  <img
                    src="/lovable-uploads/5a4ff0de-b6c6-41e1-835d-02a10854573b.png"
                    alt="Hasan's Profile"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Decorative glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-xl -z-10 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};