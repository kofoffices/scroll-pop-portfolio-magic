import { ScrollAnimation } from './ScrollAnimation';
import { ExperienceCard } from './ExperienceCard';

const workExperiences = [
  {
    company: 'Google',
    position: 'Software Engineer',
    location: 'San Francisco Bay Area, California, United States',
    duration: 'July 2021 - Present',
    description: "Working on Cloud Spanner - Google's horizontally scalable distributed relational database. Developing software to improve reliability and observability of the system.",
    logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
  },
  {
    company: 'Google',
    position: 'Software Engineer Intern',
    location: 'Mountain View, California, United States',
    duration: 'May 2020 - August 2020',
    description: 'Worked on 4G/LTE Evolved Packet Core (EPC) distributed system in Google Fi team:',
    responsibilities: [
      'Increased speed of mastership change by 7% by implementing a new remote procedure call (RPC) service in C++',
      'Reduced network latencies and improved system efficiency through optimized data structures',
      'Collaborated with senior engineers to design and implement scalable solutions for telecom infrastructure'
    ]
  }
];

export const WorkExperience = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <ScrollAnimation animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
        </ScrollAnimation>
        
        <div className="space-y-8">
          {workExperiences.map((experience, index) => (
            <ScrollAnimation 
              key={index}
              animation="fadeInUp" 
              delay={index * 200}
            >
              <ExperienceCard {...experience} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};