import { ScrollAnimation } from './ScrollAnimation';
import { 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Brain, 
  Wrench,
  BookOpen,
  Users
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <Code className="w-6 h-6" />,
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'R'],
    color: 'accent-blue'
  },
  {
    title: 'Web Technologies',
    icon: <Globe className="w-6 h-6" />,
    skills: ['React', 'Node.js', 'HTML/CSS', 'REST APIs', 'GraphQL', 'WebRTC'],
    color: 'accent-green'
  },
  {
    title: 'Data & Analytics',
    icon: <Database className="w-6 h-6" />,
    skills: ['Machine Learning', 'Data Analysis', 'TensorFlow', 'Pandas', 'NumPy'],
    color: 'accent-purple'
  },
  {
    title: 'Mobile Development',
    icon: <Smartphone className="w-6 h-6" />,
    skills: ['React Native', 'iOS Development', 'Android Development', 'Flutter'],
    color: 'accent-orange'
  },
  {
    title: 'AI & Machine Learning',
    icon: <Brain className="w-6 h-6" />,
    skills: ['Neural Networks', 'Computer Vision', 'NLP', 'Deep Learning', 'MLOps'],
    color: 'accent-yellow'
  },
  {
    title: 'Tools & Platforms',
    icon: <Wrench className="w-6 h-6" />,
    skills: ['Git', 'Docker', 'AWS', 'Firebase', 'Jenkins', 'Kubernetes'],
    color: 'primary'
  },
  {
    title: 'Teaching & Mentoring',
    icon: <BookOpen className="w-6 h-6" />,
    skills: ['Curriculum Design', 'Student Mentoring', 'Workshop Facilitation', 'Course Development'],
    color: 'accent-green'
  },
  {
    title: 'Leadership',
    icon: <Users className="w-6 h-6" />,
    skills: ['Team Management', 'Project Leadership', 'Cross-functional Collaboration', 'Agile Methodologies'],
    color: 'accent-blue'
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit built through academic research, industry experience, 
              and continuous learning in technology and education.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <ScrollAnimation key={category.title} delay={index * 100}>
              <div className="card-elevated rounded-2xl p-6 h-full group hover:shadow-xl transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl bg-${category.color}/10 flex items-center justify-center text-${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};