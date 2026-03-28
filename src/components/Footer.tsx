import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2 className={styles.logo}>
            <span className={styles.neonText}>New Era</span> Polelad
          </h2>
          <p className={styles.tagline}>
            Empowering fitness and exotic dance in a premium environment.
          </p>
        </div>
        
        <div className={styles.linksBlock}>
          <h3 className={styles.heading}>Explore</h3>
          <ul className={styles.list}>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/classes">Classes</Link></li>
            <li><Link href="/instructors">Instructors</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className={styles.linksBlock}>
          <h3 className={styles.heading}>Socials</h3>
          <ul className={styles.list}>
            <li><a href="#" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="#" target="_blank" rel="noreferrer">TikTok</a></li>
            <li><a href="#" target="_blank" rel="noreferrer">YouTube</a></li>
          </ul>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} New Era Polelad. All rights reserved.</p>
      </div>
    </footer>
  );
}
