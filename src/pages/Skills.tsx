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

        {/* Skills & Tools - Single Big Bubble */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Skills & Tools</h2>
          <p className="text-muted-foreground mb-8">(Click on a tool to check my microskills)</p>
          
          {/* Free-form Horizontal Bubble Layout */}
          <div 
            className="relative mx-auto border-2 border-foreground rounded-2xl flex items-center justify-center bg-background overflow-visible p-8"
            style={{
              width: `${Math.max(800, skillCategories.flatMap(c => c.tools).length * 80)}px`,
              height: `400px`,
            }}
          >
            {/* Horizontally arranged skill bubbles with free positioning */}
            {skillCategories.flatMap(category => category.tools).map((tool, index) => {
              const totalTools = skillCategories.flatMap(category => category.tools).length;
              
              // Create horizontal spacing with slight vertical randomness for free design
              const seed = tool.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
              const randomY = ((seed * 9301 + 49297) % 100) / 100; // 0-1 random
              
              // Horizontal positioning - evenly distributed but with slight randomness
              const baseX = (index / (totalTools - 1)) * 100; // 0-100%
              const randomXOffset = ((seed * 1337 + index) % 20) - 10; // -10 to +10% random offset
              const finalX = Math.max(5, Math.min(95, baseX + randomXOffset)); // Keep within bounds
              
              // Vertical positioning - random but contained
              const finalY = 30 + (randomY * 40); // 30-70% of container height
              
              return (
                <div
                  key={tool.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-125 hover:z-10 group"
                  style={{
                    left: `${finalX}%`,
                    top: `${finalY}%`,
                  }}
                  onClick={() => setSelectedTool(selectedTool?.id === tool.id ? null : tool)}
                >
                  <div className="w-20 h-20 bg-primary text-primary-foreground border-2 border-foreground rounded-full flex items-center justify-center text-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-foreground hover:text-background animate-float group-hover:animate-none">
                    {tool.logo}
                  </div>
                  {/* Tool name tooltip */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-2 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20">
                    {tool.name}
                  </div>
                </div>
              );
            })}
            
            {/* Center label */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-background border-2 border-foreground rounded-lg px-6 py-2 text-lg font-semibold shadow-lg">
              {skillCategories.flatMap(c => c.tools).length} Skills & Tools
            </div>
          </div>
        </div>
      </Section>

      {/* Whiteboard Style Skill Board Section */}
      <Section background="subtle" className="bg-muted">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary text-primary-foreground rounded-lg border-4 border-foreground shadow-2xl p-8 min-h-[500px]">
            {/* Whiteboard Header */}
            <div className="text-center mb-8 border-b-2 border-foreground pb-4">
              <h2 className="text-4xl font-bold mb-2">
                📋 Skill Board
              </h2>
              <p className="text-lg text-muted-foreground">
                (Select a tool/skill from bubble above to view micro skills here)
              </p>
            </div>
            
            {selectedTool ? (
              <div>
                <div className="flex items-center justify-center mb-8">
                  <div className="w-20 h-20 bg-foreground text-background rounded-full flex items-center justify-center text-4xl mr-6 shadow-lg">
                    {selectedTool.logo}
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold">{selectedTool.name}</h3>
                    <p className="text-xl text-muted-foreground italic">Micro-skills & Competencies</p>
                  </div>
                </div>
                
                {/* Horizontal bullet point layout */}
                <div className="flex flex-wrap gap-x-8 gap-y-2">
                  {selectedTool.microSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center text-lg"
                    >
                      <span className="text-xl mr-2">•</span>
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
                
                {/* Chalk-style decorative elements */}
                <div className="mt-8 text-center">
                  <div className="text-2xl text-muted-foreground">• • • • •</div>
                  <p className="text-sm text-muted-foreground mt-2 italic">
                    Total Skills: {selectedTool.microSkills.length}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-64">
                <div className="text-center text-muted-foreground">
                  <div className="w-24 h-24 border-4 border-foreground rounded-full flex items-center justify-center mx-auto mb-6 bg-muted">
                    <span className="text-4xl">🎯</span>
                  </div>
                  <p className="text-2xl font-bold">Click on any tool bubble above</p>
                  <p className="text-lg mt-2">to explore micro-skills on this whiteboard!</p>
                  
                  {/* Chalk-style decorative drawing */}
                  <div className="mt-8">
                    <svg width="200" height="60" className="mx-auto opacity-30">
                      <path d="M20 30 Q 100 10 180 30" stroke="#666" strokeWidth="3" fill="none" strokeLinecap="round"/>
                      <path d="M30 40 Q 100 20 170 40" stroke="#999" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Skills;