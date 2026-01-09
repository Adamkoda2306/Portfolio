import { Link } from 'react-router-dom';
import Icon from '../AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: 'Github', url: 'https://github.com', ariaLabel: 'Visit GitHub profile' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com', ariaLabel: 'Visit LinkedIn profile' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com', ariaLabel: 'Visit Twitter profile' },
    { name: 'Email', icon: 'Mail', url: 'mailto:contact@devportfolio.pro', ariaLabel: 'Send email' },
  ];

  const footerLinks = [
    { path: '/homepage', label: 'Home' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary font-bold text-xl font-mono-heading">
              <div className="w-8 h-8 flex items-center justify-center bg-primary/10 rounded-lg">
                <Icon name="Terminal" size={20} color="var(--color-primary)" />
              </div>
              <span>DevPortfolio Pro</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building the invisible infrastructure that powers digital experiences. 
              Architecting scalable systems with precision and reliability.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-foreground font-semibold font-mono-heading text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {footerLinks?.map((link) => (
                <Link
                  key={link?.path}
                  to={link?.path}
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  {link?.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-foreground font-semibold font-mono-heading text-sm uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social?.ariaLabel}
                  className="w-10 h-10 flex items-center justify-center bg-muted hover:bg-primary/10 rounded-lg transition-smooth group"
                >
                  <Icon 
                    name={social?.icon} 
                    size={20} 
                    className="text-muted-foreground group-hover:text-primary transition-smooth" 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;