'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContainer}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.p
            className={styles.greeting}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <span className={styles.name}>Anany Sagar</span>
            <br />
            <span className={styles.role}>Frontend Developer</span>
          </motion.h1>
          
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            I craft digital experiences that blend creativity with technology. 
            Specializing in modern web development, interactive design, and 
            user-centered solutions.
          </motion.p>
          
          <motion.div
            className={styles.ctaContainer}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              className={styles.primaryButton}
              onClick={scrollToContact}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(255, 216, 3, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
            
            <motion.button
              className={styles.secondaryButton}
              onClick={() => {
                const element = document.querySelector('#work');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              whileHover={{ 
                scale: 1.05,
                color: '#FFD803'
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            className={styles.scrollDot}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
} 