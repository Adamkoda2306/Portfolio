import { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'General',
      icon: 'HelpCircle',
      questions: [
        {
          question: 'What is your typical response time?',
          answer: 'Response times vary by inquiry type:\n• Job opportunities: 24-48 hours\n• Technical discussions: 2-4 hours during working hours\n• Speaking engagements: 48-72 hours\n• General inquiries: 5-7 days\n\nUrgent matters can be flagged in the contact form for priority handling.'
        },
        {
          question: 'Do you work with international clients?',
          answer: 'Yes, I work with clients globally. I am based in San Francisco (PST/UTC-8) but accommodate different timezones for important discussions. I have experience working with teams across North America, Europe, and Asia.'
        },
        {
          question: 'What are your working hours?',
          answer: 'My standard working hours are:\n• Monday-Friday: 9:00 AM - 6:00 PM EST\n• Saturday: 10:00 AM - 2:00 PM EST\n• Sunday: Closed\n\nFor urgent production issues with existing projects, emergency contact is available outside these hours.'
        }
      ]
    },
    {
      category: 'Collaboration',
      icon: 'Users',
      questions: [
        {
          question: 'What types of projects do you take on?',
          answer: 'I specialize in backend development and system architecture projects including:\n• Scalable API development and microservices\n• Database design and optimization\n• Cloud infrastructure and DevOps\n• Performance optimization and system reliability\n• Technical consulting and architecture reviews\n\nI prefer projects that involve complex technical challenges and have measurable business impact.'
        },
        {
          question: 'Do you offer mentorship or consulting?',
          answer: 'Yes, I offer both:\n\nMentorship: Available for junior and mid-level developers looking to advance their backend skills. Sessions are typically 1-2 hours bi-weekly.\n\nConsulting: Available for technical architecture reviews, code audits, performance optimization, and strategic technical planning. Minimum engagement is typically 10 hours.'
        },
        {
          question: 'What is your availability for new projects?',
          answer: 'My availability varies based on current commitments. Generally:\n• Full-time positions: 2-3 months notice\n• Consulting projects: 2-4 weeks for start\n• Speaking engagements: Flexible scheduling\n• Mentorship: Usually available within 1-2 weeks\n\nContact me to discuss specific timelines and requirements.'
        }
      ]
    },
    {
      category: 'Technical',
      icon: 'Code',
      questions: [
        {
          question: 'What technologies do you specialize in?',
          answer: 'My core expertise includes:\n\nBackend: Node.js, Python, Go, Java\nDatabases: PostgreSQL, MongoDB, Redis, Elasticsearch\nCloud: AWS, Google Cloud, Azure\nDevOps: Docker, Kubernetes, CI/CD pipelines\nArchitecture: Microservices, Event-driven systems, REST/GraphQL APIs\n\nI focus on choosing the right technology for each project rather than being tied to specific stacks.'
        },
        {
          question: 'Do you provide code reviews or technical audits?',
          answer: 'Yes, I offer comprehensive code reviews and technical audits covering:\n• Code quality and best practices\n• Security vulnerabilities\n• Performance bottlenecks\n• Scalability concerns\n• Architecture patterns\n• Testing coverage\n\nAudits typically take 1-2 weeks depending on codebase size and include a detailed report with actionable recommendations.'
        },
        {
          question: 'Can you help with existing production issues?',
          answer: 'Yes, I provide emergency support for production issues including:\n• Performance degradation\n• System outages\n• Security incidents\n• Data integrity problems\n• Scaling challenges\n\nFor existing clients, emergency support is available 24/7. For new inquiries, please use the urgent contact option with detailed information about the issue.'
        }
      ]
    },
    {
      category: 'Speaking & Content',
      icon: 'Mic',
      questions: [
        {
          question: 'Do you speak at conferences or events?',
          answer: 'Yes, I regularly speak at technical conferences, meetups, and corporate events. Topics include:\n• Backend architecture and system design\n• Performance optimization strategies\n• DevOps and cloud infrastructure\n• Technical leadership and team building\n\nI prefer events with 50+ attendees and typically require 4-6 weeks notice for preparation.'
        },
        {
          question: 'Do you write technical content or tutorials?',
          answer: 'Yes, I regularly publish technical content on:\n• Personal blog (architecture deep-dives)\n• Dev.to (tutorials and guides)\n• Medium (thought leadership)\n• GitHub (documentation and examples)\n\nI am also available for guest posts, technical writing projects, and content review.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg">
          <Icon name="MessageCircle" size={20} color="var(--color-primary)" />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-foreground font-mono-heading">Frequently Asked Questions</h2>
          <p className="text-sm text-muted-foreground font-mono-code">Quick answers to common inquiries</p>
        </div>
      </div>
      <div className="space-y-6">
        {faqs?.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-3">
            <div className="flex items-center gap-2 mb-3">
              <Icon name={category?.icon} size={18} color="var(--color-accent)" />
              <h3 className="text-base font-bold text-accent font-mono-heading uppercase tracking-wider">{category?.category}</h3>
            </div>

            <div className="space-y-2">
              {category?.questions?.map((faq, questionIndex) => {
                const isOpen = openIndex === `${categoryIndex}-${questionIndex}`;
                return (
                  <div
                    key={questionIndex}
                    className="bg-muted/50 rounded-lg border border-border overflow-hidden transition-smooth"
                  >
                    <button
                      onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-muted transition-smooth"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm md:text-base font-medium text-foreground font-mono-cta pr-4">{faq?.question}</span>
                      <Icon
                        name={isOpen ? 'ChevronUp' : 'ChevronDown'}
                        size={20}
                        className={`flex-shrink-0 text-muted-foreground transition-smooth ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4">
                        <div className="pt-2 border-t border-border">
                          <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">{faq?.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
        <div className="flex items-start gap-3">
          <Icon name="Info" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground font-mono-cta">Still have questions?</p>
            <p className="text-xs text-muted-foreground mt-1">If you couldn't find the answer you're looking for, feel free to reach out directly using the contact form or any of the communication channels provided.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;