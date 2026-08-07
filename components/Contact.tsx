export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <p className="section-label">CONTACT</p>

        <h2 className="contact-title">Contact</h2>

        <div className="contact-card">
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">Email</span>

              <a href="mailto:akankshamohota@gmail.com">
                akankshamohota@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-label">Phone</span>

              <a href="tel:+917498084882">+91 74980 84882</a>
            </div>

            <div className="contact-item">
              <span className="contact-label">LinkedIn</span>

              <a
                href="https://www.linkedin.com/in/akanksha-mohota"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/akanksha-mohota
              </a>
            </div>
          </div>

          <a
            className="contact-resume-link"
            href="./akanksha-mohota-resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View résumé <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}