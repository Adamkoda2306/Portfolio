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
      title: "EEG-Based Alzheimer's Disease Detection on Zynq FPGA",
      description: "Developed a hardware-accelerated Alzheimer's disease detection system using EEG signal analysis and a Random Forest classifier deployed on a Xilinx Zynq FPGA board.",
      fullDescription: "Designed and implemented an end-to-end FPGA-based machine learning system for Alzheimer's disease detection using EEG signals. Processed EEG recordings from EEGLAB datasets using Python, MNE, NumPy, and SciPy to extract statistical and frequency-domain features including Mean, Variance, Alpha Band Power, Beta Band Power, and Theta Band Power. Trained a Random Forest classifier using Scikit-learn and converted the trained model into hardware-friendly fixed-point representations. Manually translated decision trees into Verilog HDL modules and implemented majority voting logic to create a complete Random Forest inference engine. Designed, synthesized, and deployed the hardware architecture using Vivado on a Xilinx Zynq Edge FPGA board. Integrated LEDs, buzzer, switches, and a 16x2 LCD display for real-time prediction and visualization of Alzheimer's and Healthy classifications.",
      image: "/assets/projects/thumbnail-eeg-zynq-edge.png",
      imageAlt: "EEG-based Alzheimer's disease detection system deployed on Xilinx Zynq FPGA with Random Forest hardware accelerator and real-time classification display",
      status: "Completed",
      teamSize: "1",
      duration: "2 Months",
      performanceImprovement: "Real-Time",
      technologies: [
        "Python",
        "Verilog HDL",
        "Vivado",
        "Xilinx Zynq FPGA",
        "Scikit-learn",
        "Random Forest",
        "Machine Learning",
        "MNE",
        "NumPy",
        "SciPy",
        "Digital Design",
        "FPGA",
        "Embedded Systems",
        "EEG Signal Processing"
      ],
      achievements: [
        "Extracted EEG statistical and spectral features for Alzheimer's disease classification",
        "Trained and optimized a Random Forest machine learning model using Scikit-learn",
        "Converted floating-point ML parameters into FPGA-compatible fixed-point representations",
        "Implemented three decision trees as Verilog HDL modules and combined them using majority voting",
        "Successfully deployed the complete inference engine on a Xilinx Zynq Edge FPGA board",
        "Integrated LCD display, LEDs, buzzer, and switches for real-time prediction visualization"
      ],
      metrics: [
        { label: "Decision Trees", value: "3" },
        { label: "EEG Features", value: "5" },
        { label: "Deployment Platform", value: "Zynq FPGA" },
        { label: "Inference Mode", value: "Real-Time" }
      ],
      githubUrl: "https://github.com/Adamkoda2306/EEG-Based-Alzheimer-s-Detection-on-Zynq-FPGA-Board",
      liveDemo: "https://drive.google.com/file/d/17iZ-i_4rV2XGE5D84fSEbNI86pIDY8Sc/view?usp=sharing"
    },
    {
      id: 3,
      title: "Spatio-Visual Abstraction Layers for Smooth Map-Less UAV Navigation",
      description: "Developed a reinforcement learning framework for autonomous UAV navigation using U-Net based visual perception, spatial occupancy abstraction, and PPO/TRPO continuous control in AirSim.",
      fullDescription: "Designed and implemented a unified spatio-visual reinforcement learning framework for autonomous map-less UAV navigation in complex suburban environments. Developed a multi-scale U-Net perception network to process monocular RGB observations and generate dense obstacle probability maps. Introduced a lightweight 5×5 spatial occupancy abstraction layer that compresses high-dimensional visual data into a compact 28-dimensional navigation state by combining occupancy features with relative target coordinates. Trained and evaluated PPO and TRPO reinforcement learning agents for continuous UAV control using body-frame velocity commands. Enhanced trajectory smoothness through exponential velocity smoothing and jerk regularization, reducing oscillations during navigation. Validated the framework within the AirSimNH suburban simulation environment and performed extensive analysis on navigation efficiency, reward convergence, oscillation behavior, and trajectory stability.",
      image: "/assets/projects/thumbnail-uav-navigation.png",
      imageAlt: "Autonomous UAV navigation using spatio-visual abstraction, U-Net perception, PPO/TRPO reinforcement learning, and AirSim simulation environment",
      status: "Research Project",
      teamSize: "1",
      duration: "6 Months",
      performanceImprovement: "28D State",
      technologies: [
        "Python",
        "PyTorch",
        "U-Net",
        "PPO",
        "TRPO",
        "Reinforcement Learning",
        "Computer Vision",
        "AirSim",
        "AirSimNH",
        "OpenCV",
        "NumPy",
        "SciPy",
        "Stable-Baselines3",
        "Gymnasium",
        "Autonomous Navigation",
        "Deep Learning",
        "UAV Systems"
      ],
      achievements: [
        "Developed a U-Net based perception framework for obstacle-aware UAV navigation using monocular RGB input",
        "Compressed 256×256 visual observations into a compact 5×5 occupancy representation while preserving spatial awareness",
        "Designed a 28-dimensional reinforcement learning state space combining occupancy information and relative target displacement",
        "Implemented and compared PPO and TRPO continuous-control navigation policies",
        "Integrated exponential velocity smoothing and jerk regularization for stable trajectory generation",
        "Validated the framework in AirSimNH suburban environments with extensive trajectory and reward analysis",
        "Demonstrated improved navigation efficiency through compact state abstraction and smooth control strategies"
      ],
      metrics: [
        { label: "RL State Dimension", value: "28D" },
        { label: "Occupancy Grid", value: "5×5" },
        { label: "RL Algorithms", value: "PPO + TRPO" },
        { label: "Simulation Platform", value: "AirSim v5.0" }
      ],
      githubUrl: "https://github.com/Adamkoda2306/Autonomous-UAV-Navigation-via-Spatio-Visual-Reinforcement-Learning",
      liveDemo: "https://drive.google.com/drive/folders/1zOAIk7mfYaNyqFdHqXwZy14-wXjR074v?usp=sharing"
    },
    {
      id: 4,
      title: "IoT Water Quality Monitoring and Management System",
      description: "Developed an IoT-based water quality monitoring system using Arduino, NodeMCU, Firebase, Flutter, and GitHub Pages to monitor and analyze water quality parameters in real time.",
      fullDescription: "Designed and developed a complete IoT-based Smart Water Quality Monitoring and Management System for real-time monitoring of water quality across multiple locations. Integrated Arduino Uno with multiple water quality sensors including pH, Turbidity, Dissolved Oxygen (DO), Temperature, and Conductivity sensors for continuous environmental data acquisition. Utilized NodeMCU ESP8266 for wireless communication and cloud connectivity, enabling real-time transmission of sensor data to Firebase Realtime Database. Developed a cross-platform Flutter mobile application that provides live monitoring, area-wise device management, and automatic water quality classification. Implemented a web dashboard using HTML, CSS, JavaScript, and Firebase, and deployed it on GitHub Pages for remote accessibility. Designed threshold-based algorithms to classify water conditions as Safe, Warning, or Unsafe using sensor values, allowing users to quickly identify potential water quality issues. The system supports multi-device monitoring, cloud-based data storage, and remote access, making it suitable for smart water management, environmental monitoring, agriculture, aquaculture, and smart city applications.",
      image: "/assets/projects/thumbnail-iot-wms.png",
      imageAlt: "IoT-based Smart Water Quality Monitoring and Management System using Arduino, NodeMCU, Firebase, Flutter, and GitHub Pages dashboard",
      status: "Completed",
      teamSize: "3",
      duration: "4 Days",
      performanceImprovement: "Live View",
      technologies: [
        "Arduino Uno",
        "NodeMCU ESP8266",
        "Flutter",
        "Firebase Realtime Database",
        "Firebase",
        "HTML",
        "CSS",
        "JavaScript",
        "GitHub Pages",
        "IoT",
        "Embedded Systems",
        "Cloud Computing",
        "Real-Time Monitoring",
        "Sensor Integration"
      ],
      achievements: [
        "Developed a complete IoT-based water quality monitoring system for real-time environmental monitoring",
        "Integrated pH, Turbidity, Dissolved Oxygen, Temperature, and Conductivity sensors with Arduino and NodeMCU",
        "Implemented cloud-based data storage and synchronization using Firebase Realtime Database",
        "Built a Flutter mobile application for real-time water quality visualization and monitoring",
        "Developed and deployed a responsive web dashboard on GitHub Pages for remote access",
        "Implemented automatic water quality classification into Safe, Warning, and Unsafe categories",
        "Enabled monitoring of multiple water sources and devices through a centralized cloud platform",
        "Provided real-time data updates and remote accessibility from mobile and web interfaces"
      ],
      metrics: [
        { label: "Sensors Integrated", value: "5" },
        { label: "Cloud Database", value: "Firebase RTDB" },
        { label: "Platforms", value: "Flutter + Web" },
        { label: "Monitoring", value: "24/7 Real-Time" }
      ],
      githubUrl: "https://github.com/Adamkoda2306/Utkrista_Event_IOT_Water_Management",
      liveDemo: "https://adamkoda2306.github.io/Utkrista_Event_IOT_Water_Management/"
    },
    {
      id: 5,
      title: "Building Energy Efficiency Prediction using Machine Learning",
      description: "Developed an end-to-end Data Science and Machine Learning solution for predicting building heating and cooling loads using multivariate analysis, statistical modeling, PCA, and ensemble learning techniques.",
      fullDescription: "Designed and implemented a comprehensive Building Energy Efficiency Prediction system using the ENB2012 dataset containing 768 building configurations. Performed extensive Exploratory Data Analysis (EDA), correlation analysis, outlier detection, feature interaction analysis, and statistical hypothesis testing to identify key factors affecting energy consumption. Applied Principal Component Analysis (PCA) for dimensionality reduction and multivariate analysis using Mahalanobis Distance for anomaly detection. Built and evaluated multiple machine learning models including Linear Regression, Random Forest, and XGBoost to predict Heating Load and Cooling Load. Achieved an R² score of 99.34% using XGBoost, demonstrating exceptional predictive performance and enabling data-driven decision-making for sustainable building design and energy optimization.",
      image: "/assets/projects/thumbnail-energy-eda.png",
      imageAlt: "Building Energy Efficiency Prediction dashboard showing EDA visualizations, PCA analysis, feature importance, model evaluation metrics, and XGBoost prediction results",
      status: "Completed",
      teamSize: "2",
      duration: "4 weeks",
      performanceImprovement: "99.34%",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Scikit-Learn",
        "XGBoost",
        "PCA",
        "SciPy",
        "Statistical Analysis",
        "Machine Learning"
      ],
      achievements: [
        "Performed comprehensive EDA including distribution analysis, correlation analysis, and outlier detection",
        "Conducted statistical hypothesis testing using Pearson Correlation, T-Test, and ANOVA",
        "Applied Principal Component Analysis (PCA) and explained over 90% of dataset variance",
        "Implemented multivariate anomaly detection using Mahalanobis Distance",
        "Built and compared Linear Regression, Random Forest, and XGBoost models",
        "Achieved 99.34% R² score with XGBoost for highly accurate energy load prediction",
        "Identified Relative Compactness, Glazing Area, and Overall Height as the most influential features",
        "Generated actionable insights for sustainable architecture and energy-efficient building design"
      ],
      metrics: [
        { label: "Dataset Size", value: "768 Records" },
        { label: "Features", value: "8 Variables" },
        { label: "Best R² Score", value: "99.34%" },
        { label: "Best Model", value: "XGBoost" }
      ],
      githubUrl: "https://github.com/Adamkoda2306/Multivariate-EDA-Modelling-for-Energy-Efficiency",
      // liveDemo: ""
    },
    {
      id: 6,
      title: "LogSave Hub : Real-Time Logging & Monitoring Platform",
      description: "Built and published a Node.js logging and monitoring package featuring structured logging, real-time dashboards, live log streaming, retention management, and application observability tools.",
      fullDescription: "Designed and published LogSave Hub, a comprehensive logging and monitoring solution for Node.js applications. Developed a modular logging architecture supporting structured logs, multiple log levels, automatic file rotation, and retention management. Built an interactive web dashboard with real-time log streaming using Socket.IO, advanced filtering, search capabilities, historical log exploration, and live monitoring features. Implemented automated log cleanup, performance-optimized file handling, and seamless Express integration, enabling developers to monitor and debug applications efficiently in both development and production environments. Published the package on npm for public distribution and easy adoption across backend projects.",
      image: "/assets/projects/thumbnail-logsave-hub.png",
      imageAlt: "LogSave Hub real-time monitoring dashboard displaying live logs, filtering controls, log analytics, and application observability features",
      status: "Published",
      teamSize: "1",
      duration: "2 weeks",
      performanceImprovement: "+40%",
      technologies: [
        "Node.js",
        "TypeScript",
        "Socket.IO",
        "Express.js",
        "Winston",
        "NPM",
        "WebSockets",
        "Logging Systems",
        "File Handling",
        "Real-Time Monitoring"
      ],
      achievements: [
        "Published LogSave Hub as a reusable npm package",
        "Built a real-time web dashboard with live log streaming",
        "Implemented Socket.IO-based monitoring for instant log updates",
        "Developed advanced log filtering, search, and historical log viewing using web dashboard",
        "Added automatic log retention and cleanup management",
        "Created modular Express integration for easy project adoption",
        "Optimized log processing and storage with minimal runtime overhead",
        "Enhanced debugging and production monitoring workflows"
      ],
      metrics: [
        { label: "Package Manager", value: "NPM" },
        { label: "Project Type", value: "Node.js Monitoring Platform" },
        { label: "Dashboard", value: "Real-Time" },
        { label: "Log Streaming", value: "Socket.IO" },
        { label: "Architecture", value: "Modular" },
        { label: "Deployment Status", value: "Published" }
      ],
      githubUrl: "https://github.com/Adamkoda2306/logsave-hub",
      liveDemo: "https://www.npmjs.com/package/logsave-hub"
    },
    {
      id: 7,
      title: "HTTPStatusX - Python HTTP Utility Package",
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
      id: 8,
      title: "C++ Library Management System ",
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
    },
    {
      id: 9,
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