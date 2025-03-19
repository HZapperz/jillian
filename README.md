# Jillian Hohman - Portfolio Website

A professional portfolio website for UI/UX designer Jillian Hohman, showcasing her work, skills, and contact information.

## Features

- **Clean and Modern Design**: Light background with pastel accents
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Single-Page Application**: Smooth navigation between sections
- **Project Showcase**: Modal-based project details
- **Contact Form**: Interactive form with validation
- **Accessibility Features**: Alt text, semantic HTML, keyboard navigation

## Tech Stack

- React.js
- React Router for navigation
- CSS (no external UI libraries)
- Font Awesome for icons

## Installation and Setup

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
   ```
   git clone [repository-url]
   ```

2. Navigate to the project directory:
   ```
   cd jillian
   ```

3. Install dependencies:
   ```
   npm install
   ```

### Running the Development Server

Start the development server:
```
npm start
```

The site will be available at [http://localhost:3000](http://localhost:3000)

### Building for Production

Create a production build:
```
npm run build
```

This will generate optimized files in the `build` directory.

## Deployment

### Deploying to Netlify

1. Create a Netlify account if you don't have one.
2. Install the Netlify CLI:
   ```
   npm install -g netlify-cli
   ```
3. Login to Netlify:
   ```
   netlify login
   ```
4. Build your project:
   ```
   npm run build
   ```
5. Deploy to Netlify:
   ```
   netlify deploy --prod
   ```

### Deploying to Vercel

1. Install Vercel CLI:
   ```
   npm install -g vercel
   ```
2. Login to Vercel:
   ```
   vercel login
   ```
3. Deploy to Vercel:
   ```
   vercel --prod
   ```

## Project Structure

- `public/` - Static assets
- `src/` - Source code
  - `components/` - React components
    - `layout/` - Layout components (Navbar, Footer)
    - `sections/` - Main page sections (Home, About, Portfolio, Contact)
  - `data/` - Data files
  - `assets/` - Images and other assets

## Customization

### Adding New Projects

1. Open `src/data/projects.js`
2. Add a new project object to the array with the following structure:
   ```javascript
   {
     id: 4, // Increment from the last ID
     title: "Project Title",
     description: "Project description",
     role: "Your role in the project",
     tools: ["Tool1", "Tool2"],
     image: "image-url-or-path",
     altText: "Description of the image",
     link: "project-link"
   }
   ```

## License

This project is licensed under the MIT License.

## Credits

- Design & Development: [Your Name]
- Portfolio Owner: Jillian Hohman
