'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useTranslation();
  const { setLanguage } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'el' : 'en');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.neonText}>New Era</span> Polelad
          </Link>
        </div>

        {/* Desktop Links */}
        <div className={styles.navLinks}>
          <Link href="/" className={styles.link}>{t('nav.home')}</Link>
          <Link href="/about" className={styles.link}>{t('nav.about')}</Link>
          <Link href="/classes" className={styles.link}>{t('nav.classes')}</Link>
          <Link href="/instructors" className={styles.link}>{t('nav.instructors')}</Link>
          
          <button onClick={toggleLanguage} className={styles.langToggle}>
            {language === 'en' ? 'EN | GR' : 'GR | EN'}
          </button>
          
          <Link href="/contact" className={styles.btnNav}>{t('nav.bookNow')}</Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className={styles.mobileActions}>
          <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`${styles.mobileMenu} ${isOpen ? styles.active : ''}`}>
          <button onClick={toggleLanguage} className={styles.langToggleMenu}>
            {language === 'en' ? 'GR' : 'EN'}
          </button>

          <Link href="/" className={styles.mobileLink} onClick={toggleMenu}>{t('nav.home')}</Link>
          <Link href="/about" className={styles.mobileLink} onClick={toggleMenu}>{t('nav.about')}</Link>
          <Link href="/classes" className={styles.mobileLink} onClick={toggleMenu}>{t('nav.classes')}</Link>
          <Link href="/instructors" className={styles.mobileLink} onClick={toggleMenu}>{t('nav.instructors')}</Link>
          <Link href="/contact" className={styles.mobileBtn} onClick={toggleMenu}>{t('nav.bookNow')}</Link>
        </div>
      </div>
    </nav>
  );
}
