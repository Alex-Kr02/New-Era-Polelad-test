import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.neonText}>New Era</span> Polelad
          </Link>
        </div>
        <div className={styles.navLinks}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/classes" className={styles.link}>Classes</Link>
          <Link href="/instructors" className={styles.link}>Instructors</Link>
          <Link href="/contact" className={styles.btnNav}>Book Now</Link>
        </div>
        {/* Mobile menu toggle could go here */}
      </div>
    </nav>
  );
}
