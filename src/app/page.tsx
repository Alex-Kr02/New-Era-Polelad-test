'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './page.module.css';

import HeroBackground from '../components/HeroBackground';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Hero Content Reveal
    const heroTl = gsap.timeline();
    heroTl.from(`.${styles.title}`, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
    })
    .from(`.${styles.subtitle}`, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.8')
    .from(`.${styles.ctaContainer}`, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    }, '-=0.6');

    // 2. Programs Section Reveal
    gsap.from(`.${styles.sectionHeader}`, {
      scrollTrigger: {
        trigger: `.${styles.programs}`,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    // 3. Staggered Cards Reveal
    gsap.from(`.glass-panel`, {
      scrollTrigger: {
        trigger: `.${styles.grid}`,
        start: 'top 85%',
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.7)'
    });

    // 4. Philosophy Section Reveal
    gsap.from(`.${styles.philosophyContent} > *`, {
      scrollTrigger: {
        trigger: `.${styles.philosophy}`,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'power2.out'
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      {/* Hero Section - The Runway */}
      <section 
        ref={heroRef} 
        style={{ 
          position: 'relative', 
          width: '100%', 
          height: 'calc(100vh + 900px)',
          background: '#000'
        }}
      >
        <div style={{ 
          position: 'sticky', 
          top: 0, 
          width: '100%', 
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '80px 10% 0',
          overflow: 'hidden'
        }}>
          <HeroBackground scrollTarget={heroRef} />
          
          <div className={styles.heroContent}>
            <h1 
              className={styles.title}
              dangerouslySetInnerHTML={{ __html: t('hero.title') }}
            />
            <p className={styles.subtitle}>
              {t('hero.subtitle')}
            </p>
            <div className={styles.ctaContainer}>
              <Link href="/classes" className="btn-primary">
                {t('hero.cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className={styles.programs}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('programs.title')}</h2>
          <p className={styles.sectionDesc}>{t('programs.description')}</p>
        </div>
        
        <div className={styles.grid}>
          <div className="glass-panel">
            <h3 className={styles.cardTitle}>{t('programs.beginner.title')}</h3>
            <p className={styles.cardText}>{t('programs.beginner.text')}</p>
            <Link href="/classes#beginner" className={styles.cardLink}>{t('programs.beginner.link')}</Link>
          </div>
          
          <div className="glass-panel">
            <h3 className={styles.cardTitle}>{t('programs.exotic.title')}</h3>
            <p className={styles.cardText}>{t('programs.exotic.text')}</p>
            <Link href="/classes#exotic" className={styles.cardLink}>{t('programs.exotic.link')}</Link>
          </div>
          
          <div className="glass-panel">
            <h3 className={styles.cardTitle}>{t('programs.flexibility.title')}</h3>
            <p className={styles.cardText}>{t('programs.flexibility.text')}</p>
            <Link href="/classes#flexibility" className={styles.cardLink}>{t('programs.flexibility.link')}</Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={styles.philosophy}>
        <div className={styles.philosophyContent}>
          <h2 className={styles.sectionTitle}>{t('philosophy.title')}</h2>
          <p className={styles.philosophyText}>
            {t('philosophy.text')}
          </p>
          <Link href="/about" className="btn-primary">
            {t('philosophy.cta')}
          </Link>
        </div>
      </section>
    </div>
  );
}

