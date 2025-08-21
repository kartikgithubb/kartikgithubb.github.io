import React from 'react';
import { BarChart3, Database, Brain, Code, Palette, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ChatButton from '@/components/chat/ChatButton';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: Array<{
    name: string;
    level: number;
    description?: string;
  }>;
}

const skillCategories: SkillCategory[] = [
  {
    id: 'analytics',
    title: 'Data Analytics',
    icon: <BarChart3 className="h-6 w-6" />,
    description: 'Statistical analysis, business intelligence, and data visualization',
    skills: [
      { name: 'Python', level: 90, description: 'Advanced data manipulation, analysis, and ML' },
      { name: 'SQL', level: 95, description: 'Complex queries, optimization, and database design' },
      { name: 'Power BI', level: 85, description: 'Dashboard creation and DAX development' },
      { name: 'Tableau', level: 80, description: 'Interactive visualizations and storytelling' },
      { name: 'Excel', level: 90, description: 'Advanced functions, pivot tables, and macros' },
      { name: 'R', level: 70, description: 'Statistical modeling and analysis' }
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: <Brain className="h-6 w-6" />,
    description: 'Modern AI applications and machine learning implementations',
    skills: [
      { name: 'Scikit-learn', level: 85, description: 'Classification, regression, and clustering' },
      { name: 'TensorFlow', level: 75, description: 'Deep learning and neural networks' },
      { name: 'RAG Systems', level: 80, description: 'Retrieval-augmented generation implementations' },
      { name: 'NLP', level: 75, description: 'Text processing and sentiment analysis' },
      { name: 'Computer Vision', level: 65, description: 'Image classification and object detection' },
      { name: 'MLOps', level: 70, description: 'Model deployment and monitoring' }
    ]
  },
  {
    id: 'technical',
    title: 'Technical Stack',
    icon: <Code className="h-6 w-6" />,
    description: 'Programming languages, frameworks, and development tools',
    skills: [
      { name: 'JavaScript/TypeScript', level: 85, description: 'Modern web development and APIs' },
      { name: 'React', level: 80, description: 'Component-based UI development' },
      { name: 'Node.js', level: 75, description: 'Backend development and APIs' },
      { name: 'AWS', level: 70, description: 'Cloud infrastructure and services' },
      { name: 'Docker', level: 65, description: 'Containerization and deployment' },
      { name: 'Git', level: 90, description: 'Version control and collaboration' }
    ]
  },
  {
    id: 'databases',
    title: 'Data Management',
    icon: <Database className="h-6 w-6" />,
    description: 'Database design, ETL processes, and data warehousing',
    skills: [
      { name: 'PostgreSQL', level: 85, description: 'Advanced queries and optimization' },
      { name: 'MongoDB', level: 70, description: 'NoSQL document databases' },
      { name: 'ETL/ELT', level: 80, description: 'Data pipeline design and implementation' },
      { name: 'Data Warehousing', level: 75, description: 'Schema design and optimization' },
      { name: 'Apache Spark', level: 65, description: 'Big data processing' },
      { name: 'Snowflake', level: 60, description: 'Cloud data platform' }
    ]
  },
  {
    id: 'design',
    title: 'Design & UX',
    icon: <Palette className="h-6 w-6" />,
    description: 'User experience design and visual communication',
    skills: [
      { name: 'Data Visualization', level: 90, description: 'Effective chart design and storytelling' },
      { name: 'UI/UX Design', level: 75, description: 'User-centered design principles' },
      { name: 'Figma', level: 70, description: 'Interface design and prototyping' },
      { name: 'Adobe Creative Suite', level: 65, description: 'Graphic design and image editing' },
      { name: 'Information Architecture', level: 80, description: 'Data organization and flow' }
    ]
  },
  {
    id: 'soft-skills',
    title: 'Leadership & Communication',
    icon: <Users className="h-6 w-6" />,
    description: 'Project management and stakeholder communication',
    skills: [
      { name: 'Project Management', level: 85, description: 'Agile methodologies and team leadership' },
      { name: 'Data Storytelling', level: 90, description: 'Communicating insights to stakeholders' },
      { name: 'Cross-functional Collaboration', level: 85, description: 'Working with diverse teams' },
      { name: 'Stakeholder Management', level: 80, description: 'Managing expectations and requirements' },
      { name: 'Mentoring', level: 75, description: 'Teaching and developing junior team members' }
    ]
  }
];

const Skills = () => {
  return (
    <div>
      <Header />
      
      {/* Hero */}
      <Section className="pt-24" padding="xl">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Skills & <span className="crystal-text">Expertise</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive toolkit spanning data analytics, AI/ML, and modern development practices
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.id} className="p-8 hover-lift">
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    {skill.description && (
                      <p className="text-xs text-muted-foreground">{skill.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Section padding="lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certifications & Learning</h2>
            <p className="text-muted-foreground">
              Continuous learning through formal certifications and courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center hover-lift">
              <div className="mask-diamond w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Google Analytics Certified</h3>
              <p className="text-sm text-muted-foreground">Advanced web analytics and attribution modeling</p>
            </Card>

            <Card className="p-6 text-center hover-lift">
              <div className="mask-diamond w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">AWS Solutions Architect</h3>
              <p className="text-sm text-muted-foreground">Cloud infrastructure and data services</p>
            </Card>

            <Card className="p-6 text-center hover-lift">
              <div className="mask-diamond w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">CAPM Certified</h3>
              <p className="text-sm text-muted-foreground">Project management principles and practices</p>
            </Card>
          </div>
        </Section>
      </Section>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Skills;