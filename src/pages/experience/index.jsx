import { useState } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Icon from '../../components/AppIcon';
import ExperienceTimeline from './components/ExperienceTimeline';
import TechnologyEvolution from './components/TechnologyEvolution';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import TeamTestimonials from './components/TeamTestimonials';
import ExperienceDetailModal from './components/ExperienceDetailModal';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('timeline');
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
  {
    id: 1,
    role: "Senior Backend Architect",
    company: "TechScale Solutions",
    duration: "Jan 2023 - Present",
    location: "San Francisco, CA (Remote)",
    icon: "Building2",
    description: "Leading backend architecture for a high-traffic SaaS platform serving 2M+ users. Designed and implemented microservices architecture that improved system reliability and reduced deployment time by 60%.",
    fullDescription: "Spearheading the complete architectural transformation of a monolithic application into a distributed microservices ecosystem. Led a team of 8 backend engineers in designing scalable solutions that handle 50M+ API requests daily. Implemented event-driven architecture using Apache Kafka, reducing inter-service latency by 75%. Established comprehensive monitoring and observability practices using Prometheus and Grafana, achieving 99.95% uptime. Mentored junior developers and conducted architecture review sessions, fostering a culture of technical excellence and continuous improvement.",
    technologies: ["Node.js", "Python", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "Apache Kafka", "GraphQL", "TypeScript", "MongoDB", "Elasticsearch"],
    metrics: [
    { value: "99.95%", label: "Uptime" },
    { value: "50M+", label: "Daily Requests" },
    { value: "60%", label: "Deploy Time ↓" }],

    achievements: [
    "Architected microservices platform handling 50M+ daily API requests with 99.95% uptime",
    "Reduced deployment time from 2 hours to 45 minutes through CI/CD pipeline optimization",
    "Implemented caching strategy that decreased database load by 70% and improved response times by 85%",
    "Led migration from monolithic architecture to microservices, enabling independent team scaling",
    "Established comprehensive API documentation and developer onboarding program",
    "Reduced infrastructure costs by 40% through resource optimization and auto-scaling implementation"],
  },
  {
    id: 2,
    role: "Lead Backend Engineer",
    company: "DataFlow Systems",
    duration: "Mar 2021 - Dec 2022",
    location: "Austin, TX",
    icon: "Database",
    description: "Built real-time data processing pipeline handling 10TB+ daily data ingestion. Optimized database queries reducing average response time from 2.5s to 180ms.",
    fullDescription: "Designed and implemented a distributed data processing system capable of ingesting and processing 10TB+ of data daily from multiple sources. Led the development of a real-time analytics engine that provided sub-second query responses for complex aggregations. Implemented data partitioning and sharding strategies that improved query performance by 93%. Collaborated with data science team to build ML model serving infrastructure with 99.9% availability. Established data quality monitoring and alerting systems that reduced data inconsistencies by 85%.",
    technologies: ["Python", "Apache Spark", "PostgreSQL", "Redis", "Airflow", "Docker", "AWS", "Kafka", "Cassandra", "FastAPI"],
    metrics: [
    { value: "10TB+", label: "Daily Data" },
    { value: "93%", label: "Query Speed ↑" },
    { value: "180ms", label: "Avg Response" }],

    achievements: [
    "Built distributed data pipeline processing 10TB+ daily with 99.9% reliability",
    "Optimized database queries reducing average response time from 2.5s to 180ms (93% improvement)",
    "Implemented real-time analytics engine serving 500+ concurrent users",
    "Designed data partitioning strategy that improved query performance by 10x",
    "Reduced data processing costs by 35% through efficient resource utilization",
    "Established data quality framework that decreased inconsistencies by 85%"],
  },
  {
    id: 3,
    role: "Backend Developer",
    company: "CloudNative Inc",
    duration: "Jun 2019 - Feb 2021",
    location: "Seattle, WA",
    icon: "Cloud",
    description: "Developed RESTful APIs and GraphQL endpoints for cloud-native applications. Implemented authentication and authorization systems serving 500K+ users.",
    fullDescription: "Contributed to the development of a multi-tenant SaaS platform serving enterprise clients. Built secure RESTful APIs and GraphQL endpoints with comprehensive authentication and authorization mechanisms. Implemented OAuth 2.0 and JWT-based authentication systems handling 500K+ active users. Optimized API performance through strategic caching and database indexing, reducing average response times by 65%. Collaborated with frontend teams to design efficient data fetching strategies and minimize API calls.",
    technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "GraphQL", "Jest", "TypeScript"],
    metrics: [
    { value: "500K+", label: "Active Users" },
    { value: "65%", label: "Response ↓" },
    { value: "99.8%", label: "API Uptime" }],

    achievements: [
    "Developed secure authentication system serving 500K+ users with zero security breaches",
    "Built RESTful APIs and GraphQL endpoints with 99.8% uptime",
    "Reduced API response times by 65% through caching and optimization",
    "Implemented comprehensive API testing suite with 95% code coverage",
    "Designed rate limiting and throttling mechanisms preventing abuse",
    "Contributed to open-source projects improving team\'s technical reputation"],
  },
  {
    id: 4,
    role: "Junior Backend Developer",
    company: "StartupHub Technologies",
    duration: "Aug 2017 - May 2019",
    location: "Boston, MA",
    icon: "Rocket",
    description: "Started career building REST APIs and database schemas. Learned distributed systems and cloud architecture while contributing to core product features.",
    fullDescription: "Began professional journey in a fast-paced startup environment, rapidly learning backend development best practices. Built REST APIs for core product features and designed normalized database schemas. Gained hands-on experience with cloud infrastructure, containerization, and CI/CD pipelines. Participated in code reviews and pair programming sessions that accelerated technical growth. Contributed to database migration projects and performance optimization initiatives.",
    technologies: ["Python", "Django", "PostgreSQL", "Redis", "Docker", "AWS", "Git", "Linux", "Nginx"],
    metrics: [
    { value: "15+", label: "Features" },
    { value: "50%", label: "Load Time ↓" },
    { value: "100%", label: "Test Coverage" }],

    achievements: [
    "Developed 15+ core product features from requirements to production deployment",
    "Reduced page load times by 50% through backend optimization",
    "Implemented automated testing achieving 100% coverage for critical paths",
    "Participated in database migration from MySQL to PostgreSQL",
    "Contributed to API documentation and developer onboarding materials",
    "Received \'Rising Star\' award for exceptional learning and contribution"],
  }];


  const techStack = [
  {
    id: 1,
    name: "Node.js",
    category: "backend",
    icon: "Server",
    projectsUsed: 12
  },
  {
    id: 2,
    name: "Python",
    category: "backend",
    icon: "Code",
    projectsUsed: 15
  },
  {
    id: 3,
    name: "PostgreSQL",
    category: "database",
    icon: "Database",
    projectsUsed: 18
  },
  {
    id: 4,
    name: "Redis",
    category: "database",
    icon: "Zap",
    projectsUsed: 10
  },
  {
    id: 5,
    name: "Docker",
    category: "devops",
    icon: "Package",
    projectsUsed: 20
  },
  {
    id: 6,
    name: "Kubernetes",
    category: "devops",
    icon: "Boxes",
    projectsUsed: 8
  },
  {
    id: 7,
    name: "AWS",
    category: "cloud",
    icon: "Cloud",
    projectsUsed: 16
  },
  {
    id: 8,
    name: "GraphQL",
    category: "api",
    icon: "Network",
    projectsUsed: 7
  },
  {
    id: 9,
    name: "MongoDB",
    category: "database",
    icon: "Database",
    projectsUsed: 11
  }];



  const tabs = [
  { id: 'timeline', label: 'Experience Timeline', icon: 'Clock' },
  { id: 'technology', label: 'Technology Evolution', icon: 'Code' }];


  return (
    <div className="min-h-screen bg-background grid-pattern">
      <Header />
      <main className="main-content">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
          <Breadcrumbs />

          <div className="mb-8 md:mb-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-mono-heading mb-3">
                  Technical Journey
                </h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  A chronological showcase of architectural decisions, system designs, and measurable business impact across {experiences?.length} years of backend engineering excellence.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
              {tabs?.map((tab) =>
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-lg font-medium font-mono-cta transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                activeTab === tab?.id ?
                'bg-primary text-primary-foreground shadow-lg' :
                'bg-card text-muted-foreground hover:bg-muted'}`
                }>

                  <Icon name={tab?.icon} size={20} />
                  <span className="text-sm md:text-base">{tab?.label}</span>
                </button>
              )}
            </div>
          </div>

          <div className="min-h-[600px]">
            {activeTab === 'timeline' &&
            <ExperienceTimeline
              experiences={experiences}
              onExperienceSelect={setSelectedExperience} />

            }
            
            {activeTab === 'technology' &&
            <TechnologyEvolution techStack={techStack} />
            }
          </div>

        </div>
      </main>
      <Footer />
      {selectedExperience &&
      <ExperienceDetailModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)} />

      }
    </div>);

};

export default Experience;