import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '@/lib/blog-data';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="mb-8">The blog post you're looking for doesn't exist.</p>
        <Link to="/blog">
          <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-400 hover:via-purple-400 hover:to-pink-400">
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16 relative z-10"
    >
      <div className="flex justify-between items-center mb-8">
        <Link to="/blog" className="inline-flex items-center text-blue-400 hover:text-blue-300">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
        <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      <article className="max-w-4xl mx-auto bg-gray-800/90 backdrop-blur-sm rounded-xl p-8 shadow-xl">
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            {post.title}
          </h1>
          
          <time className="text-gray-400">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </header>

        <div className="relative h-[400px] mb-12 rounded-xl overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </motion.div>
  );
};

export default BlogPost; 