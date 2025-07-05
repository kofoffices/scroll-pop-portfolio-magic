import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  teamSize?: number;
  teammates?: string[];
  githubUrl?: string;
  icon?: React.ReactNode;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  features,
  teamSize,
  teammates,
  githubUrl,
  icon
}) => {
  return (
    <div className="card-elevated rounded-2xl p-8 space-y-6 group h-full">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          {/* Project Icon */}
          {icon && (
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-primary/10 flex items-center justify-center text-primary">
              {icon}
            </div>
          )}
          
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            {subtitle && (
              <p className="text-muted-foreground font-medium">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        
        {/* GitHub Link */}
        {githubUrl && (
          <a
            href={githubUrl}
            className="p-2 rounded-lg hover:bg-muted transition-colors group/link"
            aria-label="View on GitHub"
          >
            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover/link:text-primary transition-colors" />
          </a>
        )}
      </div>
      
      {/* Description */}
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
      
      {/* Features */}
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span className="text-muted-foreground leading-relaxed">{feature}</span>
          </div>
        ))}
      </div>
      
      {/* Team Information */}
      {(teamSize || teammates) && (
        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            {teamSize && (
              <>
                <span className="font-medium">Team size:</span> {teamSize}
                {teammates && teammates.length > 0 && (
                  <>
                    {' '}(along with{' '}
                    {teammates.map((teammate, index) => (
                      <span key={index}>
                        <span className="text-primary font-medium">{teammate}</span>
                        {index < teammates.length - 1 && 
                          (index === teammates.length - 2 ? ' and ' : ', ')
                        }
                      </span>
                    ))}
                    )
                  </>
                )}
              </>
            )}
          </p>
        </div>
      )}
    </div>
  );
};