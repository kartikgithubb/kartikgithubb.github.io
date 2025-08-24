import DOMPurify from 'dompurify';
import { z } from 'zod';

// Email validation schema
export const emailSchema = z.string()
  .email('Please enter a valid email address')
  .min(5, 'Email must be at least 5 characters')
  .max(254, 'Email must be less than 255 characters')
  .transform(email => email.toLowerCase().trim());

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  email: emailSchema,
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters')
});

// Recommendation form validation schema
export const recommendationSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  organization: z.string()
    .min(2, 'Organization must be at least 2 characters')
    .max(150, 'Organization must be less than 150 characters'),
  message: z.string()
    .min(20, 'Message must be at least 20 characters')
    .max(500, 'Message must be less than 500 characters')
});

// Sanitize HTML content
export const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p', 'br'],
    ALLOWED_ATTR: []
  });
};

// Sanitize text input
export const sanitizeText = (text: string): string => {
  return text
    .trim()
    .replace(/[<>'"&]/g, (char) => {
      const entities: Record<string, string> = {
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#x27;',
        '"': '&quot;',
        '&': '&amp;'
      };
      return entities[char] || char;
    });
};

// Secure localStorage wrapper
export const secureStorage = {
  setItem: (key: string, value: string): void => {
    try {
      // Simple encryption - in production, use a proper encryption library
      const encrypted = btoa(encodeURIComponent(value));
      localStorage.setItem(`secure_${key}`, encrypted);
    } catch (error) {
      console.error('Failed to store item securely:', error);
    }
  },
  
  getItem: (key: string): string | null => {
    try {
      const encrypted = localStorage.getItem(`secure_${key}`);
      if (!encrypted) return null;
      return decodeURIComponent(atob(encrypted));
    } catch (error) {
      console.error('Failed to retrieve item securely:', error);
      return null;
    }
  },
  
  removeItem: (key: string): void => {
    localStorage.removeItem(`secure_${key}`);
  }
};

// Rate limiting helper
export const createRateLimiter = (maxAttempts: number, windowMs: number) => {
  const attempts = new Map<string, number[]>();
  
  return (identifier: string): boolean => {
    const now = Date.now();
    const userAttempts = attempts.get(identifier) || [];
    
    // Remove old attempts outside the window
    const validAttempts = userAttempts.filter(time => now - time < windowMs);
    
    if (validAttempts.length >= maxAttempts) {
      return false; // Rate limited
    }
    
    validAttempts.push(now);
    attempts.set(identifier, validAttempts);
    return true; // Allowed
  };
};