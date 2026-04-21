import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatButton from '@/components/chat/ChatButton';
import ProjectFiles from '@/components/modern/ProjectFiles';

const Projects = () => {
  return (
    <div className="dark">
      <Header />

      {/* Project Files "Folder Structure" */}
      <ProjectFiles />

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Projects;