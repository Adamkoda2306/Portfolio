import Icon from '../../../components/AppIcon';

const ProjectStats = ({ totalProjects, activeProjects, technologies, totalCommits }) => {
  const stats = [
    {
      icon: 'Folder',
      label: 'Total Projects',
      value: totalProjects,
      color: 'var(--color-primary)',
      bgColor: 'bg-primary/10'
    },
    {
      icon: 'Code',
      label: 'Technologies',
      value: technologies,
      color: 'var(--color-accent)',
      bgColor: 'bg-accent/10'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
      {stats?.map((stat, index) => (
        <div key={index} className="metric-card">
          <div className={`w-12 h-12 md:w-16 md:h-16 flex items-center justify-center ${stat?.bgColor} rounded-lg mb-3 md:mb-4`}>
            <Icon name={stat?.icon} size={24} color={stat?.color} />
          </div>
          <div className="metric-value text-3xl md:text-4xl">{stat?.value}</div>
          <div className="metric-label mt-1">{stat?.label}</div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;