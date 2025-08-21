import React, { useState, useCallback } from 'react';
import { BarChart3, Database, Brain, Code, Palette, Users, Plus, Minus } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ChatButton from '@/components/chat/ChatButton';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import RadarChart from '@/components/charts/RadarChart';
import SkillGraph from '@/components/charts/SkillGraph';
import DynamicSkillWeb from '@/components/charts/DynamicSkillWeb';

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

  const [skillNodes] = useState([
    // Skills
    { id: 'python', name: 'Python', type: 'skill' as const, category: 'data' },
    { id: 'sql', name: 'SQL', type: 'skill' as const, category: 'data' },
    { id: 'powerbi', name: 'Power BI', type: 'skill' as const, category: 'analytics' },
    { id: 'react', name: 'React', type: 'skill' as const, category: 'technical' },
    { id: 'ml', name: 'ML', type: 'skill' as const, category: 'ai' },
    
    // Tools & Frameworks
    { id: 'pandas', name: 'Pandas', type: 'tool' as const, category: 'data' },
    { id: 'numpy', name: 'NumPy', type: 'tool' as const, category: 'data' },
    { id: 'tensorflow', name: 'TensorFlow', type: 'framework' as const, category: 'ai' },
    { id: 'postgresql', name: 'PostgreSQL', type: 'tool' as const, category: 'database' },
    { id: 'figma', name: 'Figma', type: 'tool' as const, category: 'design' },
  ]);

  const [skillLinks] = useState([
    { source: 'python', target: 'pandas' },
    { source: 'python', target: 'numpy' },
    { source: 'python', target: 'ml' },
    { source: 'sql', target: 'postgresql' },
    { source: 'sql', target: 'powerbi' },
    { source: 'ml', target: 'tensorflow' },
    { source: 'react', target: 'figma' },
  ]);

  const [skillCircles, setSkillCircles] = useState([
    {
      title: "Data Skills & Tools",
      subtitle: "(Web of all of them Connected)",
      skills: ["Python", "SQL", "Data Analysis"],
      tools: ["Pandas", "NumPy", "Jupyter"],
      frameworks: ["Scikit-learn", "Matplotlib"]
    },
    {
      title: "Analytics Skills & Tools", 
      subtitle: "(Web of all of them Connected)",
      skills: ["Statistical Analysis", "Business Intelligence"],
      tools: ["Power BI", "Tableau", "Excel"],
      frameworks: ["D3.js", "Plotly"]
    },
    {
      title: "Product Management Skills & Tools",
      subtitle: "(Web of all of them Connected)",
      skills: ["Product Strategy", "Roadmapping"],
      tools: ["Jira", "Confluence", "Miro"],
      frameworks: ["Agile", "Scrum"]
    },
    {
      title: "Project Management Skills & Tools",
      subtitle: "(Web of all of them Connected)",
      skills: ["Risk Management", "Stakeholder Management"],
      tools: ["MS Project", "Gantt Charts"],
      frameworks: ["CAPM", "Waterfall"]
    },
    {
      title: "Marketing Skills & Tools",
      subtitle: "(Web of all of them Connected)",
      skills: ["Campaign Management", "SEO"],
      tools: ["Google Analytics", "HubSpot"],
      frameworks: ["A/B Testing", "Attribution Models"]
    },
    {
      title: "Business Skills & Tools",
      subtitle: "(Web of all of them Connected)",
      skills: ["Strategy", "Process Optimization"],
      tools: ["PowerPoint", "Financial Models"],
      frameworks: ["Change Management", "Six Sigma"]
    }
  ]);

  // Dynamic radar chart data that updates based on skill circles
  const [radarData, setRadarData] = useState([
    { skill: 'Data Analytics', level: 90, fullMark: 100 },
    { skill: 'Product Management', level: 80, fullMark: 100 },
    { skill: 'Project Management', level: 85, fullMark: 100 },
    { skill: 'Marketing', level: 75, fullMark: 100 },
    { skill: 'Business Strategy', level: 78, fullMark: 100 },
    { skill: 'Technical Skills', level: 85, fullMark: 100 }
  ]);

  const handleSkillUpdate = useCallback((circleIndex: number, skillData: any) => {
    // Update radar chart based on skill circle changes
    const newRadarData = [...radarData];
    const totalSkillPoints = skillData.skills + skillData.tools + skillData.frameworks + (skillData.connections * 2);
    const normalizedLevel = Math.min(Math.max(totalSkillPoints * 5, 20), 100);
    
    if (newRadarData[circleIndex]) {
      newRadarData[circleIndex].level = normalizedLevel;
      setRadarData(newRadarData);
    }
  }, [radarData]);

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

        {/* Dynamic Radar Chart */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2">Radar Chart</h2>
            <p className="text-muted-foreground">Dynamic visualization that updates as skills are modified</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <RadarChart data={radarData} />
          </div>
        </div>

        {/* Dynamic Skill Circles with React Flow */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2">Interactive Skill Webs</h2>
            <p className="text-muted-foreground">Dynamic skill networks that update the radar chart above. Click and drag to connect skills!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {skillCircles.map((circle, index) => (
              <DynamicSkillWeb
                key={index}
                title={circle.title}
                subtitle={circle.subtitle}
                skills={circle.skills}
                tools={circle.tools}
                frameworks={circle.frameworks}
                onSkillUpdate={(skillData) => handleSkillUpdate(index, skillData)}
              />
            ))}
          </div>
        </div>

        {/* Dynamic Skill Graph */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2">Skill Connections Web</h2>
            <p className="text-muted-foreground">Interactive visualization showing relationships between skills, tools, and frameworks</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <SkillGraph nodes={skillNodes} links={skillLinks} />
          </div>
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