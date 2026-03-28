import Link from 'next/link';
import styles from './classes.module.css';

export const metadata = {
  title: 'Classes | New Era Polelad',
  description: 'Explore our exotic pole dancing classes tailored for all levels, from beginners to advanced flow.',
};

export default function Classes() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={`${styles.title} animate-fade-in`}>Our <span className="neonText">Classes</span></h1>
        <p className={`${styles.subtitle} animate-fade-in animate-delay-1`}>
          Find the perfect class to ignite your passion and elevate your skills.
        </p>
      </header>

      <section className={styles.classList}>
        {/* Beginner Class */}
        <div id="beginner" className={`${styles.classItem} glass-panel`}>
          <div className={styles.classInfo}>
            <h2 className={styles.className}>Beginner Pole</h2>
            <div className={styles.levelBadge}>Level 1</div>
            <p className={styles.classDesc}>
              Never touched a pole before? This class is for you! We cover the absolute basics, including posture, walking around the pole, basic spins, and entry-level climbs. You will build the foundational strength necessary to progress safely.
            </p>
            <ul className={styles.highlights}>
              <li>✓ Basic grips and posture</li>
              <li>✓ Introductory spins</li>
              <li>✓ Conditioning for pole</li>
            </ul>
          </div>
          <div className={styles.action}>
            <Link href="/contact" className="btn-primary">Book Session</Link>
          </div>
        </div>

        {/* Exotic Flow Class */}
        <div id="exotic" className={`${styles.classItem} glass-panel`}>
          <div className={styles.classInfo}>
            <h2 className={styles.className}>Exotic Flow & Floorwork</h2>
            <div className={styles.levelBadge}>All Levels</div>
            <p className={styles.classDesc}>
              Unleash your sensuality. This class focuses on the fluid transitions between the pole and the floor. Learn leg work, body waves, and mesmerizing choreography that emphasizes musicality and expression. Heels and knee pads are highly recommended!
            </p>
            <ul className={styles.highlights}>
              <li>✓ Fluid transitions</li>
              <li>✓ Sensual choreography</li>
              <li>✓ Musicality expression</li>
            </ul>
          </div>
          <div className={styles.action}>
            <Link href="/contact" className="btn-primary">Book Session</Link>
          </div>
        </div>

        {/* Flexibility & Conditioning */}
        <div id="flexibility" className={`${styles.classItem} glass-panel`}>
          <div className={styles.classInfo}>
            <h2 className={styles.className}>Flexibility & Conditioning</h2>
            <div className={styles.levelBadge}>All Levels</div>
            <p className={styles.classDesc}>
              A strong foundation is key to advanced pole tricks. In this class, we focus on deep, active stretching to increase your range of motion (splits, backbends) alongside targeted conditioning exercises to build your core and upper body strength.
            </p>
            <ul className={styles.highlights}>
              <li>✓ Active flexibility drills</li>
              <li>✓ Core and upper body strength</li>
              <li>✓ Injury prevention</li>
            </ul>
          </div>
          <div className={styles.action}>
            <Link href="/contact" className="btn-primary">Book Session</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
