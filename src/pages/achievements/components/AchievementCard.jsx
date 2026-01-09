import Icon from '../../../components/AppIcon';

const AchievementCard = ({ achievement }) => {
  const getIconForType = (type) => {
    const iconMap = {
      certification: 'Award',
      speaking: 'Mic',
      opensource: 'GitBranch',
      writing: 'FileText',
      recognition: 'Trophy'
    };
    return iconMap?.[type] || 'Star';
  };

  const getColorForType = (type) => {
    const colorMap = {
      certification: 'var(--color-primary)',
      speaking: 'var(--color-accent)',
      opensource: 'var(--color-warning)',
      writing: 'var(--color-primary)',
      recognition: 'var(--color-accent)'
    };
    return colorMap?.[type] || 'var(--color-primary)';
  };

  return (
    <div className="metric-card transition-smooth hover:shadow-lg">
      <div className="flex items-start gap-4">
        <div 
          className="w-12 h-12 flex items-center justify-center rounded-lg flex-shrink-0"
          style={{ backgroundColor: `${getColorForType(achievement?.type)}20` }}
        >
          <Icon 
            name={getIconForType(achievement?.type)} 
            size={24} 
            color={getColorForType(achievement?.type)} 
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-lg font-bold text-foreground font-mono-heading">
              {achievement?.title}
            </h3>
            {achievement?.verified && (
              <div className="status-indicator online flex-shrink-0">
                <Icon name="CheckCircle" size={14} />
                <span>Verified</span>
              </div>
            )}
          </div>
          
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {achievement?.description}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-mono-code mb-3">
            <div className="flex items-center gap-1">
              <Icon name="Calendar" size={14} />
              <span>{achievement?.date}</span>
            </div>
            {achievement?.organization && (
              <div className="flex items-center gap-1">
                <Icon name="Building" size={14} />
                <span>{achievement?.organization}</span>
              </div>
            )}
            {achievement?.metric && (
              <div className="flex items-center gap-1">
                <Icon name="TrendingUp" size={14} />
                <span>{achievement?.metric}</span>
              </div>
            )}
          </div>
          
          {achievement?.verificationUrl && (
            <a
              href={achievement?.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-smooth font-mono-cta"
            >
              <Icon name="ExternalLink" size={16} />
              <span>Verify Credential</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;