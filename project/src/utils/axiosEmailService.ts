// Enhanced Email Service using Python FastAPI with Axios

import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';

// Email configuration interface
export interface EmailConfig {
  apiUrl: string;
  apiKey?: string;
  timeout?: number;
}

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
  timeout?: number;
}

// Axios error interface
interface ApiError {
  message: string;
  code?: string;
  status?: number;
  data?: any;
}

class AxiosEmailService {
  private config: EmailConfig | null = null;
  private initialized = false;
  private axiosInstance: AxiosInstance | null = null;

  /**
   * Initialize the email service with configuration
   */
  initialize(): EmailConfig {
    const config: EmailConfig = {
      apiUrl: import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000',
      apiKey: import.meta.env.VITE_API_KEY,
      timeout: 10000 // 10 seconds timeout
    };

    this.config = config;
    this.initialized = true;
    this.createAxiosInstance();
    
    console.log('Axios Email Service initialized with API URL:', config.apiUrl);
    return config;
  }

  /**
   * Create configured Axios instance
   */
  private createAxiosInstance(): void {
    if (!this.config) {
      throw new Error('Configuration not set');
    }

    this.axiosInstance = axios.create({
      baseURL: this.config.apiUrl,
      timeout: this.config.timeout || 10000,
      headers: {
        'Content-Type': 'application/json',
      }
    });

    // Request interceptor to add API key
    this.axiosInstance.interceptors.request.use(
      (config) => {
        if (this.config?.apiKey) {
          config.headers['x-api-key'] = this.config.apiKey;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor for global error handling
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        // Handle different types of errors
        if (error.response) {
          // Server responded with error status
          console.error('API Error Response:', {
            status: error.response.status,
            data: error.response.data,
            headers: error.response.headers
          });
        } else if (error.request) {
          // Request made but no response received
          console.error('API Network Error:', error.message);
        } else {
          // Something happened in setting up the request
          console.error('API Request Error:', error.message);
        }
        return Promise.reject(error);
      }
    );
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
   * Get the Axios instance
   */
  getAxiosInstance(): AxiosInstance {
    if (!this.axiosInstance) {
      throw new Error('Axios instance not created. Call initialize() first.');
    }
    return this.axiosInstance;
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
      enableMailtoFallback = false,
      timeout
    } = options;

    try {
      // Use provided timeout or default
      const requestTimeout = timeout || this.config?.timeout || 10000;
      
      const response = await this.axiosInstance!.post(`/api/${endpoint}`, emailData, {
        timeout: requestTimeout
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
      let errorDetails: any = error;

      if (axios.isAxiosError(error)) {
        if (error.response) {
          // Server responded with error status
          const errorData = error.response.data as any;
          errorMessageText = errorData?.message || errorMessage;
          errorDetails = {
            status: error.response.status,
            data: errorData,
            code: error.code
          };
        } else if (error.request) {
          // Request made but no response received
          errorMessageText = 'Network error. Please check your connection.';
          errorDetails = {
            message: error.message,
            code: error.code,
            isNetworkError: true
          };
        } else {
          // Something happened in setting up the request
          errorMessageText = error.message || errorMessage;
          errorDetails = {
            message: error.message,
            code: error.code
          };
        }
      } else {
        errorMessageText = error instanceof Error ? error.message : 'Unknown error';
        errorDetails = error instanceof Error ? error.message : error;
      }

      // If network error and fallback is enabled, try mailto
      if (enableMailtoFallback) {
        return this.fallbackToMailto(endpoint, emailData, options);
      }

      return {
        success: false,
        message: errorMessageText,
        error: errorDetails
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
      const response = await this.axiosInstance!.get('/health');
      return response.status === 200;
    } catch (error) {
      console.error('Backend connection test failed:', error);
      return false;
    }
  }

  /**
   * Get API health status
   */
  async getHealthStatus(): Promise<any> {
    if (!this.initialized) {
      this.initialize();
    }

    try {
      const response = await this.axiosInstance!.get('/health');
      return response.data;
    } catch (error) {
      console.error('Failed to get health status:', error);
      throw error;
    }
  }

  /**
   * Debug API key configuration
   */
  async debugApiKey(): Promise<any> {
    if (!this.initialized) {
      this.initialize();
    }

    try {
      const response = await this.axiosInstance!.get('/debug-api-key');
      return response.data;
    } catch (error) {
      console.error('Failed to debug API key:', error);
      throw error;
    }
  }

  /**
   * Cancel all pending requests
   */
  cancelAllRequests(): void {
    if (this.axiosInstance) {
      const CancelToken = axios.CancelToken;
      const source = CancelToken.source();
      source.cancel('All requests cancelled');
    }
  }
}

// Export singleton instance
export const axiosEmailService = new AxiosEmailService();

// Export class for custom instances if needed
export { AxiosEmailService };

// Export utility functions
export const isAxiosError = axios.isAxiosError;
