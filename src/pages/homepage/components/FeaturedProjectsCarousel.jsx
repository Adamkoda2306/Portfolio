import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const projects = [
  // {
  //   id: 1,
  //   title: "E-Commerce Microservices Platform",
  //   description: "Architected and deployed a distributed microservices ecosystem handling 10M+ daily transactions with 99.99% uptime. Implemented event-driven architecture using Kafka for real-time inventory management and order processing.",
  //   image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e1c57163-1765389098596.png",
  //   imageAlt: "Modern server room with rows of illuminated blue LED lights on black server racks in dark data center environment",
  //   technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Kafka", "Docker", "Kubernetes"],
  //   metrics: [
  //   { label: "Response Time", value: "< 100ms", icon: "Zap" },
  //   { label: "Daily Users", value: "2M+", icon: "Users" },
  //   { label: "Uptime", value: "99.99%", icon: "Activity" }],

  //   githubUrl: "https://github.com",
  //   liveUrl: "https://example.com"
  // },
  // {
  //   id: 2,
  //   title: "Real-Time Analytics Engine",
  //   description: "Built a high-performance data processing pipeline capable of ingesting and analyzing 500K events per second. Reduced query latency by 85% through strategic database optimization and caching strategies.",
  //   image: "https://images.unsplash.com/photo-1723504513873-ee5ac3549bff",
  //   imageAlt: "Close-up view of colorful programming code on dark computer screen showing syntax highlighting in multiple colors",
  //   technologies: ["Node.js", "MongoDB", "ClickHouse", "RabbitMQ", "GraphQL", "AWS"],
  //   metrics: [
  //   { label: "Events/sec", value: "500K", icon: "TrendingUp" },
  //   { label: "Latency", value: "< 50ms", icon: "Timer" },
  //   { label: "Data Volume", value: "10TB+", icon: "Database" }],

  //   githubUrl: "https://github.com",
  //   liveUrl: "https://example.com"
  // },
  // {
  //   id: 3,
  //   title: "Distributed Payment Gateway",
  //   description: "Designed and implemented a PCI-DSS compliant payment processing system handling $50M+ monthly transactions. Integrated with 15+ payment providers with automatic failover and retry mechanisms.",
  //   image: "https://images.unsplash.com/photo-1649682892309-e10e0b7cd40b",
  //   imageAlt: "Abstract digital network visualization with glowing blue and orange connection nodes on dark background representing data flow",
  //   technologies: ["Go", "gRPC", "PostgreSQL", "Vault", "Terraform", "GCP"],
  //   metrics: [
  //   { label: "Transactions", value: "$50M/mo", icon: "DollarSign" },
  //   { label: "Success Rate", value: "99.8%", icon: "CheckCircle" },
  //   { label: "Providers", value: "15+", icon: "Link" }],

  //   githubUrl: "https://github.com",
  //   liveUrl: "https://example.com"
  // }];

  const projects = [
  {
    id: 1,
    title: "AgriVision – Crop Recommendation & Disease Detection",
    description:
      "A mobile and backend-based system developed for agricultural assistance, providing crop, fertilizer, weather, and disease recommendations. Integrated a CNN-based plant disease detection module and Flask APIs to support real-time predictions. Shortlisted as a finalist in the Abhisarga AGRIAI competition.",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854",
    imageAlt:
      "Green agricultural field representing smart farming and crop monitoring",
    technologies: [
      "Python",
      "Flask",
      "CNN",
      "OpenCV",
      "Machine Learning",
      "Flutter"
    ],
    metrics: [
      { label: "Accuracy", value: "80%+", icon: "TrendingUp" },
      { label: "Platform", value: "Mobile + API", icon: "Smartphone" },
      { label: "Achievement", value: "Finalist", icon: "Award" }
    ],
    githubUrl: "https://github.com/sujithvaishnav/AgriVision",
    liveUrl: "https://github.com/sujithvaishnav/AgriVision"
  },

  {
    id: 2,
    title: "Logsave-hub – Node.js Logging Utility (npm)",
    description:
      "A reusable Node.js logging utility designed to persist application logs with configurable logging modes. Published as an npm package with proper documentation, enabling easy integration into Node.js projects for structured and persistent logging.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    imageAlt:
      "Code editor displaying JavaScript logs and backend development workflow",
    technologies: [
      "Node.js",
      "JavaScript",
      "npm",
      "Git",
      "Logging Utilities"
    ],
    metrics: [
      { label: "Package Type", value: "npm", icon: "Package" },
      { label: "Use Case", value: "Logging", icon: "FileText" },
      { label: "Status", value: "Published", icon: "CheckCircle" }
    ],
    githubUrl: "https://github.com/Adamkoda2306/logsave-hub",
    liveUrl: "https://www.npmjs.com/package/logsave-hub"
  },

  {
    id: 3,
    title: "IoT Water Management System",
    description:
      "An IoT-based real-time water level monitoring and alert system built using microcontrollers and sensors. Developed Flutter and web interfaces for live monitoring and safety alerts. Awarded Runner-Up in the Utkrista innovation event.",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    imageAlt:
      "IoT water level monitoring setup with sensors and microcontroller",
    technologies: [
      "ESP32",
      "Arduino",
      "Flutter",
      "IoT Sensors",
      "Cloud Logging"
    ],
    metrics: [
      { label: "Domain", value: "IoT", icon: "Cpu" },
      { label: "Monitoring", value: "Real-time", icon: "Activity" },
      { label: "Achievement", value: "Runner-Up", icon: "Award" }
    ],
    githubUrl:
      "https://github.com/Adamkoda2306/Utkrista_Event_IOT_Water_Management",
    liveUrl:
      "https://adamkoda2306.github.io/Utkrista_Event_IOT_Water_Management/"
  }
];

  const handlePrevious = () => {
    setCurrentIndex((prev) => prev === 0 ? projects?.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev === projects?.length - 1 ? 0 : prev + 1);
  };

  const currentProject = projects?.[currentIndex];

  return (
    <div className="card-elevated bg-card rounded-lg border border-border overflow-hidden">
      <div className="flex items-center justify-between p-4 md:p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-accent/10 rounded-lg">
            <Icon name="Briefcase" size={20} color="var(--color-accent)" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold font-mono-heading text-foreground">
              Featured Projects
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground font-mono-code">
              Fully developed and deployed
            </p>
          </div>
        </div>
        <Link to="/projects">
          <Button variant="ghost" size="sm" iconName="ArrowRight" iconPosition="right">
            View All
          </Button>
        </Link>
      </div>
      <div className="relative">
        <br/>
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={handlePrevious}
            className="w-10 h-10 flex items-center justify-center bg-background/80 backdrop-blur-sm hover:bg-background rounded-lg transition-smooth"
            aria-label="Previous project">

            <Icon name="ChevronLeft" size={20} color="var(--color-foreground)" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 flex items-center justify-center bg-background/80 backdrop-blur-sm hover:bg-background rounded-lg transition-smooth"
            aria-label="Next project">

            <Icon name="ChevronRight" size={20} color="var(--color-foreground)" />
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {projects?.map((_, index) =>
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-smooth ${
            index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/50'}`
            }
            aria-label={`Go to project ${index + 1}`} />

          )}
        </div>
      </div>
      <br/>
      <div className="p-4 md:p-6 lg:p-8 space-y-6">
        <div>
          <h4 className="text-xl md:text-2xl font-bold font-mono-heading text-foreground mb-3">
            {currentProject?.title}
          </h4>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {currentProject?.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {currentProject?.metrics?.map((metric, index) =>
          <div key={index} className="bg-muted/50 rounded-lg p-4 border border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <Icon name={metric?.icon} size={16} color="var(--color-primary)" />
                <span className="text-xs text-muted-foreground font-mono-cta uppercase tracking-wider">
                  {metric?.label}
                </span>
              </div>
              <div className="text-xl md:text-2xl font-bold font-mono-heading text-primary">
                {metric?.value}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {currentProject?.technologies?.map((tech, index) =>
          <span
            key={index}
            className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono-code rounded-lg border border-primary/20">

              {tech}
            </span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
          <a
            href={currentProject?.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1">

            <Button variant="outline" fullWidth iconName="Github" iconPosition="left">
              View Code
            </Button>
          </a>
          <a
            href={currentProject?.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1">

            <Button variant="default" fullWidth iconName="ExternalLink" iconPosition="left">
              Live Demo
            </Button>
          </a>
        </div>
      </div>
    </div>);

};

export default FeaturedProjectsCarousel;