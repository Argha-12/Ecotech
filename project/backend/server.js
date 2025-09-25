import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { renderTemplate, getTemplatePath, getTimestamp } from './utils/templateHelper.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify transporter configuration
const verifyTransporter = async () => {
  try {
    await transporter.verify();
    console.log('Email transporter is ready to send emails');
  } catch (error) {
    console.error('Email transporter verification failed:', error);
  }
};

verifyTransporter();

// Middleware - Enhanced CORS configuration
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, Postman)
    if (!origin) return callback(null, true);
    
    // Allow localhost for development
    if (origin.startsWith('http://localhost:') || origin.startsWith('http://127.0.0.1:')) {
      return callback(null, true);
    }
    
    // Allow your production domains
    const allowedDomains = [
      'https://ecotechglobal.in',
      'https://www.ecotechglobal.in'
    ];
    
    if (allowedDomains.includes(origin)) {
      return callback(null, true);
    }
    
    // Block other origins
    callback(new Error('Not allowed by CORS'));
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Email service is running' });
});

// Email validation middleware
const validateEmailData = (req, res, next) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields: name, email, and message are required'
    });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email format'
    });
  }

  next();
};

// Contact form endpoint
app.post('/api/contact', validateEmailData, async (req, res) => {
  try {
    const { name, email, message, phone, subject } = req.body;

    // Prepare template data
    const templateData = {
      name,
      email,
      phone: phone || '',
      subject: subject || '',
      message,
      timestamp: getTimestamp()
    };

    // Render email template
    const htmlContent = renderTemplate(getTemplatePath('contactTemplate.html'), templateData);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.TO_EMAIL, // Use TO_EMAIL from .env
      subject: subject || `Contact from ${name}`,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Contact form submitted successfully',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// Career application endpoint
app.post('/api/career', async (req, res) => {
  try {
    const { name, email, phone, position, message, resume } = req.body;

    if (!name || !email || !position) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, email, and position are required'
      });
    }

    // Prepare template data
    const templateData = {
      type: 'Career Application',
      typeLower: 'career application',
      formType: 'career',
      headerIcon: '💼',
      headerColor: '#28a745',
      headerColor2: '#20c997',
      borderColor: '#28a745',
      badgeColor: '#28a745',
      messageBgColor: '#d4edda',
      messageBorderColor: '#c3e6cb',
      messageTextColor: '#155724',
      messageLabel: '💬 Cover Letter/Message',
      highlightColor: '#d4edda',
      name,
      email,
      phone: phone || '',
      position: position || '',
      message: message || '',
      resume: resume || '',
      timestamp: getTimestamp()
    };

    // Render email template
    const htmlContent = renderTemplate(getTemplatePath('applicationTemplate.html'), templateData);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.TO_EMAIL, // Use TO_EMAIL from .env
      subject: `New Career Application: ${position}`,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Career application submitted successfully',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Career application error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// Quote request endpoint
app.post('/api/quote', async (req, res) => {
  try {
    const { name, email, phone, company, service, budget, timeline, message } = req.body;

    if (!name || !email || !service) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, email, and service are required'
      });
    }

    // Prepare template data
    const templateData = {
      type: 'Quote Request',
      typeLower: 'quote request',
      formType: 'quote',
      headerIcon: '🔧',
      headerColor: '#007bff',
      headerColor2: '#6610f2',
      borderColor: '#007bff',
      badgeColor: '#007bff',
      messageBgColor: '#d1ecf1',
      messageBorderColor: '#bee5eb',
      messageTextColor: '#0c5460',
      messageLabel: '📋 Project Details',
      highlightColor: '#d1ecf1',
      name,
      email,
      phone: phone || '',
      company: company || '',
      service: service || '',
      budget: budget || '',
      timeline: timeline || '',
      message: message || '',
      timestamp: getTimestamp()
    };

    // Render email template
    const htmlContent = renderTemplate(getTemplatePath('quoteTemplate.html'), templateData);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.TO_EMAIL, // Use TO_EMAIL from .env
      subject: `Quote request from ${name}`,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Quote request submitted successfully',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Quote request error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: err.message
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Email server running on port ${PORT}`);
  console.log(`📧 Health check: http://localhost:${PORT}/health`);
});

export default app;
