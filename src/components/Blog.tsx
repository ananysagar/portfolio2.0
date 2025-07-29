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
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Modern Web Applications with Next.js 15",
    excerpt: "Explore the latest features in Next.js 15 and learn how to build scalable, performant web applications with the new App Router and server components.",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Development",
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "The Art of Micro-interactions in Web Design",
    excerpt: "Discover how subtle animations and micro-interactions can significantly improve user experience and engagement in modern web applications.",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    category: "Design",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "TypeScript Best Practices for React Developers",
    excerpt: "Learn essential TypeScript patterns and best practices that will help you write more maintainable and type-safe React applications.",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    category: "Development",
    image: "/api/placeholder/400/250"
  }
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            >
              <div className={styles.blogImage}>
                <div className={styles.imagePlaceholder}>
                  <span>Blog {post.id}</span>
                </div>
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
                  Read More →
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
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 