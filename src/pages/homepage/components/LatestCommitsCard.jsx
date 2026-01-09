import Icon from '../../../components/AppIcon';

const LatestCommitsCard = () => {
  const commits = [
    {
      id: 1,
      message: "Optimize database query performance for user analytics",
      hash: "a3f2c1d",
      branch: "main",
      timestamp: "2 hours ago",
      additions: 45,
      deletions: 12,
      files: 3
    },
    {
      id: 2,
      message: "Implement Redis caching layer for API responses",
      hash: "b7e9f4a",
      branch: "feature/caching",
      timestamp: "5 hours ago",
      additions: 128,
      deletions: 8,
      files: 5
    },
    {
      id: 3,
      message: "Add comprehensive unit tests for payment service",
      hash: "c2d8e5b",
      branch: "test/payment-service",
      timestamp: "1 day ago",
      additions: 234,
      deletions: 15,
      files: 8
    },
    {
      id: 4,
      message: "Refactor authentication middleware for better security",
      hash: "d9f1a6c",
      branch: "security/auth-refactor",
      timestamp: "2 days ago",
      additions: 67,
      deletions: 89,
      files: 4
    }
  ];

  return (
    <div className="card-elevated bg-card rounded-lg p-4 md:p-6 lg:p-8 border border-border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-accent/10 rounded-lg">
            <Icon name="GitCommit" size={20} color="var(--color-accent)" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold font-mono-heading text-foreground">
              Latest Commits
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground font-mono-code">
              Recent development activity
            </p>
          </div>
        </div>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:text-accent transition-smooth"
          aria-label="View GitHub profile"
        >
          <Icon name="Github" size={20} />
        </a>
      </div>
      <div className="space-y-4">
        {commits?.map((commit) => (
          <div 
            key={commit?.id} 
            className="bg-muted/50 rounded-lg p-4 border border-border/50 hover:border-primary/30 transition-smooth"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <p className="text-sm md:text-base text-foreground font-mono-code flex-1 line-clamp-2">
                {commit?.message}
              </p>
              <span className="text-xs text-muted-foreground font-mono-code whitespace-nowrap">
                {commit?.timestamp}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <div className="flex items-center gap-2">
                <Icon name="GitBranch" size={14} className="text-primary" />
                <span className="text-xs font-mono-code text-muted-foreground">
                  {commit?.branch}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono-code text-primary">
                  {commit?.hash}
                </span>
              </div>

              <div className="flex items-center gap-3 ml-auto">
                <div className="flex items-center gap-1">
                  <Icon name="Plus" size={12} className="text-success" />
                  <span className="text-xs font-mono-code text-success">
                    {commit?.additions}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Minus" size={12} className="text-error" />
                  <span className="text-xs font-mono-code text-error">
                    {commit?.deletions}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="File" size={12} className="text-muted-foreground" />
                  <span className="text-xs font-mono-code text-muted-foreground">
                    {commit?.files}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-border">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-sm text-primary hover:text-accent transition-smooth font-mono-cta"
        >
          <span>View all commits on GitHub</span>
          <Icon name="ExternalLink" size={16} />
        </a>
      </div>
    </div>
  );
};

export default LatestCommitsCard;