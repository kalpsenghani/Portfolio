export interface BlogPost {
  id: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "getting-started-with-ai",
    title: "Getting Started with AI Development",
    date: "2024-03-15",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    excerpt: "A comprehensive guide to starting your journey in AI development, from basic concepts to practical implementation.",
    content: `
# Getting Started with AI Development

Artificial Intelligence is transforming the way we build and interact with technology. In this post, we'll explore the fundamentals of AI development and how to get started.

## Why AI Matters

AI is revolutionizing industries across the board, from healthcare to finance, and understanding its basics is becoming increasingly important for developers.

## Getting Started

1. Learn Python - The primary language for AI development
2. Understand basic machine learning concepts
3. Start with simple projects
4. Gradually move to more complex implementations

## Resources

- [Python for AI](https://python.org)
- [Machine Learning Basics](https://example.com)
- [AI Development Tools](https://example.com)

## Next Steps

Stay tuned for more advanced topics in AI development!
    `,
    tags: ["AI", "Development", "Python", "Machine Learning"]
  },
  {
    id: "web-development-trends",
    title: "Web Development Trends in 2024",
    date: "2024-03-10",
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    excerpt: "Explore the latest trends in web development that are shaping the future of the internet.",
    content: `
# Web Development Trends in 2024

The web development landscape is constantly evolving. Let's look at the most important trends shaping the industry this year.

## Key Trends

1. AI-Powered Development
2. WebAssembly
3. Edge Computing
4. Progressive Web Apps

## Impact on Developers

These trends are changing how we build and deploy web applications.

## Resources

- [Web Development Guide](https://example.com)
- [Trend Analysis](https://example.com)

Stay updated with the latest in web development!
    `,
    tags: ["Web Development", "Trends", "JavaScript", "AI"]
  },
  {
    id: "full-stack-development-guide",
    title: "Mastering Full Stack Development: A Practical Guide",
    date: "2024-06-20",
    coverImage: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    excerpt: "A hands-on guide to becoming a proficient full stack developer, covering essential skills, tools, and best practices for building modern web applications.",
    content: `
# Mastering Full Stack Development: A Practical Guide

Full stack development is the art of building complete web applications, from the user interface to the backend and database. In this article, we'll explore what it takes to become a successful full stack developer.

## What is Full Stack Development?

Full stack development involves working on both the frontend (client-side) and backend (server-side) of web applications. A full stack developer is comfortable with:
- Frontend technologies (HTML, CSS, JavaScript, React, etc.)
- Backend frameworks (Node.js, Express, Django, etc.)
- Databases (MongoDB, PostgreSQL, MySQL, etc.)
- Version control (Git)
- Deployment and DevOps basics

## Key Skills for Full Stack Developers

1. **Frontend:** Responsive design, component-based frameworks, accessibility
2. **Backend:** REST APIs, authentication, server-side logic
3. **Database:** Data modeling, queries, migrations
4. **DevOps:** CI/CD, cloud deployment, monitoring

## Best Practices
- Write clean, maintainable code
- Use version control for collaboration
- Test your code (unit, integration, E2E)
- Stay updated with new technologies

## Resources
- [MDN Web Docs](https://developer.mozilla.org/)
- [freeCodeCamp](https://www.freecodecamp.org/)
- [Full Stack Open](https://fullstackopen.com/)

Happy coding!
    `,
    tags: ["Full Stack", "Web Development", "JavaScript", "Node.js", "React"]
  }
]; 