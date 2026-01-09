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

    testimonial: {
      quote: "An exceptional architect who combines deep technical knowledge with pragmatic problem-solving. Their microservices design transformed our ability to scale and innovate rapidly.",
      author: "Sarah Chen",
      role: "CTO, TechScale Solutions"
    }
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

    testimonial: {
      quote: "Their expertise in distributed systems and data engineering was instrumental in building our real-time analytics platform. A true problem solver who delivers results.",
      author: "Michael Rodriguez",
      role: "VP Engineering, DataFlow Systems"
    }
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

    testimonial: {
      quote: "A dedicated engineer who consistently delivered high-quality code. Their attention to security and performance set the standard for our entire backend team.",
      author: "Jennifer Park",
      role: "Engineering Manager, CloudNative Inc"
    }
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

    testimonial: {
      quote: "Showed remarkable growth and dedication. Their eagerness to learn and contribute made them an invaluable team member from day one.",
      author: "David Thompson",
      role: "Lead Developer, StartupHub Technologies"
    }
  }];


  const techStack = [
  {
    id: 1,
    name: "Node.js",
    category: "backend",
    icon: "Server",
    yearsUsed: 5,
    proficiency: "Expert",
    level: 95,
    projectsUsed: 12
  },
  {
    id: 2,
    name: "Python",
    category: "backend",
    icon: "Code",
    yearsUsed: 6,
    proficiency: "Expert",
    level: 98,
    projectsUsed: 15
  },
  {
    id: 3,
    name: "PostgreSQL",
    category: "database",
    icon: "Database",
    yearsUsed: 5,
    proficiency: "Expert",
    level: 92,
    projectsUsed: 18
  },
  {
    id: 4,
    name: "Redis",
    category: "database",
    icon: "Zap",
    yearsUsed: 4,
    proficiency: "Advanced",
    level: 88,
    projectsUsed: 10
  },
  {
    id: 5,
    name: "Docker",
    category: "devops",
    icon: "Package",
    yearsUsed: 5,
    proficiency: "Expert",
    level: 90,
    projectsUsed: 20
  },
  {
    id: 6,
    name: "Kubernetes",
    category: "devops",
    icon: "Boxes",
    yearsUsed: 3,
    proficiency: "Advanced",
    level: 85,
    projectsUsed: 8
  },
  {
    id: 7,
    name: "AWS",
    category: "cloud",
    icon: "Cloud",
    yearsUsed: 5,
    proficiency: "Expert",
    level: 93,
    projectsUsed: 16
  },
  {
    id: 8,
    name: "GraphQL",
    category: "api",
    icon: "Network",
    yearsUsed: 3,
    proficiency: "Advanced",
    level: 87,
    projectsUsed: 7
  },
  {
    id: 9,
    name: "MongoDB",
    category: "database",
    icon: "Database",
    yearsUsed: 4,
    proficiency: "Advanced",
    level: 86,
    projectsUsed: 11
  }];


  const architecture = {
    layers: [
    {
      id: 1,
      name: "API Gateway Layer",
      icon: "Globe",
      description: "Entry point for all client requests with rate limiting, authentication, and request routing capabilities.",
      technologies: ["Kong", "Nginx", "AWS API Gateway"],
      responsibilities: [
      "Request routing and load balancing across microservices",
      "API rate limiting and throttling to prevent abuse",
      "JWT token validation and OAuth 2.0 integration",
      "Request/response transformation and protocol translation",
      "Centralized logging and monitoring of all API traffic"]

    },
    {
      id: 2,
      name: "Service Layer",
      icon: "Layers",
      description: "Core business logic implemented as independent microservices with domain-driven design principles.",
      technologies: ["Node.js", "Python", "Go", "gRPC"],
      responsibilities: [
      "Business logic implementation and data validation",
      "Inter-service communication via message queues",
      "Event-driven architecture for asynchronous processing",
      "Service discovery and health check endpoints",
      "Horizontal scaling based on load metrics"]

    },
    {
      id: 3,
      name: "Data Layer",
      icon: "Database",
      description: "Polyglot persistence strategy with optimized data storage for different use cases.",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
      responsibilities: [
      "Relational data storage with ACID compliance",
      "Document storage for flexible schema requirements",
      "In-memory caching for frequently accessed data",
      "Full-text search and analytics capabilities",
      "Data replication and backup strategies"]

    },
    {
      id: 4,
      name: "Message Queue Layer",
      icon: "Workflow",
      description: "Asynchronous communication backbone enabling decoupled service interactions.",
      technologies: ["Apache Kafka", "RabbitMQ", "AWS SQS"],
      responsibilities: [
      "Event streaming and message brokering",
      "Guaranteed message delivery with retry mechanisms",
      "Dead letter queue handling for failed messages",
      "Message ordering and partitioning strategies",
      "Real-time data pipeline integration"]

    },
    {
      id: 5,
      name: "Monitoring & Observability",
      icon: "Activity",
      description: "Comprehensive monitoring stack providing insights into system health and performance.",
      technologies: ["Prometheus", "Grafana", "ELK Stack", "Jaeger"],
      responsibilities: [
      "Metrics collection and time-series data storage",
      "Distributed tracing across microservices",
      "Centralized logging and log aggregation",
      "Real-time alerting and incident management",
      "Performance profiling and bottleneck identification"]

    }],

    highlights: [
    { value: "99.95%", label: "System Uptime" },
    { value: "50M+", label: "Daily Requests" },
    { value: "<100ms", label: "Avg Latency" },
    { value: "12", label: "Microservices" },
    { value: "5", label: "Data Stores" },
    { value: "24/7", label: "Monitoring" }]

  };

  const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    company: "TechScale Solutions",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1839f83d3-1763293825256.png",
    avatarAlt: "Professional headshot of Asian woman with shoulder-length black hair wearing navy blazer and white blouse",
    rating: 5,
    testimonial: "An exceptional architect who combines deep technical knowledge with pragmatic problem-solving. Their microservices design transformed our ability to scale and innovate rapidly. The system they built handles millions of requests daily with remarkable reliability.",
    skills: ["System Architecture", "Microservices", "Team Leadership"]
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "VP of Engineering",
    company: "DataFlow Systems",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_103972665-1763296698542.png",
    avatarAlt: "Professional headshot of Hispanic man with short black hair wearing dark suit and light blue shirt",
    rating: 5,
    testimonial: "Their expertise in distributed systems and data engineering was instrumental in building our real-time analytics platform. A true problem solver who delivers results under pressure. The data pipeline they designed processes terabytes of data daily without breaking a sweat.",
    skills: ["Data Engineering", "Performance Optimization", "Problem Solving"]
  },
  {
    id: 3,
    name: "Jennifer Park",
    role: "Engineering Manager",
    company: "CloudNative Inc",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b9af4c4d-1763301905450.png",
    avatarAlt: "Professional headshot of Korean woman with long dark hair wearing gray business suit and glasses",
    rating: 5,
    testimonial: "A dedicated engineer who consistently delivered high-quality code. Their attention to security and performance set the standard for our entire backend team. They mentored junior developers and fostered a culture of technical excellence.",
    skills: ["Code Quality", "Security", "Mentorship"]
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Lead Developer",
    company: "StartupHub Technologies",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1895d12cc-1763294932234.png",
    avatarAlt: "Professional headshot of Caucasian man with brown hair and beard wearing casual blue shirt",
    rating: 5,
    testimonial: "Showed remarkable growth and dedication from day one. Their eagerness to learn and contribute made them an invaluable team member. They quickly became our go-to person for complex backend challenges.",
    skills: ["Fast Learning", "Dedication", "Technical Growth"]
  }];


  const tabs = [
  { id: 'timeline', label: 'Experience Timeline', icon: 'Clock' },
  { id: 'technology', label: 'Technology Evolution', icon: 'Code' },
  { id: 'architecture', label: 'Architecture', icon: 'Layers' },
  { id: 'testimonials', label: 'Team Testimonials', icon: 'Users' }];


  const handleDownloadResume = () => {
    alert('Resume download functionality would be implemented here with a real PDF file.');
  };

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
              
              <button
                onClick={handleDownloadResume}
                className="flex items-center gap-2 px-4 md:px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium font-mono-cta transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:scale-105 whitespace-nowrap">

                <Icon name="Download" size={20} />
                <span>Download Resume</span>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              <div className="metric-card">
                <div className="metric-value">7+</div>
                <div className="metric-label">Years Experience</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">50+</div>
                <div className="metric-label">Projects Delivered</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">15+</div>
                <div className="metric-label">Technologies</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">99.9%</div>
                <div className="metric-label">System Uptime</div>
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
            
            {activeTab === 'architecture' &&
            <ArchitectureDiagram architecture={architecture} />
            }
            
            {activeTab === 'testimonials' &&
            <TeamTestimonials testimonials={testimonials} />
            }
          </div>

          <div className="mt-12 card-elevated bg-card rounded-lg p-6 md:p-8 text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Icon name="Briefcase" size={32} color="var(--color-primary)" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground font-mono-heading mb-3">
              Ready to Collaborate?
            </h3>
            <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              Looking for a backend architect who can design scalable systems and deliver measurable results? Let&apos;s discuss how I can contribute to your team&apos;s success.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/contact"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium font-mono-cta transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:scale-105">

                <Icon name="Mail" size={20} />
                <span>Get in Touch</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-muted text-foreground rounded-lg font-medium font-mono-cta transition-all duration-300 hover:bg-muted/80">

                <Icon name="Linkedin" size={20} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
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