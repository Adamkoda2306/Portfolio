import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectDetailsModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'FileText' },
    { id: 'architecture', label: 'Architecture', icon: 'Network' },
    { id: 'performance', label: 'Performance', icon: 'Activity' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm">
      <div className="bg-card rounded-lg border border-border w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-border">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <Icon name="Folder" size={24} color="var(--color-primary)" />
            <h2 className="text-xl md:text-2xl font-bold text-foreground font-mono-heading line-clamp-1">
              {project?.title}
            </h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            iconName="X"
          />
        </div>

        <div className="border-b border-border overflow-x-auto">
          <div className="flex gap-1 p-2 min-w-max">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-smooth flex-shrink-0 ${
                  activeTab === tab?.id
                    ? 'bg-primary/10 text-primary' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span className="whitespace-nowrap">{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="h-[28rem] md:h-[32rem] lg:h-[36rem] overflow-y-auto p-4 md:p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
                <Image
                  src={project?.image}
                  alt={project?.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-foreground font-mono-heading mb-3">
                  Project Description
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {project?.fullDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="metric-card">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Users" size={20} color="var(--color-primary)" />
                    <span className="text-sm text-muted-foreground font-mono-cta">Team Size</span>
                  </div>
                  <div className="text-3xl font-bold text-primary font-mono-heading">
                    {project?.teamSize}
                  </div>
                </div>

                <div className="metric-card">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Calendar" size={20} color="var(--color-accent)" />
                    <span className="text-sm text-muted-foreground font-mono-cta">Duration</span>
                  </div>
                  <div className="text-3xl font-bold text-accent font-mono-heading">
                    {project?.duration}
                  </div>
                </div>

                <div className="metric-card">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="TrendingUp" size={20} color="var(--color-success)" />
                    <span className="text-sm text-muted-foreground font-mono-cta">Performance</span>
                  </div>
                  <div className="text-3xl font-bold text-success font-mono-heading whitespace-nowrap">
                    {project?.performanceImprovement}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-foreground font-mono-heading mb-3">
                  Key Achievements
                </h3>
                <ul className="space-y-3">
                  {project?.achievements?.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm md:text-base text-foreground">
                      <Icon name="CheckCircle2" size={20} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-foreground font-mono-heading mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project?.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-muted text-foreground text-sm font-mono-code rounded-lg border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Github"
                  iconPosition="left"
                  onClick={() => window.open(project?.githubUrl, '_blank')}
                >
                  View on GitHub
                </Button>
                {project?.liveDemo && (
                  <Button
                    variant="default"
                    fullWidth
                    iconName="ExternalLink"
                    iconPosition="right"
                    onClick={() => window.open(project?.liveDemo, '_blank')}
                  >
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-foreground font-mono-heading mb-3">
                  System Architecture
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  {project?.architectureDescription}
                </p>
              </div>

              <div className="code-block">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground font-mono-cta uppercase tracking-wider">
                    Database Schema
                  </span>
                  <Icon name="Database" size={20} color="var(--color-accent)" />
                </div>
                <pre className="text-xs md:text-sm text-accent font-mono-code overflow-x-auto">
                  {project?.databaseSchema}
                </pre>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-foreground font-mono-heading mb-3">
                  API Endpoints
                </h3>
                <div className="space-y-3">
                  {project?.apiEndpoints?.map((endpoint, index) => (
                    <div key={index} className="code-block">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-mono-code rounded">
                          {endpoint?.method}
                        </span>
                        <code className="text-sm text-foreground font-mono-code">
                          {endpoint?.path}
                        </code>
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        {endpoint?.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'performance' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-foreground font-mono-heading mb-3">
                  Performance Metrics
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  Comprehensive performance analysis and optimization results achieved through systematic improvements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project?.metrics?.map((metric, index) => (
                  <div key={index} className="metric-card">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Activity" size={20} color="var(--color-primary)" />
                      <span className="text-sm text-muted-foreground font-mono-cta">
                        {metric?.label}
                      </span>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-primary font-mono-heading">
                      {metric?.value}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-foreground font-mono-heading mb-3">
                  Scalability Achievements
                </h3>
                <ul className="space-y-3">
                  {project?.scalabilityStory?.map((story, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm md:text-base text-foreground">
                      <Icon name="TrendingUp" size={20} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                      <span>{story}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="code-block">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground font-mono-cta uppercase tracking-wider">
                    System Uptime
                  </span>
                  <Icon name="CheckCircle2" size={20} color="var(--color-success)" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-success font-mono-heading">
                  {project?.uptime}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;