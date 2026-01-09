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
              </div>

            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 md:gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2 space-y-6 md:space-y-8">
                <ContactForm />
                <ContactChannels />
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