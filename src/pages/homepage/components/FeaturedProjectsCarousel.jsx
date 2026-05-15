import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
  {
    id: 1,
    title: "Autonomous Drone Navigation (RL)",
    description:
      "Engineered a custom OpenAI Gym-compatible environment in AirSim for autonomous UAV navigation. Implemented Proximal Policy Optimization (PPO) and Soft Actor-Critic (SAC) models, utilizing LiDAR and telemetry data for real-time obstacle avoidance and goal-reaching.",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e",
    imageAlt: "Autonomous drone navigating a complex environment",
    technologies: [
      "Python",
      "Reinforcement Learning",
      "AirSim",
      "PyTorch",
      "Stable Baselines3"
    ],
    metrics: [
      { label: "Control", value: "Continuous", icon: "Settings" },
      { label: "Algorithms", value: "PPO/SAC", icon: "Cpu" },
      { label: "Environment", value: "Custom Gym", icon: "Layers" }
    ],
    githubUrl: "http://github.com/Adamkoda2306/RL-Autonoums-Drone", 
    liveUrl: "http://github.com/Adamkoda2306/RL-Autonoums-Drone"
  },
  {
    id: 2,
    title: "AgriVision – AI Based Crop Detection & Prediction",
    description:
      "Architected a mobile ecosystem for precision agriculture featuring real-time plant disease detection using a custom CNN. Integrated Flask APIs with a multi-language Flutter frontend to provide localized weather insights and crop recommendations. Recognized as an Abhisarga AGRIAI Finalist.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854",
    imageAlt: "Smart farming dashboard with disease detection metrics",
    technologies: [
      "Python",
      "Flask",
      "CNN",
      "TensorFlow",
      "Flutter",
      "OpenCV"
    ],
    metrics: [
      { label: "Accuracy", value: "80%+", icon: "TrendingUp" },
      { label: "Deployment", value: "Flask", icon: "Cloud" },
      { label: "Recognition", value: "Finalist", icon: "Award" }
    ],
    githubUrl: "https://github.com/sujithvaishnav/AgriVision",
    liveUrl: "https://github.com/sujithvaishnav/AgriVision"
  },
  {
    id: 3,
    title: "Logsave-hub (npm Package)",
    description:
      "Authored and published a production-grade Node.js logging utility designed to streamline application monitoring. The package features configurable persistence modes, structured output formatting, and a focus on reducing setup time for microservices. Successfully achieved 85+ downloads within its first month of release due to comprehensive documentation and ease of integration.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    imageAlt: "Console log output representing the logging utility in action",
    technologies: [
      "Node.js",
      "TypeScript",
      "npm",
      "FileSystem API",
      "Winston/Morgan"
    ],
    metrics: [
      { label: "Usage", value: "85+ DLs", icon: "Download" },
      { label: "Registry", value: "npm", icon: "Package" },
      { label: "Status", value: "Published", icon: "CheckCircle" }
    ],
    githubUrl: "https://github.com/Adamkoda2306/logsave-hub",
    liveUrl: "https://www.npmjs.com/package/logsave-hub"
  },
  {
    id: 4,
    title: "IoT Smart Water Management",
    description:
      "Designed an ESP32-based real-time monitoring system utilizing ultrasonic time-of-flight measurement and deterministic safety logic. The system bridges physical hardware with cloud infrastructure, transmitting data to a multi-platform Flutter dashboard for remote monitoring and automated threshold alerts. Secured the Runner-Up award at the Utkrista 2024 innovation event.",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    imageAlt: "Sensors measuring water levels in a controlled environment",
    technologies: [
      "ESP32",
      "Embedded C",
      "Firebase",
      "Flutter",
      "IoT Protocols"
    ],
    metrics: [
      { label: "Response", value: "Real-time", icon: "Activity" },
      { label: "Award", value: "Runner-Up", icon: "Award" },
      { label: "Stack", value: "IoT/Cloud", icon: "Cpu" }
    ],
    githubUrl: "https://github.com/Adamkoda2306/Utkrista_Event_IOT_Water_Management",
    liveUrl: "https://adamkoda2306.github.io/Utkrista_Event_IOT_Water_Management/"
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