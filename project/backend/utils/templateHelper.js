import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Simple template engine that replaces {{variables}} and handles {{#conditionals}}
 */
export function renderTemplate(templatePath, data) {
  try {
    const template = fs.readFileSync(templatePath, 'utf8');
    
    // Handle conditionals {{#variable}}content{{/variable}}
    let processed = template.replace(/\{\{#(\w+)\}\}([\s\S]*?)\{\{\/\1\}\}/g, (match, variable, content) => {
      return data[variable] ? content : '';
    });
    
    // Handle simple variables {{variable}}
    processed = processed.replace(/\{\{(\w+)\}\}/g, (match, variable) => {
      return data[variable] || '';
    });
    
    return processed;
  } catch (error) {
    console.error('Error rendering template:', error);
    throw new Error(`Failed to render template: ${error.message}`);
  }
}

/**
 * Get template path
 */
export function getTemplatePath(templateName) {
  return path.join(__dirname, '..', 'templates', templateName);
}

/**
 * Generate timestamp for email
 */
export function getTimestamp() {
  return new Date().toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  });
}
