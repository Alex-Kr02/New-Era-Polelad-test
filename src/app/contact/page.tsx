'use client';

import { useTranslation } from '@/hooks/useTranslation';
import styles from './contact.module.css';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 
          className={`${styles.title} animate-fade-in`}
          dangerouslySetInnerHTML={{ __html: t('contact.title') }}
        />
        <p className={`${styles.subtitle} animate-fade-in animate-delay-1`}>
          {t('contact.subtitle')}
        </p>
      </header>

      <section className={styles.contentSection}>
        <div className={`${styles.grid} animate-fade-in animate-delay-2`}>
          {/* Contact Details */}
          <div className={`${styles.infoCard} glass-panel`}>
            <h2>{t('contact.infoTitle')}</h2>
            
            <div className={styles.infoBlock}>
              <h3>{t('contact.visitUs')}</h3>
              <p>Agiou Trifonos 8</p>
              <p>Kifisia 145 62</p>
            </div>
            
            <div className={styles.infoBlock}>
              <h3>{t('contact.contact')}</h3>
              <p>Email: hello@newerapolelad.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
            
            <div className={styles.infoBlock}>
              <h3>{t('contact.hours')}</h3>
              <p>{t('contact.monFri')}: 10:00 AM - 9:00 PM</p>
              <p>{t('contact.satSun')}: 9:00 AM - 5:00 PM</p>
            </div>

            <div className={styles.infoBlock}>
              <h3>{t('footer.socials')}</h3>
              <p>
                <a href="https://www.instagram.com/new_era_polelab_kifisia/" target="_blank" rel="noreferrer" className={styles.link}>
                  Instagram: @new_era_polelab_kifisia
                </a>
              </p>
            </div>

            <div className={`${styles.mapWrapper} animate-fade-in animate-delay-3`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.5!2d23.8129799!3d38.0690321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a19f007e54ce47%3A0x3fbb60f5db7bc45b!2sNew%20era%20pole%20lab!5e0!3m2!1sen!2sgr!4v1711760000000"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${styles.formCard} glass-panel`}>
            <h2>{t('contact.formTitle')}</h2>
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">{t('contact.name')}</label>
                <input type="text" id="name" placeholder={t('contact.placeholderName')} required />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="email">{t('contact.email')}</label>
                <input type="email" id="email" placeholder={t('contact.placeholderEmail')} required />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="inquiry">{t('contact.inquiry')}</label>
                <select id="inquiry">
                  <option value="booking">{t('contact.booking')}</option>
                  <option value="private">{t('contact.private')}</option>
                  <option value="general">{t('contact.general')}</option>
                </select>
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="message">{t('contact.message')}</label>
                <textarea id="message" rows={4} placeholder={t('contact.placeholderHelp')} required></textarea>
              </div>
              
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                {t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
