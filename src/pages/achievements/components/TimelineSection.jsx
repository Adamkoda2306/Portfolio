import { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TimelineSection = ({ achievements }) => {
  const [selectedYear, setSelectedYear] = useState('all');

  const years = ['all', ...new Set(achievements.map(a => new Date(a.date).getFullYear()))]?.sort((a, b) => {
    if (a === 'all') return -1;
    if (b === 'all') return 1;
    return b - a;
  });

  const filteredAchievements = selectedYear === 'all' 
    ? achievements 
    : achievements?.filter(a => new Date(a.date)?.getFullYear() === selectedYear);

  const groupedByYear = filteredAchievements?.reduce((acc, achievement) => {
    const year = new Date(achievement.date)?.getFullYear();
    if (!acc?.[year]) acc[year] = [];
    acc?.[year]?.push(achievement);
    return acc;
  }, {});

  return (
    <div className="metric-card">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h3 className="text-xl font-bold text-foreground font-mono-heading">
          Achievement Timeline
        </h3>
        <div className="flex flex-wrap gap-2">
          {years?.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-lg text-sm font-mono-cta transition-smooth ${
                selectedYear === year
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {year === 'all' ? 'All Years' : year}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-8">
        {Object.entries(groupedByYear)?.sort(([a], [b]) => b - a)?.map(([year, yearAchievements]) => (
            <div key={year}>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl font-bold text-primary font-mono-heading">
                  {year}
                </div>
                <div className="flex-1 h-px bg-border"></div>
                <div className="text-sm text-muted-foreground font-mono-code">
                  {yearAchievements?.length} achievement{yearAchievements?.length !== 1 ? 's' : ''}
                </div>
              </div>

              <div className="space-y-4 pl-4 md:pl-8 border-l-2 border-border">
                {yearAchievements?.sort((a, b) => new Date(b.date) - new Date(a.date))?.map((achievement, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-[21px] md:-left-[37px] w-3 h-3 bg-primary rounded-full ring-4 ring-background"></div>
                      
                      <div className="bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-smooth">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h4 className="text-base font-semibold text-foreground font-mono-heading">
                            {achievement?.title}
                          </h4>
                          {achievement?.verified && (
                            <Icon name="CheckCircle" size={16} color="var(--color-accent)" />
                          )}
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {achievement?.description}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-mono-code">
                          <span>{achievement?.date}</span>
                          {achievement?.organization && (
                            <>
                              <span>•</span>
                              <span>{achievement?.organization}</span>
                            </>
                          )}
                          {achievement?.metric && (
                            <>
                              <span>•</span>
                              <span className="text-accent">{achievement?.metric}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TimelineSection;