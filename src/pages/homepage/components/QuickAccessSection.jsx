import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const QuickAccessSection = () => {
  const quickLinks = [
    {
      title: "Experience Timeline",
      description: "8+ years of backend engineering across fintech, e-commerce, and SaaS",
      icon: "Briefcase",
      color: "var(--color-primary)",
      path: "/experience",
      stats: "15+ Companies"
    },
    {
      title: "Project Portfolio",
      description: "50+ production systems handling millions of daily transactions",
      icon: "Code",
      color: "var(--color-accent)",
      path: "/projects",
      stats: "50+ Projects"
    },
    {
      title: "Achievements",
      description: "Certifications, speaking engagements, and technical contributions",
      icon: "Award",
      color: "var(--color-primary)",
      path: "/achievements",
      stats: "25+ Awards"
    },
    {
      title: "Get In Touch",
      description: "Open for collaboration, consulting, and full-time opportunities",
      icon: "Mail",
      color: "var(--color-accent)",
      path: "/contact",
      stats: "24h Response"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Icon name="Zap" size={16} color="var(--color-primary)" />
            <span className="text-xs md:text-sm font-mono-cta text-primary uppercase tracking-wider">
              Quick Navigation
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono-heading text-foreground mb-4">
            Explore My Work
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive deep into technical implementations, architectural decisions, and measurable impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {quickLinks?.map((link, index) => (
            <Link
              key={index}
              to={link?.path}
              className="card-elevated bg-card rounded-lg p-6 md:p-8 border border-border hover:border-primary/30 transition-smooth group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div 
                  className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg transition-smooth"
                  style={{ backgroundColor: `${link?.color}15` }}
                >
                  <Icon 
                    name={link?.icon} 
                    size={28} 
                    color={link?.color}
                    className="group-hover:scale-110 transition-smooth" 
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl md:text-2xl font-bold font-mono-heading text-foreground group-hover:text-primary transition-smooth">
                      {link?.title}
                    </h3>
                    <Icon 
                      name="ArrowRight" 
                      size={20} 
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-smooth" 
                    />
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    {link?.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted rounded-lg">
                    <Icon name="TrendingUp" size={14} color={link?.color} />
                    <span className="text-xs font-mono-code" style={{ color: link?.color }}>
                      {link?.stats}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccessSection;