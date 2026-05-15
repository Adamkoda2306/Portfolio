import { useState } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Icon from '../../components/AppIcon';
import ExperienceTimeline from './components/ExperienceTimeline';
import TechnologyEvolution from './components/TechnologyEvolution';
import ExperienceDetailModal from './components/ExperienceDetailModal';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('timeline');
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
  {
    id: 1,
    role: "Part-Time Backend Developer",
    company: "SensorSync Innovations",
    duration: "Sep 2025 - Mar 2026",
    location: "Sri City, India",
    icon: "Building2",
    description: "Re-engineering monolithic systems into TypeScript microservices, achieving a 90% reduction in request latency and 3x throughput improvement.",
    fullDescription: "Currently leading the architectural transition from a monolithic Node.js backend to a scalable TypeScript-based microservices ecosystem. Responsible for optimizing system performance under heavy load, validated through rigorous k6 load testing. Managing containerized deployments using Docker and Nginx on GCP, while implementing critical third-party integrations for communications and cloud storage. My focus is on ensuring high availability and seamless scalability for growing traffic demands.",
    technologies: ["TypeScript", "Node.js", "MongoDB", "Docker", "Docker Compose", "Nginx", "GCP", "Cloudinary", "Twilio"],
    metrics: [
      { value: "90% ↓", label: "Latency" },
      { value: "3x", label: "Throughput ↑" },
      { value: "100%", label: "Scalability" }
    ],
    achievements: [
      "Successfully re-engineered a monolithic Node.js backend into a microservices architecture using TypeScript",
      "Reduced average request latency by over 90% and tripled system throughput",
      "Implemented automated load testing using k6 to validate and ensure system performance under pressure",
      "Orchestrated multi-container environments using Docker Compose for consistent local and production parity",
      "Configured Nginx as a reverse proxy to enhance system security and load distribution",
      "Resigned from part-time position in May 2026 to focus on upcoming career milestones"
    ],
  },
  {
    id: 2,
    role: "Backend Developer Intern",
    company: "SensorSync Innovations",
    duration: "May 2025 - Jul 2025",
    location: "Sri City, India",
    icon: "Database",
    description: "Designed ride-booking services and architected a road-quality scoring pipeline with 93.6% accuracy using YOLOv8 and ML.",
    fullDescription: "Designed and deployed core backend services for ride booking, user authentication, and real-time notifications. A key highlight was architecting a complex road-quality scoring pipeline. This involved integrating team-developed YOLOv8 computer vision outputs (detecting potholes and lane markings) with a custom Machine Learning score prediction model. This pipeline achieved 93.6% accuracy, enabling automated, real-time assessment of field data for road maintenance teams.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Python", "YOLOv8", "OpenCV", "Jetson Nano", "Firebase FCM", "Render"],
    metrics: [
      { value: "93.6%", label: "ML Accuracy" },
      { value: "Real-time", label: "Processing" },
      { value: "24/7", label: "Monitoring" }
    ],
    achievements: [
      "Architected an end-to-end road-quality scoring pipeline integrating computer vision and machine learning",
      "Achieved 93.6% accuracy in pothole and lane detection scoring for real-time assessment",
      "Deployed scalable Node.js services for various type's of ride-booking",
      "Integrated Jetson Nano for edge-based computer vision processing in the field",
      "Leveraged Firebase FCM and Twilio to build a robust user notification and authentication system"
    ],
  }
];


  const techStack = [
  // --- BACKEND & APIS (13) ---
  { id: 1, name: "Node.js", category: "backend", icon: "Server", projectsUsed: 15 },
  { id: 2, name: "TypeScript", category: "backend", icon: "Code", projectsUsed: 10 },
  { id: 3, name: "Express.js", category: "backend", icon: "Zap", projectsUsed: 12 },
  { id: 4, name: "Flask", category: "backend", icon: "Wind", projectsUsed: 6 },
  { id: 5, name: "REST APIs", category: "backend", icon: "Network", projectsUsed: 18 },
  { id: 6, name: "Firebase (Auth/DB/FCM)", category: "backend", icon: "Flame", projectsUsed: 10 },
  { id: 7, name: "Twilio API", category: "backend", icon: "MessageSquare", projectsUsed: 4 },
  { id: 8, name: "Cloudinary", category: "backend", icon: "Image", projectsUsed: 5 },
  { id: 9, name: "Postman API", category: "backend", icon: "CheckCircle", projectsUsed: 15 },
  { id: 10, name: "Nginx", category: "backend", icon: "Shield", projectsUsed: 4 },
  { id: 11, name: "Bash", category: "backend", icon: "Terminal", projectsUsed: 12 },
  { id: 12, name: "Back-End Web Development", category: "backend", icon: "Globe", projectsUsed: 15 },
  { id: 13, name: "Application Programming Interfaces", category: "backend", icon: "Link", projectsUsed: 18 },

  // --- HARDWARE & EMBEDDED SYSTEMS (15) ---
  { id: 14, name: "Embedded Systems", category: "hardware", icon: "Cpu", projectsUsed: 9 },
  { id: 15, name: "Microcontrollers (8051)", category: "hardware", icon: "Microchip", projectsUsed: 11 },
  { id: 16, name: "Microprocessors (8086)", category: "hardware", icon: "Cpu", projectsUsed: 8 },
  { id: 17, name: "Raspberry Pi", category: "hardware", icon: "HardDrive", projectsUsed: 6 },
  { id: 18, name: "Arduino", category: "hardware", icon: "Zap", projectsUsed: 12 },
  { id: 19, name: "NodeMCU", category: "hardware", icon: "Wifi", projectsUsed: 7 },
  { id: 20, name: "Verilog", category: "hardware", icon: "Layers", projectsUsed: 5 },
  { id: 21, name: "Digital Circuit Design", category: "hardware", icon: "Activity", projectsUsed: 10 },
  { id: 22, name: "Analog Circuits", category: "hardware", icon: "Wind", projectsUsed: 8 },
  { id: 23, name: "Power Electronics", category: "hardware", icon: "BatteryCharging", projectsUsed: 6 },
  { id: 24, name: "Sensors Integration", category: "hardware", icon: "Radio", projectsUsed: 9 },
  { id: 25, name: "Jetson Nano", category: "hardware", icon: "Monitor", projectsUsed: 4 },
  { id: 26, name: "Electronics", category: "hardware", icon: "Zap", projectsUsed: 25 },
  { id: 27, name: "Digital Twins", category: "hardware", icon: "Copy", projectsUsed: 3 },
  { id: 28, name: "Internet of Things (IoT)", category: "hardware", icon: "Globe", projectsUsed: 15 },

  // --- AI, MACHINE LEARNING & COMPUTER VISION (7) ---
  { id: 29, name: "Machine Learning", category: "ai", icon: "Brain", projectsUsed: 10 },
  { id: 30, name: "Deep Learning", category: "ai", icon: "Target", projectsUsed: 6 },
  { id: 31, name: "Computer Vision", category: "ai", icon: "Eye", projectsUsed: 8 },
  { id: 32, name: "YOLOv8", category: "ai", icon: "Box", projectsUsed: 4 },
  { id: 33, name: "Intelligent & Autonomous Systems", category: "ai", icon: "Navigation", projectsUsed: 5 },
  { id: 34, name: "Speech Processing", category: "ai", icon: "Mic", projectsUsed: 4 },
  { id: 35, name: "Speech Recognition", category: "ai", icon: "Volume2", projectsUsed: 3 },

  // --- LANGUAGES & CS FUNDAMENTALS (8) ---
  { id: 36, name: "C", category: "languages", icon: "Code", projectsUsed: 20 },
  { id: 37, name: "C++", category: "languages", icon: "Code", projectsUsed: 25 },
  { id: 38, name: "Python", category: "languages", icon: "Code", projectsUsed: 22 },
  { id: 39, name: "JavaScript", category: "languages", icon: "Code", projectsUsed: 15 },
  { id: 40, name: "DSA", category: "fundamentals", icon: "Binary", projectsUsed: 50 },
  { id: 41, name: "Object-Oriented Programming (OOP)", category: "fundamentals", icon: "Box", projectsUsed: 30 },
  { id: 42, name: "Problem Solving", category: "fundamentals", icon: "Lightbulb", projectsUsed: 40 },
  { id: 43, name: "Assembly Language", category: "languages", icon: "FileCode", projectsUsed: 6 },

  // --- DATABASES & DEVOPS (6) ---
  { id: 44, name: "MongoDB", category: "database", icon: "Database", projectsUsed: 12 },
  { id: 45, name: "Docker", category: "devops", icon: "Package", projectsUsed: 8 },
  { id: 46, name: "Git", category: "devops", icon: "GitBranch", projectsUsed: 35 },
  { id: 47, name: "GitHub", category: "devops", icon: "Github", projectsUsed: 40 },
  { id: 48, name: "Google Cloud Platform (GCP)", category: "cloud", icon: "Cloud", projectsUsed: 6 },
  { id: 49, name: "Computer Networking", category: "infrastructure", icon: "Share2", projectsUsed: 10 },

  // --- FRONTEND & MOBILE (4) ---
  { id: 50, name: "Flutter", category: "frontend", icon: "Smartphone", projectsUsed: 8 },
  { id: 51, name: "Android Development", category: "frontend", icon: "Smartphone", projectsUsed: 5 },
  { id: 52, name: "Android Studio", category: "frontend", icon: "Smartphone", projectsUsed: 5 },
  { id: 53, name: "HTML", category: "frontend", icon: "FileCode", projectsUsed: 12 },

  // --- SIGNAL PROCESSING (2) ---
  { id: 54, name: "Digital Signal Processing", category: "signal", icon: "Activity", projectsUsed: 5 },
  { id: 55, name: "Speech Recognition", category: "signal", icon: "Mic", projectsUsed: 4 }
];



  const tabs = [
  { id: 'timeline', label: 'Experience', icon: 'Clock' },
  { id: 'technology', label: 'Technologies', icon: 'Code' }];


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
                  A chronological showcase of architectural decisions, system designs, and measurable 
  impact across my journey in backend engineering, autonomous systems, and 
  IoT infrastructure.
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