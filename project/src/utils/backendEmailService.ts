// Backend Email Service using Python FastAPI with Axios

// Email configuration interface
export interface EmailConfig {
  apiUrl: string;
}

// Import Axios
import axios from 'axios';

// Template type for email service
export type TemplateType = 'contact' | 'career' | 'quote';

// Generic email data interface
export interface EmailData {
  [key: string]: any;
}

// Email service response interface
export interface EmailServiceResponse {
  success: boolean;
  message: string;
  error?: any;
  data?: any;
}

// Email service options
export interface EmailServiceOptions {
  successMessage?: string;
  errorMessage?: string;
  fallbackEmail?: string;
  enableMailtoFallback?: boolean;
}

class BackendEmailService {
  private config: EmailConfig | null = null;
  private initialized = false;

  /**
   * Initialize the email service with configuration
   */
  initialize(): EmailConfig {
    const config: EmailConfig = {
      apiUrl: import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'
    };

    this.config = config;
    this.initialized = true;
    
    console.log('Backend Email Service initialized with API URL:', config.apiUrl);
    return config;
  }

  /**
   * Get the current configuration
   */
  getConfig(): EmailConfig {
    if (!this.config) {
      throw new Error('Email service not initialized. Call initialize() first.');
    }
    return this.config;
  }

  /**
   * Check if the service is initialized
   */
  isInitialized(): boolean {
    return this.initialized;
  }

  /**
   * Send an email using the backend API
   */
  async sendEmail(
    endpoint: string,
    emailData: EmailData,
    options: EmailServiceOptions = {}
  ): Promise<EmailServiceResponse> {
    if (!this.initialized) {
      this.initialize();
    }

    const {
      successMessage = 'Email sent successfully!',
      errorMessage = 'Failed to send email. Please try again.',
      enableMailtoFallback = false
    } = options;

    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      
      // Add API key if available
      if (apiKey) {
        headers['x-api-key'] = apiKey;
      }
      
      const response = await axios.post(`${this.config!.apiUrl}/api/${endpoint}`, emailData, {
        headers
      });

      const result = response.data;

      if (result.success) {
        return {
          success: true,
          message: successMessage,
          data: result.data
        };
      } else {
        // If backend fails and fallback is enabled, try mailto
        if (enableMailtoFallback) {
          return this.fallbackToMailto(endpoint, emailData, options);
        }

        return {
          success: false,
          message: result.message || errorMessage,
          error: result.error
        };
      }
    } catch (error) {
      console.error('Backend email service error:', error);

      // Handle Axios errors specifically
      let errorMessageText = errorMessage;
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // Server responded with error status
          errorMessageText = error.response.data?.message || errorMessage;
        } else if (error.request) {
          // Request made but no response received
          errorMessageText = 'Network error. Please check your connection.';
        } else {
          // Something happened in setting up the request
          errorMessageText = error.message || errorMessage;
        }
      } else {
        errorMessageText = error instanceof Error ? error.message : 'Unknown error';
      }

      // If network error and fallback is enabled, try mailto
      if (enableMailtoFallback) {
        return this.fallbackToMailto(endpoint, emailData, options);
      }

      return {
        success: false,
        message: errorMessageText,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Send contact form email
   */
  async sendContactEmail(
    emailData: EmailData,
    options: EmailServiceOptions = {}
  ): Promise<EmailServiceResponse> {
    const defaultOptions: EmailServiceOptions = {
      successMessage: 'Thank you for your message! We\'ll get back to you soon.',
      errorMessage: 'Failed to send your message. Please try again.',
      enableMailtoFallback: true
    };

    return this.sendEmail('contact', emailData, { ...defaultOptions, ...options });
  }

  /**
   * Send career application email
   */
  async sendCareerEmail(
    emailData: EmailData,
    options: EmailServiceOptions = {}
  ): Promise<EmailServiceResponse> {
    const defaultOptions: EmailServiceOptions = {
      successMessage: 'Thank you for your application! We\'ll review it and get back to you soon.',
      errorMessage: 'Failed to submit your application. Please try again.',
      enableMailtoFallback: true
    };

    return this.sendEmail('career', emailData, { ...defaultOptions, ...options });
  }

  /**
   * Send quote request email
   */
  async sendQuoteEmail(
    emailData: EmailData,
    options: EmailServiceOptions = {}
  ): Promise<EmailServiceResponse> {
    const defaultOptions: EmailServiceOptions = {
      successMessage: 'Thank you for your quote request! We\'ll get back to you with a detailed quote soon.',
      errorMessage: 'Failed to submit your quote request. Please try again.',
      enableMailtoFallback: true
    };

    return this.sendEmail('quote', emailData, { ...defaultOptions, ...options });
  }

  /**
   * Fallback to mailto link if backend fails
   */
  private fallbackToMailto(
    endpoint: string,
    emailData: EmailData,
    options: EmailServiceOptions
  ): EmailServiceResponse {
    const { fallbackEmail = 'your-email@example.com' } = options;
    
    let subject = '';
    let body = '';

    switch (endpoint) {
      case 'contact':
        subject = encodeURIComponent('Contact Form Submission');
        body = encodeURIComponent(
          `Name: ${emailData.name || ''}\n` +
          `Email: ${emailData.email || ''}\n` +
          `Phone: ${emailData.phone || ''}\n\n` +
          `Message:\n${emailData.message || ''}`
        );
        break;
      
      case 'career':
        subject = encodeURIComponent(`Career Application: ${emailData.position || ''}`);
        body = encodeURIComponent(
          `Name: ${emailData.name || ''}\n` +
          `Email: ${emailData.email || ''}\n` +
          `Phone: ${emailData.phone || ''}\n` +
          `Position: ${emailData.position || ''}\n\n` +
          `Message:\n${emailData.message || ''}`
        );
        break;
      
      case 'quote':
        subject = encodeURIComponent(`Quote Request: ${emailData.service || ''}`);
        body = encodeURIComponent(
          `Name: ${emailData.name || ''}\n` +
          `Email: ${emailData.email || ''}\n` +
          `Phone: ${emailData.phone || ''}\n` +
          `Company: ${emailData.company || ''}\n` +
          `Service: ${emailData.service || ''}\n` +
          `Budget: ${emailData.budget || ''}\n` +
          `Timeline: ${emailData.timeline || ''}\n\n` +
          `Message:\n${emailData.message || ''}`
        );
        break;
    }

    const mailtoLink = `mailto:${fallbackEmail}?subject=${subject}&body=${body}`;
    
    // Open mailto link
    window.open(mailtoLink, '_blank');

    return {
      success: true,
      message: 'Opening your email client...'
    };
  }

  /**
   * Test the backend connection
   */
  async testConnection(): Promise<boolean> {
    if (!this.initialized) {
      this.initialize();
    }

    try {
      const response = await axios.get(`${this.config!.apiUrl}/health`);
      return response.status === 200;
    } catch (error) {
      console.error('Backend connection test failed:', error);
      return false;
    }
  }
}

// Export singleton instance
export const backendEmailService = new BackendEmailService();

// Export class for custom instances if needed
export { BackendEmailService };
