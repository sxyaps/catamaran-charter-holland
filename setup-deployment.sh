#!/bin/bash

# Catamaran Charter - GitHub & Vercel Setup Script
# Run this script to initialize git and prepare for deployment

echo "🚢 Setting up Catamaran Charter for deployment..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
else
    echo "✅ Git repository already initialized"
fi

# Add all files
echo "📋 Adding files to git..."
git add .

# Commit changes
echo "💾 Creating initial commit..."
git commit -m "🚢 Initial commit - Catamaran Charter Holland website

Features:
- Modern React SPA with routing
- Multilingual support (NL/EN/DE)
- Weather integration
- Responsive design
- Booking system integration
- Performance optimized

Ready for Vercel deployment!"

echo "✅ Git setup complete!"
echo ""
echo "🌐 Next steps:"
echo "1. Create a new repository on GitHub:"
echo "   https://github.com/new"
echo ""
echo "2. Add your GitHub repository as remote:"
echo "   git remote add origin https://github.com/yourusername/catamaran.git"
echo ""
echo "3. Push to GitHub:"
echo "   git push -u origin main"
echo ""
echo "4. Deploy to Vercel:"
echo "   - Go to https://vercel.com"
echo "   - Import your GitHub repository"
echo "   - Vercel will auto-detect React settings"
echo "   - Add environment variables if needed"
echo ""
echo "🚀 Your site will be live in minutes!"
