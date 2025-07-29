'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`${styles.navigation} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className={styles.navContainer}>
        <motion.div
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={styles.logoText}>Portfolio</span>
        </motion.div>

        <ul className={styles.navList}>
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              className={styles.navItem}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <motion.button
                className={styles.navLink}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ 
                  scale: 1.05,
                  color: '#FFD803'
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
} 