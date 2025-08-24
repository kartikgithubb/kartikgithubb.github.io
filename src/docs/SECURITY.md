# Security Guidelines

This document outlines the security measures implemented in this project and guidelines for maintaining security.

## Implemented Security Measures

### 1. Input Validation & Sanitization
- **Form Validation**: All forms use Zod schemas for robust validation
- **Input Sanitization**: User inputs are sanitized using custom utility functions
- **Character Limits**: All text inputs have appropriate length restrictions
- **Email Validation**: Proper email format validation with length limits

### 2. XSS Prevention
- **HTML Sanitization**: DOMPurify is used to sanitize any HTML content
- **Text Escaping**: All user-generated text is escaped before display
- **CSS Injection Protection**: Chart component validates color values and sanitizes IDs

### 3. Rate Limiting
- **Form Submissions**: Rate limiting implemented for all forms to prevent spam
  - Newsletter: 3 attempts per 5 minutes
  - Contact Form: 3 messages per 15 minutes  
  - Recommendations: 2 submissions per 10 minutes

### 4. Secure Storage
- **Client-side Storage**: Email addresses are encrypted before localStorage storage
- **No Sensitive Data**: No sensitive information stored in client-side storage

### 5. Security Headers
- **CSP**: Content Security Policy configured to restrict resource loading
- **XSS Protection**: X-XSS-Protection header enabled
- **Content Type**: X-Content-Type-Options set to nosniff
- **Frame Options**: X-Frame-Options set to DENY

## Security Best Practices

### For Developers

1. **Input Validation**
   ```typescript
   // Always validate user inputs with Zod schemas
   const userInput = userInputSchema.safeParse(data);
   if (!userInput.success) {
     // Handle validation errors
   }
   ```

2. **Text Sanitization**
   ```typescript
   import { sanitizeText } from '@/lib/security';
   const safeText = sanitizeText(userInput);
   ```

3. **HTML Content**
   ```typescript
   import { sanitizeHtml } from '@/lib/security';
   const safeHtml = sanitizeHtml(htmlContent);
   ```

4. **Rate Limiting**
   ```typescript
   import { createRateLimiter } from '@/lib/security';
   const rateLimiter = createRateLimiter(maxAttempts, windowMs);
   
   if (!rateLimiter(identifier)) {
     // Handle rate limit exceeded
   }
   ```

### Form Security Checklist

- [ ] Form uses proper validation schema
- [ ] Input fields have appropriate maxLength attributes  
- [ ] Rate limiting is implemented
- [ ] Error messages don't expose sensitive information
- [ ] Success/failure feedback is provided to users
- [ ] Form submission is properly handled with loading states

## Vulnerability Response

If you discover a security vulnerability:

1. **Do not** open a public issue
2. Contact the maintainer privately
3. Provide detailed information about the vulnerability
4. Allow time for the issue to be addressed before public disclosure

## Regular Security Tasks

- [ ] Review and update dependencies regularly
- [ ] Monitor for new security vulnerabilities
- [ ] Test forms with various malicious inputs
- [ ] Review CSP settings and adjust as needed
- [ ] Audit client-side storage usage

## Security Testing

### Manual Testing
1. Test all forms with XSS payloads
2. Verify rate limiting works correctly
3. Check that validation errors are properly handled
4. Ensure no sensitive data appears in console logs or network requests

### Automated Testing
- Set up security scanning in CI/CD pipeline
- Regular dependency vulnerability scanning
- CSP violation monitoring

## Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [React Security Best Practices](https://blog.logrocket.com/react-security-best-practices/)
- [Content Security Policy Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)