import Icon from '../../../components/AppIcon';

const MetricCard = ({ metric }) => {
  return (
    <div className="metric-card">
      <div className="flex items-center gap-4">
        <div 
          className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-lg flex-shrink-0"
          style={{ backgroundColor: `${metric?.color}20` }}
        >
          <Icon name={metric?.icon} size={24} color={metric?.color} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="metric-value text-2xl md:text-3xl lg:text-4xl" style={{ color: metric?.color }}>
            {metric?.value}
          </div>
          <div className="metric-label mt-1">{metric?.label}</div>
          {metric?.trend && (
            <div className="flex items-center gap-1 mt-2 text-xs text-accent">
              <Icon name="TrendingUp" size={12} />
              <span className="font-mono-code">{metric?.trend}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MetricCard;