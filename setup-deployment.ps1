# Catamaran Charter - GitHub & Vercel Setup Script (PowerShell)
# Run this script to initialize git and prepare for deployment

Write-Host "🚢 Setting up Catamaran Charter for deployment..." -ForegroundColor Cyan

# Check if git is initialized
if (!(Test-Path ".git")) {
    Write-Host "📁 Initializing Git repository..." -ForegroundColor Yellow
    git init
} else {
    Write-Host "✅ Git repository already initialized" -ForegroundColor Green
}

# Add all files
Write-Host "📋 Adding files to git..." -ForegroundColor Yellow
git add .

# Commit changes
Write-Host "💾 Creating initial commit..." -ForegroundColor Yellow
git commit -m "🚢 Initial commit - Catamaran Charter Holland website

Features:
- Modern React SPA with routing
- Multilingual support (NL/EN/DE)  
- Weather integration
- Responsive design
- Booking system integration
- Performance optimized

Ready for Vercel deployment!"

Write-Host "✅ Git setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "🌐 Next steps:" -ForegroundColor Cyan
Write-Host "1. Create a new repository on GitHub:" -ForegroundColor White
Write-Host "   https://github.com/new" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Add your GitHub repository as remote:" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/yourusername/catamaran.git" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Push to GitHub:" -ForegroundColor White
Write-Host "   git push -u origin main" -ForegroundColor Gray
Write-Host ""
Write-Host "4. Deploy to Vercel:" -ForegroundColor White
Write-Host "   - Go to https://vercel.com" -ForegroundColor Gray
Write-Host "   - Import your GitHub repository" -ForegroundColor Gray
Write-Host "   - Vercel will auto-detect React settings" -ForegroundColor Gray
Write-Host "   - Add environment variables if needed" -ForegroundColor Gray
Write-Host ""
Write-Host "🚀 Your site will be live in minutes!" -ForegroundColor Green
