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
  logo?: string;
}

const mockExperience: ExperienceItem[] = [
  {
    id: 'current',
    org: 'TechFlow Analytics',
    role: 'Senior Data Analyst',
    start: 'Jan 2023',
    end: 'Present',
    location: 'San Francisco, CA',
    description: 'Leading data initiatives across product analytics, customer insights, and business intelligence. Driving data-driven decision making through advanced analytics and ML implementations.',
    highlights: [
      'Built predictive models improving customer retention by 25%',
      'Designed executive dashboards serving 50+ stakeholders',
      'Led cross-functional analytics projects with 5-person teams',
      'Implemented MLOps pipeline reducing model deployment time by 60%'
    ],
    skills: ['Python', 'SQL', 'Power BI', 'AWS', 'Scikit-learn', 'Tableau']
  },
  {
    id: 'previous',
    org: 'DataViz Solutions',
    role: 'Data Analyst',
    start: 'Jun 2021',
    end: 'Dec 2022',
    location: 'Remote',
    description: 'Specialized in business intelligence and data visualization for mid-market clients. Delivered actionable insights through comprehensive analysis and compelling visual storytelling.',
    highlights: [
      'Created 30+ client dashboards with 95% satisfaction rate',
      'Automated reporting processes saving 20 hours/week',
      'Conducted market analysis supporting $2M investment decisions',
      'Mentored 3 junior analysts in advanced analytics techniques'
    ],
    skills: ['Tableau', 'SQL', 'Excel', 'R', 'Statistics', 'Data Visualization']
  },
  {
    id: 'early',
    org: 'StartupX',
    role: 'Business Analyst Intern',
    start: 'May 2020',
    end: 'Aug 2020',
    location: 'Palo Alto, CA',
    description: 'Supported product and business development through data analysis and market research. Gained hands-on experience in startup analytics and rapid prototyping.',
    highlights: [
      'Analyzed user behavior data for 10K+ monthly active users',
      'Created financial models for Series A fundraising',
      'Contributed to product roadmap through data insights',
      'Presented findings to C-level executives weekly'
    ],
    skills: ['Excel', 'Google Analytics', 'SQL', 'Market Research']
  }
];

const Experience = () => {
  return (
    <div>
      <Header />
      
      {/* Hero */}
      <Section className="pt-24" padding="xl">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Work <span className="crystal-text">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            A journey through data analytics, from startup insights to enterprise intelligence
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5" />

            {/* Experience Items */}
            <div className="space-y-12">
              {mockExperience.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className={`relative flex flex-col md:flex-row items-start ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10" />

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <Card className="p-8 hover-lift">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                          <p className="text-lg text-primary font-semibold">{exp.org}</p>
                        </div>
                        <div className="mask-octagon w-12 h-12 bg-muted flex items-center justify-center text-xs font-bold">
                          {exp.org.charAt(0)}
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.start} - {exp.end}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

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