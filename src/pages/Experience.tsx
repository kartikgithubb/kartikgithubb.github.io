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
  id: 'boehringer',
  org: 'Boehringer Ingelheim',
  role: 'Data Valuation and Ideation Manager Co-Op',
  start: 'Jan 2025',
  end: 'Jul 2025',
  location: 'Ridgefield, USA',
  description: 'Drove ideation pipelines and valuation frameworks for central data science projects, streamlining innovation tracking and accelerating proof-of-concept decisions.',
  highlights: ['Developed comprehensive data valuation frameworks for enterprise projects', 'Streamlined innovation tracking processes across multiple teams', 'Accelerated proof-of-concept decision-making through systematic evaluation'],
  skills: ['Data Valuation', 'Innovation Management', 'Project Management', 'Strategic Planning', 'Data Science'],
  logo: '/lovable-uploads/791350ec-05d1-4d88-8612-0ff0b8e75dad.png',
  type: 'professional'
}, {
  id: 'uconn-research',
  org: 'Dept of Communication, UConn',
  role: 'Graduate Research Assistant',
  start: 'Mar 2024',
  end: 'May 2025',
  location: 'Storrs, USA',
  description: 'Led multimodal social media analytics using Python and ML Models to uncover emotion–engagement patterns, supporting peer-reviewed research and publications.',
  highlights: ['Developed multimodal analytics frameworks for social media research', 'Published peer-reviewed research on emotion-engagement patterns', 'Applied machine learning models to complex social media datasets'],
  skills: ['Python', 'Machine Learning', 'Social Media Analytics', 'Research', 'Data Science'],
  logo: '/lovable-uploads/dfc69aa2-d17f-4e6f-98b7-c3832baca228.png',
  type: 'professional'
}, {
  id: 'cetl-previous',
  org: 'Center for Excellence in Teaching and Learning',
  role: 'Graduate IT Assistant',
  start: 'May 2024',
  end: 'Dec 2024',
  location: 'Storrs, USA',
  description: 'Migrated university courses to Blackboard Ultra with UX-focused redesigns, improving learner navigation and boosting faculty and student adoption.',
  highlights: ['Successfully migrated 200+ courses to new platform', 'Trained faculty on enhanced platform features', 'Improved student satisfaction scores through better course design'],
  skills: ['UX Design', 'Blackboard Ultra', 'Course Migration', 'Training', 'Educational Technology'],
  logo: '/lovable-uploads/dfc69aa2-d17f-4e6f-98b7-c3832baca228.png',
  type: 'professional'
}, {
  id: 'controlstation-recent',
  org: 'Control Station',
  role: 'Business Analyst Intern',
  start: 'Aug 2024',
  end: 'Nov 2024',
  location: 'Manchester, USA',
  description: 'Simplified KPI frameworks and performed sensitivity analyses for industrial control systems, helping clients cut downtime and optimize efficiency.',
  highlights: ['Developed simplified KPI frameworks for industrial clients', 'Performed comprehensive sensitivity analyses on control systems', 'Reduced client downtime through data-driven optimization strategies'],
  skills: ['Business Analysis', 'KPI Development', 'Sensitivity Analysis', 'Industrial Systems', 'Process Optimization'],
  logo: '/lovable-uploads/c4a63ae6-f56e-4fb6-a8bc-bcdf29a07548.png',
  type: 'professional'
}, {
  id: 'brightchamps-coordinator',
  org: 'BrightCHAMPS',
  role: 'Program Coordinator',
  start: 'May 2023',
  end: 'Dec 2023',
  location: 'Remote',
  description: 'Designed and delivered STEM learning programs for students worldwide, enhancing retention through gamified robotics and coding modules.',
  highlights: ['Designed comprehensive STEM curricula for global student base', 'Implemented gamification strategies that improved retention rates', 'Delivered robotics and coding programs to 1000+ students worldwide'],
  skills: ['Program Management', 'STEM Education', 'Curriculum Design', 'Gamification', 'Educational Technology'],
  logo: '/lovable-uploads/b1442fff-9ba2-43ad-9b4c-f85b4b0e5288.png',
  type: 'professional'
}, {
  id: 'zalt',
  org: 'Zalt',
  role: 'Co-Founder',
  start: 'Dec 2022',
  end: 'Nov 2023',
  location: 'India',
  description: 'Built and scaled a consumer goods venture offering exclusive imports, driving local market penetration and establishing a differentiated retail presence.',
  highlights: ['Co-founded and scaled consumer goods startup from inception', 'Established exclusive import partnerships with international brands', 'Achieved significant local market penetration in competitive retail space'],
  skills: ['Entrepreneurship', 'Business Development', 'Market Analysis', 'Strategic Planning', 'Import/Export'],
  logo: '/lovable-uploads/81c31ab6-c4c1-4b7e-9cbb-081cd2ead827.png',
  type: 'professional'
}, {
  id: 'tvs-iot',
  org: 'TVS Motors',
  role: 'IoT Network Analyst Intern',
  start: 'Jun 2022',
  end: 'Aug 2022',
  location: 'Chennai, India',
  description: 'Engineered automated IoT telemetry pipelines and real-time anomaly dashboards across manufacturing units, boosting maintenance efficiency and accelerating issue resolution through SQL/MongoDB workflows and cross-functional triage mapping.',
  highlights: ['Engineered automated IoT telemetry pipelines for manufacturing units', 'Developed real-time anomaly detection dashboards', 'Improved maintenance efficiency through predictive analytics'],
  skills: ['IoT Analytics', 'SQL', 'MongoDB', 'Real-time Dashboards', 'Manufacturing Systems'],
  logo: '/lovable-uploads/12549149-7c5a-408d-b347-a743dad47c79.png',
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