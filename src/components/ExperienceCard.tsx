interface ExperienceCardProps {
  company: string;
  position: string;
  location: string;
  duration: string;
  description: string;
  logo?: string;
  responsibilities?: string[];
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  position,
  location,
  duration,
  description,
  logo,
  responsibilities
}) => {
  return (
    <div className="card-elevated rounded-2xl p-8 space-y-6 group">
      <div className="flex items-start gap-6">
        {/* Company Logo */}
        {logo && (
          <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-muted flex items-center justify-center">
            <img 
              src={logo} 
              alt={`${company} logo`}
              className="w-12 h-12 object-contain"
            />
          </div>
        )}
        
        {/* Experience Details */}
        <div className="flex-1 space-y-3">
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {position}
            </h3>
            <p className="text-lg font-semibold text-primary">
              {company}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-muted-foreground">
              <span>{location}</span>
              <span className="hidden sm:inline">•</span>
              <span className="font-medium italic">{duration}</span>
            </div>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
          
          {responsibilities && responsibilities.length > 0 && (
            <ul className="space-y-2 text-muted-foreground">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="leading-relaxed">{responsibility}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};