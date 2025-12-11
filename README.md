# Richard Campos - Portfolio Website

A personal portfolio website showcasing Richard Campos' introduction to web design and IT career transition.

## Project Overview

This is my first website attempt as I transition into a career in IT and web design. The site includes:

- Professional bio section
- Navigation menu with Home, About, and Contact links
- Responsive footer with secondary navigation
- Smooth scroll-to-top functionality
- Auto-updating copyright year
- Clean, modern design

## Features

- ✅ Semantic HTML5 structure
- ✅ Responsive design (mobile-friendly)
- ✅ Smooth scrolling for anchor links
- ✅ Auto-updating copyright year
- ✅ W3C HTML5 validation compliant
- ✅ Accessibility features (aria-labels)

## File Structure

```text
template_html/
├── index.html          # Main page
├── README.md          # This file
├── .gitignore         # Git ignore rules
└── .vscode/
    └── settings.json  # VS Code workspace settings
```

## How to Run Locally

### Using Python (Recommended)

1. Open a terminal in the project folder
2. Run:

   ```bash
   python -m http.server 8000
   ```

3. Open your browser and go to: `http://localhost:8000`

### Using Node.js (Alternative)

1. Install `http-server` globally:

   ```bash
   npm install -g http-server
   ```

2. Run:

   ```bash
   http-server
   ```

3. Open the provided URL (usually `http://localhost:8080`)

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Name it: `portfolio` (or any name you prefer)
4. Set it to **Public**
5. Click **Create repository**

### Step 2: Initialize Git Locally

In your terminal (in the `template_html` folder):

```bash
git init
git add .
git commit -m "Initial commit: Personal portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (gear icon)
3. Scroll down to **Pages** section
4. Under "Source", select **Deploy from a branch**
5. Select `main` branch and `/root` folder
6. Click **Save**

### Step 4: Access Your Live Site

Your site will be live at:

```text
https://YOUR_USERNAME.github.io/portfolio/
```

**Note:** It may take a few minutes for GitHub to build and deploy your site.

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Author

**Richard Campos**  
Started: November 11, 2025

## License

This project is open source and available under the MIT License.

---

**Happy coding!** 🚀

## Repository History

- redesigned-tribble
- green-grinch
- urban-palm-tree
