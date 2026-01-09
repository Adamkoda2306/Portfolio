import Icon from '../../../components/AppIcon';

const AvailabilityStatus = () => {
  const currentDate = new Date();
  const currentHour = currentDate?.getHours();
  
  // Determine availability based on time (9 AM - 6 PM working hours)
  const isAvailable = currentHour >= 9 && currentHour < 18;
  
  const statusConfig = {
    available: {
      status: 'Available',
      message: 'Currently online and responsive',
      color: 'success',
      icon: 'CheckCircle',
      responseTime: '< 2 hours'
    },
    away: {
      status: 'Away',
      message: 'Outside working hours',
      color: 'warning',
      icon: 'Clock',
      responseTime: '< 24 hours'
    }
  };

  const currentStatus = isAvailable ? statusConfig?.available : statusConfig?.away;

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM EST' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const responseTimesByType = [
    {
      type: 'Job Opportunities',
      icon: 'Briefcase',
      time: '24-48 hours',
      priority: 'High'
    },
    {
      type: 'Technical Discussions',
      icon: 'Code',
      time: '2-4 hours',
      priority: 'High'
    },
    {
      type: 'Speaking Engagements',
      icon: 'Mic',
      time: '48-72 hours',
      priority: 'Medium'
    },
    {
      type: 'Mentorship Requests',
      icon: 'Users',
      time: '3-5 days',
      priority: 'Medium'
    },
    {
      type: 'General Inquiries',
      icon: 'Mail',
      time: '5-7 days',
      priority: 'Low'
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'text-success';
      case 'Medium':
        return 'text-warning';
      case 'Low':
        return 'text-muted-foreground';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Current Status Card */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg">
            <Icon name="Activity" size={20} color="var(--color-primary)" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground font-mono-heading">Current Status</h3>
            <p className="text-xs text-muted-foreground font-mono-code">Real-time availability</p>
          </div>
        </div>

        <div className={`flex items-center gap-3 p-4 bg-${currentStatus?.color}/10 border border-${currentStatus?.color}/20 rounded-lg`}>
          <div className="relative">
            <Icon name={currentStatus?.icon} size={24} color={`var(--color-${currentStatus?.color})`} />
            {isAvailable && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full pulse-glow"></span>
            )}
          </div>
          <div className="flex-1">
            <p className={`text-${currentStatus?.color} font-bold font-mono-cta`}>{currentStatus?.status}</p>
            <p className="text-sm text-muted-foreground">{currentStatus?.message}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Response time</p>
            <p className={`text-sm font-bold text-${currentStatus?.color} font-mono-code`}>{currentStatus?.responseTime}</p>
          </div>
        </div>
      </div>
      {/* Working Hours */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 flex items-center justify-center bg-accent/10 rounded-lg">
            <Icon name="Calendar" size={20} color="var(--color-accent)" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground font-mono-heading">Working Hours</h3>
            <p className="text-xs text-muted-foreground font-mono-code">Eastern Standard Time (EST)</p>
          </div>
        </div>

        <div className="space-y-3">
          {workingHours?.map((schedule, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <span className="text-sm font-medium text-foreground font-mono-cta">{schedule?.day}</span>
              <span className="text-sm text-muted-foreground font-mono-code">{schedule?.hours}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Response Times by Inquiry Type */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 flex items-center justify-center bg-warning/10 rounded-lg">
            <Icon name="Clock" size={20} color="var(--color-warning)" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground font-mono-heading">Response Times</h3>
            <p className="text-xs text-muted-foreground font-mono-code">Expected turnaround by inquiry type</p>
          </div>
        </div>

        <div className="space-y-3">
          {responseTimesByType?.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-smooth">
              <div className="w-8 h-8 flex items-center justify-center bg-primary/10 rounded-lg flex-shrink-0">
                <Icon name={item?.icon} size={16} color="var(--color-primary)" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground font-mono-cta truncate">{item?.type}</p>
                <p className="text-xs text-muted-foreground font-mono-code">{item?.time}</p>
              </div>
              <span className={`text-xs font-bold ${getPriorityColor(item?.priority)} font-mono-code whitespace-nowrap`}>
                {item?.priority}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Timezone Info */}
      <div className="bg-muted/50 rounded-lg border border-border p-4">
        <div className="flex items-start gap-3">
          <Icon name="Globe" size={20} color="var(--color-accent)" className="flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground font-mono-cta">Timezone Information</p>
            <p className="text-xs text-muted-foreground mt-1">All times are in Eastern Standard Time (EST, UTC-5). I work with clients globally and can accommodate different timezones for important discussions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityStatus;