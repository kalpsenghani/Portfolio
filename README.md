# Professional Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases professional experience, projects, and technical expertise in a clean and interactive interface.

## Features

- **Responsive Design**: Optimized for all screen sizes and devices
- **Modern UI/UX**: Clean and professional interface with smooth animations
- **Interactive Components**: Engaging user interactions and transitions
- **Blog System**: Integrated blog platform with markdown support
- **Project Showcase**: Dynamic project display with detailed information
- **Contact Section**: Professional contact form with validation
- **AI Lab**: Interactive AI demonstration section
- **Dark Mode**: Elegant dark theme optimized for readability

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **State Management**: React Query
- **Routing**: React Router
- **Animations**: Framer Motion
- **UI Components**: Custom components with shadcn/ui
- **Markdown Support**: React Markdown
- **Icons**: Lucide Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kalpsenghani/portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
portfolio/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── lib/           # Utility functions and data
│   ├── styles/        # Global styles and Tailwind config
│   └── types/         # TypeScript type definitions
├── public/            # Static assets
└── package.json       # Project dependencies and scripts
```

## Customization

### Adding Projects

Edit the project data in `src/lib/project-data.ts` to add or modify projects.

### Modifying Blog Posts

Update blog content in `src/lib/blog-data.ts` to manage blog posts.

### Styling

The project uses Tailwind CSS for styling. Custom styles can be added in:
- `src/styles/globals.css`
- `tailwind.config.js`

## Deployment

The project can be deployed to any static hosting service:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` directory to your preferred hosting service.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or suggestions, please reach out through the contact form on the portfolio website.
