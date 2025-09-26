import React, { useState } from 'react';
import { apiTest } from '../utils/apiTest';

const ApiTestComponent: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  const addResult = (result: string) => {
    setResults(prev => [...prev, result]);
  };

  const runTests = async () => {
    setIsRunning(true);
    setResults([]);
    
    addResult('🧪 Starting API Tests...');
    
    try {
      // Test health endpoint
      addResult('🏥 Testing health endpoint...');
      const healthResult = await apiTest.testHealthEndpoint();
      addResult(healthResult.success ? '✅ Health endpoint working' : `❌ Health endpoint failed: ${healthResult.error}`);
      
      // Test API key debug endpoint
      addResult('🔑 Testing API key debug endpoint...');
      const debugResult = await apiTest.testApiKeyEndpoint();
      addResult(debugResult.success ? '✅ API key debug endpoint working' : `❌ API key debug endpoint failed: ${debugResult.error}`);
      
      // Test contact without API key
      addResult('🚫 Testing contact endpoint WITHOUT API key...');
      const noKeyResult = await apiTest.testContactWithoutApiKey();
      addResult(noKeyResult.success ? '✅ Contact endpoint correctly rejected request without API key' : `❌ Contact endpoint without API key test failed: ${noKeyResult.error}`);
      
      // Test contact with API key
      addResult('✅ Testing contact endpoint WITH API key...');
      const withKeyResult = await apiTest.testContactWithApiKey();
      addResult(withKeyResult.success ? '✅ Contact endpoint working with API key' : `❌ Contact endpoint with API key failed: ${withKeyResult.error}`);
      
      addResult('📊 Tests completed! Check browser console for detailed logs.');
      
    } catch (error) {
      addResult(`❌ Test execution failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsRunning(false);
    }
  };

  const clearResults = () => {
    setResults([]);
  };

  return (
    <div className="p-4 border rounded-lg bg-gray-50">
      <h2 className="text-xl font-bold mb-4">🔧 API Test Component</h2>
      
      <div className="flex gap-2 mb-4">
        <button
          onClick={runTests}
          disabled={isRunning}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {isRunning ? '🔄 Running Tests...' : '🧪 Run API Tests'}
        </button>
        
        <button
          onClick={clearResults}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          🗑️ Clear Results
        </button>
      </div>
      
      <div className="bg-black text-green-400 p-3 rounded font-mono text-sm max-h-96 overflow-y-auto">
        {results.length === 0 ? (
          <div className="text-gray-500">Click "Run API Tests" to start debugging...</div>
        ) : (
          results.map((result, index) => (
            <div key={index} className="mb-1">
              {result}
            </div>
          ))
        )}
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p>💡 <strong>Instructions:</strong></p>
        <ul className="list-disc list-inside mt-2">
          <li>Click "Run API Tests" to test the API connection</li>
          <li>Check the browser console (F12) for detailed logs</li>
          <li>Make sure the backend server is running on localhost:5000</li>
          <li>Verify that both frontend and backend have the same API key</li>
        </ul>
      </div>
    </div>
  );
};

export default ApiTestComponent;
