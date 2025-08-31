'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Blog.module.css';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  url: string;
  platform: string;
}

// Replace these with your actual blog posts from external platforms
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "15 Proven Guidelines for Scalable React Component Architecture",
    excerpt: "Learn 15 best practices for building clean, scalable, and maintainable React components. A quick guide to writing better React code.",
    date: "August 31, 2025",
    readTime: "9 min read",
    category: "Development",
    image: "/images/react-best-practices.png",
    url: "https://dev.to/ananysagar/15-proven-guidelines-for-scalable-react-component-architecture-3l6g",
    platform: "DEV.TO"
  },
  {
    id: 2,
    title: "The Art of Micro-interactions in Web Design",
    excerpt: "Discover how subtle animations and micro-interactions can significantly improve user experience and engagement in modern web applications.",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    category: "Design",
    image: "/api/placeholder/400/250",
    url: "https://dev.to/yourusername/the-art-of-micro-interactions-in-web-design",
    platform: "Dev.to"
  },
  {
    id: 3,
    title: "TypeScript Best Practices for React Developers",
    excerpt: "Learn essential TypeScript patterns and best practices that will help you write more maintainable and type-safe React applications.",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    category: "Development",
    image: "/api/placeholder/400/250",
    url: "https://hashnode.com/@yourusername/typescript-best-practices-for-react-developers",
    platform: "Hashnode"
  }
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleBlogClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="blog" className={styles.blog} ref={ref}>
      <div className={styles.blogContainer}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>Latest Articles</h2>
          <div className={styles.sectionLine} />
        </motion.div>

        <div className={styles.blogGrid}>
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className={styles.blogCard}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => handleBlogClick(post.url)}
            >
              <div className={styles.blogImage}>
                {post.image && post.image !== "/api/placeholder/400/250" ? (
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className={styles.blogImageContent}
                  />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <span>{post.platform}</span>
                  </div>
                )}
                <div className={styles.blogCategory}>
                  {post.category}
                </div>
              </div>
              
              <div className={styles.blogContent}>
                <div className={styles.blogMeta}>
                  <span className={styles.blogDate}>{post.date}</span>
                  <span className={styles.blogReadTime}>{post.readTime}</span>
                </div>
                
                <h3 className={styles.blogTitle}>{post.title}</h3>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                
                <motion.button
                  className={styles.readMoreButton}
                  whileHover={{ 
                    scale: 1.05,
                    color: '#FFD803'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read on {post.platform} →
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className={styles.viewAllContainer}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className={styles.viewAllButton}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(255, 216, 3, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://medium.com/@yourusername', '_blank', 'noopener,noreferrer')}
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 