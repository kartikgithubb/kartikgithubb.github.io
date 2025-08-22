import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ChatButton from '@/components/chat/ChatButton';
import RadarChart from '@/components/charts/RadarChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ToolBubble {
  id: string;
  name: string;
  logo: string;
  color: string;
  microSkills: string[];
}

interface SkillCategory {
  id: string;
  name: string;
  description: string;
  tools: ToolBubble[];
}

// Skill categories with tool bubbles
const skillCategories: SkillCategory[] = [
  {
    id: 'data',
    name: 'Data Skills & Tools',
    description: 'Click on a tool to check my microskills',
    tools: [
      {
        id: 'python',
        name: 'Python',
        logo: '🐍',
        color: 'bg-blue-500',
        microSkills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter', 'Data Analysis', 'Machine Learning', 'Web Scraping']
      },
      {
        id: 'sql',
        name: 'SQL',
        logo: '🗄️',
        color: 'bg-green-500',
        microSkills: ['Complex Queries', 'Joins', 'Subqueries', 'Optimization', 'Stored Procedures', 'Indexing', 'Performance Tuning']
      },
      {
        id: 'excel',
        name: 'Excel',
        logo: '📈',
        color: 'bg-emerald-500',
        microSkills: ['Advanced Formulas', 'Pivot Tables', 'VBA', 'Data Validation', 'Conditional Formatting', 'Charts', 'Macros']
      }
    ]
  },
  {
    id: 'analytics',
    name: 'Analytics Skills & Tools',
    description: 'Click on a tool to check my microskills',
    tools: [
      {
        id: 'powerbi',
        name: 'Power BI',
        logo: '📊',
        color: 'bg-yellow-500',
        microSkills: ['DAX', 'Power Query', 'Data Modeling', 'Visualizations', 'Dashboards', 'Reports', 'Gateway', 'Power Apps']
      },
      {
        id: 'tableau',
        name: 'Tableau',
        logo: '📋',
        color: 'bg-orange-500',
        microSkills: ['Data Visualization', 'Calculated Fields', 'Parameters', 'Dashboard Design', 'Story Points', 'Filters', 'Actions']
      },
      {
        id: 'googleanalytics',
        name: 'GA4',
        logo: '📱',
        color: 'bg-blue-600',
        microSkills: ['Event Tracking', 'Custom Dimensions', 'Conversion Setup', 'Attribution Models', 'Audience Building', 'Reports', 'GTM']
      }
    ]
  },
  {
    id: 'aiml',
    name: 'AI & ML Skills & Tools',
    description: 'Click on a tool to check my microskills',
    tools: [
      {
        id: 'tensorflow',
        name: 'TensorFlow',
        logo: '🧠',
        color: 'bg-purple-500',
        microSkills: ['Neural Networks', 'Deep Learning', 'Model Training', 'Computer Vision', 'NLP', 'Model Deployment', 'TensorBoard']
      },
      {
        id: 'pytorch',
        name: 'PyTorch',
        logo: '🔥',
        color: 'bg-red-500',
        microSkills: ['Dynamic Graphs', 'Autograd', 'Model Building', 'Transfer Learning', 'Optimization', 'Distributed Training', 'ONNX']
      },
      {
        id: 'scikit',
        name: 'Scikit-learn',
        logo: '⚙️',
        color: 'bg-indigo-500',
        microSkills: ['Classification', 'Regression', 'Clustering', 'Feature Selection', 'Model Evaluation', 'Preprocessing', 'Pipelines']
      }
    ]
  },
  {
    id: 'product',
    name: 'Product Skills & Tools',
    description: 'Click on a tool to check my microskills',
    tools: [
      {
        id: 'figma',
        name: 'Figma',
        logo: '🎨',
        color: 'bg-pink-500',
        microSkills: ['UI Design', 'Prototyping', 'Components', 'Auto Layout', 'Design Systems', 'Collaboration', 'Plugins']
      },
      {
        id: 'miro',
        name: 'Miro',
        logo: '🧩',
        color: 'bg-cyan-500',
        microSkills: ['Wireframing', 'User Journey Maps', 'Mind Maps', 'Brainstorming', 'Flowcharts', 'Collaboration', 'Templates']
      },
      {
        id: 'notion',
        name: 'Notion',
        logo: '📝',
        color: 'bg-gray-600',
        microSkills: ['Documentation', 'Database Management', 'Project Planning', 'Knowledge Management', 'Templates', 'Automation', 'Collaboration']
      }
    ]
  },
  {
    id: 'project',
    name: 'Project Management Skills & Tools',
    description: 'Click on a tool to check my microskills',
    tools: [
      {
        id: 'jira',
        name: 'Jira',
        logo: '🎯',
        color: 'bg-blue-700',
        microSkills: ['Agile Management', 'Sprint Planning', 'Issue Tracking', 'Workflow Design', 'Reporting', 'Automation', 'Integration']
      },
      {
        id: 'confluence',
        name: 'Confluence',
        logo: '📚',
        color: 'bg-blue-600',
        microSkills: ['Documentation', 'Knowledge Base', 'Team Collaboration', 'Page Templates', 'Macros', 'Space Management', 'Integration']
      },
      {
        id: 'trello',
        name: 'Trello',
        logo: '📌',
        color: 'bg-blue-500',
        microSkills: ['Kanban Boards', 'Card Management', 'Team Organization', 'Power-Ups', 'Automation', 'Calendar View', 'Reporting']
      }
    ]
  },
  {
    id: 'other',
    name: 'Other Domain Skills & Tools',
    description: 'Click on a tool to check my microskills',
    tools: [
      {
        id: 'git',
        name: 'Git',
        logo: '🔄',
        color: 'bg-orange-600',
        microSkills: ['Version Control', 'Branching', 'Merging', 'Pull Requests', 'Conflict Resolution', 'GitHub Actions', 'CI/CD']
      },
      {
        id: 'docker',
        name: 'Docker',
        logo: '🐳',
        color: 'bg-blue-600',
        microSkills: ['Containerization', 'Dockerfile', 'Docker Compose', 'Volumes', 'Networks', 'Multi-stage Builds', 'Orchestration']
      },
      {
        id: 'aws',
        name: 'AWS',
        logo: '☁️',
        color: 'bg-orange-500',
        microSkills: ['EC2', 'S3', 'Lambda', 'RDS', 'CloudFormation', 'IAM', 'API Gateway', 'CloudWatch']
      }
    ]
  }
];

// Radar chart data
const radarData = [
  { skill: 'Data Analytics', level: 90, fullMark: 100 },
  { skill: 'Web Development', level: 85, fullMark: 100 },
  { skill: 'Cloud Computing', level: 75, fullMark: 100 },
  { skill: 'Database Management', level: 88, fullMark: 100 },
  { skill: 'Business Intelligence', level: 92, fullMark: 100 },
  { skill: 'DevOps', level: 70, fullMark: 100 }
];

const Skills = () => {
  const [selectedTool, setSelectedTool] = useState<ToolBubble | null>(null);

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
            Interactive visualization of technical skills and expertise
          </p>
        </div>

        {/* Radar Chart */}
        <div className="mb-16">
          <div className="max-w-2xl mx-auto border-2 border-muted rounded-lg p-8">
            <RadarChart data={radarData} />
          </div>
        </div>

        {/* Skill Categories Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {skillCategories.map((category) => (
              <div key={category.id} className="text-center">
                <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{category.description}</p>
                
                {/* Category Circle */}
                <div className="relative w-60 h-60 mx-auto border-2 border-muted rounded-full flex items-center justify-center">
                  {category.tools.map((tool, index) => {
                    const angle = (index * 360) / category.tools.length;
                    const radius = 80;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    
                    return (
                      <div
                        key={tool.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-110"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                        }}
                        onClick={() => setSelectedTool(selectedTool?.id === tool.id ? null : tool)}
                      >
                        <div className={`w-14 h-14 ${tool.color} rounded-full flex items-center justify-center text-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-background`}>
                          {tool.logo}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Board */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2">Skill Board</h2>
            <p className="text-muted-foreground">
              {selectedTool 
                ? `Micro-skills for ${selectedTool.name}` 
                : 'Select a tool/skill from bubble to view micro skills here'
              }
            </p>
          </div>
          
          <Card className="min-h-[300px]">
            <CardContent className="p-8">
              {selectedTool ? (
                <div>
                  <div className="flex items-center justify-center mb-6">
                    <div className={`w-16 h-16 ${selectedTool.color} rounded-full flex items-center justify-center text-3xl mr-4`}>
                      {selectedTool.logo}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold">{selectedTool.name}</h3>
                      <p className="text-muted-foreground">Micro-skills and competencies</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {selectedTool.microSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="p-4 bg-muted/50 rounded-lg text-center hover:bg-muted transition-colors duration-200"
                      >
                        <span className="font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-48">
                  <div className="text-center text-muted-foreground">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <p className="text-lg">Click on any tool bubble above to explore micro-skills</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </Section>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Skills;