import { useEffect, useState } from 'react';
import Icon from '../../../components/AppIcon';
 
const LatestCommitsCard = () => {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  // ✅ Use import.meta.env for Vite (NOT process.env)
  const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'your-username';
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
 
  // Format time - MUST be defined BEFORE useEffect
  const formatTime = (isoString) => {
    try {
      const date = new Date(isoString);
      const now = new Date();
      const seconds = Math.floor((now - date) / 1000);
 
      if (seconds < 60) return 'Just now';
      if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
      if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
      if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
      if (seconds < 2592000) return `${Math.floor(seconds / 604800)}w ago`;
      return date.toLocaleDateString();
    } catch (err) {
      console.error('Error formatting time:', err);
      return 'Unknown';
    }
  };
 
  useEffect(() => {
    const fetchAllCommits = async () => {
      try {
        // Check token exists
        if (!GITHUB_TOKEN) {
          throw new Error(
            'GitHub token not found. Add VITE_GITHUB_TOKEN to your .env file'
          );
        }
 
        console.log('🔄 Fetching repositories...');
        const startTime = performance.now();
 
        // Step 1: Fetch ONLY public repositories (much faster!)
        const reposResponse = await fetch(
          `https://api.github.com/user/repos?per_page=50&sort=updated&type=public`,
          {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
              Accept: 'application/vnd.github.v3+json',
            },
          }
        );
 
        if (!reposResponse.ok) {
          const errorData = await reposResponse.json();
          throw new Error(
            `GitHub API Error: ${reposResponse.status} - ${errorData.message || 'Unknown error'}`
          );
        }
 
        const repos = await reposResponse.json();
 
        if (!Array.isArray(repos) || repos.length === 0) {
          throw new Error('No public repositories found');
        }
 
        console.log(`✅ Found ${repos.length} public repositories`);
 
        // Step 2: Fetch commits from repos in PARALLEL (much faster!)
        // Limit to first 10 repos to keep requests low
        const reposToFetch = repos.slice(0, 10);
 
        const commitPromises = reposToFetch.map((repo) =>
          fetch(
            `https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits?per_page=4`,
            {
              headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.v3+json',
              },
            }
          )
            .then((response) => {
              if (!response.ok) return null;
              return response.json().then((commits) => ({ repo, commits }));
            })
            .catch(() => null)
        );
 
        // Wait for all requests to complete (parallel = fast!)
        const results = await Promise.all(commitPromises);
 
        // Step 3: Flatten and transform commits
        const allCommits = [];
 
        results.forEach((result) => {
          if (!result || !Array.isArray(result.commits)) return;
 
          const { repo, commits } = result;
 
          const formattedCommits = commits.map((commit) => {
            try {
              return {
                id: commit.sha,
                message: commit.commit.message.split('\n')[0] || 'No message',
                hash: commit.sha.substring(0, 7),
                branch: repo.default_branch || 'main',
                timestamp: formatTime(commit.commit.author.date),
                author: commit.commit.author.name || 'Unknown',
                repo: repo.name,
                repoUrl: repo.html_url,
                commitUrl: commit.html_url,
                avatar: commit.author?.avatar_url || null,
                commitDate: new Date(commit.commit.author.date),
              };
            } catch (mapErr) {
              console.error(`Error mapping commit:`, mapErr);
              return null;
            }
          }).filter(Boolean);
 
          allCommits.push(...formattedCommits);
        });
 
        console.log(`📊 Total commits found: ${allCommits.length}`);
 
        if (allCommits.length === 0) {
          throw new Error('No commits found in public repositories');
        }
 
        // Step 4: Sort by date and get ONLY 4 latest commits (very fast!)
        const sortedCommits = allCommits
          .sort((a, b) => b.commitDate - a.commitDate)
          .slice(0, 5)
          .map(({ commitDate, ...rest }) => rest);
 
        const endTime = performance.now();
        console.log(
          `✅ Displaying ${sortedCommits.length} latest commits (${(endTime - startTime).toFixed(2)}ms)`
        );
 
        setCommits(sortedCommits);
        setError(null);
      } catch (err) {
        console.error('❌ Error fetching commits:', err);
        setError(err.message);
        setCommits([]);
      } finally {
        setLoading(false);
      }
    };
 
    fetchAllCommits();
  }, [GITHUB_TOKEN]);
 
  // Loading state
  if (loading) {
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
        </div>
        <div className="flex items-center justify-center py-6">
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary animate-spin"></div>
            </div>
            <p className="text-xs text-muted-foreground">Loading commits...</p>
          </div>
        </div>
      </div>
    );
  }
 
  // Error state
  if (error && commits.length === 0) {
    return (
      <div className="card-elevated bg-card rounded-lg p-4 md:p-6 lg:p-8 border border-error/20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-error/10 rounded-lg">
              <Icon name="AlertCircle" size={20} color="var(--color-error)" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold font-mono-heading text-foreground">
                Latest Commits
              </h3>
            </div>
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
 
  // Success state
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
              Recent activity from public repos
            </p>
          </div>
        </div>
        <a 
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:text-accent transition-smooth"
          aria-label="View GitHub profile"
        >
          <Icon name="Github" size={20} />
        </a>
      </div>
 
      <div className="space-y-3">
        {commits.length > 0 ? (
          commits.map((commit) => (
            <a
              key={commit.id}
              href={commit.commitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-muted/50 rounded-lg p-3 border border-border/50 hover:border-primary/30 transition-smooth cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground font-mono-code line-clamp-2">
                    {commit.message}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    in{' '}
                    <a 
                      href={commit.repoUrl}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent transition-smooth"
                    >
                      {commit.repo}
                    </a>
                  </p>
                </div>
                <span className="text-xs text-muted-foreground font-mono-code whitespace-nowrap flex-shrink-0">
                  {commit.timestamp}
                </span>
              </div>
 
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                <div className="flex items-center gap-1.5">
                  <Icon name="GitBranch" size={12} className="text-primary" />
                  <span className="text-xs font-mono-code text-muted-foreground">
                    {commit.branch}
                  </span>
                </div>
 
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-mono-code text-primary">
                    {commit.hash}
                  </span>
                </div>
 
                {commit.author && (
                  <div className="flex items-center gap-1.5">
                    {commit.avatar && (
                      <img 
                        src={commit.avatar} 
                        alt={commit.author}
                        className="w-3 h-3 rounded-full"
                        onError={(e) => e.target.style.display = 'none'}
                      />
                    )}
                    <span className="text-xs font-mono-code text-muted-foreground truncate">
                      {commit.author}
                    </span>
                  </div>
                )}
              </div>
            </a>
          ))
        ) : (
          <div className="flex items-center justify-center py-6">
            <p className="text-muted-foreground text-sm">No commits found</p>
          </div>
        )}
      </div>
 
      <div className="mt-4 pt-4 border-t border-border">
        <a 
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-xs text-primary hover:text-accent transition-smooth font-mono-cta"
        >
          <span>View all activity on GitHub</span>
          <Icon name="ExternalLink" size={14} />
        </a>
      </div>
    </div>
  );
};
 
export default LatestCommitsCard;