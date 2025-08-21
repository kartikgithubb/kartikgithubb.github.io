import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChatWindow from './ChatWindow';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full 
          bg-gradient-to-br from-primary to-primary/80 
          hover:from-primary/90 hover:to-primary/70
          shadow-lg hover:shadow-xl
          transition-all duration-300 ease-out
          hover:scale-110
          ${isOpen ? 'rotate-180' : 'hover:rotate-12'}
        `}
        size="sm"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-primary-foreground" />
        ) : (
          <MessageCircle className="h-6 w-6 text-primary-foreground animate-pulse" />
        )}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <ChatWindow 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)} 
        />
      )}
    </>
  );
};

export default ChatButton;