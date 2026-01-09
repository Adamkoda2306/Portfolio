import { useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ExperienceDetailModal = ({ experience, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!experience) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm">
      <div className="bg-card rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-card border-b border-border p-4 md:p-6 flex items-center justify-between z-10">
          <h3 className="text-xl md:text-2xl font-bold text-foreground font-mono-heading">
            {experience?.role}
          </h3>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg bg-muted hover:bg-destructive/10 flex items-center justify-center transition-all duration-300 group"
            aria-label="Close modal"
          >
            <Icon 
              name="X" 
              size={20} 
              className="text-muted-foreground group-hover:text-destructive transition-colors" 
            />
          </button>
        </div>

        <div className="p-4 md:p-6 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pb-4 border-b border-border">
            <div>
              <p className="text-lg text-primary font-medium mb-1">{experience?.company}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono-code">
                <Icon name="Calendar" size={16} />
                <span>{experience?.duration}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon name="MapPin" size={16} />
              <span>{experience?.location}</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground font-mono-heading mb-3 flex items-center gap-2">
              <Icon name="FileText" size={20} color="var(--color-primary)" />
              Overview
            </h4>
            <p className="text-base text-muted-foreground leading-relaxed">
              {experience?.fullDescription}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground font-mono-heading mb-3 flex items-center gap-2">
              <Icon name="Target" size={20} color="var(--color-accent)" />
              Key Achievements
            </h4>
            <ul className="space-y-3">
              {experience?.achievements?.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="CheckCircle2" size={14} color="var(--color-accent)" />
                  </div>
                  <span className="text-sm md:text-base text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground font-mono-heading mb-3 flex items-center gap-2">
              <Icon name="Code" size={20} color="var(--color-primary)" />
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience?.technologies?.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-muted text-accent text-sm rounded font-mono-code"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground font-mono-heading mb-3 flex items-center gap-2">
              <Icon name="TrendingUp" size={20} color="var(--color-accent)" />
              Impact Metrics
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {experience?.metrics?.map((metric, idx) => (
                <div key={idx} className="metric-card">
                  <div className="metric-value">{metric?.value}</div>
                  <div className="metric-label">{metric?.label}</div>
                </div>
              ))}
            </div>
          </div>

          {experience?.testimonial && (
            <div className="bg-muted rounded-lg p-4 md:p-6">
              <div className="flex items-start gap-3 mb-3">
                <Icon name="Quote" size={24} color="var(--color-primary)" />
                <div>
                  <p className="text-sm md:text-base text-foreground italic leading-relaxed mb-3">
                    &ldquo;{experience?.testimonial?.quote}&rdquo;
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-primary">{experience?.testimonial?.author}</span>
                    {' '}&mdash; {experience?.testimonial?.role}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetailModal;