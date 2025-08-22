import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ChatButton from '@/components/chat/ChatButton';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import RadarChart from '@/components/charts/RadarChart';

interface ToolBubble {
  id: string;
  name: string;
  logo: string;
  color: string;
  microSkills: string[];
}

// Mockup data for tool bubbles - will be replaced with user's input later
const toolBubbles: ToolBubble[] = [
  {
    id: 'python',
    name: 'Python',
    logo: '🐍',
    color: 'bg-blue-500',
    microSkills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter', 'Data Analysis', 'Machine Learning', 'Web Scraping']
  },
  {
    id: 'react',
    name: 'React',
    logo: '⚛️',
    color: 'bg-cyan-500',
    microSkills: ['JSX', 'Hooks', 'State Management', 'Component Design', 'TypeScript', 'Next.js', 'Redux', 'Testing']
  },
  {
    id: 'aws',
    name: 'AWS',
    logo: '☁️',
    color: 'bg-orange-500',
    microSkills: ['EC2', 'S3', 'Lambda', 'RDS', 'CloudFormation', 'IAM', 'API Gateway', 'CloudWatch']
  },
  {
    id: 'sql',
    name: 'SQL',
    logo: '🗄️',
    color: 'bg-green-500',
    microSkills: ['Complex Queries', 'Joins', 'Subqueries', 'Optimization', 'Stored Procedures', 'Indexing', 'Performance Tuning']
  },
  {
    id: 'powerbi',
    name: 'Power BI',
    logo: '📊',
    color: 'bg-yellow-500',
    microSkills: ['DAX', 'Power Query', 'Data Modeling', 'Visualizations', 'Dashboards', 'Reports', 'Gateway', 'Power Apps']
  },
  {
    id: 'docker',
    name: 'Docker',
    logo: '🐳',
    color: 'bg-blue-600',
    microSkills: ['Containerization', 'Dockerfile', 'Docker Compose', 'Volumes', 'Networks', 'Multi-stage Builds', 'Orchestration']
  },
  {
    id: 'figma',
    name: 'Figma',
    logo: '🎨',
    color: 'bg-purple-500',
    microSkills: ['UI Design', 'Prototyping', 'Components', 'Auto Layout', 'Design Systems', 'Collaboration', 'Plugins']
  },
  {
    id: 'git',
    name: 'Git',
    logo: '📝',
    color: 'bg-red-500',
    microSkills: ['Version Control', 'Branching', 'Merging', 'Pull Requests', 'Conflict Resolution', 'GitHub Actions', 'CI/CD']
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
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

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
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2">Skills Overview</h2>
            <p className="text-muted-foreground">Comprehensive view of technical competencies</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <RadarChart data={radarData} />
          </div>
        </div>

        {/* Circular Tool Layout */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-2">Technologies & Tools</h2>
            <p className="text-muted-foreground">Click on any tool to explore related micro-skills</p>
          </div>
          
          {/* Circular Layout Container */}
          <div className="relative w-full max-w-4xl mx-auto h-96 flex items-center justify-center">
            {toolBubbles.map((tool, index) => {
              const angle = (index * 360) / toolBubbles.length;
              const radius = 140;
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
                  onClick={() => setSelectedTool(selectedTool === tool.id ? null : tool.id)}
                >
                  <div className={`w-20 h-20 ${tool.color} rounded-full flex items-center justify-center text-3xl shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                    {tool.logo}
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center">
                    <span className="text-sm font-medium">{tool.name}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Micro Skills Dropdown */}
          {selectedTool && (
            <div className="mt-12 max-w-2xl mx-auto">
              <Card>
                <Collapsible open={!!selectedTool}>
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between p-6">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 ${toolBubbles.find(t => t.id === selectedTool)?.color} rounded-full flex items-center justify-center text-xl`}>
                          {toolBubbles.find(t => t.id === selectedTool)?.logo}
                        </div>
                        <div className="text-left">
                          <h3 className="text-lg font-semibold">
                            {toolBubbles.find(t => t.id === selectedTool)?.name} Skills
                          </h3>
                          <p className="text-sm text-muted-foreground">Micro-skills and competencies</p>
                        </div>
                      </div>
                      <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {toolBubbles.find(t => t.id === selectedTool)?.microSkills.map((skill, index) => (
                          <div
                            key={index}
                            className="p-3 bg-muted/50 rounded-lg text-sm font-medium text-center hover:bg-muted transition-colors duration-200"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            </div>
          )}
        </div>
      </Section>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Skills;