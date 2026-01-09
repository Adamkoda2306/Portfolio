import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Icon from '../../components/AppIcon';
import ContactForm from './components/ContactForm';
import AvailabilityStatus from './components/AvailabilityStatus';
import ContactChannels from './components/ContactChannels';
import LocationMap from './components/LocationMap';
import SocialLinks from './components/SocialLinks';
import FAQSection from './components/FAQSection';

const Contact = () => {
  const currentYear = new Date()?.getFullYear();

  const quickStats = [
    {
      icon: 'Clock',
      value: '< 24h',
      label: 'Avg Response Time',
      color: 'primary'
    },
    {
      icon: 'Users',
      value: '500+',
      label: 'Connections',
      color: 'accent'
    },
    {
      icon: 'Globe',
      value: '25+',
      label: 'Countries Served',
      color: 'success'
    },
    {
      icon: 'MessageSquare',
      value: '99%',
      label: 'Response Rate',
      color: 'warning'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact - DevPortfolio Pro | Get in Touch</title>
        <meta name="description" content="Connect with a backend development expert. Multiple communication channels, clear response times, and professional networking opportunities." />
        <meta name="keywords" content="contact backend developer, hire backend engineer, technical consultation, software development contact" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="main-content">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-12">
            <Breadcrumbs />

            {/* Hero Section */}
            <div className="mb-8 md:mb-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-primary/10 rounded-lg">
                      <Icon name="Mail" size={28} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-mono-heading">
                        Let's Connect
                      </h1>
                      <p className="text-base md:text-lg text-primary font-mono-code mt-1">Connection Protocol Active</p>
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                    Whether you're looking to discuss a project, explore collaboration opportunities, or just want to connect, I'm here to help. Choose your preferred communication channel and I'll get back to you promptly.
                  </p>
                </div>

                <div className="status-indicator online">
                  <span className="w-3 h-3 bg-success rounded-full pulse-glow"></span>
                  <span className="font-mono-code">Available for opportunities</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {quickStats?.map((stat, index) => (
                  <div key={index} className="metric-card">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 flex items-center justify-center bg-${stat?.color}/10 rounded-lg`}>
                        <Icon name={stat?.icon} size={20} color={`var(--color-${stat?.color})`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-xl md:text-2xl font-bold text-${stat?.color} font-mono-heading`}>{stat?.value}</div>
                        <div className="text-xs text-muted-foreground font-mono-code truncate">{stat?.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Left Column - Contact Form */}
              <div className="lg:col-span-2 space-y-6 md:space-y-8">
                <ContactForm />
                <ContactChannels />
                <FAQSection />
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-6 md:space-y-8">
                <AvailabilityStatus />
                <LocationMap />
                <SocialLinks />
              </div>
            </div>

            {/* Bottom CTA Section */}
            <div className="mt-8 md:mt-12 bg-gradient-to-r from-primary/10 via-accent/10 to-success/10 rounded-lg border border-primary/20 p-6 md:p-8">
              <div className="text-center max-w-3xl mx-auto">
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-lg mx-auto mb-4">
                  <Icon name="Zap" size={32} color="var(--color-primary)" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground font-mono-heading mb-3">
                  Ready to Build Something Great?
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-6">
                  Let's discuss how we can work together to solve your technical challenges and build scalable, reliable systems that drive business value.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:contact@devportfolio.pro"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium font-mono-cta hover:bg-primary/90 transition-smooth"
                  >
                    <Icon name="Mail" size={20} />
                    <span>Send Email</span>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium font-mono-cta hover:bg-muted transition-smooth"
                  >
                    <Icon name="Calendar" size={20} />
                    <span>Schedule Call</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-card rounded-lg border border-border p-4 text-center">
                <Icon name="Shield" size={24} color="var(--color-success)" className="mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground font-mono-cta">Secure Communication</p>
                <p className="text-xs text-muted-foreground mt-1">End-to-end encrypted</p>
              </div>
              <div className="bg-card rounded-lg border border-border p-4 text-center">
                <Icon name="Clock" size={24} color="var(--color-primary)" className="mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground font-mono-cta">Fast Response</p>
                <p className="text-xs text-muted-foreground mt-1">Within 24 hours</p>
              </div>
              <div className="bg-card rounded-lg border border-border p-4 text-center">
                <Icon name="CheckCircle" size={24} color="var(--color-accent)" className="mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground font-mono-cta">Professional Service</p>
                <p className="text-xs text-muted-foreground mt-1">Quality guaranteed</p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;