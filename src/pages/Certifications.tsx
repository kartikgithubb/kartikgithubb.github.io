import React, { useState } from 'react';
import { ExternalLink, Calendar, Award, Trophy, BookOpen, Medal } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ChatButton from '@/components/chat/ChatButton';
import { Card } from '@/components/ui/card';
interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId: string;
  verificationUrl?: string;
  badge: string;
  category: string;
  skills: string[];
}
const Certifications = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [hoveredCert, setHoveredCert] = useState<string | null>(null);
  const certificationsByCategory = {
    'Data': [{
      id: 'snowflake-core',
      title: 'SnowPro Core Certification',
      issuer: 'Snowflake',
      issueDate: '2023-08',
      credentialId: 'SF-CORE-2023-001',
      badge: '/placeholder.svg',
      skills: ['Snowflake', 'Data Warehousing', 'SQL']
    }, {
      id: 'databricks-lakehouse',
      title: 'Databricks Lakehouse Fundamentals',
      issuer: 'Databricks',
      issueDate: '2023-06',
      credentialId: 'DB-LH-2023-002',
      badge: '/placeholder.svg',
      skills: ['Databricks', 'Data Lakes', 'Apache Spark']
    }],
    'Product': [{
      id: 'cspo',
      title: 'Certified Scrum Product Owner',
      issuer: 'Scrum Alliance',
      issueDate: '2023-04',
      credentialId: 'SA-CSPO-2023-001',
      badge: '/placeholder.svg',
      skills: ['Scrum', 'Product Management', 'Agile']
    }],
    'Analytics': [{
      id: 'power-bi-analyst',
      title: 'Microsoft Power BI Data Analyst',
      issuer: 'Microsoft',
      issueDate: '2022-05',
      credentialId: 'MS-PBI-2022-3344',
      badge: '/placeholder.svg',
      skills: ['Power BI', 'DAX', 'Data Modeling']
    }],
    'Project Management': [{
      id: 'capm',
      title: 'Certified Associate in Project Management',
      issuer: 'PMI',
      issueDate: '2022-11',
      credentialId: 'PMI-CAPM-2022-9876',
      badge: '/placeholder.svg',
      skills: ['Project Planning', 'Risk Management', 'Agile']
    }],
    'AI & ML': [{
      id: 'tensorflow-developer',
      title: 'TensorFlow Developer Certificate',
      issuer: 'TensorFlow',
      issueDate: '2022-08',
      credentialId: 'TF-DEV-2022-1122',
      badge: '/placeholder.svg',
      skills: ['TensorFlow', 'Neural Networks', 'Deep Learning']
    }, {
      id: 'aws-ml-specialty',
      title: 'AWS Certified Machine Learning',
      issuer: 'Amazon Web Services',
      issueDate: '2023-01',
      credentialId: 'AWS-ML-2023-001',
      badge: '/placeholder.svg',
      skills: ['AWS', 'Machine Learning', 'SageMaker']
    }, {
      id: 'azure-ai-fundamentals',
      title: 'Azure AI Fundamentals',
      issuer: 'Microsoft',
      issueDate: '2022-03',
      credentialId: 'MS-AI900-2022-789',
      badge: '/placeholder.svg',
      skills: ['Azure AI', 'Cognitive Services', 'ML Studio']
    }],
    'Other': [{
      id: 'azure-fundamentals',
      title: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      issueDate: '2021-12',
      credentialId: 'MS-AZ900-2021-5566',
      badge: '/placeholder.svg',
      skills: ['Azure', 'Cloud Computing', 'SaaS']
    }]
  };
  return <div>
      <Header />
      
      {/* Hero */}
      <Section className="pt-24" padding="xl">
        <div className="max-w-6xl mx-auto">
          

          {/* Metrics at Top */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <Trophy className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold">
                {Object.values(certificationsByCategory).flat().length}
              </div>
              <div className="text-sm text-muted-foreground">Total Certifications</div>
            </div>
            
            <div className="text-center">
              <Medal className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-3xl font-bold">
                {Object.values(certificationsByCategory).flat().length}
              </div>
              <div className="text-sm text-muted-foreground">Total Badges</div>
            </div>
            
            <div className="text-center">
              <BookOpen className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold">
                {Object.values(certificationsByCategory).flat().filter(cert => cert.issuer.toLowerCase().includes('course') || cert.title.toLowerCase().includes('course')).length || '8'}
              </div>
              <div className="text-sm text-muted-foreground">Total Courses</div>
            </div>
          </div>

          {/* Certifications Grid Table */}
          <div className="grid grid-cols-3 gap-0 border border-border/30 bg-card rounded-lg overflow-hidden">
            {/* Row 1 */}
            <div className={`
                relative p-8 border-r border-b border-border/30 min-h-[200px] transition-all duration-300 cursor-pointer
                ${hoveredSection === 'Data' ? 'bg-primary/5 shadow-lg' : 'hover:bg-muted/20'}
              `} onMouseEnter={() => setHoveredSection('Data')} onMouseLeave={() => setHoveredSection(null)}>
              <h3 className={`
                text-lg font-semibold mb-4 transition-all duration-300
                ${hoveredSection === 'Data' ? 'text-primary drop-shadow-glow scale-105' : 'text-foreground'}
              `}>
                Data
              </h3>
              <div className="flex flex-wrap gap-3">
                {certificationsByCategory.Data.map((cert, index) => <div key={cert.id} className="relative" onMouseEnter={() => setHoveredCert(cert.id)} onMouseLeave={() => setHoveredCert(null)}>
                    <div className="w-12 h-12 mask-diamond bg-gradient-to-br from-blue-500/80 to-blue-600/80 cursor-pointer hover:scale-110 transition-transform duration-200 flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Tooltip */}
                    {hoveredCert === cert.id && <div className="absolute left-full top-0 ml-2 z-50">
                        <div className="bg-popover border border-border rounded-lg p-4 shadow-xl backdrop-blur-sm min-w-[280px]">
                          <h4 className="font-semibold text-base mb-2">{cert.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            <strong>Issuer:</strong> {cert.issuer}
                          </p>
                          <p className="text-sm text-muted-foreground mb-2">
                            <strong>Issue Date:</strong> {cert.issueDate}
                          </p>
                          <p className="text-sm text-muted-foreground mb-3 font-mono">
                            <strong>Credential ID:</strong> {cert.credentialId}
                          </p>
                          <div className="space-y-2">
                            <p className="text-sm font-medium">Skills:</p>
                            <div className="flex flex-wrap gap-1">
                              {cert.skills.map((skill, idx) => <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                  {skill}
                                </span>)}
                            </div>
                          </div>
                        </div>
                      </div>}
                  </div>)}
              </div>
            </div>

            <div className={`
                relative p-8 border-r border-b border-border/30 min-h-[200px] transition-all duration-300 cursor-pointer
                ${hoveredSection === 'Product' ? 'bg-primary/5 shadow-lg' : 'hover:bg-muted/20'}
              `} onMouseEnter={() => setHoveredSection('Product')} onMouseLeave={() => setHoveredSection(null)}>
              <h3 className={`
                text-lg font-semibold mb-4 transition-all duration-300
                ${hoveredSection === 'Product' ? 'text-primary drop-shadow-glow scale-105' : 'text-foreground'}
              `}>
                Product
              </h3>
              <div className="flex flex-wrap gap-3">
                {certificationsByCategory.Product.map(cert => <div key={cert.id} className="relative" onMouseEnter={() => setHoveredCert(cert.id)} onMouseLeave={() => setHoveredCert(null)}>
                    <div className="w-12 h-12 mask-diamond bg-gradient-to-br from-green-500/80 to-green-600/80 cursor-pointer hover:scale-110 transition-transform duration-200 flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    
                    {hoveredCert === cert.id && <div className="absolute left-full top-0 ml-2 z-50">
                        <div className="bg-popover border border-border rounded-lg p-4 shadow-xl backdrop-blur-sm min-w-[280px]">
                          <h4 className="font-semibold text-base mb-2">{cert.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            <strong>Issuer:</strong> {cert.issuer}
                          </p>
                          <p className="text-sm text-muted-foreground mb-2">
                            <strong>Issue Date:</strong> {cert.issueDate}
                          </p>
                          <p className="text-sm text-muted-foreground mb-3 font-mono">
                            <strong>Credential ID:</strong> {cert.credentialId}
                          </p>
                          <div className="space-y-2">
                            <p className="text-sm font-medium">Skills:</p>
                            <div className="flex flex-wrap gap-1">
                              {cert.skills.map((skill, idx) => <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                  {skill}
                                </span>)}
                            </div>
                          </div>
                        </div>
                      </div>}
                  </div>)}
              </div>
            </div>

            <div className={`
                relative p-8 border-b border-border/30 min-h-[200px] transition-all duration-300 cursor-pointer
                ${hoveredSection === 'Analytics' ? 'bg-primary/5 shadow-lg' : 'hover:bg-muted/20'}
              `} onMouseEnter={() => setHoveredSection('Analytics')} onMouseLeave={() => setHoveredSection(null)}>
              <h3 className={`
                text-lg font-semibold mb-4 transition-all duration-300
                ${hoveredSection === 'Analytics' ? 'text-primary drop-shadow-glow scale-105' : 'text-foreground'}
              `}>
                Analytics
              </h3>
              <div className="flex flex-wrap gap-3">
                {certificationsByCategory.Analytics.map(cert => <div key={cert.id} className="relative" onMouseEnter={() => setHoveredCert(cert.id)} onMouseLeave={() => setHoveredCert(null)}>
                    <div className="w-12 h-12 mask-diamond bg-gradient-to-br from-purple-500/80 to-purple-600/80 cursor-pointer hover:scale-110 transition-transform duration-200 flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    
                    {hoveredCert === cert.id && <div className="absolute left-full top-0 ml-2 z-50">
                        <div className="bg-popover border border-border rounded-lg p-4 shadow-xl backdrop-blur-sm min-w-[280px]">
                          <h4 className="font-semibold text-base mb-2">{cert.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            <strong>Issuer:</strong> {cert.issuer}
                          </p>
                          <p className="text-sm text-muted-foreground mb-2">
                            <strong>Issue Date:</strong> {cert.issueDate}
                          </p>
                          <p className="text-sm text-muted-foreground mb-3 font-mono">
                            <strong>Credential ID:</strong> {cert.credentialId}
                          </p>
                          <div className="space-y-2">
                            <p className="text-sm font-medium">Skills:</p>
                            <div className="flex flex-wrap gap-1">
                              {cert.skills.map((skill, idx) => <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                  {skill}
                                </span>)}
                            </div>
                          </div>
                        </div>
                      </div>}
                  </div>)}
              </div>
            </div>

            {/* Row 2 */}
            <div className={`
                relative p-8 border-r border-border/30 min-h-[200px] transition-all duration-300 cursor-pointer
                ${hoveredSection === 'Project Management' ? 'bg-primary/5 shadow-lg border-2 border-primary/30' : 'hover:bg-muted/20'}
              `} onMouseEnter={() => setHoveredSection('Project Management')} onMouseLeave={() => setHoveredSection(null)}>
              <h3 className={`
                text-lg font-semibold mb-4 transition-all duration-300
                ${hoveredSection === 'Project Management' ? 'text-primary drop-shadow-glow scale-105' : 'text-foreground'}
              `}>
                Project Management
              </h3>
              <div className="flex flex-wrap gap-3">
                {certificationsByCategory['Project Management'].map(cert => <div key={cert.id} className="relative" onMouseEnter={() => setHoveredCert(cert.id)} onMouseLeave={() => setHoveredCert(null)}>
                    <div className="w-12 h-12 mask-diamond bg-gradient-to-br from-orange-500/80 to-orange-600/80 cursor-pointer hover:scale-110 transition-transform duration-200 flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    
                    {hoveredCert === cert.id && <div className="absolute left-full top-0 ml-2 z-50">
                        <div className="bg-popover border border-border rounded-lg p-4 shadow-xl backdrop-blur-sm min-w-[280px]">
                          <h4 className="font-semibold text-base mb-2">{cert.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            <strong>Issuer:</strong> {cert.issuer}
                          </p>
                          <p className="text-sm text-muted-foreground mb-2">
                            <strong>Issue Date:</strong> {cert.issueDate}
                          </p>
                          <p className="text-sm text-muted-foreground mb-3 font-mono">
                            <strong>Credential ID:</strong> {cert.credentialId}
                          </p>
                          <div className="space-y-2">
                            <p className="text-sm font-medium">Skills:</p>
                            <div className="flex flex-wrap gap-1">
                              {cert.skills.map((skill, idx) => <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                  {skill}
                                </span>)}
                            </div>
                          </div>
                        </div>
                      </div>}
                  </div>)}
              </div>
            </div>

            <div className={`
                relative p-8 border-r border-border/30 min-h-[200px] transition-all duration-300 cursor-pointer
                ${hoveredSection === 'AI & ML' ? 'bg-primary/5 shadow-lg' : 'hover:bg-muted/20'}
              `} onMouseEnter={() => setHoveredSection('AI & ML')} onMouseLeave={() => setHoveredSection(null)}>
              <h3 className={`
                text-lg font-semibold mb-4 transition-all duration-300
                ${hoveredSection === 'AI & ML' ? 'text-primary drop-shadow-glow scale-105' : 'text-foreground'}
              `}>
                AI & ML
              </h3>
              <div className="flex flex-wrap gap-3">
                {certificationsByCategory['AI & ML'].map(cert => <div key={cert.id} className="relative" onMouseEnter={() => setHoveredCert(cert.id)} onMouseLeave={() => setHoveredCert(null)}>
                    <div className="w-12 h-12 mask-diamond bg-gradient-to-br from-red-500/80 to-red-600/80 cursor-pointer hover:scale-110 transition-transform duration-200 flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    
                    {hoveredCert === cert.id && <div className="absolute left-full top-0 ml-2 z-50">
                        <div className="bg-popover border border-border rounded-lg p-4 shadow-xl backdrop-blur-sm min-w-[280px]">
                          <h4 className="font-semibold text-base mb-2">{cert.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            <strong>Issuer:</strong> {cert.issuer}
                          </p>
                          <p className="text-sm text-muted-foreground mb-2">
                            <strong>Issue Date:</strong> {cert.issueDate}
                          </p>
                          <p className="text-sm text-muted-foreground mb-3 font-mono">
                            <strong>Credential ID:</strong> {cert.credentialId}
                          </p>
                          <div className="space-y-2">
                            <p className="text-sm font-medium">Skills:</p>
                            <div className="flex flex-wrap gap-1">
                              {cert.skills.map((skill, idx) => <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                  {skill}
                                </span>)}
                            </div>
                          </div>
                        </div>
                      </div>}
                  </div>)}
              </div>
            </div>

            <div className={`
                relative p-8 min-h-[200px] transition-all duration-300 cursor-pointer
                ${hoveredSection === 'Other' ? 'bg-primary/5 shadow-lg' : 'hover:bg-muted/20'}
              `} onMouseEnter={() => setHoveredSection('Other')} onMouseLeave={() => setHoveredSection(null)}>
              <h3 className={`
                text-lg font-semibold mb-4 transition-all duration-300
                ${hoveredSection === 'Other' ? 'text-primary drop-shadow-glow scale-105' : 'text-foreground'}
              `}>
                Other
              </h3>
              <div className="flex flex-wrap gap-3">
                {certificationsByCategory.Other.map(cert => <div key={cert.id} className="relative" onMouseEnter={() => setHoveredCert(cert.id)} onMouseLeave={() => setHoveredCert(null)}>
                    <div className="w-12 h-12 mask-diamond bg-gradient-to-br from-teal-500/80 to-teal-600/80 cursor-pointer hover:scale-110 transition-transform duration-200 flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    
                    {hoveredCert === cert.id && <div className="absolute left-full top-0 ml-2 z-50">
                        <div className="bg-popover border border-border rounded-lg p-4 shadow-xl backdrop-blur-sm min-w-[280px]">
                          <h4 className="font-semibold text-base mb-2">{cert.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            <strong>Issuer:</strong> {cert.issuer}
                          </p>
                          <p className="text-sm text-muted-foreground mb-2">
                            <strong>Issue Date:</strong> {cert.issueDate}
                          </p>
                          <p className="text-sm text-muted-foreground mb-3 font-mono">
                            <strong>Credential ID:</strong> {cert.credentialId}
                          </p>
                          <div className="space-y-2">
                            <p className="text-sm font-medium">Skills:</p>
                            <div className="flex flex-wrap gap-1">
                              {cert.skills.map((skill, idx) => <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                  {skill}
                                </span>)}
                            </div>
                          </div>
                        </div>
                      </div>}
                  </div>)}
              </div>
            </div>
          </div>

        </div>
      </Section>

      <Footer />
      <ChatButton />
    </div>;
};
export default Certifications;