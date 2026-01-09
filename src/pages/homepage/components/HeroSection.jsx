import { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const skills = [
    'Scalable Microservices',
    'High-Performance APIs',
    'Distributed Systems',
    'Cloud Architecture',
    'Database Optimization'
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
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="text-center space-y-6 md:space-y-8 lg:space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="w-2 h-2 bg-success rounded-full pulse-glow"></span>
            <span className="text-xs md:text-sm font-mono-cta text-primary uppercase tracking-wider">
              Available for Opportunities
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-mono-heading text-foreground leading-tight">
            Building The Invisible
            <br />
            <span className="text-primary">Infrastructure</span>
          </h1>

          <div className="h-16 md:h-20 lg:h-24 flex items-center justify-center">
            <div className="text-xl md:text-2xl lg:text-3xl font-mono-code text-accent">
              <span className="opacity-60">{'> '}</span>
              <span>{typedText}</span>
              <span className="terminal-cursor inline-block w-0.5 h-6 md:h-7 lg:h-8 bg-accent ml-1"></span>
            </div>
          </div>

          <p className="max-w-3xl mx-auto text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed px-4">
            Senior Backend Engineer specializing in architecting scalable systems that power millions of users. 
            Transforming complex business requirements into elegant, maintainable code.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 md:pt-6 lg:pt-8">
            <Link to="/projects">
              <Button variant="default" size="lg" iconName="Code" iconPosition="left">
                View Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" iconName="Mail" iconPosition="left">
                Get In Touch
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 pt-8 md:pt-12 lg:pt-16">
            {[
              { value: '8+', label: 'Years Experience', icon: 'Calendar' },
              { value: '50+', label: 'Projects Delivered', icon: 'Briefcase' },
              { value: '99.9%', label: 'System Uptime', icon: 'Activity' },
              { value: '15+', label: 'Technologies', icon: 'Code' }
            ]?.map((stat, index) => (
              <div key={index} className="metric-card text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-primary/10 rounded-lg">
                    <Icon name={stat?.icon} size={20} color="var(--color-primary)" />
                  </div>
                </div>
                <div className="metric-value text-2xl md:text-3xl lg:text-4xl">{stat?.value}</div>
                <div className="metric-label mt-2">{stat?.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;