import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Sparkles } from 'lucide-react';
interface NewsletterSectionProps {
  className?: string;
}
const NewsletterSection = ({
  className
}: NewsletterSectionProps) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Store email (you can implement actual storage later)
      localStorage.setItem('subscriber_email', email);
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to updates."
      });
      setEmail('');
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className={`py-20 bg-gradient-to-br from-primary/5 to-secondary/5 ${className}`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Stay Updated
          </h2>
          <Sparkles className="w-6 h-6 text-secondary" />
        </div>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get the latest updates on projects, insights, and professional developments directly to your inbox.
        </p>
        
        <Card className="max-w-md mx-auto p-6 bg-background/50 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};
export default NewsletterSection;