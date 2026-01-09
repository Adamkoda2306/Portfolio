import { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SystemStatsCard = () => {
  const [stats, setStats] = useState({
    cpu: 0,
    memory: 0,
    requests: 0,
    latency: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        cpu: Math.floor(Math.random() * 30) + 15,
        memory: Math.floor(Math.random() * 20) + 60,
        requests: Math.floor(Math.random() * 500) + 1500,
        latency: Math.floor(Math.random() * 20) + 45
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const systemMetrics = [
    {
      label: 'CPU Usage',
      value: `${stats?.cpu}%`,
      icon: 'Cpu',
      color: 'var(--color-primary)',
      status: stats?.cpu < 30 ? 'optimal' : 'warning'
    },
    {
      label: 'Memory',
      value: `${stats?.memory}%`,
      icon: 'HardDrive',
      color: 'var(--color-accent)',
      status: stats?.memory < 80 ? 'optimal' : 'warning'
    },
    {
      label: 'Requests/min',
      value: stats?.requests?.toLocaleString(),
      icon: 'Activity',
      color: 'var(--color-primary)',
      status: 'optimal'
    },
    {
      label: 'Avg Latency',
      value: `${stats?.latency}ms`,
      icon: 'Zap',
      color: 'var(--color-accent)',
      status: stats?.latency < 100 ? 'optimal' : 'warning'
    }
  ];

  return (
    <div className="card-elevated bg-card rounded-lg p-4 md:p-6 lg:p-8 border border-border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg">
            <Icon name="Server" size={20} color="var(--color-primary)" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold font-mono-heading text-foreground">
              System Performance
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground font-mono-code">
              Real-time monitoring
            </p>
          </div>
        </div>
        <div className="status-indicator online">
          <span className="w-2 h-2 bg-success rounded-full pulse-glow"></span>
          <span className="hidden sm:inline">Live</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {systemMetrics?.map((metric, index) => (
          <div key={index} className="bg-muted/50 rounded-lg p-4 border border-border/50">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs md:text-sm text-muted-foreground font-mono-cta uppercase tracking-wider">
                {metric?.label}
              </span>
              <Icon name={metric?.icon} size={16} color={metric?.color} />
            </div>
            <div className="text-2xl md:text-3xl font-bold font-mono-heading" style={{ color: metric?.color }}>
              {metric?.value}
            </div>
            <div className="mt-2 h-1 bg-background rounded-full overflow-hidden">
              <div 
                className="h-full transition-all duration-1000"
                style={{ 
                  width: metric?.label === 'CPU Usage' ? `${stats?.cpu}%` : 
                         metric?.label === 'Memory' ? `${stats?.memory}%` : '75%',
                  backgroundColor: metric?.color
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-between text-xs md:text-sm">
          <span className="text-muted-foreground font-mono-code">Last updated</span>
          <span className="text-foreground font-mono-code">
            {new Date()?.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SystemStatsCard;