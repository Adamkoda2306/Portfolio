import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactChannels = () => {
  const contactMethods = [
    {
      id: 1,
      name: 'Email',
      icon: 'Mail',
      value: 'contact@devportfolio.pro',
      description: 'Best for detailed inquiries and formal communications',
      color: 'primary',
      action: 'mailto:contact@devportfolio.pro',
      responseTime: '< 24 hours',
      preferred: true
    },
    {
      id: 2,
      name: 'LinkedIn',
      icon: 'Linkedin',
      value: 'linkedin.com/in/devportfolio',
      description: 'Professional networking and job opportunities',
      color: 'accent',
      action: 'https://linkedin.com',
      responseTime: '< 48 hours',
      preferred: true
    },
    {
      id: 3,
      name: 'GitHub',
      icon: 'Github',
      value: 'github.com/devportfolio',
      description: 'Technical discussions and code collaboration',
      color: 'primary',
      action: 'https://github.com',
      responseTime: '< 72 hours',
      preferred: false
    },
    {
      id: 4,
      name: 'Twitter',
      icon: 'Twitter',
      value: '@devportfolio',
      description: 'Quick updates and tech community engagement',
      color: 'accent',
      action: 'https://twitter.com',
      responseTime: 'Variable',
      preferred: false
    },
    {
      id: 5,
      name: 'Phone',
      icon: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Urgent matters only, by appointment',
      color: 'warning',
      action: 'tel:+15551234567',
      responseTime: 'By appointment',
      preferred: false
    },
    {
      id: 6,
      name: 'Calendar',
      icon: 'Calendar',
      value: 'Schedule a meeting',
      description: 'Book a video call for in-depth discussions',
      color: 'success',
      action: '#',
      responseTime: 'Scheduled',
      preferred: true
    }
  ];

  const handleContactClick = (action, name) => {
    if (action?.startsWith('http') || action?.startsWith('mailto') || action?.startsWith('tel')) {
      window.open(action, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg">
            <Icon name="MessageSquare" size={20} color="var(--color-primary)" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground font-mono-heading">Contact Channels</h2>
            <p className="text-sm text-muted-foreground font-mono-code">Choose your preferred communication method</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              className={`relative p-4 md:p-5 bg-muted/50 rounded-lg border border-border hover:border-${method?.color}/50 transition-smooth group`}
            >
              {method?.preferred && (
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-accent/10 text-accent text-xs font-bold rounded font-mono-code">
                    <Icon name="Star" size={12} />
                    Preferred
                  </span>
                </div>
              )}

              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 flex items-center justify-center bg-${method?.color}/10 rounded-lg flex-shrink-0 group-hover:bg-${method?.color}/20 transition-smooth`}>
                  <Icon name={method?.icon} size={24} color={`var(--color-${method?.color})`} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base md:text-lg font-bold text-foreground font-mono-heading">{method?.name}</h3>
                  </div>
                  <p className="text-sm md:text-base text-primary font-medium font-mono-code mb-2 break-all">{method?.value}</p>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3">{method?.description}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="ExternalLink"
                      iconPosition="right"
                      onClick={() => handleContactClick(method?.action, method?.name)}
                    >
                      Connect
                    </Button>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Icon name="Clock" size={14} />
                      <span className="font-mono-code">Response: {method?.responseTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Quick Contact Tips */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 flex items-center justify-center bg-accent/10 rounded-lg">
            <Icon name="Lightbulb" size={20} color="var(--color-accent)" />
          </div>
          <h3 className="text-lg font-bold text-foreground font-mono-heading">Contact Tips</h3>
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
            <Icon name="CheckCircle" size={16} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground">Include specific details about your project or opportunity for faster response</p>
          </div>
          <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
            <Icon name="CheckCircle" size={16} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground">Mention your timeline and budget expectations for consulting inquiries</p>
          </div>
          <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
            <Icon name="CheckCircle" size={16} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground">For technical discussions, share relevant code repositories or documentation</p>
          </div>
          <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
            <Icon name="CheckCircle" size={16} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground">Use calendar booking for guaranteed meeting slots during working hours</p>
          </div>
        </div>
      </div>
      {/* Emergency Contact */}
      <div className="bg-error/10 border border-error/20 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Icon name="AlertTriangle" size={20} color="var(--color-error)" className="flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-error font-mono-cta">Urgent Technical Issues</p>
            <p className="text-xs text-error/80 mt-1">For critical production issues with existing projects, use phone contact. Please note this is reserved for emergency situations only.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactChannels;