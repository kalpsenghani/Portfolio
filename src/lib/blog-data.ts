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
  }
]; 