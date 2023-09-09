import React from 'react';

import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt='Email icon' />
                <a href='mailto:kumar.kuldeep2814@gmail.com'>kumar.kuldeep2814@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt='LinkedIn icon' />
                <a href='https://www.linkedin.com/in/kuldeep-kumar-3811561b4/'>Linkedin.com/KuldeepKumar</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt='GitHub icon' />
                <a href='https://github.com/Kuldeep2814'>github.com/Kuldeep2814</a>
            </li>
        </ul>
    </footer>
  )
}
