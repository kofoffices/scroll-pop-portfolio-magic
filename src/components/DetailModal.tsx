import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from './ui/dialog';
import { Badge } from './ui/badge';
import { ExternalLink, X, Github, Calendar, Users, Clock } from 'lucide-react';
import { useEffect } from 'react';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title: string;
    subtitle?: string;
    company?: string;
    position?: string;
    location?: string;
    duration?: string;
    description: string;
    backgroundImage?: string;
    logo?: string;
    links?: {
      live?: string;
      github?: string;
      demo?: string;
    };
    techStack?: string[];
    features?: string[];
    responsibilities?: string[];
    overview?: string;
    setup?: string;
    metrics?: {
      label: string;
      value: string;
    }[];
    teamSize?: number;
    teammates?: string[];
    quote?: string;
    customSections?: {
      title: string;
      content: string[];
    }[];
  };
}

export const DetailModal: React.FC<DetailModalProps> = ({ isOpen, onClose, data }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const techStackColors = {
    'React': 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
    'TypeScript': 'bg-accent-purple/10 text-accent-purple border-accent-purple/20',
    'Next.js': 'bg-foreground/10 text-foreground border-border',
    'Tailwind': 'bg-accent-green/10 text-accent-green border-accent-green/20',
    'Node.js': 'bg-accent-green/10 text-accent-green border-accent-green/20',
    'Python': 'bg-accent-yellow/10 text-accent-yellow border-accent-yellow/20',
    'C++': 'bg-accent-orange/10 text-accent-orange border-accent-orange/20',
    'JavaScript': 'bg-accent-yellow/10 text-accent-yellow border-accent-yellow/20',
    'CSS': 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
    'HTML': 'bg-accent-orange/10 text-accent-orange border-accent-orange/20'
  };

  const getTechStackStyle = (tech: string) => {
    return techStackColors[tech as keyof typeof techStackColors] || 'bg-muted text-muted-foreground border-border';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0">
        {/* Header Section with Background */}
        <div className="relative">
          {data.backgroundImage && (
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${data.backgroundImage})` }}
            />
          )}
          <div className="relative bg-gradient-vibrant/10 p-8">
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 z-10">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
            
            <div className="flex items-start gap-6">
              {data.logo && (
                <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden bg-card border border-card-border flex items-center justify-center">
                  <img 
                    src={data.logo} 
                    alt={`${data.company || data.title} logo`}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              )}
              
              <div className="flex-1 space-y-2">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold">
                    {data.title}
                  </DialogTitle>
                  {data.subtitle && (
                    <p className="text-lg text-muted-foreground">{data.subtitle}</p>
                  )}
                  {data.company && (
                    <p className="text-xl font-semibold text-primary">{data.company}</p>
                  )}
                  {data.position && (
                    <p className="text-lg text-muted-foreground">{data.position}</p>
                  )}
                </DialogHeader>
                
                {/* Quick Info */}
                <div className="flex flex-wrap gap-4 pt-2">
                  {data.location && (
                    <span className="text-sm text-muted-foreground">{data.location}</span>
                  )}
                  {data.duration && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {data.duration}
                    </div>
                  )}
                  {data.teamSize && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      Team of {data.teamSize}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-8">
          {/* Links Section */}
          {data.links && Object.keys(data.links).length > 0 && (
            <div className="flex flex-wrap gap-3">
              {data.links.live && (
                <a
                  href={data.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {data.links.github && (
                <a
                  href={data.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
              {data.links.demo && (
                <a
                  href={data.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              )}
            </div>
          )}

          {/* Tech Stack */}
          {data.techStack && data.techStack.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-blue rounded-full"></span>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.techStack.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className={`${getTechStackStyle(tech)} font-medium`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Overview */}
          {(data.overview || data.description) && (
            <div className="space-y-3">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-green rounded-full"></span>
                Overview
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {data.overview || data.description}
              </p>
            </div>
          )}

          {/* Features */}
          {data.features && data.features.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-purple rounded-full"></span>
                Key Features
              </h3>
              <ul className="space-y-2">
                {data.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Responsibilities */}
          {data.responsibilities && data.responsibilities.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-orange rounded-full"></span>
                Key Responsibilities
              </h3>
              <ul className="space-y-2">
                {data.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Metrics */}
          {data.metrics && data.metrics.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-yellow rounded-full"></span>
                Key Metrics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.metrics.map((metric, index) => (
                  <div key={index} className="bg-muted/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Team Information */}
          {(data.teammates && data.teammates.length > 0) && (
            <div className="space-y-3">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-purple rounded-full"></span>
                Team
              </h3>
              <p className="text-muted-foreground">
                Collaborated with{' '}
                {data.teammates.map((teammate, index) => (
                  <span key={index}>
                    <span className="text-primary font-medium">{teammate}</span>
                    {index < data.teammates!.length - 1 && 
                      (index === data.teammates!.length - 2 ? ' and ' : ', ')
                    }
                  </span>
                ))}
              </p>
            </div>
          )}

          {/* Quote */}
          {data.quote && (
            <div className="bg-gradient-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <blockquote className="text-lg italic text-muted-foreground">
                "{data.quote}"
              </blockquote>
            </div>
          )}

          {/* Custom Sections */}
          {data.customSections && data.customSections.map((section, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};