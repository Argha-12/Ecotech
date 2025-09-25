#!/bin/bash

# Ecotech Email Backend Setup Script

echo "🚀 Setting up Ecotech Email Backend..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Initialize package.json
echo "📦 Initializing package.json..."
npm init -y

# Install dependencies
echo "📥 Installing dependencies..."
npm install express cors dotenv resend

# Install dev dependencies
echo "📥 Installing development dependencies..."
npm install --save-dev nodemon

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "🔧 Creating .env file..."
    cp .env.example .env
    echo "⚠️  Please edit .env file with your actual API keys and email addresses"
else
    echo "ℹ️  .env file already exists"
fi

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env file with your Resend API key and email addresses"
echo "2. Run 'npm run dev' to start the development server"
echo "3. The server will be available at http://localhost:5000"
echo ""
echo "📧 Health check: http://localhost:5000/health"
