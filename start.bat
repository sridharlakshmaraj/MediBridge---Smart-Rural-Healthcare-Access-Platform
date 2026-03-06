@echo off
REM MediBridge Startup Script for Windows

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║           MediBridge - Smart Rural Healthcare             ║
echo ║                 Startup Script                            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

REM Check if node is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ ERROR: Node.js is not installed!
    echo.
    echo 📥 Please download and install Node.js from:
    echo    https://nodejs.org/ (LTS version recommended)
    echo.
    echo Then run this script again.
    pause
    exit /b 1
)

echo ✅ Node.js detected:
node --version
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo 📦 Installing dependencies (first time only)...
    echo    This may take a few minutes...
    echo.
    call npm install
    if errorlevel 1 (
        echo ❌ Installation failed!
        pause
        exit /b 1
    )
    echo.
    echo ✅ Dependencies installed!
    echo.
)

echo 🚀 Starting MediBridge Frontend Server...
echo.
npm start
