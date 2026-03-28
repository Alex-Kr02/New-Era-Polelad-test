import styles from './contact.module.css';

export const metadata = {
  title: 'Contact Us | New Era Polelad',
  description: 'Book your exotic pole dancing class or reach out to the New Era Polelad team.',
};

export default function Contact() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={`${styles.title} animate-fade-in`}>Get in <span className="neonText">Touch</span></h1>
        <p className={`${styles.subtitle} animate-fade-in animate-delay-1`}>
          Ready to start your journey? Book a class or drop us a message.
        </p>
      </header>

      <section className={styles.contentSection}>
        <div className={`${styles.grid} animate-fade-in animate-delay-2`}>
          {/* Contact Details */}
          <div className={`${styles.infoCard} glass-panel`}>
            <h2>Studio Information</h2>
            
            <div className={styles.infoBlock}>
              <h3>Visit Us</h3>
              <p>123 Neon Avenue, Floor 4</p>
              <p>Metropolis, NY 10001</p>
            </div>
            
            <div className={styles.infoBlock}>
              <h3>Contact</h3>
              <p>Email: hello@newerapolelad.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
            
            <div className={styles.infoBlock}>
              <h3>Hours</h3>
              <p>Mon - Fri: 10:00 AM - 9:00 PM</p>
              <p>Sat - Sun: 9:00 AM - 5:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${styles.formCard} glass-panel`}>
            <h2>Send a Message</h2>
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="your@email.com" required />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="inquiry">Inquiry Type</label>
                <select id="inquiry">
                  <option value="booking">Class Booking</option>
                  <option value="private">Private Session</option>
                  <option value="general">General Question</option>
                </select>
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={4} placeholder="How can we help you?" required></textarea>
              </div>
              
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
