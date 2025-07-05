import { ScrollAnimation } from './ScrollAnimation';
import { ExperienceCard } from './ExperienceCard';

const teachingExperiences = [
  {
    company: 'University of Southern California',
    position: 'Course Producer, CSCI 270: Introduction to Algorithms and Theory of Computing',
    location: 'Los Angeles, United States',
    duration: 'Aug 2020 - May 2021',
    description: 'Responsible for co-leading discussions, holding office hours and grading exams.',
    logo: 'https://www.usc.edu/favicon.ico'
  },
  {
    company: 'Indraprastha Institute of Information Technology',
    position: 'Teaching Assistant, CSE 102: Data Structures and Algorithms',
    location: 'Delhi, India',
    duration: 'Jan 2018 - April 2018',
    description: 'Led two weekly tutorials, graded submissions, assisted in labs and held discussion sessions.',
    logo: 'https://www.iiitd.ac.in/sites/default/files/images/logo/style1/iiitd-logo.png'
  }
];

export const TeachingExperience = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto">
        <ScrollAnimation animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Teaching <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
        </ScrollAnimation>
        
        <div className="space-y-8">
          {teachingExperiences.map((experience, index) => (
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