import { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ContributionGraph = ({ contributions }) => {
  const [selectedWeek, setSelectedWeek] = useState(null);

  const getIntensityColor = (count) => {
    if (count === 0) return 'rgba(255, 255, 255, 0.05)';
    if (count < 5) return 'rgba(0, 212, 255, 0.3)';
    if (count < 10) return 'rgba(0, 212, 255, 0.5)';
    if (count < 15) return 'rgba(0, 212, 255, 0.7)';
    return 'var(--color-primary)';
  };

  const weeks = [];
  for (let i = 0; i < 52; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      const dayIndex = i * 7 + j;
      if (dayIndex < contributions?.length) {
        week?.push(contributions?.[dayIndex]);
      }
    }
    weeks?.push(week);
  }

  return (
    <div className="metric-card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-foreground font-mono-heading mb-1">
            GitHub Contribution Activity
          </h3>
          <p className="text-sm text-muted-foreground">
            {contributions?.reduce((sum, day) => sum + day?.count, 0)} contributions in the last year
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Less</span>
          <div className="flex gap-1">
            {[0, 4, 9, 14, 20]?.map((count) => (
              <div
                key={count}
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: getIntensityColor(count) }}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">More</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="inline-flex gap-1 min-w-max">
          {weeks?.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week?.map((day, dayIndex) => (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className="w-3 h-3 md:w-4 md:h-4 rounded-sm cursor-pointer transition-smooth hover:ring-2 hover:ring-primary"
                  style={{ backgroundColor: getIntensityColor(day?.count) }}
                  onMouseEnter={() => setSelectedWeek({ week: weekIndex, day: dayIndex, data: day })}
                  onMouseLeave={() => setSelectedWeek(null)}
                  title={`${day?.count} contributions on ${day?.date}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      {selectedWeek && (
        <div className="mt-4 p-3 bg-muted rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            <Icon name="GitCommit" size={16} color="var(--color-primary)" />
            <span className="text-foreground font-mono-code">
              {selectedWeek?.data?.count} contributions on {selectedWeek?.data?.date}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContributionGraph;