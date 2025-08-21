import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ChatButton from '@/components/chat/ChatButton';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ExperienceItem {
  id: string;
  org: string;
  role: string;
  start: string;
  end: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
  logo: string;
  type: 'professional' | 'volunteer';
}

const professionalExperience: ExperienceItem[] = [
  {
    id: 'current',
    org: 'TechFlow Analytics',
    role: 'Senior Data Analyst',
    start: 'Jan 2023',
    end: 'Present',
    location: 'Tokyo, Japan',
    description: 'Leading data initiatives across product analytics, customer insights, and business intelligence.',
    highlights: [
      'Built predictive models improving customer retention by 25%',
      'Designed executive dashboards serving 50+ stakeholders',
      'Led cross-functional analytics projects with 5-person teams'
    ],
    skills: ['Python', 'SQL', 'Power BI', 'AWS', 'Scikit-learn'],
    logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop&crop=center',
    type: 'professional'
  },
  {
    id: 'previous',
    org: 'DataViz Solutions',
    role: 'Data Analyst',
    start: 'Jun 2021',
    end: 'Dec 2022',
    location: 'Tokyo, Japan',
    description: 'Specialized in business intelligence and data visualization for mid-market clients.',
    highlights: [
      'Created 30+ client dashboards with 95% satisfaction rate',
      'Automated reporting processes saving 20 hours/week',
      'Conducted market analysis supporting $2M investment decisions'
    ],
    skills: ['Tableau', 'SQL', 'Excel', 'R', 'Statistics'],
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=64&h=64&fit=crop&crop=center',
    type: 'professional'
  },
  {
    id: 'early',
    org: 'StartupX',
    role: 'Business Analyst Intern',
    start: 'May 2020',
    end: 'Aug 2020',
    location: 'Tokyo, Japan',
    description: 'Supported product and business development through data analysis and market research.',
    highlights: [
      'Analyzed user behavior data for 10K+ monthly active users',
      'Created financial models for Series A fundraising',
      'Contributed to product roadmap through data insights'
    ],
    skills: ['Excel', 'Google Analytics', 'SQL', 'Market Research'],
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=center',
    type: 'professional'
  }
];

const volunteerExperience: ExperienceItem[] = [
  {
    id: 'volunteer1',
    org: 'Data for Good',
    role: 'Volunteer Analyst',
    start: 'Mar 2022',
    end: 'Present',
    location: 'Tokyo, Japan',
    description: 'Supporting non-profit organizations with data analysis and visualization projects.',
    highlights: [
      'Helped 5+ NGOs optimize their operations using data',
      'Created impact measurement dashboards',
      'Trained volunteers in basic data analysis'
    ],
    skills: ['Python', 'Tableau', 'Social Impact'],
    logo: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=64&h=64&fit=crop&crop=center',
    type: 'volunteer'
  },
  {
    id: 'volunteer2',
    org: 'Tech Education Initiative',
    role: 'Data Science Mentor',
    start: 'Jan 2021',
    end: 'Dec 2022',
    location: 'Tokyo, Japan',
    description: 'Mentoring underrepresented groups in data science and analytics careers.',
    highlights: [
      'Mentored 20+ students in data science fundamentals',
      'Organized workshops on Python and SQL',
      'Created learning materials for beginners'
    ],
    skills: ['Teaching', 'Python', 'Mentoring'],
    logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=center',
    type: 'volunteer'
  },
  {
    id: 'volunteer3',
    org: 'Community Analytics',
    role: 'Research Volunteer',
    start: 'Sep 2020',
    end: 'Dec 2021',
    location: 'Tokyo, Japan',
    description: 'Conducting community research and data collection for local government initiatives.',
    highlights: [
      'Collected and analyzed community demographic data',
      'Supported policy research with statistical analysis',
      'Presented findings to local government officials'
    ],
    skills: ['Research', 'Statistics', 'Public Policy'],
    logo: 'https://images.unsplash.com/photo-1573164574511-73c773193279?w=64&h=64&fit=crop&crop=center',
    type: 'volunteer'
  }
];

const ExperienceTimeline = ({ experiences, title, subtitle }: { 
  experiences: ExperienceItem[], 
  title: string,
  subtitle: string 
}) => (
  <div className="mb-20">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-muted-foreground italic">
        ({subtitle})
      </p>
    </div>

    <div className="max-w-2xl mx-auto">
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-border" />

        {/* Experience Items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex items-start">
              {/* Logo Octagon */}
              <div className="relative flex-shrink-0 mr-8">
                <div className="octagon-shape w-20 h-20 bg-background border-2 border-border hover:border-primary transition-all duration-300 hover-glow group cursor-pointer overflow-hidden">
                  <img 
                    src={exp.logo} 
                    alt={`${exp.org} logo`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground">{exp.start} to {exp.end}</p>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    {exp.location}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Experience = () => {
  return (
    <div>
      <Header />
      
      {/* Hero */}
      <Section className="pt-24" padding="xl">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Work <span className="crystal-text">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            A journey through data analytics, from startup insights to enterprise intelligence
          </p>
        </div>

        {/* Professional Experience */}
        <ExperienceTimeline 
          experiences={professionalExperience}
          title="Professional Work Experience"
          subtitle="Speak to K - my digital twin to learn more about my Work experiences"
        />

        {/* Volunteering Experience */}
        <ExperienceTimeline 
          experiences={volunteerExperience}
          title="Volunteering Experience"
          subtitle="Speak to K - my digital twin to learn more about my Work experiences"
        />

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-md mx-auto p-8 glass">
            <h3 className="text-xl font-semibold mb-4">Interested in Working Together?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how my experience can contribute to your team's success
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
            >
              Get in Touch
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Card>
        </div>
      </Section>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Experience;