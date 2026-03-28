import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.title} animate-fade-in`}>
            Unleash Your <span className="neonText">Inner Power</span>
          </h1>
          <p className={`${styles.subtitle} animate-fade-in animate-delay-1`}>
            Premium exotic pole dancing classes for all levels. Elevate your fitness, confidence, and sensuality.
          </p>
          <div className={`${styles.ctaContainer} animate-fade-in animate-delay-2`}>
            <Link href="/classes" className="btn-primary">
              Explore Classes
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className={styles.programs}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Programs</h2>
          <p className={styles.sectionDesc}>Discover the perfect class tailored to your goals and experience level.</p>
        </div>
        
        <div className={styles.grid}>
          <div className="glass-panel">
            <h3 className={styles.cardTitle}>Beginner Pole</h3>
            <p className={styles.cardText}>Master the fundamentals of pole dancing in a supportive environment.</p>
            <Link href="/classes#beginner" className={styles.cardLink}>Learn More &rarr;</Link>
          </div>
          
          <div className="glass-panel">
            <h3 className={styles.cardTitle}>Exotic Flow</h3>
            <p className={styles.cardText}>Embrace your sensuality with fluid, floorwork-heavy choreography.</p>
            <Link href="/classes#exotic" className={styles.cardLink}>Learn More &rarr;</Link>
          </div>
          
          <div className="glass-panel">
            <h3 className={styles.cardTitle}>Flexibility & Conditioning</h3>
            <p className={styles.cardText}>Improve your range of motion and build the strength needed for advanced tricks.</p>
            <Link href="/classes#flexibility" className={styles.cardLink}>Learn More &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={styles.philosophy}>
        <div className={styles.philosophyContent}>
          <h2 className={styles.sectionTitle}>The New Era Philosophy</h2>
          <p className={styles.philosophyText}>
            At New Era Polelad, we believe that dance is a transformative journey. Our premium studio offers a safe, empowering space where you can express yourself, build incredible strength, and join a vibrant community of passionate individuals.
          </p>
          <Link href="/about" className="btn-primary">
            Read Our Story
          </Link>
        </div>
      </section>
    </div>
  );
}
