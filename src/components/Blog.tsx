
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const blogPosts = [
  {
    id: 1,
    title: 'Building Autonomous Agents with LangChain',
    excerpt: 'How to create AI agents that can perform complex tasks with minimal human intervention.',
    date: '2023-09-15',
    readTime: '8 min read',
    category: 'AI Development'
  },
  {
    id: 2,
    title: 'The Future of Full Stack Development in the AI Era',
    excerpt: 'Exploring how AI is transforming the landscape of full stack development.',
    date: '2023-10-22',
    readTime: '6 min read',
    category: 'Web Development'
  },
  {
    id: 3,
    title: 'Optimizing React Performance with Memo and Callbacks',
    excerpt: 'Advanced techniques to make your React applications blazing fast.',
    date: '2023-11-08',
    readTime: '10 min read',
    category: 'React'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50
    }
  }
};

const Blog = () => {
  return (
    <section id="blog" className="section-container">
      <h2 className="section-title">Latest Articles</h2>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
      >
        {blogPosts.map((post) => (
          <motion.div key={post.id} variants={itemVariants} className="h-full">
            <Card className="h-full flex flex-col glowing-card bg-gray-900/70 border-gray-800">
              <CardHeader>
                <div className="text-sm text-blue-400 mb-2">{post.category}</div>
                <CardTitle className="text-xl text-white">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-400">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between text-sm text-gray-500">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="text-center">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          View All Articles
        </Button>
      </div>
    </section>
  );
};

export default Blog;
