# Ecotech Email Backend

Node.js backend for handling email services using the Resend API.

## Features

- Contact form submissions
- Career application submissions  
- Quote request submissions
- Email validation and error handling
- CORS enabled for frontend integration

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install express cors dotenv resend
npm install --save-dev nodemon
```

### 2. Configure Environment Variables

Create a `.env` file in the backend directory:

```bash
cp .env.example .env
```

Then edit the `.env` file with your actual values:

```
RESEND_API_KEY=your_resend_api_key_here
FROM_EMAIL=your_sender_email@example.com
TO_EMAIL=your_destination_email@example.com
PORT=5000
NODE_ENV=development
```

### 3. Get Resend API Key

1. Sign up at [Resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add it to your `.env` file

### 4. Run the Server

For development:
```bash
npm run dev
```

For production:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Health Check
- `GET /health` - Check if the server is running

### Contact Form
- `POST /api/contact` - Submit contact form
  - Required fields: `name`, `email`, `message`
  - Optional fields: `phone`, `subject`

### Career Application
- `POST /api/career` - Submit career application
  - Required fields: `name`, `email`, `position`
  - Optional fields: `phone`, `message`, `resume`

### Quote Request
- `POST /api/quote` - Submit quote request
  - Required fields: `name`, `email`, `service`
  - Optional fields: `phone`, `company`, `budget`, `timeline`, `message`

## Example Requests

### Contact Form
```javascript
fetch('http://localhost:5000/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    subject: 'Project Inquiry',
    message: 'I would like to discuss a project with you.'
  })
})
```

### Career Application
```javascript
fetch('http://localhost:5000/api/career', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+1234567890',
    position: 'Frontend Developer',
    message: 'I am interested in the Frontend Developer position.',
    resume: 'https://example.com/resume.pdf'
  })
})
```

### Quote Request
```javascript
fetch('http://localhost:5000/api/quote', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Company Name',
    email: 'contact@company.com',
    phone: '+1234567890',
    company: 'Company Inc',
    service: 'Web Development',
    budget: '$5000-$10000',
    timeline: '2-3 months',
    message: 'We need a custom web application built.'
  })
})
```

## Response Format

All endpoints return JSON with the following structure:

### Success Response
```json
{
  "success": true,
  "message": "Form submitted successfully",
  "data": {
    "id": "email_id"
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error information"
}
```

## Error Handling

The server includes comprehensive error handling for:
- Missing required fields
- Invalid email format
- Resend API errors
- Server errors
- 404 for unknown routes

## Frontend Integration

To integrate with your React frontend, update your form submission code to use the new backend endpoints instead of EmailJS.

Example frontend integration:
```javascript
const submitForm = async (formData) => {
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    
    if (result.success) {
      // Handle success
      console.log('Email sent successfully');
    } else {
      // Handle error
      console.error('Failed to send email:', result.message);
    }
  } catch (error) {
    console.error('Network error:', error);
  }
};
```
