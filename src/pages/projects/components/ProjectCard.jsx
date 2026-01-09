import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Production':
        return 'bg-success/10 text-success';
      case 'Development':
        return 'bg-warning/10 text-warning';
      case 'Archived':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-primary/10 text-primary';
    }
  };

  return (
    <div className="card-elevated bg-card rounded-lg border border-border overflow-hidden transition-smooth">
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden bg-muted">
        <Image
          src={project?.image}
          alt={project?.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <span className={`status-indicator ${getStatusColor(project?.status)}`}>
            <span className="w-2 h-2 bg-current rounded-full pulse-glow"></span>
            {project?.status}
          </span>
        </div>
      </div>
      <div className="p-4 md:p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground font-mono-heading mb-2 line-clamp-2">
              {project?.title}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground line-clamp-3 mb-4">
              {project?.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-4">
          <div className="metric-card">
            <div className="flex items-center gap-2 mb-1">
              <Icon name="Users" size={16} color="var(--color-primary)" />
              <span className="text-xs text-muted-foreground font-mono-cta">Team Size</span>
            </div>
            <div className="text-xl md:text-2xl font-bold text-primary font-mono-heading">
              {project?.teamSize}
            </div>
          </div>

          <div className="metric-card">
            <div className="flex items-center gap-2 mb-1">
              <Icon name="Calendar" size={16} color="var(--color-accent)" />
              <span className="text-xs text-muted-foreground font-mono-cta">Duration</span>
            </div>
            <div className="text-xl md:text-2xl font-bold text-accent font-mono-heading">
              {project?.duration}
            </div>
          </div>

          <div className="metric-card col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-1">
              <Icon name="TrendingUp" size={16} color="var(--color-success)" />
              <span className="text-xs text-muted-foreground font-mono-cta">Performance</span>
            </div>
            <div className="text-xl md:text-2xl font-bold text-success font-mono-heading whitespace-nowrap">
              {project?.performanceImprovement}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <Icon name="Code" size={16} color="var(--color-foreground)" />
            <span className="text-xs text-muted-foreground font-mono-cta uppercase tracking-wider">
              Tech Stack
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project?.technologies?.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-muted text-foreground text-xs font-mono-code rounded-lg border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {isExpanded && (
          <div className="space-y-4 mb-4 animate-in fade-in duration-300">
            <div className="code-block">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground font-mono-cta uppercase tracking-wider">
                  Key Achievements
                </span>
              </div>
              <ul className="space-y-2">
                {project?.achievements?.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                    <Icon name="CheckCircle2" size={16} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project?.metrics?.map((metric, index) => (
                <div key={index} className="metric-card">
                  <div className="text-sm text-muted-foreground mb-1 font-mono-cta">
                    {metric?.label}
                  </div>
                  <div className="text-2xl font-bold text-primary font-mono-heading">
                    {metric?.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            fullWidth
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </Button>
          <Button
            variant="default"
            fullWidth
            iconName="ExternalLink"
            iconPosition="right"
            onClick={() => onViewDetails(project)}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;