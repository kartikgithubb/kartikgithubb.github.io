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
const professionalExperience: ExperienceItem[] = [{
  id: 'current',
  org: 'TechFlow Analytics',
  role: 'Senior Data Analyst',
  start: 'Jan 2023',
  end: 'Present',
  location: 'Connecticut, USA',
  description: 'Leading advanced analytics initiatives focusing on predictive modeling, business intelligence, and data-driven decision making for enterprise clients.',
  highlights: ['Developed machine learning models that increased client revenue by 30%', 'Built automated reporting systems serving 100+ stakeholders', 'Led data science projects across finance, healthcare, and retail sectors'],
  skills: ['Python', 'SQL', 'Tableau', 'AWS', 'Machine Learning'],
  logo: '/lovable-uploads/791350ec-05d1-4d88-8612-0ff0b8e75dad.png',
  type: 'professional'
}, {
  id: 'previous',
  org: 'DataViz Solutions',
  role: 'Data Analyst',
  start: 'Jun 2021',
  end: 'Dec 2022',
  location: 'Connecticut, USA',
  description: 'Specialized in transforming complex business data into actionable insights through advanced visualization and statistical analysis techniques.',
  highlights: ['Created interactive dashboards that improved decision-making speed by 40%', 'Implemented ETL pipelines processing 10M+ records daily', 'Collaborated with C-suite executives on strategic data initiatives'],
  skills: ['Power BI', 'SQL', 'Python', 'R', 'Statistical Analysis'],
  logo: '/lovable-uploads/92881b77-6392-43fd-b54a-55d3370b8276.png',
  type: 'professional'
}, {
  id: 'early',
  org: 'StartupX Technologies',
  role: 'Business Analyst Intern',
  start: 'May 2020',
  end: 'Aug 2020',
  location: 'Remote',
  description: 'Supported early-stage startup growth through comprehensive market analysis, user research, and business intelligence reporting.',
  highlights: ['Conducted market research that guided $500K product development strategy', 'Analyzed user behavior patterns for 50K+ active users', 'Created financial forecasting models for investor presentations'],
  skills: ['Excel', 'Google Analytics', 'Market Research', 'Financial Modeling'],
  logo: '/lovable-uploads/28fbc409-56d8-47f6-9940-7e622ba31cc0.png',
  type: 'professional'
}];
const volunteerExperience: ExperienceItem[] = [{
  id: 'volunteer1',
  org: 'Data for Good',
  role: 'Volunteer Analyst',
  start: 'Mar 2022',
  end: 'Present',
  location: 'Tokyo, Japan',
  description: 'Supporting non-profit organizations with data analysis and visualization projects.',
  highlights: ['Helped 5+ NGOs optimize their operations using data', 'Created impact measurement dashboards', 'Trained volunteers in basic data analysis'],
  skills: ['Python', 'Tableau', 'Social Impact'],
  logo: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=64&h=64&fit=crop&crop=center',
  type: 'volunteer'
}, {
  id: 'volunteer2',
  org: 'Tech Education Initiative',
  role: 'Data Science Mentor',
  start: 'Jan 2021',
  end: 'Dec 2022',
  location: 'Tokyo, Japan',
  description: 'Mentoring underrepresented groups in data science and analytics careers.',
  highlights: ['Mentored 20+ students in data science fundamentals', 'Organized workshops on Python and SQL', 'Created learning materials for beginners'],
  skills: ['Teaching', 'Python', 'Mentoring'],
  logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=center',
  type: 'volunteer'
}, {
  id: 'volunteer3',
  org: 'Community Analytics',
  role: 'Research Volunteer',
  start: 'Sep 2020',
  end: 'Dec 2021',
  location: 'Tokyo, Japan',
  description: 'Conducting community research and data collection for local government initiatives.',
  highlights: ['Collected and analyzed community demographic data', 'Supported policy research with statistical analysis', 'Presented findings to local government officials'],
  skills: ['Research', 'Statistics', 'Public Policy'],
  logo: 'https://images.unsplash.com/photo-1573164574511-73c773193279?w=64&h=64&fit=crop&crop=center',
  type: 'volunteer'
}];
const ExperienceTimeline = ({
  experiences,
  title,
  subtitle
}: {
  experiences: ExperienceItem[];
  title: string;
  subtitle: string;
}) => <div className="mb-20">
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
          {experiences.map((exp, index) => <div key={exp.id} className="relative flex items-start">
              {/* Logo Octagon */}
              <div className="relative flex-shrink-0 mr-8">
                <div className="octagon-shape w-20 h-20 bg-background border-2 border-border hover:border-primary transition-all duration-300 hover-glow group cursor-pointer overflow-hidden">
                  <img src={exp.logo} alt={`${exp.org} logo`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
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
            </div>)}
        </div>
      </div>
    </div>
  </div>;
const Experience = () => {
  return <div>
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
        <ExperienceTimeline experiences={professionalExperience} title="Professional Work Experience" subtitle="Speak to K - my digital twin to learn more about my Work experiences" />

        {/* Volunteering Experience */}
        <ExperienceTimeline experiences={volunteerExperience} title="Volunteering Experience" subtitle="Speak to K - my digital twin to learn more about my Work experiences" />

        {/* Call to Action */}
        <div className="text-center mt-16">
          
        </div>
      </Section>

      <Footer />
      <ChatButton />
    </div>;
};
export default Experience;