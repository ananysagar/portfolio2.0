'use client';

import { motion } from 'framer-motion';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <motion.div
          className={styles.footerContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.footerLogo}>
            <span className={styles.logoText}>Portfolio</span>
          </div>
          
          <p className={styles.footerDescription}>
            Crafting digital experiences with passion and precision.
          </p>
          
          <div className={styles.footerLinks}>
            <a href="#home" className={styles.footerLink}>Home</a>
            <a href="#about" className={styles.footerLink}>About</a>
            <a href="#work" className={styles.footerLink}>Work</a>
            <a href="#blog" className={styles.footerLink}>Blog</a>
            <a href="#contact" className={styles.footerLink}>Contact</a>
          </div>
          
          <div className={styles.footerBottom}>
            <p className={styles.copyright}>
              © {currentYear} Your Name. All rights reserved.
            </p>
            <p className={styles.madeWith}>
              Made with ❤️ using Next.js & Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 