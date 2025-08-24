import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

interface Recommendation {
  id: string;
  name: string;
  organization: string;
  message: string;
  color: string;
  rotation: number;
}

const RecommendationBoard = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([
    {
      id: '1',
      name: 'Sarah Johnson',
      organization: 'Tech Solutions Inc.',
      message: 'Kartik is an exceptional developer with outstanding problem-solving skills. His attention to detail and innovative approach to complex challenges make him a valuable asset to any team.',
      color: 'bg-yellow-200',
      rotation: -2
    },
    {
      id: '2',
      name: 'Michael Chen',
      organization: 'Digital Innovations Ltd',
      message: 'Working with Kartik was a pleasure. His technical expertise combined with excellent communication skills resulted in successful project delivery ahead of schedule.',
      color: 'bg-blue-200',
      rotation: 1
    },
    {
      id: '3',
      name: 'Lisa Rodriguez',
      organization: 'StartupHub',
      message: 'Kartik demonstrated remarkable leadership during our hackathon. His ability to guide the team while coding innovative solutions was truly impressive.',
      color: 'bg-green-200',
      rotation: -1
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    message: ''
  });

  const noteColors = [
    'bg-yellow-200',
    'bg-blue-200', 
    'bg-green-200',
    'bg-pink-200',
    'bg-purple-200',
    'bg-orange-200',
    'bg-red-200',
    'bg-indigo-200',
    'bg-teal-200'
  ];

  const getRandomRotation = () => Math.floor(Math.random() * 6) - 3; // -3 to 3 degrees
  const getRandomColor = () => noteColors[Math.floor(Math.random() * noteColors.length)];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.organization && formData.message) {
      const newRecommendation: Recommendation = {
        id: Date.now().toString(),
        name: formData.name,
        organization: formData.organization,
        message: formData.message,
        color: getRandomColor(),
        rotation: getRandomRotation()
      };
      
      setRecommendations([...recommendations, newRecommendation]);
      setFormData({ name: '', organization: '', message: '' });
      setShowForm(false);
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="mb-16">
      {/* Board Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Recommendation Board</h2>
        <p className="text-muted-foreground">What people say about working with me</p>
      </div>

      {/* Cork Board Background */}
      <div className="relative bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/20 dark:to-amber-800/20 rounded-2xl p-8 min-h-[400px] shadow-inner border-8 border-amber-800/20">
        {/* Cork Board Texture */}
        <div className="absolute inset-0 opacity-10 rounded-2xl bg-amber-600/10 bg-[radial-gradient(circle_at_25%_25%,_rgba(212,165,116,0.1)_0%,_transparent_50%)]"></div>
        
        {/* Recommendation Notes - Scrolling Display */}
        <div className="relative overflow-hidden h-96">
          <div className="flex animate-marquee-vertical space-y-6 flex-col">
            {/* Create enough duplicates for seamless scrolling */}
            {[...recommendations, ...recommendations, ...recommendations].map((rec, index) => (
              <div
                key={`${rec.id}-${index}`}
                className={`relative ${rec.color} p-4 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 hover:z-10 w-80 mx-auto flex-shrink-0`}
                style={{ 
                  transform: `rotate(${rec.rotation}deg)`,
                }}
              >
                {/* Pin */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full shadow-md"></div>
                
                {/* Note Content */}
                <div className="pt-3">
                  <p className="text-sm text-gray-800 mb-3 leading-relaxed">
                    "{rec.message}"
                  </p>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900 text-sm">- {rec.name}</p>
                    <p className="text-xs text-gray-700">{rec.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Note Button */}
        <div className="text-center mt-8">
          <Button
            onClick={() => setShowForm(true)}
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
            size="lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Your Recommendation
          </Button>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md bg-background">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Add Recommendation</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowForm(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="organization">Organization *</Label>
                  <Input
                    id="organization"
                    value={formData.organization}
                    onChange={(e) => handleInputChange('organization', e.target.value)}
                    placeholder="Your company or organization"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Recommendation *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Share your experience working with Kartik..."
                    maxLength={500}
                    required
                    className="min-h-[100px]"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {formData.message.length}/500 characters
                  </p>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1"
                    disabled={!formData.name || !formData.organization || !formData.message}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default RecommendationBoard;