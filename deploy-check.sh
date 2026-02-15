#!/bin/bash

# 🚀 Vercel Deployment Script for Hanka Znalec v3
# This script helps verify and prepare the project for Vercel deployment

set -e  # Exit on error

echo "╔═══════════════════════════════════════════════════════════════════════════════╗"
echo "║          Hanka Znalec v3 - Vercel Deployment Verification Script             ║"
echo "╚═══════════════════════════════════════════════════════════════════════════════╝"
echo ""

# Check if we're in the right directory
if [ ! -f "vercel.json" ]; then
    echo "❌ Error: vercel.json not found. Are you in the project root?"
    exit 1
fi

echo "✓ Found vercel.json"

# Check website directory
if [ ! -d "website" ]; then
    echo "❌ Error: website/ directory not found"
    exit 1
fi

echo "✓ Found website/ directory"

# Check index.html
if [ ! -f "website/index.html" ]; then
    echo "❌ Error: website/index.html not found"
    exit 1
fi

echo "✓ Found website/index.html"

# Check assets
if [ ! -d "website/assets" ]; then
    echo "❌ Error: website/assets/ directory not found"
    exit 1
fi

echo "✓ Found website/assets/"

# Check CSS
if [ ! -f "website/assets/css/style.css" ]; then
    echo "❌ Error: CSS file not found"
    exit 1
fi

echo "✓ Found CSS files"

# Check JavaScript
if [ ! -f "website/assets/js/script.js" ]; then
    echo "❌ Error: JavaScript files not found"
    exit 1
fi

echo "✓ Found JavaScript files"

# Check data
if [ ! -f "website/assets/data/comparables.json" ]; then
    echo "❌ Error: Data file not found"
    exit 1
fi

echo "✓ Found data files"

# Validate JSON
echo ""
echo "Validating JSON data..."
python3 -c "import json; json.load(open('website/assets/data/comparables.json'))" 2>/dev/null

if [ $? -eq 0 ]; then
    echo "✓ JSON data is valid"
else
    echo "❌ JSON data is invalid"
    exit 1
fi

# Count files
echo ""
echo "📊 Project Statistics:"
echo "   HTML files: $(find website -name '*.html' | wc -l)"
echo "   CSS files: $(find website -name '*.css' | wc -l)"
echo "   JS files: $(find website -name '*.js' | wc -l)"
echo "   Image files: $(find website/assets/images -type f | wc -l)"

echo ""
echo "╔═══════════════════════════════════════════════════════════════════════════════╗"
echo "║                           ✅ VERIFICATION COMPLETE                             ║"
echo "╚═══════════════════════════════════════════════════════════════════════════════╝"
echo ""
echo "Your project is ready for Vercel deployment!"
echo ""
echo "📋 Next steps:"
echo ""
echo "Option 1: Vercel CLI (if installed)"
echo "   $ npm install -g vercel"
echo "   $ vercel"
echo ""
echo "Option 2: Vercel Dashboard (Recommended)"
echo "   1. Go to https://vercel.com"
echo "   2. Click 'Add New...' → 'Project'"
echo "   3. Import this GitHub repository"
echo "   4. Click 'Deploy'"
echo ""
echo "📖 For detailed instructions, see DEPLOYMENT.md"
echo ""
echo "🎉 Good luck with your deployment!"
echo ""
