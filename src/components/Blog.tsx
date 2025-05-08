import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/lib/blog-data';

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
  // Get only the first 3 blog posts for the preview
  const previewPosts = blogPosts.slice(0, 3);

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
        {previewPosts.map((post) => (
          <motion.div key={post.id} variants={itemVariants} className="h-full">
            <Link to={`/blog/${post.id}`} className="block h-full">
              <Card className="h-full flex flex-col glowing-card bg-gray-900/70 border-gray-800 hover:border-blue-500 transition-colors duration-300">
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-sm text-blue-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <CardTitle className="text-xl text-white hover:text-blue-400 transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-400 line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-gray-500">
                  <span>{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </CardFooter>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="text-center">
        <Link to="/blog">
          <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 text-white">
            View All Articles
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Blog;
