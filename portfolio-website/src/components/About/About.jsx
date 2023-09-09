import React from 'react';

import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img 
          src={getImageUrl("about/aboutImage.png")} 
          alt='Me sitting with a laptop' 
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")}    alt='Cursor icon' />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>Front-end developer proficient in HTML, CSS, JavaScript, React and responsive design. Passionate about user experience, detail-oriented, and eager to contribute skills to a dynamic team.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/webIcon.png")}    alt='Web icon' />
                <div className={styles.aboutItemText_web}>
                    <h3>Responsive Web Designer</h3>
                    <p>Expert in responsive web design, ensuring seamless user experiences across all devices. Committed to delivering visually appealing, adaptable websites.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")}    alt='UI icon' />
                <div className={styles.aboutItemText}>
                    <h3>UI Designer</h3>
                    <p>I have created multiple landing pages and combining design and front-end development expertise to craft visually stunning web solutions.</p>
                </div>
            </li>
        </ul>
      </div>
    </section>
  );
};
