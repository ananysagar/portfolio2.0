'use client';

import { motion } from 'framer-motion';
import styles from './LoadingScreen.module.css';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <motion.div
      className={styles.loadingScreen}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 2 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        className={styles.logo}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className={styles.logoText}>Portfolio</span>
      </motion.div>
      
      <motion.div
        className={styles.loadingBar}
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      
      <motion.p
        className={styles.loadingText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Loading...
      </motion.p>
    </motion.div>
  );
} 