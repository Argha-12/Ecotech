from flask import Flask, request, jsonify, Response
from flask_cors import CORS
from functools import wraps
import os
import re
import smtplib
import logging
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
# Simple data classes for form validation
class ContactForm:
    def __init__(self, name: str, email: str, message: str, phone: str = "", subject: str = ""):
        self.name = name
        self.email = email
        self.message = message
        self.phone = phone
        self.subject = subject
        self.validate()
    
    def validate(self):
        if not self.name or not self.name.strip():
            raise ValueError("Name is required")
        if not self.email or not re.match(r"^[^@]+@[^@]+\.[^@]+$", self.email):
            raise ValueError("Valid email is required")
        if not self.message or not self.message.strip():
            raise ValueError("Message is required")

class CareerForm:
    def __init__(self, name: str, email: str, position: str, phone: str = "", message: str = "", resume: str = ""):
        self.name = name
        self.email = email
        self.position = position
        self.phone = phone
        self.message = message
        self.resume = resume
        self.validate()
    
    def validate(self):
        if not self.name or not self.name.strip():
            raise ValueError("Name is required")
        if not self.email or not re.match(r"^[^@]+@[^@]+\.[^@]+$", self.email):
            raise ValueError("Valid email is required")
        if not self.position or not self.position.strip():
            raise ValueError("Position is required")

class QuoteForm:
    def __init__(self, name: str, email: str, service: str, phone: str = "", company: str = "", budget: str = "", timeline: str = "", message: str = ""):
        self.name = name
        self.email = email
        self.service = service
        self.phone = phone
        self.company = company
        self.budget = budget
        self.timeline = timeline
        self.message = message
        self.validate()
    
    def validate(self):
        if not self.name or not self.name.strip():
            raise ValueError("Name is required")
        if not self.email or not re.match(r"^[^@]+@[^@]+\.[^@]+$", self.email):
            raise ValueError("Valid email is required")
        if not self.service or not self.service.strip():
            raise ValueError("Service is required")
# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)

application=app
# app.config['APPLICATION_ROOT'] = '/backend'

# Email configuration
EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.getenv("EMAIL_PASS")
TO_EMAIL = os.getenv("TO_EMAIL")
API_KEY = os.getenv("API_KEY")
PORT = int(os.getenv("PORT", "5000"))

# Initialize SMTP transporter
def get_smtp_transporter():
    try:
        transporter = smtplib.SMTP('smtp.gmail.com', 587)
        transporter.starttls()
        transporter.login(EMAIL_USER, EMAIL_PASS)
        logger.info('Email transporter is ready to send emails')
        return transporter
    except Exception as error:
        logger.error(f'Email transporter verification failed: {error}')
        raise

# Enhanced CORS configuration
CORS(app, resources={
    r"/*": {
        "origins": [
            "http://localhost:3000",
            "http://localhost:5173",
            "http://127.0.0.1:3000",
            "http://127.0.0.1:5173",
            "https://ecotechglobal.in",
            "https://www.ecotechglobal.in"
        ],
        "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization", "x-api-key"],
        "supports_credentials": True
    }
})


# Template helper functions
def get_template_path(template_name: str) -> str:
    """Get template file path"""
    current_dir = Path(__file__).parent
    return str(current_dir / "templates" / template_name)

def render_template(template_path: str, data: dict) -> str:
    """Simple template engine that replaces {{variables}} and handles {{#conditionals}}"""
    try:
        with open(template_path, 'r', encoding='utf-8') as file:
            template = file.read()
        
        # Handle conditionals {{#variable}}content{{/variable}}
        processed = re.sub(r'\{\{#(\w+)\}\}([\s\S]*?)\{\{/\1\}\}', 
                          lambda match: match.group(2) if data.get(match.group(1)) else '', 
                          template)
        
        # Handle simple variables {{variable}}
        processed = re.sub(r'\{\{(\w+)\}\}', 
                          lambda match: str(data.get(match.group(1), '')), 
                          processed)
        
        return processed
    except Exception as error:
        logger.error(f'Error rendering template: {error}')
        raise Exception(f'Failed to render template: {error}')

def get_timestamp() -> str:
    """Generate timestamp for email"""
    return datetime.now().strftime("%B %d, %Y at %I:%M:%S %p %Z")

# API key authentication decorator
def authenticate_api_key(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        api_key = request.headers.get('x-api-key')
        
        if not api_key:
            return jsonify({
                "success": False,
                "message": "API key is required"
            }), 401
        
        if api_key != API_KEY:
            return jsonify({
                "success": False,
                "message": "Invalid API key"
            }), 403
        
        return f(*args, **kwargs)
    return decorated_function

# Basic health check endpoint
@app.route("/backend/health", methods=["GET"])
def health_check():
    return jsonify({"status": "OK", "message": "Email service is running"})

# Debug endpoint to check API key configuration
@app.route("/backend/debug-api-key", methods=["GET"])
def debug_api_key():
    return jsonify({
        "apiKeySet": bool(API_KEY),
        "apiKeyLength": len(API_KEY) if API_KEY else 0,
        "apiKeyPrefix": f"{API_KEY[:4]}..." if API_KEY else "not set",
        "message": "This endpoint shows if API key is configured in backend"
    })

# Contact form endpoint
@app.route("/backend/api/contact", methods=["POST"])
@authenticate_api_key
def contact_form():
    try:
        # Parse JSON data
        data = request.get_json()
        
        # Create and validate form
        form_data = ContactForm(
            name=data.get('name', ''),
            email=data.get('email', ''),
            message=data.get('message', ''),
            phone=data.get('phone', ''),
            subject=data.get('subject', '')
        )
        
        # Prepare template data
        template_data = {
            "name": form_data.name,
            "email": form_data.email,
            "phone": form_data.phone,
            "subject": form_data.subject,
            "message": form_data.message,
            "timestamp": get_timestamp()
        }

        # Render email template
        html_content = render_template(get_template_path("contactTemplate.html"), template_data)

        # Create email message
        msg = MIMEMultipart()
        msg['From'] = EMAIL_USER
        msg['To'] = TO_EMAIL
        msg['Subject'] = f"Contact from {form_data.name}"
        msg.attach(MIMEText(html_content, 'html'))

        # Send email
        transporter = get_smtp_transporter()
        transporter.send_message(msg)
        transporter.quit()

        return jsonify({
            "success": True,
            "message": "Contact form submitted successfully",
            "messageId": f"contact_{datetime.now().timestamp()}"
        })

    except Exception as error:
        logger.error(f'Contact form error: {error}')
        return jsonify({
            "success": False,
            "message": "Internal server error",
            "error": str(error)
        }), 500

# Career application endpoint
@app.route("/backend/api/career", methods=["POST"])
@authenticate_api_key
def career_form():
    try:
        # Parse JSON data
        data = request.get_json()
        
        # Create and validate form
        form_data = CareerForm(
            name=data.get('name', ''),
            email=data.get('email', ''),
            position=data.get('position', ''),
            phone=data.get('phone', ''),
            message=data.get('message', ''),
            resume=data.get('resume', '')
        )
        
        # Prepare template data
        template_data = {
            "type": "Career Application",
            "typeLower": "career application",
            "formType": "career",
            "headerIcon": "💼",
            "headerColor": "#28a745",
            "headerColor2": "#20c997",
            "borderColor": "#28a745",
            "badgeColor": "#28a745",
            "messageBgColor": "#d4edda",
            "messageBorderColor": "#c3e6cb",
            "messageTextColor": "#155724",
            "messageLabel": "💬 Cover Letter/Message",
            "highlightColor": "#d4edda",
            "name": form_data.name,
            "email": form_data.email,
            "phone": form_data.phone,
            "position": form_data.position,
            "message": form_data.message,
            "resume": form_data.resume,
            "timestamp": get_timestamp()
        }

        # Render email template
        html_content = render_template(get_template_path("applicationTemplate.html"), template_data)

        # Create email message
        msg = MIMEMultipart()
        msg['From'] = EMAIL_USER
        msg['To'] = TO_EMAIL
        msg['Subject'] = f"New Career Application: {form_data.position}"
        msg.attach(MIMEText(html_content, 'html'))

        # Send email
        transporter = get_smtp_transporter()
        transporter.send_message(msg)
        transporter.quit()

        return jsonify({
            "success": True,
            "message": "Career application submitted successfully",
            "messageId": f"career_{datetime.now().timestamp()}"
        })

    except Exception as error:
        logger.error(f'Career application error: {error}')
        return jsonify({
            "success": False,
            "message": "Internal server error",
            "error": str(error)
        }), 500

# Quote request endpoint
@app.route("/backend/api/quote", methods=["POST"])
@authenticate_api_key
def quote_form():
    try:
        # Parse JSON data
        data = request.get_json()
        
        # Create and validate form
        form_data = QuoteForm(
            name=data.get('name', ''),
            email=data.get('email', ''),
            service=data.get('service', ''),
            phone=data.get('phone', ''),
            company=data.get('company', ''),
            budget=data.get('budget', ''),
            timeline=data.get('timeline', ''),
            message=data.get('message', '')
        )
        
        # Prepare template data
        template_data = {
            "type": "Quote Request",
            "typeLower": "quote request",
            "formType": "quote",
            "headerIcon": "🔧",
            "headerColor": "#007bff",
            "headerColor2": "#6610f2",
            "borderColor": "#007bff",
            "badgeColor": "#007bff",
            "messageBgColor": "#d1ecf1",
            "messageBorderColor": "#bee5eb",
            "messageTextColor": "#0c5460",
            "messageLabel": "📋 Project Details",
            "highlightColor": "#d1ecf1",
            "name": form_data.name,
            "email": form_data.email,
            "phone": form_data.phone,
            "company": form_data.company,
            "service": form_data.service,
            "budget": form_data.budget,
            "timeline": form_data.timeline,
            "message": form_data.message,
            "timestamp": get_timestamp()
        }

        # Render email template
        html_content = render_template(get_template_path("quoteTemplate.html"), template_data)

        # Create email message
        msg = MIMEMultipart()
        msg['From'] = EMAIL_USER
        msg['To'] = TO_EMAIL
        msg['Subject'] = f"Quote request from {form_data.name}"
        msg.attach(MIMEText(html_content, 'html'))

        # Send email
        transporter = get_smtp_transporter()
        transporter.send_message(msg)
        transporter.quit()

        return jsonify({
            "success": True,
            "message": "Quote request submitted successfully",
            "messageId": f"quote_{datetime.now().timestamp()}"
        })

    except Exception as error:
        logger.error(f'Quote request error: {error}')
        return jsonify({
            "success": False,
            "message": "Internal server error",
            "error": str(error)
        }), 500

# 404 handler
@app.errorhandler(404)
def not_found_handler(error):
    return jsonify({
        "success": False,
        "message": "Route not found"
    }), 404

# Global exception handler
@app.errorhandler(Exception)
def global_exception_handler(error):
    logger.error(f"Global exception: {error}")
    return jsonify({
        "success": False,
        "message": "Something went wrong!",
        "error": str(error)
    }), 500

if __name__ == "__main__":
    app.run(debug=True)
