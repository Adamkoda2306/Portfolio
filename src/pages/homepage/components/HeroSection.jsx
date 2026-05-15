import { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';
 
const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
 
  const skills = [
    'Backend & Microservices',
    'IoT & Embedded Systems',
    'Full-Stack Development',
    'Autonomous Drone Navigation',
    'Computer Vision (YOLOv8)',
    'FPGA & Hardware Acceleration'
  ];
 
  useEffect(() => {
    const currentSkill = skills?.[currentSkillIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;
 
    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentSkill) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentSkillIndex((prev) => (prev + 1) % skills?.length);
      } else {
        setTypedText(
          isDeleting
            ? currentSkill?.substring(0, typedText?.length - 1)
            : currentSkill?.substring(0, typedText?.length + 1)
        );
      }
    }, typingSpeed);
 
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentSkillIndex]);
 
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40"></div>
 
      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT SIDE - Image: full bleed, no border, fades into background */}
          <div className="order-2 lg:order-1 relative w-full h-full min-h-[400px] lg:min-h-[600px] flex items-center">
            {/* Loading skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted animate-pulse rounded-xl"></div>
            )}
 
            {/* Main image — no border, fills the left column */}
            <img
              src="/assets/hero-image.png"
              alt="Koda Adam - Electronics & Communication Engineering"
              className={`w-full h-full object-cover transition-all duration-700 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ minHeight: '450px' }}
              onLoad={() => setImageLoaded(true)}
            />
 
            {/* Extra right-side fade so image bleeds seamlessly into the text column */}
            <div
              className="absolute inset-y-0 right-0 w-1/3 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, transparent, var(--background, #f8fafcc9))',
              }}
            ></div>
          </div>
 
          {/* RIGHT SIDE - Content */}
          <div className="order-1 lg:order-2 space-y-6 md:space-y-8 lg:space-y-10 max-w-2xl">
            
            {/* Name and title */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-mono-heading text-foreground leading-tight">
                Koda Adam
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-primary font-semibold font-mono-code">
                B.Tech in Electronics & Communication Engineering
              </p>
            </div>
 
            {/* Typing animation - Skills */}
            <div className="relative">
              <div className="h-14 md:h-16 lg:h-20 flex items-center">
                <div className="text-lg md:text-xl lg:text-2xl font-mono-code text-accent font-semibold">
                  <span className="opacity-60">{'> '}</span>
                  <span className="inline-block">{typedText}</span>
                  <span className="terminal-cursor inline-block w-0.5 h-6 md:h-7 lg:h-8 bg-accent ml-1 animate-pulse"></span>
                </div>
              </div>
            </div>
 
            {/* Description */}
            <p className="text-base md:text-lg lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Enthusiastic B.Tech candidate specializing in the synergy between hardware and software.
              I bridge the gap from FPGA-based acceleration to scalable microservices and cloud-native backends.
              With hands-on experience in autonomous drone navigation and computer vision, 
              I architect intelligent, high-performance systems at the intersection of IoT, robotics, and distributed computing.
            </p>
 
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4 md:pt-6">
              <Link to="/projects">
                <Button 
                  variant="default" 
                  size="lg" 
                  iconName="Code" 
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  View Projects
                </Button>
              </Link>
              <a href="/assets/resume.pdf" download className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="lg" 
                  iconName="Download" 
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  Download Resume
                </Button>
              </a>
            </div>
 
          </div>
        </div>
      </div>
 
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Scroll</p>
          <Icon name="ChevronDown" size={24} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};
 
export default HeroSection;