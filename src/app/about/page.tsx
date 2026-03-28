import styles from './about.module.css';

export const metadata = {
  title: 'About | New Era Polelad',
  description: 'Learn about our exotic pole dancing academy, our philosophy, and our experienced instructors.',
};

export default function About() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={`${styles.title} animate-fade-in`}>About <span className="neonText">New Era</span></h1>
        <p className={`${styles.subtitle} animate-fade-in animate-delay-1`}>
          Redefining fitness through the art of exotic pole dancing.
        </p>
      </header>

      <section className={styles.contentSection}>
        <div className={`${styles.textContent} animate-fade-in animate-delay-2`}>
          <h2>Our Story</h2>
          <p>
            Founded by passionate dancers, New Era Polelad emerged from a desire to create a sanctuary where fitness meets sensual expression. We believe that everyone deserves to feel empowered, strong, and beautiful in their own skin.
          </p>
          <p>
            Our academy is more than just a place to work out; it is a community of supportive individuals who celebrate each other&apos;s progress. Whether you are taking your first spin or perfecting a complex routine, you will find encouragement and expert guidance here.
          </p>
        </div>
      </section>

      <section className={styles.instructorSection}>
        <h2 className={styles.sectionTitle}>Meet Our Instructors</h2>
        <div className={styles.grid}>
          <div className="glass-panel">
            <h3 className={styles.name}>Elena</h3>
            <p className={styles.specialty}>Founder & Lead Exotic Flow Instructor</p>
            <p className={styles.bio}>With over a decade of experience, Elena brings a mesmerizing style that emphasizes musicality and emotional storytelling.</p>
          </div>
          <div className="glass-panel">
            <h3 className={styles.name}>Mia</h3>
            <p className={styles.specialty}>Advanced Tricks & Conditioning</p>
            <p className={styles.bio}>Mia focuses on building the foundational strength and technique required to execute gravity-defying pole tricks safely.</p>
          </div>
          <div className="glass-panel">
            <h3 className={styles.name}>Sarah</h3>
            <p className={styles.specialty}>Beginner Pole & Flexibility</p>
            <p className={styles.bio}>Sarah&apos;s patient and encouraging teaching style makes her the perfect guide for those just starting their pole journey.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
