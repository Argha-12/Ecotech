// EmailJS will be loaded via CDN in index.html
declare global {
  interface Window {
    emailjs: any;
  }
}

// Email configuration interface
export interface EmailConfig {
  publicKey: string;
  serviceId: string;
  templates: {
    career: string;
    contact: string;
    quote: string;
  };
  toEmail: string | string[];
}

// Template type for email service
export type TemplateType = 'career' | 'contact' | 'quote';

// Generic email data interface
export interface EmailData {
  [key: string]: any;
}

// Email service response interface
export interface EmailServiceResponse {
  success: boolean;
  message: string;
  error?: any;
}

// Email service options
export interface EmailServiceOptions {
  successMessage?: string;
  errorMessage?: string;
  fallbackEmail?: string;
  enableMailtoFallback?: boolean;
}

class EmailService {
  private config: EmailConfig | null = null;

  /**
   * Initialize the email service with configuration
   */
  initialize(): EmailConfig {
    const config: EmailConfig = {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templates: {
        career: import.meta.env.VITE_EMAILJS_TEMPLATE_CAREER,
        contact: import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT,
        quote: import.meta.env.VITE_EMAILJS_TEMPLATE_QUOTE
      },
      toEmail: import.meta.env.VITE_EMAIL_TO
    };

    // Validate configuration
    if (!config.publicKey || !config.serviceId || !config.toEmail) {
      throw new Error('Missing required environment variables for email service');
    }

    // Validate template IDs
    if (!config.templates.career || !config.templates.contact || !config.templates.quote) {
      throw new Error('Missing required template IDs in environment variables');
    }

    this.config = config;
    return config;
  }

  /**
   * Send email using EmailJS
   */
  async sendEmail(
    emailData: EmailData,
    templateType: TemplateType,
    options: EmailServiceOptions = {}
  ): Promise<EmailServiceResponse> {
    try {
      // Initialize configuration if not already done
      if (!this.config) {
        this.initialize();
      }

      if (!this.config) {
        throw new Error('Email service not properly configured');
      }

      console.log('EmailJS Config:', this.config);
      console.log('Email Data:', emailData);

      // Initialize EmailJS
      window.emailjs.init(this.config.publicKey);

      // Parse comma-separated emails
      let toEmails: string[];
      if (typeof this.config.toEmail === 'string') {
        toEmails = this.config.toEmail.split(',').map(email => email.trim());
      } else if (Array.isArray(this.config.toEmail)) {
        toEmails = this.config.toEmail;
      } else {
        toEmails = [String(this.config.toEmail)];
      }
      
      // Remove duplicate emails
      const uniqueEmails = [...new Set(toEmails)];
      
      // Log the parsed emails for debugging
      console.log('Original toEmail:', this.config.toEmail);
      console.log('Parsed toEmails:', toEmails);
      console.log('Unique emails:', uniqueEmails);
      console.log('Number of recipients:', uniqueEmails.length);
      
      // Update toEmails to use unique emails only
      toEmails = uniqueEmails;

      // Get the appropriate template ID based on type
      const templateId = this.config.templates[templateType];
      
      // Send email to each recipient
      const results = [];
      for (const email of toEmails) {
        const templateParams = {
          to_email: email,
          ...emailData
        };
        
        console.log(`Sending email to: ${email}`);
        const result = await window.emailjs.send(
          this.config.serviceId,
          templateId,
          templateParams
        );
        
        results.push(result);
        console.log(`EmailJS Result for ${email}:`, result);
      }

      // Check if all emails were sent successfully
      const allSuccessful = results.every(result => result.status === 200);
      
      if (allSuccessful) {
        return {
          success: true,
          message: options.successMessage || `Email sent successfully to ${toEmails.length} recipient(s)!`
        };
      } else {
        const failedCount = results.filter(result => result.status !== 200).length;
        throw new Error(`${failedCount} out of ${toEmails.length} emails failed to send`);
      }
    } catch (error) {
      console.error('Error sending email:', error);

      // Handle mailto fallback if enabled
      if (options.enableMailtoFallback) {
        return this.handleMailtoFallback(emailData, options);
      }

      return {
        success: false,
        message: options.errorMessage || 'Failed to send email. Please try again.',
        error
      };
    }
  }

  /**
   * Handle mailto fallback when EmailJS fails
   */
  private handleMailtoFallback(
    emailData: EmailData,
    options: EmailServiceOptions
  ): EmailServiceResponse {
    try {
      const fallbackEmail = options.fallbackEmail || this.config?.toEmail || 'contact@example.com';
      
      // Create mailto link
      const subject = emailData.subject || 'Contact Form Submission';
      const body = this.formatEmailBody(emailData);
      
      const mailtoLink = `mailto:${fallbackEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client
      window.open(mailtoLink, '_blank');
      
      return {
        success: true,
        message: 'Opening your email client to send the message. Please click Send in your email application.'
      };
    } catch (error) {
      console.error('Mailto fallback failed:', error);
      return {
        success: false,
        message: 'Failed to send email and open email client. Please contact us directly.',
        error
      };
    }
  }

  /**
   * Format email data into a readable body text
   */
  private formatEmailBody(emailData: EmailData): string {
    let body = '';
    
    // Add timestamp
    body += `Submitted on: ${new Date().toLocaleString()}\n\n`;
    
    // Add all data fields
    Object.entries(emailData).forEach(([key, value]) => {
      if (key !== 'subject' && key !== 'to_email') {
        const formattedKey = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        body += `${formattedKey}: ${value}\n`;
      }
    });
    
    return body;
  }

  /**
   * Validate email address format
   */
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validate phone number format (basic validation)
   */
  static isValidPhone(phone: string): boolean {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  }
}

// Create and export a singleton instance
export const emailService = new EmailService();

// Export utility functions
export { EmailService };

// Predefined email templates for common use cases
export const EmailTemplates = {
  /**
   * Job application email template
   */
  jobApplication: (formData: {
    name: string;
    phoneNo: string;
    emailId: string;
    resume: File | null;
  }) => ({
    subject: `New Job Application from ${formData.name}`,
    from_name: formData.name,
    from_email: formData.emailId,
    phone: formData.phoneNo,
    resume_name: formData.resume?.name || 'No file selected',
    resume_size: formData.resume ? `${(formData.resume.size / 1024 / 1024).toFixed(2)} MB` : 'N/A',
    message: `New Job Application:

Name: ${formData.name}
Phone: ${formData.phoneNo}
Email: ${formData.emailId}
Resume: ${formData.resume?.name || 'No file selected'}
File Size: ${formData.resume ? `${(formData.resume.size / 1024 / 1024).toFixed(2)} MB` : 'N/A'}

⚠️ NOTE: Resume file cannot be attached via email. Please contact the candidate directly to request the resume file.

Submitted on: ${new Date().toLocaleString()}`,
    submission_date: new Date().toLocaleString()
  }),

  /**
   * Contact form email template
   */
  contactForm: (formData: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  }) => ({
    subject: `New Contact Form - ${formData.subject} from ${formData.name}`,
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone || 'Not provided',
    inquiry_subject: formData.subject,
    message: `New Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject}

Message:
${formData.message}

Submitted on: ${new Date().toLocaleString()}`,
    submission_date: new Date().toLocaleString()
  }),

  /**
   * Get Quote form email template
   */
  getQuote: (formData: {
    name: string;
    phoneNo: string;
    email: string;
    organization: string;
    products: string;
  }) => ({
    subject: `New Quote Request from ${formData.name} - ${formData.organization}`,
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phoneNo,
    organization: formData.organization,
    products_services: formData.products,
    message: `New Quote Request:

Name: ${formData.name}
Phone: ${formData.phoneNo}
Email: ${formData.email}
Organization: ${formData.organization}

Products/Services of Interest:
${formData.products}

Submitted on: ${new Date().toLocaleString()}

Priority: High - Quote Request
Expected Response Time: Within 24 hours`,
    submission_date: new Date().toLocaleString(),
    request_type: 'Quote Request'
  }),

  /**
   * Newsletter subscription email template
   */
  newsletter: (formData: {
    email: string;
    name?: string;
  }) => ({
    subject: `New Newsletter Subscription`,
    from_name: formData.name || 'Anonymous',
    from_email: formData.email,
    message: `New Newsletter Subscription:

Name: ${formData.name || 'Not provided'}
Email: ${formData.email}

Subscribed on: ${new Date().toLocaleString()}`,
    submission_date: new Date().toLocaleString()
  })
};
