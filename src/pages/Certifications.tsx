import React, { useState } from 'react';
import { ExternalLink, Calendar, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ChatButton from '@/components/chat/ChatButton';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
  const [hoveredCert, setHoveredCert] = useState<string | null>(null);

  const certifications: Certification[] = [
    {
      id: 'aws-solutions-architect',
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      issueDate: '2023-06',
      expiryDate: '2026-06',
      credentialId: 'AWS-SAA-2023-001234',
      verificationUrl: 'https://aws.amazon.com/verification',
      badge: '/placeholder.svg',
      category: 'Cloud',
      skills: ['AWS', 'Cloud Architecture', 'EC2', 'S3', 'RDS']
    },
    {
      id: 'gcp-data-engineer',
      title: 'Google Cloud Professional Data Engineer',
      issuer: 'Google Cloud',
      issueDate: '2023-03',
      expiryDate: '2025-03',
      credentialId: 'GCP-PDE-2023-005678',
      verificationUrl: 'https://cloud.google.com/certification/verify',
      badge: '/placeholder.svg',
      category: 'Data Engineering',
      skills: ['BigQuery', 'Dataflow', 'Pub/Sub', 'ML Engine']
    },
    {
      id: 'capm',
      title: 'Certified Associate in Project Management (CAPM)',
      issuer: 'Project Management Institute',
      issueDate: '2022-11',
      expiryDate: '2027-11',
      credentialId: 'PMI-CAPM-2022-9876',
      verificationUrl: 'https://www.pmi.org/certifications/verify',
      badge: '/placeholder.svg',
      category: 'Project Management',
      skills: ['Project Planning', 'Risk Management', 'Agile', 'Scrum']
    },
    {
      id: 'tensorflow-developer',
      title: 'TensorFlow Developer Certificate',
      issuer: 'TensorFlow',
      issueDate: '2022-08',
      credentialId: 'TF-DEV-2022-1122',
      verificationUrl: 'https://www.credential.net/verify',
      badge: '/placeholder.svg',
      category: 'Machine Learning',
      skills: ['TensorFlow', 'Neural Networks', 'Deep Learning', 'Python']
    },
    {
      id: 'power-bi-analyst',
      title: 'Microsoft Certified: Power BI Data Analyst Associate',
      issuer: 'Microsoft',
      issueDate: '2022-05',
      expiryDate: '2024-05',
      credentialId: 'MS-PBI-2022-3344',
      verificationUrl: 'https://docs.microsoft.com/learn/certifications/verify',
      badge: '/placeholder.svg',
      category: 'Analytics',
      skills: ['Power BI', 'DAX', 'Data Modeling', 'Visualization']
    },
    {
      id: 'azure-fundamentals',
      title: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      issueDate: '2021-12',
      credentialId: 'MS-AZ900-2021-5566',
      verificationUrl: 'https://docs.microsoft.com/learn/certifications/verify',
      badge: '/placeholder.svg',
      category: 'Cloud',
      skills: ['Azure', 'Cloud Computing', 'SaaS', 'PaaS', 'IaaS']
    }
  ];

  const categories = [...new Set(certifications.map(cert => cert.category))];

  return (
    <div>
      <Header />
      
      {/* Hero */}
      <Section className="pt-24" padding="xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="crystal-text">Certifications</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional certifications demonstrating expertise across cloud, data, and project management
            </p>
          </div>

          {/* Certifications Table */}
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/30">
                  <tr className="border-b border-border/50">
                    <th className="text-left p-4 font-semibold">Certification</th>
                    <th className="text-left p-4 font-semibold">Issuer</th>
                    <th className="text-left p-4 font-semibold">Issue Date</th>
                    <th className="text-left p-4 font-semibold">Status</th>
                    <th className="text-left p-4 font-semibold">Credential</th>
                    <th className="text-left p-4 font-semibold">Badge</th>
                  </tr>
                </thead>
                <tbody>
                  {certifications.map((cert, index) => (
                    <tr 
                      key={cert.id} 
                      className={`
                        border-b border-border/30 transition-colors
                        ${index % 2 === 0 ? 'bg-background' : 'bg-muted/10'}
                        hover:bg-muted/20
                      `}
                    >
                      <td className="p-4">
                        <div>
                          <h3 className="font-medium text-foreground mb-1">
                            {cert.title}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                              {cert.category}
                            </span>
                          </div>
                        </div>
                      </td>
                      
                      <td className="p-4">
                        <span className="text-muted-foreground">{cert.issuer}</span>
                      </td>
                      
                      <td className="p-4">
                        <div className="text-sm">
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="w-3 h-3 mr-1" />
                            {cert.issueDate}
                          </div>
                          {cert.expiryDate && (
                            <div className="text-xs text-muted-foreground mt-1">
                              Expires: {cert.expiryDate}
                            </div>
                          )}
                        </div>
                      </td>
                      
                      <td className="p-4">
                        <span className={`
                          text-xs px-2 py-1 rounded-full font-medium
                          ${cert.expiryDate && new Date(cert.expiryDate) > new Date() 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            : cert.expiryDate 
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                          }
                        `}>
                          {cert.expiryDate 
                            ? (new Date(cert.expiryDate) > new Date() ? 'Active' : 'Expired')
                            : 'Valid'
                          }
                        </span>
                      </td>
                      
                      <td className="p-4">
                        <div className="text-sm">
                          <div className="text-muted-foreground font-mono text-xs mb-1">
                            {cert.credentialId}
                          </div>
                          {cert.verificationUrl && (
                            <Button variant="outline" size="sm" className="h-6 text-xs">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Verify
                            </Button>
                          )}
                        </div>
                      </td>
                      
                      <td className="p-4">
                        <div 
                          className="relative"
                          onMouseEnter={() => setHoveredCert(cert.id)}
                          onMouseLeave={() => setHoveredCert(null)}
                        >
                          <div className="w-12 h-12 mask-diamond bg-gradient-to-br from-primary/20 to-accent/20 cursor-pointer hover:scale-110 transition-transform duration-200">
                            <img 
                              src={cert.badge} 
                              alt={`${cert.title} badge`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          {/* Tooltip */}
                          {hoveredCert === cert.id && (
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10">
                              <div className="bg-popover border border-border rounded-lg p-3 shadow-lg min-w-[200px] animate-fade-in">
                                <h4 className="font-semibold text-sm mb-1">{cert.title}</h4>
                                <p className="text-xs text-muted-foreground mb-2">
                                  ID: {cert.credentialId}
                                </p>
                                <div className="flex flex-wrap gap-1">
                                  {cert.skills.slice(0, 3).map((skill, idx) => (
                                    <span 
                                      key={idx}
                                      className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                  {cert.skills.length > 3 && (
                                    <span className="text-xs text-muted-foreground">
                                      +{cert.skills.length - 3}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <Card className="p-6 text-center">
              <Award className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold">{certifications.length}</div>
              <div className="text-sm text-muted-foreground">Total Certifications</div>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-2xl font-bold text-green-600">
                {certifications.filter(cert => !cert.expiryDate || new Date(cert.expiryDate) > new Date()).length}
              </div>
              <div className="text-sm text-muted-foreground">Active</div>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-2xl font-bold">{categories.length}</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-2xl font-bold">
                {new Date().getFullYear() - 2021}
              </div>
              <div className="text-sm text-muted-foreground">Years Learning</div>
            </Card>
          </div>
        </div>
      </Section>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Certifications;