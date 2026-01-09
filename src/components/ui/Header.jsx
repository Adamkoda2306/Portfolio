import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/homepage', label: 'Home', icon: 'Home' },
    { path: '/experience', label: 'Experience', icon: 'Briefcase' },
    { path: '/projects', label: 'Projects', icon: 'Code' },
    { path: '/achievements', label: 'Achievements', icon: 'Award' },
    { path: '/contact', label: 'Contact', icon: 'Mail' },
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header-container">
        <div className="header-content">
          <Link to="/homepage" className="header-logo">
            <div className="header-logo-icon">
              <Icon name="Terminal" size={20} color="var(--color-primary)" />
            </div>
            <span>DevPortfolio Pro</span>
          </Link>

          <nav className="nav-desktop">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`nav-link ${isActivePath(item?.path) ? 'active' : ''}`}
              >
                {item?.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={toggleMobileMenu}
            className="mobile-menu-button"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Icon 
              name={isMobileMenuOpen ? 'X' : 'Menu'} 
              size={24} 
              color="var(--color-foreground)" 
            />
          </button>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <nav className="mobile-menu-content">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={closeMobileMenu}
                className={`mobile-nav-link ${isActivePath(item?.path) ? 'active' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <Icon name={item?.icon} size={28} />
                  <span>{item?.label}</span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;