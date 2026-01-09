import { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ExperienceTimeline = ({ experiences, onExperienceSelect }) => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="relative">
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>
      <div className="space-y-8 md:space-y-12">
        {experiences?.map((exp, index) => (
          <div
            key={exp?.id}
            className="relative pl-12 md:pl-20 group cursor-pointer"
            onMouseEnter={() => setHoveredId(exp?.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => onExperienceSelect(exp)}
          >
            <div className={`absolute left-0 md:left-4 w-8 h-8 md:w-12 md:h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
              hoveredId === exp?.id ? 'bg-primary scale-110' : 'bg-muted'
            }`}>
              <Icon 
                name={exp?.icon} 
                size={hoveredId === exp?.id ? 24 : 20} 
                color={hoveredId === exp?.id ? 'var(--color-primary-foreground)' : 'var(--color-primary)'} 
              />
            </div>

            <div className={`card-elevated bg-card rounded-lg p-4 md:p-6 transition-all duration-300 ${
              hoveredId === exp?.id ? 'transform translate-x-2' : ''
            }`}>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground font-mono-heading mb-1">
                    {exp?.role}
                  </h3>
                  <p className="text-sm md:text-base text-primary font-medium">{exp?.company}</p>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground font-mono-code whitespace-nowrap">
                  <Icon name="Calendar" size={16} />
                  <span>{exp?.duration}</span>
                </div>
              </div>

              <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                {exp?.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {exp?.technologies?.slice(0, 5)?.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 md:px-3 py-1 bg-muted text-accent text-xs md:text-sm rounded font-mono-code"
                  >
                    {tech}
                  </span>
                ))}
                {exp?.technologies?.length > 5 && (
                  <span className="px-2 md:px-3 py-1 bg-primary/10 text-primary text-xs md:text-sm rounded font-mono-code">
                    +{exp?.technologies?.length - 5} more
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {exp?.metrics?.map((metric, idx) => (
                  <div key={idx} className="bg-muted rounded-lg p-3">
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-accent font-mono-heading">
                      {metric?.value}
                    </div>
                    <div className="text-xs text-muted-foreground font-mono-cta uppercase tracking-wider">
                      {metric?.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium">
                <span>View Details</span>
                <Icon 
                  name="ChevronRight" 
                  size={16} 
                  className={`transition-transform duration-300 ${hoveredId === exp?.id ? 'translate-x-1' : ''}`} 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;