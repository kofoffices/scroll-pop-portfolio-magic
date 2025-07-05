import { ScrollAnimation } from './ScrollAnimation';
import { ExperienceCard } from './ExperienceCard';
import { DetailModal } from './DetailModal';
import { useState } from 'react';

const workExperiences = [
  {
    company: 'Google',
    position: 'Software Engineer',
    location: 'San Francisco Bay Area, California, United States',
    duration: 'July 2021 - Present',
    description: "Working on Cloud Spanner - Google's horizontally scalable distributed relational database. Developing software to improve reliability and observability of the system.",
    logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
    modalData: {
      title: 'Software Engineer',
      company: 'Google',
      location: 'San Francisco Bay Area, California, United States',
      duration: 'July 2021 - Present',
      description: "Working on Cloud Spanner - Google's horizontally scalable distributed relational database.",
      logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
      overview: "As a Software Engineer at Google, I work on Cloud Spanner, Google's globally distributed, horizontally scalable, relational database service. My role focuses on developing software solutions to improve the reliability, observability, and performance of this critical infrastructure.",
      techStack: ['C++', 'Python', 'Go', 'Distributed Systems', 'SQL', 'Monitoring'],
      responsibilities: [
        'Develop and maintain software for Cloud Spanner\'s reliability and observability infrastructure',
        'Design and implement monitoring solutions for distributed database systems',
        'Collaborate with cross-functional teams to improve system performance and reliability',
        'Write high-quality, well-tested code following Google\'s engineering standards',
        'Participate in code reviews and technical design discussions',
        'Troubleshoot and resolve complex distributed system issues'
      ],
      metrics: [
        { label: 'System Reliability', value: '99.999%' },
        { label: 'Global Regions', value: '30+' },
        { label: 'Team Size', value: '15+' }
      ]
    }
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
    ],
    modalData: {
      title: 'Software Engineer Intern',
      company: 'Google',
      location: 'Mountain View, California, United States',
      duration: 'May 2020 - August 2020',
      description: 'Worked on 4G/LTE Evolved Packet Core (EPC) distributed system in Google Fi team.',
      logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
      overview: "During my internship at Google, I worked on the Google Fi team focusing on the 4G/LTE Evolved Packet Core (EPC) distributed system. This critical infrastructure powers Google's mobile virtual network operator service.",
      techStack: ['C++', 'Distributed Systems', 'RPC', 'Network Protocols', '4G/LTE'],
      responsibilities: [
        'Increased speed of mastership change by 7% by implementing a new remote procedure call (RPC) service in C++',
        'Reduced network latencies and improved system efficiency through optimized data structures',
        'Collaborated with senior engineers to design and implement scalable solutions for telecom infrastructure',
        'Analyzed system performance and identified optimization opportunities',
        'Participated in team standups and technical discussions'
      ],
      metrics: [
        { label: 'Performance Improvement', value: '7%' },
        { label: 'Project Duration', value: '3 months' },
        { label: 'Code Reviews', value: '50+' }
      ],
      quote: "This internship gave me invaluable experience working on large-scale distributed systems and collaborating with world-class engineers."
    }
  }
];

export const WorkExperience = () => {
  const [selectedExperience, setSelectedExperience] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExperienceClick = (experience: any) => {
    setSelectedExperience(experience.modalData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

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
              <ExperienceCard 
                {...experience} 
                onClick={() => handleExperienceClick(experience)}
                clickable={true}
              />
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {selectedExperience && (
        <DetailModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          data={selectedExperience}
        />
      )}
    </section>
  );
};