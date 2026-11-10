import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <a className={styles.brand} href="#home">aurea<span>wellness</span></a>
        <p>An independent wellness landing page concept, designed with care.</p>
        <div className={styles.columns}>
          <div>
            <strong>Explore</strong>
            <a href="#treatments">Treatments</a>
            <a href="#approach">Our approach</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <strong>Connect</strong>
            <span>Email contact not configured</span>
            <a href="#final-cta">Explore options</a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© 2026 Aurea Wellness</span>
        <div>
          <span>Privacy policy — coming soon</span>
          <span>Terms of service — coming soon</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
