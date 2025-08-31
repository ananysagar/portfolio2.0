"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./About.module.css";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "GraphQL",
    "Github",
    "Redux",
    "NodeJS",
    "DynamoDB",
    "AWS Appsync",
    "AWS S3/EC2",
    "AWS Cognito",
    "CSS Modules",
    "Material UI",
    "MongoDB",
    "Prisma",
  ];

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.aboutContainer}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.sectionLine} />
        </motion.div>

        <div className={styles.aboutContent}>
          <motion.div
            className={styles.aboutText}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className={styles.aboutParagraph}>
              I'm a passionate Frontend developer with a love for crafting
              beautiful, functional, and user-centered digital experiences. With
              over 5 years of experience in web development, I specialize in
              modern frontend technologies and interactive design.
            </p>

            <p className={styles.aboutParagraph}>
              My approach combines technical expertise with creative
              problem-solving, ensuring that every project not only meets
              functional requirements but also delivers an exceptional user
              experience. I believe in clean code, thoughtful design, and
              continuous learning.
            </p>

            <p className={styles.aboutParagraph}>
              My goal is to bridge the gap between design and development,
              creating seamless user experiences that are both visually stunning
              and highly functional.
            </p>
          </motion.div>

          <motion.div
            className={styles.skillsSection}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className={styles.skillsTitle}>Skills & Technologies</h3>
            <div className={styles.skillsGrid}>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className={styles.skillItem}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, color: "#FFD803" }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.statsContainer}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className={styles.statItem}>
            <motion.div
              className={styles.statNumber}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              50+
            </motion.div>
            <div className={styles.statLabel}>Projects Completed</div>
          </div>

          <div className={styles.statItem}>
            <motion.div
              className={styles.statNumber}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              5+
            </motion.div>
            <div className={styles.statLabel}>Years Experience</div>
          </div>

          <div className={styles.statItem}>
            <motion.div
              className={styles.statNumber}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
            >
              100%
            </motion.div>
            <div className={styles.statLabel}>Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
