import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Sparkles } from 'lucide-react';


interface NewsletterSectionProps {
  className?: string;
}

const NewsletterSection = ({ className }: NewsletterSectionProps) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const { toast } = useToast();
  
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    
    try {
      // Store email temporarily (basic implementation)
      localStorage.setItem('subscriber_email', email);
      
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to updates.",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12 bg-gradient-to-r from-card/80 to-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 mb-6">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h2 className="display-title text-3xl lg:text-4xl font-bold mb-4 text-white">
                Stay Updated
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Want to track my journey and learn more about my latest insights, projects, and discoveries?
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    maxLength={254}
                    className="pl-10 h-12 bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
                  />
                  {errors.length > 0 && (
                    <div className="absolute top-full left-0 mt-1 text-sm text-destructive">
                      {errors[0]}
                    </div>
                  )}
                </div>
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isLoading}
                  className="h-12 px-8 bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 font-medium"
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                No spam, just valuable insights. Unsubscribe anytime.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;