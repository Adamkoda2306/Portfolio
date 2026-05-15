import { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
 
const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'your-username';
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
 
const CONTRIBUTION_QUERY = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;
 
const ContributionGraph = () => {
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchContributions = async () => {
      try {
        if (!GITHUB_TOKEN) {
          throw new Error('GitHub token not found. Add VITE_GITHUB_TOKEN to your .env file');
        }
 
        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${GITHUB_TOKEN}`,
          },
          body: JSON.stringify({
            query: CONTRIBUTION_QUERY,
            variables: { username: GITHUB_USERNAME },
          }),
        });
 
        if (!response.ok) throw new Error(`GitHub API Error: ${response.status}`);
 
        const json = await response.json();
        if (json.errors) throw new Error(json.errors[0]?.message ?? 'GraphQL error');
        if (!json.data?.user) throw new Error(`User "${GITHUB_USERNAME}" not found.`);
 
        const weeks = json.data.user.contributionsCollection.contributionCalendar.weeks;
 
        // Flatten into { date, count } shape matching original prop format
        const flat = weeks.flatMap((week) =>
          week.contributionDays.map((day) => ({
            date: day.date,
            count: day.contributionCount,
          }))
        );
 
        setContributions(flat);
      } catch (err) {
        console.error('❌ Error fetching contributions:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
 
    fetchContributions();
  }, []);
 
  const getIntensityColor = (count) => {
    if (count === 0) return 'rgba(255, 255, 255, 0.05)';
    if (count < 2) return 'rgba(0, 212, 255, 0.3)';
    if (count < 6) return 'rgba(0, 212, 255, 0.5)';
    if (count < 10) return 'rgba(0, 212, 255, 0.7)';
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
 
  // ── Loading state ──
  if (loading) {
    return (
      <div className="metric-card">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-foreground font-mono-heading mb-1">
              GitHub Contribution Activity
            </h3>
            <p className="text-sm text-muted-foreground">Fetching contributions…</p>
          </div>
        </div>
        <div className="flex items-center justify-center py-8">
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary animate-spin"></div>
            </div>
            <p className="text-xs text-muted-foreground">Loading contributions...</p>
          </div>
        </div>
      </div>
    );
  }
 
  // ── Error state ──
  if (error) {
    return (
      <div className="metric-card">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-foreground font-mono-heading mb-1">
              GitHub Contribution Activity
            </h3>
            <p className="text-sm text-muted-foreground">Failed to load contributions</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-8">
          <p className="text-sm text-error text-center mb-2">{error}</p>
          <p className="text-xs text-muted-foreground text-center">
            Check your .env file and browser console for details
          </p>
        </div>
      </div>
    );
  }
 
  // ── Success state — original design untouched ──
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
                className="w-3 h-3 rounded-sm border border-black"
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
                  className="w-3 h-3 md:w-4 md:h-4 rounded-sm cursor-pointer transition-smooth hover:ring-2 hover:ring-primary border border-black/10"
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