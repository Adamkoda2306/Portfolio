import { useState, useMemo } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Icon from '../../components/AppIcon';
import ProjectCard from './components/ProjectCard';
import ProjectDetailsModal from './components/ProjectDetailsModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    technology: '',
    teamSize: '',
    duration: '',
    status: ''
  });

  const projectsData = [
    {
      id: 1,
      title: "AgriVision - AI Powered Smart Farming Application",
      description: "Developed a AI-powered agriculture application that assists farmers with crop recommendations, fertilizer suggestions, weather forecasting, and plant disease detection using CNN.",
      fullDescription: "Built AgriVision, an intelligent agriculture application designed to help farmers make data-driven decisions through AI and real-time analytics. Developed a cross-platform Flutter application with multilingual support, weather forecasting, crop recommendation, fertilizer analysis, and AI-based plant disease & pest classification. Integrated TensorFlow Lite models for offline disease prediction and Python-based machine learning services for advanced crop analysis. Designed and implemented a scalable backend using Node.js and TypeScript with secure authentication, API integrations, and ML model communication. Created a responsive landing website for showcasing the platform and improving accessibility for users.",
      image: "/assets/projects/thumbnail-agrivision.png",
      imageAlt: "AgriVision smart farming application dashboard showing AI-powered crop recommendations, disease prediction, weather analytics, and multilingual farming assistance",
      status: "Production",
      teamSize: "3",
      duration: "48 hours",
      performanceImprovement: "+65%",
      technologies: [
        "Flutter",
        "Dart",
        "Node.js",
        "TypeScript",
        "Python",
        "Flask",
        "TensorFlow Lite",
        "CNN",
        "Machine Learning",
        "REST API",
        "MongoDB",
        "Twilio",
        "JWT Authentication",
        "HTML",
        "CSS",
        "JavaScript"
      ],
      achievements: [
        "Implemented AI-powered plant disease and pest classification supporting 55+ disease categories",
        "Integrated offline prediction systems using TensorFlow Lite Model",
        "Developed multilingual support for better accessibility in rural farming communities",
        "Built real-time weather forecasting and smart crop recommendation modules",
        "Designed scalable backend APIs and modular Flutter architecture for maintainability"
      ],
      metrics: [
        { label: "Disease Classes", value: "55+" },
        { label: "Platforms Supported", value: "Android & iOS" },
        { label: "Language Support", value: "5 Languages" },
        { label: "ML Prediction Modes", value: "Online + Offline" }
      ],
      githubUrl: "https://github.com/Adamkoda2306/AgriVision",
      liveDemo: "https://agrivision-livid.vercel.app/"
    },
    {
      id: 2,
      title: "Logsave-hub : Node.js Logging Utility Package",
      description: "Developed and published a reusable Node.js logging utility package for structured log management, error tracking, and scalable application monitoring.",
      fullDescription: "Built and published LogSave Hub, a lightweight and developer-friendly logging utility package for Node.js applications. Designed to simplify application monitoring by providing structured logging, error handling, and customizable log storage features. Implemented clean and modular architecture enabling easy integration into backend projects. Optimized logging workflows for debugging and production monitoring while maintaining minimal performance overhead. Published the package on npm for public usage and distribution.",
      image: "/assets/projects/thumbnail-logsave-hub.png",
      imageAlt: "LogSave Hub npm package dashboard and Node.js logging utility visualization with structured logs and monitoring interface",
      status: "Published",
      teamSize: "1",
      duration: "1 week",
      performanceImprovement: "+30%",
      technologies: [
        "Node.js",
        "Typescript",
        "Winston",
        "NPM",
        "Logging Systems",
        "Backend Utilities",
        "File Handling"
      ],
      achievements: [
        "Successfully published package on npm for public usage",
        "Implemented structured logging and customizable log management",
        "Designed modular architecture for easy integration into projects",
        "Optimized logging performance with minimal runtime overhead",
        "Improved debugging and monitoring workflows for backend applications"
      ],
      metrics: [
        { label: "Package Manager", value: "NPM" },
        { label: "Project Type", value: "Node.js Utility" },
        { label: "Architecture", value: "Modular" },
        { label: "Deployment Status", value: "Published" }
      ],
      githubUrl: "https://github.com/Adamkoda2306/logsave-hub",
      liveDemo: "https://www.npmjs.com/package/logsave-hub"
    },
    {
      id: 3,
      title: "Absentees - Smart Attendance Tracking App",
      description: "Developed and deployed a modern attendance tracking application used by 80+ active members for managing attendance records and improving attendance monitoring workflows.",
      fullDescription: "Built a responsive attendance tracking application focused on simplifying attendance management for students and organizations. Designed a clean and intuitive user interface with smooth navigation and optimized performance for mobile platforms. Implemented attendance tracking, report visualization, and member management features with reusable frontend components and efficient state management. Created a landing website for application downloads and user onboarding. Deployed the project on Vercel with optimized asset delivery and seamless updates.",
      image: "/assets/projects/thumbnail-absentees.png",
      imageAlt: "Absentees attendance management dashboard showing attendance analytics, member tracking, and modern responsive UI      interface",
      status: "Production",
      teamSize: "2",
      duration: "1 mo",
      performanceImprovement: "+20%",
      technologies: ["Flutter", "MySQLlite", "Provider", "Html", "CSS"],
      achievements: [
        "Successfully deployed and used by 80+ active members for attendance management",
        "Designed responsive and user-friendly dashboard improving usability across devices",
        "Optimized database queries for faster attendance retrieval",
        "Integrated real-time attendance statistics and reporting features"
      ],
      metrics: [
        { label: "Active Users", value: "80+" },
        { label: "Deployment Status", value: "Live" },
        { label: "Dashboard Load Time", value: "<1.5s" },
        { label: "Platform Availability", value: "99.9%" }
      ],
      githubUrl: "https://github.com/Adamkoda2306/Absentees",
      liveDemo: "https://absentees-web.vercel.app/"
    },
    {
      id: 4,
      title: "HTTPStatusX - Python HTTP Status Utility Package",
      description:
        "Developed and published a lightweight Python utility package for simplified HTTP status code handling, API response management, and backend development workflows.",
      fullDescription:
        "Built and published HTTPStatusX, a developer-friendly Python package designed to simplify HTTP status code management in backend and API development. Implemented clean utility methods for handling standard HTTP responses, improving readability and reducing repetitive code in server-side applications. Designed a modular and lightweight architecture for easy integration into Python projects with minimal setup. Published the package on PyPI for public distribution and seamless installation using pip.",
      image: "/assets/projects/thumbnail-httpstatusx.png",
      imageAlt: "HTTPStatusX Python package visualization showing HTTP response handling and API status management interface",
      status: "Published",
      teamSize: "1",
      duration: "3 days",
      performanceImprovement: "+25%",
      technologies: [
        "Python",
        "PyPI",
        "API Development",
        "HTTP Utilities",
        "Backend Development",
        "Package Publishing"
      ],
      achievements: [
        "Successfully published package on PyPI for public usage",
        "Simplified HTTP response and status code handling for developers",
        "Designed lightweight and modular architecture for easy integration",
        "Improved backend code readability and maintainability",
        "Enabled seamless installation and usage through pip distribution"
      ],
      metrics: [
        { label: "Package Manager", value: "PyPI" },
        { label: "Project Type", value: "Python Utility" },
        { label: "Architecture", value: "Lightweight Modular" },
        { label: "Deployment Status", value: "Published" }
      ],
      githubUrl: "https://github.com/Adamkoda2306/httpstatusx",
      liveDemo: "https://pypi.org/project/httpstatusx/"
    },
    {
      id: 5,
      title: "CPP Library Management System",
      description: "Developed a console-based Library Management System in C++ for efficient book management, member tracking, and issue/return operations.",
      fullDescription: "Built a Library Management System using C++ focused on simplifying library operations through an interactive console interface. Implemented features for book inventory management, student/member records, book issuing and return tracking, and search functionality. Designed modular and structured code using object-oriented programming principles to improve maintainability and scalability. Optimized file handling operations for persistent data storage and efficient record retrieval. Packaged the project with executable releases for easy usage and deployment.",
      image: "/assets/projects/thumbnail-c++-library.png",
      imageAlt: "C++ Library Management System console interface showing book management and library operations dashboard",
      status: "Completed",
      teamSize: "1",
      duration: "3 Days",
      performanceImprovement: "+35%",
      technologies: [
        "C++",
        "Object-Oriented Programming",
        "File Handling",
        "DSA",
        "Console Application"
      ],
      achievements: [
        "Implemented complete book issue and return management system",
        "Designed modular object-oriented architecture for maintainable code",
        "Integrated file handling for persistent data storage",
        "Built efficient search and record management functionality",
        "Packaged executable release for simplified installation and usage"
      ],
      metrics: [
        { label: "Programming Language", value: "C++" },
        { label: "Project Type", value: "Console Application" },
        { label: "Data Persistence", value: "File System" },
        { label: "Architecture", value: "OOP Based" }
      ],
      githubUrl: "https://github.com/Adamkoda2306/CPP-Library-Management-System",
      liveDemo: "https://github.com/Adamkoda2306/CPP-Library-Management-System/releases/tag/v1.0"
    }];


  const filteredProjects = useMemo(() => {
    let filtered = projectsData;

    if (searchTerm) {
      const search = searchTerm?.toLowerCase();
      filtered = filtered?.filter(
        (project) =>
          project?.title?.toLowerCase()?.includes(search) ||
          project?.description?.toLowerCase()?.includes(search) ||
          project?.technologies?.some((tech) => tech?.toLowerCase()?.includes(search))
      );
    }

    if (filters?.technology) {
      filtered = filtered?.filter((project) =>
        project?.technologies?.includes(filters?.technology)
      );
    }

    if (filters?.teamSize) {
      filtered = filtered?.filter((project) => {
        const size = parseInt(project?.teamSize);
        const [min, max] = filters?.teamSize?.split('-')?.map((s) => parseInt(s?.replace('+', '')));
        if (filters?.teamSize?.includes('+')) {
          return size >= min;
        }
        return size >= min && size <= max;
      });
    }

    if (filters?.duration) {
      filtered = filtered?.filter((project) => {
        const duration = parseInt(project?.duration);
        const [min, max] = filters?.duration?.split('-')?.map((s) => parseInt(s?.replace('+', '')));
        if (filters?.duration?.includes('+')) {
          return duration >= min;
        }
        return duration >= min && duration <= max;
      });
    }

    if (filters?.status) {
      filtered = filtered?.filter((project) => project?.status === filters?.status);
    }

    return filtered;
  }, [searchTerm, filters, projectsData]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSearchChange = (search) => {
    setSearchTerm(search);
  };

  const handleReset = () => {
    setSearchTerm('');
    setFilters({
      technology: '',
      teamSize: '',
      duration: '',
      status: ''
    });
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const totalProjects = projectsData?.length;
  const activeProjects = projectsData?.filter((p) => p?.status === 'Production')?.length;
  const uniqueTechnologies = new Set(projectsData.flatMap((p) => p.technologies))?.size;
  const totalCommits = '15K+';

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="main-content">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
          <Breadcrumbs />

          <div className="mb-6 md:mb-8">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-primary/10 rounded-lg">
                <Icon name="FolderGit2" size={28} color="var(--color-primary)" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-mono-heading">
                  Featured Projects
                </h1>
                <p className="text-sm md:text-base text-muted-foreground mt-1 font-mono-cta">
                  Engineering solutions for complex digital problems
                </p>
              </div>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-4xl">
              Explore a timeline of built products, developer tools, and full-stack applications. These case studies outline the entire lifecycle of development—from initial system architecture and tech stack selection to deployment, optimization, and key takeaways.
            </p>
          </div>


          {filteredProjects?.length === 0 ?
            <div className="text-center py-12 md:py-16">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 flex items-center justify-center bg-muted rounded-lg">
                <Icon name="SearchX" size={32} color="var(--color-muted-foreground)" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground font-mono-heading mb-2">
                No Projects Found
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Try adjusting your filters or search terms
              </p>
            </div> :

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {filteredProjects?.map((project) =>
                <ProjectCard
                  key={project?.id}
                  project={project}
                  onViewDetails={handleViewDetails} />

              )}
            </div>
          }
        </div>
      </main>
      <Footer />
      {selectedProject &&
        <ProjectDetailsModal
          project={selectedProject}
          onClose={handleCloseModal} />

      }
    </div>);

};

export default Projects;