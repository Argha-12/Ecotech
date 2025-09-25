@echo off
REM Ecotech Email Backend Setup Script for Windows

echo 🚀 Setting up Ecotech Email Backend...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

echo ✅ Node.js and npm are installed

REM Initialize package.json
echo 📦 Initializing package.json...
npm init -y

REM Install dependencies
echo 📥 Installing dependencies...
npm install express cors dotenv resend

REM Install dev dependencies
echo 📥 Installing development dependencies...
npm install --save-dev nodemon

REM Create .env file if it doesn't exist
if not exist .env (
    echo 🔧 Creating .env file...
    copy .env.example .env
    echo ⚠️  Please edit .env file with your actual API keys and email addresses
) else (
    echo ℹ️  .env file already exists
)

echo ✅ Setup complete!
echo.
echo Next steps:
echo 1. Edit .env file with your Resend API key and email addresses
echo 2. Run 'npm run dev' to start the development server
echo 3. The server will be available at http://localhost:5000
echo.
echo 📧 Health check: http://localhost:5000/health
pause
