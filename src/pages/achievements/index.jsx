import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Icon from '../../components/AppIcon';
import AchievementCard from './components/AchievementCard';
import ContributionGraph from './components/ContributionGraph';
import CategoryFilter from './components/CategoryFilter';

const Achievements = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const achievements = [
  {
    id: 1,
    type: 'certification',
    title: 'Certificate Program 2.0: IoT & Digital Twin',
    description: 'Specialized program covering the architecture of Internet of Things, Digital Twin synchronization, and Intelligent & Autonomous Systems.',
    date: '2025-05-15',
    organization: 'Indian Institute of Information Technology Sricity',
    verified: true,
    verificationUrl: 'https://drive.google.com/file/d/1kt-KQUmtE-iwyUMK5a-JtDrGSYE3MqKV/view?usp=sharing',
    metric: 'IoT, IAS & Digital Twin'
  },
  {
    id: 2,
    type: 'hackathon',
    title: 'AgriAI 36-Hour Hackathon - Abhisarga 2025',
    description: 'Developed "AgriVision," a multi-language mobile ecosystem using Flutter and Flask to deliver real-time crop pathology and weather insights.',
    date: '2025-03-10',
    organization: 'Indian Institute of Information Technology Sricity',
    verified: true,
    verificationUrl: 'https://drive.google.com/file/d/1fpOzEkxxOW9u_UAvmPRnYkmUTZ7Os75I/view?usp=sharing',
    metric: 'Finalist'
  },
  {
    id: 3,
    type: 'hackathon',
    title: 'ElectroForge Hackathon - Utkrista 2024',
    description: 'Awarded for designing an ESP32-based IoT Water Management system featuring real-time sensor integration and threshold-based safety logic.',
    date: '2024-11-20',
    organization: 'Indian Institute of Information Technology Sricity',
    verified: true,
    verificationUrl: 'https://drive.google.com/file/d/11_pOzqmNsglx6QU77Q_eWh-3mIK_2Cly/view?usp=sharing',
    metric: 'Runner-Up'
  },
  {
    id: 4,
    type: 'hackathon',
    title: 'Bit-N-Build Hackathon Participation',
    description: 'Participated in a global coding competition, developing full-stack solutions under intensive time constraints.',
    date: '2024-10-15',
    organization: 'Google Developer Groups (Unstop)',
    verified: true,
    verificationUrl: 'https://unstop.com/certificate-verification/1bb7300b-b74b-4df4-b02d-0886f9d41969',
    metric: 'Global Event'
  },
  {
  id: 5,
  type: 'hackathon',
  title: 'Flipkart GRiD 6.0 - Technical Participation',
  description: 'Participated in India\'s premier engineering challenge, solving complex problems related to e-commerce workflows, supply chain logic, and large-scale digital transactions.',
  date: '2024-08-05',
  organization: 'Flipkart',
  verified: true,
  verificationUrl: 'https://unstop.com/certificate-verification/77143486-6dab-480b-b356-1f16e018a6d0',
  metric: 'National Level'
},
  {
    id: 6,
    type: 'opensource',
    title: 'Author: logsave-hub (npm Package)',
    description: 'Authored and published a production-ready Node.js logging utility, achieving 85+ downloads in its debut month.',
    date: '2026-01-10',
    organization: 'npm Registry',
    verified: true,
    verificationUrl: 'https://www.npmjs.com/package/logsave-hub',
    metric: '85+ Downloads'
  }
];

  const contributionData = Array.from({ length: 365 }, (_, i) => {
    const date = new Date();
    date?.setDate(date?.getDate() - (364 - i));
    return {
      date: date?.toISOString()?.split('T')?.[0],
      count: Math.floor(Math.random() * 25)
    };
  });

  const categories = [
    { id: 'all', label: 'All Achievements', count: achievements?.length },
    { id: 'certification', label: 'Certifications', count: achievements?.filter(a => a?.type === 'certification')?.length },
    { id: 'opensource', label: 'Open Source', count: achievements?.filter(a => a?.type === 'opensource')?.length },
    { id: 'hackathon', label: 'Hackathon\'s', count: achievements?.filter(a => a?.type === 'hackathon')?.length }
  ];

  const filteredAchievements = selectedCategory === 'all' 
    ? achievements 
    : achievements?.filter(a => a?.type === selectedCategory);

  return (
    <>
      <Header />
      <main className="main-content bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <Breadcrumbs />

          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg">
                <Icon name="Trophy" size={28} color="var(--color-primary)" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-mono-heading">
                  Achievement's
                </h1>
                <p className="text-muted-foreground text-sm md:text-base mt-1">
                  Verified credentials and technical milestones
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8 md:mb-12">
            <ContributionGraph contributions={contributionData} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="lg:col-span-1">
              <CategoryFilter 
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>

            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-foreground font-mono-heading">
                  {categories?.find(c => c?.id === selectedCategory)?.label}
                </h2>
                <div className="text-sm text-muted-foreground font-mono-code">
                  {filteredAchievements?.length} result{filteredAchievements?.length !== 1 ? 's' : ''}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:gap-6">
                {filteredAchievements?.map((achievement) => (
                  <AchievementCard key={achievement?.id} achievement={achievement} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
};

export default Achievements;