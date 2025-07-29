'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Work.module.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js, featuring real-time inventory management, secure payments, and responsive design.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    image: "/api/placeholder/400/300",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "/api/placeholder/400/300",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A stunning portfolio website showcasing creative work with smooth animations and modern design principles.",
    technologies: ["Next.js", "Framer Motion", "CSS Modules"],
    image: "/api/placeholder/400/300",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with real-time data, interactive charts, and location-based forecasting.",
    technologies: ["React", "Chart.js", "OpenWeather API"],
    image: "/api/placeholder/400/300",
    link: "#",
    github: "#"
  },
  {
    id: 5,
    title: "Social Media Clone",
    description: "A social media platform with user authentication, real-time messaging, and content sharing capabilities.",
    technologies: ["React", "Firebase", "Redux", "Material-UI"],
    image: "/api/placeholder/400/300",
    link: "#",
    github: "#"
  },
  {
    id: 6,
    title: "AI Chat Application",
    description: "An AI-powered chat application with natural language processing and intelligent response generation.",
    technologies: ["Next.js", "OpenAI API", "TypeScript", "Prisma"],
    image: "/api/placeholder/400/300",
    link: "#",
    github: "#"
  }
];

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className={styles.work} ref={ref}>
      <div className={styles.workContainer}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>Featured Work</h2>
          <div className={styles.sectionLine} />
        </motion.div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.projectImage}>
                <div className={styles.imagePlaceholder}>
                  <span>Project {project.id}</span>
                </div>
                <div className={styles.projectOverlay}>
                  <div className={styles.projectLinks}>
                    <motion.a
                      href={project.link}
                      className={styles.projectLink}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      className={styles.projectLink}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </div>
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTechnologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.technology}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.viewMoreContainer}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className={styles.viewMoreButton}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(255, 216, 3, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 