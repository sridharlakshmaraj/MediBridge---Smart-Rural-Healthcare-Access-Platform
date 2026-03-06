#!/bin/bash

# MediBridge Startup Script for Mac/Linux

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║           MediBridge - Smart Rural Healthcare             ║"
echo "║                 Startup Script                            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo "❌ ERROR: Node.js is not installed!"
    echo ""
    echo "📥 Please download and install Node.js from:"
    echo "   https://nodejs.org/ (LTS version recommended)"
    echo ""
    echo "   Or install via Homebrew (Mac):"
    echo "   brew install node"
    echo ""
    echo "Then run this script again."
    exit 1
fi

echo "✅ Node.js detected:"
node --version
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies (first time only)..."
    echo "   This may take a few minutes..."
    echo ""
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Installation failed!"
        exit 1
    fi
    echo ""
    echo "✅ Dependencies installed!"
    echo ""
fi

echo "🚀 Starting MediBridge Frontend Server..."
echo ""
npm start
