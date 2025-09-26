// API Test utility for debugging frontend-backend communication

export interface TestResult {
  success: boolean;
  message: string;
  data?: any;
  error?: any;
}

export class ApiTest {
  private baseUrl: string;
  private apiKey: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
    this.apiKey = import.meta.env.VITE_API_KEY || '';
    
    console.log('🔧 API Test Configuration:');
    console.log('   Base URL:', this.baseUrl);
    console.log('   API Key:', this.apiKey ? this.apiKey.substring(0, 4) + '...' : 'NOT SET');
    console.log('   API Key Length:', this.apiKey.length);
  }

  async testHealthEndpoint(): Promise<TestResult> {
    try {
      console.log('🏥 Testing health endpoint...');
      const response = await fetch(`${this.baseUrl}/health`);
      const result = await response.json();
      
      console.log('✅ Health endpoint response:', result);
      return {
        success: true,
        message: 'Health endpoint working',
        data: result
      };
    } catch (error) {
      console.error('❌ Health endpoint failed:', error);
      return {
        success: false,
        message: 'Health endpoint failed',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  async testApiKeyEndpoint(): Promise<TestResult> {
    try {
      console.log('🔑 Testing API key debug endpoint...');
      const response = await fetch(`${this.baseUrl}/debug-api-key`);
      const result = await response.json();
      
      console.log('✅ API key debug response:', result);
      return {
        success: true,
        message: 'API key debug endpoint working',
        data: result
      };
    } catch (error) {
      console.error('❌ API key debug endpoint failed:', error);
      return {
        success: false,
        message: 'API key debug endpoint failed',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  async testContactWithoutApiKey(): Promise<TestResult> {
    try {
      console.log('🚫 Testing contact endpoint WITHOUT API key...');
      const response = await fetch(`${this.baseUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          message: 'Test message without API key'
        })
      });

      const result = await response.json();
      console.log('📝 Contact without API key response:', result);
      console.log('📝 Status code:', response.status);
      
      return {
        success: response.status === 401,
        message: 'Contact endpoint without API key',
        data: { status: response.status, result }
      };
    } catch (error) {
      console.error('❌ Contact endpoint without API key failed:', error);
      return {
        success: false,
        message: 'Contact endpoint without API key failed',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  async testContactWithApiKey(): Promise<TestResult> {
    try {
      console.log('✅ Testing contact endpoint WITH API key...');
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      
      if (this.apiKey) {
        headers['x-api-key'] = this.apiKey;
        console.log('🔑 Using API key:', this.apiKey.substring(0, 4) + '...');
      } else {
        console.log('❌ No API key available!');
      }

      const response = await fetch(`${this.baseUrl}/api/contact`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          message: 'Test message with API key'
        })
      });

      const result = await response.json();
      console.log('📝 Contact with API key response:', result);
      console.log('📝 Status code:', response.status);
      
      return {
        success: response.status === 200,
        message: 'Contact endpoint with API key',
        data: { status: response.status, result }
      };
    } catch (error) {
      console.error('❌ Contact endpoint with API key failed:', error);
      return {
        success: false,
        message: 'Contact endpoint with API key failed',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  async runAllTests(): Promise<void> {
    console.log('🧪 Starting API Tests...');
    console.log('=====================================');

    const results = [
      await this.testHealthEndpoint(),
      await this.testApiKeyEndpoint(),
      await this.testContactWithoutApiKey(),
      await this.testContactWithApiKey()
    ];

    console.log('=====================================');
    console.log('📊 Test Results Summary:');
    results.forEach((result, index) => {
      const status = result.success ? '✅' : '❌';
      console.log(`${status} Test ${index + 1}: ${result.message}`);
      if (result.error) {
        console.log(`   Error: ${result.error}`);
      }
    });

    console.log('=====================================');
    console.log('💡 Check the browser console for detailed logs');
  }
}

// Export singleton instance
export const apiTest = new ApiTest();
