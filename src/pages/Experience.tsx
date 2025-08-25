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
}, {
  id: 'zentech',
  org: 'ZenTech Solutions',
  role: 'Data Science Consultant',
  start: 'Jan 2022',
  end: 'May 2022',
  location: 'New York, USA',
  description: 'Provided specialized data science consulting services for technology startups, focusing on AI implementation and analytics optimization.',
  highlights: ['Implemented machine learning algorithms that reduced processing time by 60%', 'Designed predictive models for client acquisition strategies', 'Mentored junior data scientists in advanced ML techniques'],
  skills: ['Python', 'TensorFlow', 'Scikit-learn', 'Deep Learning', 'AI'],
  logo: '/lovable-uploads/f57544e0-811f-436b-8380-ab9fc9f27273.png',
  type: 'professional'
}, {
  id: 'brightchamps',
  org: 'BrightCHAMPS',
  role: 'Educational Data Analyst',
  start: 'Sep 2021',
  end: 'Dec 2021',
  location: 'California, USA',
  description: 'Analyzed learning patterns and educational outcomes to improve online learning experiences for K-12 students worldwide.',
  highlights: ['Developed learning analytics models that improved student engagement by 45%', 'Created performance tracking dashboards for 10,000+ students', 'Optimized curriculum delivery based on data-driven insights'],
  skills: ['Learning Analytics', 'Python', 'Tableau', 'Educational Technology', 'Statistics'],
  logo: '/lovable-uploads/b1442fff-9ba2-43ad-9b4c-f85b4b0e5288.png',
  type: 'professional'
}, {
  id: 'tvs',
  org: 'TVS Motor Company',
  role: 'Business Intelligence Analyst',
  start: 'Mar 2021',
  end: 'Aug 2021',
  location: 'Chennai, India',
  description: 'Supported automotive business operations through comprehensive data analysis, market research, and performance optimization strategies.',
  highlights: ['Analyzed sales data across 15+ countries to identify market opportunities', 'Built predictive models for inventory management and demand forecasting', 'Optimized supply chain operations through data-driven recommendations'],
  skills: ['Business Intelligence', 'SQL', 'Power BI', 'Supply Chain Analytics', 'Market Research'],
  logo: '/lovable-uploads/12549149-7c5a-408d-b347-a743dad47c79.png',
  type: 'professional'
}, {
  id: 'controlstation',
  org: 'Control Station',
  role: 'Systems Data Analyst',
  start: 'Oct 2020',
  end: 'Feb 2021',
  location: 'Texas, USA',
  description: 'Analyzed industrial control systems data to optimize manufacturing processes and improve operational efficiency for enterprise clients.',
  highlights: ['Implemented IoT data analytics solutions for manufacturing optimization', 'Reduced system downtime by 35% through predictive maintenance models', 'Designed real-time monitoring dashboards for industrial operations'],
  skills: ['IoT Analytics', 'Industrial Systems', 'Python', 'Real-time Data', 'Process Optimization'],
  logo: '/lovable-uploads/c4a63ae6-f56e-4fb6-a8bc-bcdf29a07548.png',
  type: 'professional'
}];
const volunteerExperience: ExperienceItem[] = [{
  id: 'volunteer1',
  org: 'Everest Youth Initiative',
  role: 'Community Data Analyst',
  start: 'Mar 2022',
  end: 'Present',
  location: 'Connecticut, USA',
  description: 'Supporting youth development programs through data-driven insights and community impact measurement initiatives.',
  highlights: ['Analyzed program effectiveness for 500+ youth participants', 'Created impact assessment dashboards for funding applications', 'Developed predictive models for program success metrics'],
  skills: ['Python', 'Community Analytics', 'Impact Measurement'],
  logo: '/lovable-uploads/98e1a284-f378-4036-9398-912f4b61b1c8.png',
  type: 'volunteer'
}, {
  id: 'volunteer2',
  org: 'National Cadet Corps (NCC)',
  role: 'Data Management Volunteer',
  start: 'Jan 2021',
  end: 'Dec 2022',
  location: 'Andhra Pradesh, India',
  description: 'Managed cadet performance data and training analytics for leadership development programs across multiple battalions.',
  highlights: ['Digitized training records for 1000+ cadets', 'Created performance tracking systems for leadership assessments', 'Analyzed training effectiveness and progression metrics'],
  skills: ['Data Management', 'Leadership Analytics', 'Training Metrics'],
  logo: '/lovable-uploads/6fb41c5e-3caf-46c6-89d1-f75e2a728f81.png',
  type: 'volunteer'
}, {
  id: 'volunteer3',
  org: 'National Service Scheme (NSS)',
  role: 'Community Research Volunteer',
  start: 'Sep 2020',
  end: 'Dec 2021',
  location: 'Andhra Pradesh, India',
  description: 'Conducted community development research and data analysis for rural development initiatives and social impact programs.',
  highlights: ['Surveyed and analyzed community needs across 15+ villages', 'Created data-driven recommendations for government policy initiatives', 'Developed impact measurement frameworks for social programs'],
  skills: ['Community Research', 'Social Impact Analytics', 'Policy Research'],
  logo: '/lovable-uploads/ac19675e-00b1-44b4-89da-85ee733d2bf0.png',
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