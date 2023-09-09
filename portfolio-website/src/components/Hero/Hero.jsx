import React from 'react'

import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kuldeep</h1>
        <p className={styles.description}>
          Front-end developer skilled in HTML, CSS, JavaScript, and modern frameworks like React. 
          Proficient in creating visually appealing, responsive web interfaces that enhance user experiences. 
          Strong problem-solving abilities, collaborative mindset, and a passion for staying updated with the latest web technologies. 
          Committed to delivering high-quality, user-centric web solutions.
        </p>
        <a href='mailto:kumar.kuldeep2814@gmail.com' className={styles.contactBtn}>
          Contact Me
        </a>
    </div>
    <img 
      src={getImageUrl('hero/heroImage.png')} 
      alt='Hero image of me' 
      className={styles.heroImg} />
      <div className={styles.topBlur} 
    />
      <div className={styles.bottomBlur} />
    </section>
  );
};
