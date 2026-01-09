import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SocialLinks = () => {
  const socialPlatforms = [
    {
      id: 1,
      name: 'GitHub',
      icon: 'Github',
      username: '@devportfolio',
      url: 'https://github.com',
      followers: '2.5K',
      description: 'Open source contributions and code repositories',
      color: 'primary',
      stats: [
        { label: 'Repositories', value: '87' },
        { label: 'Stars', value: '1.2K' },
        { label: 'Contributions', value: '3.5K+' }
      ]
    },
    {
      id: 2,
      name: 'LinkedIn',
      icon: 'Linkedin',
      username: 'devportfolio',
      url: 'https://linkedin.com',
      followers: '5.8K',
      description: 'Professional network and career updates',
      color: 'accent',
      stats: [
        { label: 'Connections', value: '5.8K' },
        { label: 'Recommendations', value: '47' },
        { label: 'Endorsements', value: '200+' }
      ]
    },
    {
      id: 3,
      name: 'Twitter',
      icon: 'Twitter',
      username: '@devportfolio',
      url: 'https://twitter.com',
      followers: '3.2K',
      description: 'Tech insights and community engagement',
      color: 'primary',
      stats: [
        { label: 'Followers', value: '3.2K' },
        { label: 'Tweets', value: '1.5K' },
        { label: 'Engagement', value: '8.5%' }
      ]
    },
    {
      id: 4,
      name: 'Stack Overflow',
      icon: 'Code',
      username: 'devportfolio',
      url: 'https://stackoverflow.com',
      followers: '1.8K',
      description: 'Technical Q&A and community support',
      color: 'warning',
      stats: [
        { label: 'Reputation', value: '15.2K' },
        { label: 'Answers', value: '342' },
        { label: 'Gold Badges', value: '12' }
      ]
    },
    {
      id: 5,
      name: 'Dev.to',
      icon: 'FileText',
      username: '@devportfolio',
      url: 'https://dev.to',
      followers: '2.1K',
      description: 'Technical articles and tutorials',
      color: 'accent',
      stats: [
        { label: 'Posts', value: '45' },
        { label: 'Reactions', value: '8.5K' },
        { label: 'Comments', value: '1.2K' }
      ]
    },
    {
      id: 6,
      name: 'Medium',
      icon: 'BookOpen',
      username: '@devportfolio',
      url: 'https://medium.com',
      followers: '1.5K',
      description: 'In-depth technical writing and thought leadership',
      color: 'success',
      stats: [
        { label: 'Articles', value: '28' },
        { label: 'Followers', value: '1.5K' },
        { label: 'Claps', value: '12K+' }
      ]
    }
  ];

  const handleSocialClick = (url, name) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg">
            <Icon name="Share2" size={20} color="var(--color-primary)" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground font-mono-heading">Social Presence</h2>
            <p className="text-sm text-muted-foreground font-mono-code">Connect across technical communities</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {socialPlatforms?.map((platform) => (
            <div
              key={platform?.id}
              className={`p-4 md:p-5 bg-muted/50 rounded-lg border border-border hover:border-${platform?.color}/50 transition-smooth group`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className={`w-12 h-12 flex items-center justify-center bg-${platform?.color}/10 rounded-lg flex-shrink-0 group-hover:bg-${platform?.color}/20 transition-smooth`}>
                  <Icon name={platform?.icon} size={24} color={`var(--color-${platform?.color})`} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-foreground font-mono-heading">{platform?.name}</h3>
                      <p className="text-sm text-primary font-medium font-mono-code">{platform?.username}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Users" size={14} color="var(--color-muted-foreground)" />
                      <span className="text-sm font-bold text-accent font-mono-code">{platform?.followers}</span>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-muted-foreground mb-4">{platform?.description}</p>

                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {platform?.stats?.map((stat, index) => (
                      <div key={index} className="text-center p-2 bg-card rounded">
                        <p className="text-xs text-muted-foreground mb-1">{stat?.label}</p>
                        <p className="text-sm font-bold text-foreground font-mono-code">{stat?.value}</p>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="right"
                    onClick={() => handleSocialClick(platform?.url, platform?.name)}
                    className="w-full sm:w-auto"
                  >
                    Visit Profile
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Community Engagement */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 flex items-center justify-center bg-accent/10 rounded-lg">
            <Icon name="Heart" size={20} color="var(--color-accent)" />
          </div>
          <h3 className="text-lg font-bold text-foreground font-mono-heading">Community Engagement</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="MessageSquare" size={20} color="var(--color-primary)" />
              <h4 className="text-sm font-bold text-foreground font-mono-cta">Active Discussions</h4>
            </div>
            <p className="text-xs text-muted-foreground">Regular participation in technical forums and community discussions</p>
          </div>

          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="GitPullRequest" size={20} color="var(--color-success)" />
              <h4 className="text-sm font-bold text-foreground font-mono-cta">Open Source</h4>
            </div>
            <p className="text-xs text-muted-foreground">Active contributor to major open source projects and maintainer of several libraries</p>
          </div>

          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="Award" size={20} color="var(--color-warning)" />
              <h4 className="text-sm font-bold text-foreground font-mono-cta">Mentorship</h4>
            </div>
            <p className="text-xs text-muted-foreground">Mentoring junior developers and contributing to educational content</p>
          </div>

          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="Mic" size={20} color="var(--color-accent)" />
              <h4 className="text-sm font-bold text-foreground font-mono-cta">Speaking</h4>
            </div>
            <p className="text-xs text-muted-foreground">Regular speaker at tech conferences and community meetups</p>
          </div>
        </div>
      </div>
      {/* Follow CTA */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20 p-6">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground font-mono-heading mb-2">Stay Connected</h3>
            <p className="text-sm text-muted-foreground">Follow me on your preferred platform for technical insights, project updates, and community engagement.</p>
          </div>
          <Button
            variant="default"
            iconName="UserPlus"
            iconPosition="left"
            className="w-full md:w-auto"
          >
            Follow All Platforms
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;