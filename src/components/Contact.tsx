'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { name: 'GitHub', url: '#', icon: '🐙' },
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'Dribbble', url: '#', icon: '🏀' }
  ];

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={styles.contactContainer}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <div className={styles.sectionLine} />
        </motion.div>

        <div className={styles.contactContent}>
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className={styles.contactSubtitle}>Let's Work Together</h3>
            <p className={styles.contactDescription}>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to 
              reach out. I'll get back to you as soon as possible.
            </p>
            
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <div>
                  <h4>Email</h4>
                  <p>hello@yourname.com</p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <div>
                  <h4>Location</h4>
                  <p>San Francisco, CA</p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>⏰</span>
                <div>
                  <h4>Availability</h4>
                  <p>Open for new projects</p>
                </div>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <h4>Follow Me</h4>
              <div className={styles.socialGrid}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className={styles.socialLink}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1, color: '#FFD803' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className={styles.socialIcon}>{social.icon}</span>
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            className={styles.contactForm}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={styles.formInput}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={styles.formInput}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={styles.formTextarea}
                rows={5}
                required
              />
            </div>
            
            <motion.button
              type="submit"
              className={styles.submitButton}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(255, 216, 3, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
} 