import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Icon from '../../components/AppIcon';
import AchievementCard from './components/AchievementCard';
import ContributionGraph from './components/ContributionGraph';
import MetricCard from './components/MetricCard';
import TimelineSection from './components/TimelineSection';
import CategoryFilter from './components/CategoryFilter';

const Achievements = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const metrics = [
    {
      icon: 'Award',
      value: '12+',
      label: 'Professional Certifications',
      color: 'var(--color-primary)',
      trend: '+3 this year'
    },
    {
      icon: 'Mic',
      value: '25+',
      label: 'Conference Talks',
      color: 'var(--color-accent)',
      trend: '8 countries'
    },
    {
      icon: 'GitBranch',
      value: '150+',
      label: 'Open Source Contributions',
      color: 'var(--color-warning)',
      trend: '50K+ stars'
    },
    {
      icon: 'Users',
      value: '10K+',
      label: 'Developer Community',
      color: 'var(--color-primary)',
      trend: 'Stack Overflow'
    }
  ];

  const achievements = [
    {
      id: 1,
      type: 'certification',
      title: 'AWS Certified Solutions Architect - Professional',
      description: 'Advanced certification demonstrating expertise in designing distributed systems on AWS with focus on scalability, security, and cost optimization.',
      date: '2025-11-15',
      organization: 'Amazon Web Services',
      verified: true,
      verificationUrl: 'https://aws.amazon.com/verification/AWSCERT123456',
      metric: 'Valid until 2028'
    },
    {
      id: 2,
      type: 'speaking',
      title: 'Keynote: Microservices at Scale',
      description: 'Delivered keynote presentation on building resilient microservices architecture handling 100M+ daily requests with zero-downtime deployments.',
      date: '2025-09-20',
      organization: 'DevOps Summit 2025',
      verified: true,
      verificationUrl: 'https://devopssummit.com/speakers/2025',
      metric: '500+ attendees'
    },
    {
      id: 3,
      type: 'opensource',
      title: 'Core Contributor - FastAPI Framework',
      description: 'Contributed performance optimizations reducing response time by 40% and implemented async database connection pooling used by 50K+ projects.',
      date: '2025-08-10',
      organization: 'FastAPI',
      verified: true,
      verificationUrl: 'https://github.com/tiangolo/fastapi/contributors',
      metric: '2.5K+ commits'
    },
    {
      id: 4,
      type: 'certification',
      title: 'Google Cloud Professional Cloud Architect',
      description: 'Certification validating expertise in designing, developing, and managing robust, secure, scalable, and dynamic solutions on Google Cloud Platform.',
      date: '2025-07-05',
      organization: 'Google Cloud',
      verified: true,
      verificationUrl: 'https://cloud.google.com/certification/verify/GCPCERT789012',
      metric: 'Valid until 2027'
    },
    {
      id: 5,
      type: 'writing',
      title: 'Technical Blog: Database Optimization Strategies',
      description: 'Published comprehensive guide on PostgreSQL query optimization techniques that reduced query execution time by 85% in production systems.',
      date: '2025-06-18',
      organization: 'Medium Engineering',
      verified: true,
      verificationUrl: 'https://medium.com/engineering/database-optimization',
      metric: '50K+ views'
    },
    {
      id: 6,
      type: 'recognition',
      title: 'GitHub Arctic Code Vault Contributor',
      description: 'Code preserved in Arctic Code Vault as part of GitHub Archive Program, ensuring long-term preservation of open source contributions.',
      date: '2025-05-12',
      organization: 'GitHub',
      verified: true,
      verificationUrl: 'https://github.com/arctic-code-vault',
      metric: 'Permanent archive'
    },
    {
      id: 7,
      type: 'speaking',
      title: 'Workshop: Building Scalable APIs with GraphQL',
      description: 'Conducted hands-on workshop teaching advanced GraphQL patterns including federation, caching strategies, and performance optimization.',
      date: '2025-04-25',
      organization: 'API World Conference',
      verified: true,
      verificationUrl: 'https://apiworld.co/workshops/2025',
      metric: '150+ participants'
    },
    {
      id: 8,
      type: 'certification',
      title: 'Kubernetes Certified Application Developer (CKAD)',
      description: 'Certification demonstrating proficiency in designing, building, and deploying cloud-native applications on Kubernetes.',
      date: '2025-03-30',
      organization: 'Cloud Native Computing Foundation',
      verified: true,
      verificationUrl: 'https://cncf.io/certification/verify/CKAD345678',
      metric: 'Valid until 2027'
    },
    {
      id: 9,
      type: 'opensource',
      title: 'Maintainer - Redis Performance Tools',
      description: 'Created and maintain open source Redis monitoring and optimization toolkit used by Fortune 500 companies for production systems.',
      date: '2025-02-14',
      organization: 'GitHub',
      verified: true,
      verificationUrl: 'https://github.com/redis-perf-tools',
      metric: '15K+ stars'
    },
    {
      id: 10,
      type: 'recognition',
      title: 'Stack Overflow Top 1% Contributor',
      description: 'Achieved top 1% ranking on Stack Overflow with 50K+ reputation points by providing high-quality answers to backend development questions.',
      date: '2025-01-20',
      organization: 'Stack Overflow',
      verified: true,
      verificationUrl: 'https://stackoverflow.com/users/12345678',
      metric: '50K+ reputation'
    },
    {
      id: 11,
      type: 'speaking',
      title: 'Panel Discussion: Future of Backend Development',
      description: 'Participated in expert panel discussing emerging trends in backend architecture, serverless computing, and edge computing technologies.',
      date: '2024-12-08',
      organization: 'Tech Leaders Summit',
      verified: true,
      verificationUrl: 'https://techleaders.com/panels/2024',
      metric: '1K+ live viewers'
    },
    {
      id: 12,
      type: 'writing',
      title: 'eBook: Mastering Distributed Systems',
      description: 'Authored comprehensive technical eBook covering distributed system design patterns, consistency models, and real-world implementation strategies.',
      date: '2024-11-15',
      organization: 'O\'Reilly Media',
      verified: true,
      verificationUrl: 'https://oreilly.com/library/view/mastering-distributed',
      metric: '5K+ downloads'
    }
  ];

  const contributionData = Array.from({ length: 365 }, (_, i) => {
    const date = new Date();
    date?.setDate(date?.getDate() - (364 - i));
    return {
      date: date?.toISOString()?.split('T')?.[0],
      count: Math.floor(Math.random() * 25)
    };
  });

  const categories = [
    { id: 'all', label: 'All Achievements', count: achievements?.length },
    { id: 'certification', label: 'Certifications', count: achievements?.filter(a => a?.type === 'certification')?.length },
    { id: 'speaking', label: 'Speaking', count: achievements?.filter(a => a?.type === 'speaking')?.length },
    { id: 'opensource', label: 'Open Source', count: achievements?.filter(a => a?.type === 'opensource')?.length },
    { id: 'writing', label: 'Technical Writing', count: achievements?.filter(a => a?.type === 'writing')?.length },
    { id: 'recognition', label: 'Recognition', count: achievements?.filter(a => a?.type === 'recognition')?.length }
  ];

  const filteredAchievements = selectedCategory === 'all' 
    ? achievements 
    : achievements?.filter(a => a?.type === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Achievements - DevPortfolio Pro</title>
        <meta name="description" content="Professional certifications, conference talks, open source contributions, and technical achievements demonstrating backend development expertise." />
      </Helmet>
      <Header />
      <main className="main-content bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <Breadcrumbs />

          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg">
                <Icon name="Trophy" size={28} color="var(--color-primary)" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-mono-heading">
                  Achievement Vault
                </h1>
                <p className="text-muted-foreground text-sm md:text-base mt-1">
                  Verified credentials and technical milestones
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            {metrics?.map((metric, index) => (
              <MetricCard key={index} metric={metric} />
            ))}
          </div>

          <div className="mb-8 md:mb-12">
            <ContributionGraph contributions={contributionData} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="lg:col-span-1">
              <CategoryFilter 
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>

            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-foreground font-mono-heading">
                  {categories?.find(c => c?.id === selectedCategory)?.label}
                </h2>
                <div className="text-sm text-muted-foreground font-mono-code">
                  {filteredAchievements?.length} result{filteredAchievements?.length !== 1 ? 's' : ''}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:gap-6">
                {filteredAchievements?.map((achievement) => (
                  <AchievementCard key={achievement?.id} achievement={achievement} />
                ))}
              </div>
            </div>
          </div>

          <TimelineSection achievements={achievements} />

          <div className="mt-8 md:mt-12 metric-card">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              <div className="w-16 h-16 flex items-center justify-center bg-accent/10 rounded-lg flex-shrink-0">
                <Icon name="Mail" size={32} color="var(--color-accent)" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground font-mono-heading mb-2">
                  Speaking & Collaboration Opportunities
                </h3>
                <p className="text-muted-foreground text-sm md:text-base mb-4">
                  Available for conference talks, technical workshops, and open source collaboration. 
                  Let's build something impactful together.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold font-mono-cta transition-smooth hover:bg-accent/90 hover:shadow-lg"
                >
                  <Icon name="Send" size={20} />
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Achievements;