export default function Research() {
  return (
    <section id="research" className="research-section">
      <div className="research-container">
        <p className="section-label">PUBLICATION</p>

        <h2 className="research-title">Research</h2>

        <article className="research-card">
          <div className="research-card-top">
            <span className="research-type">Published Research Paper</span>

            <span className="research-year">November 2025</span>
          </div>

          <h3>
            Bridging the Gap: How AI Can Drive Financial Inclusion in Emerging
            Markets
          </h3>

          <p className="research-journal">
            International Journal For Multidisciplinary Research · Volume 7,
            Issue 6
          </p>

          <div className="research-content">
            <div>
              <p className="research-content-label">Research focus</p>

              <p>
                A qualitative comparative analysis of AI-enabled financial
                inclusion in India and the United States.
              </p>
            </div>

            <div>
              <p className="research-content-label">Areas covered</p>

              <ul>
                <li>Credit access and AI-enabled risk assessment</li>
                <li>Personalised financial services</li>
                <li>Financial literacy and digital trust</li>
                <li>Ethical AI and transparent governance</li>
              </ul>
            </div>
          </div>

          <div className="research-tags">
            <span>Financial Inclusion</span>
            <span>Fintech</span>
            <span>Ethical AI</span>
            <span>Comparative Analysis</span>
          </div>

          <a
            className="research-link"
            href="https://www.ijfmr.com/research-paper.php?id=59121"
            target="_blank"
            rel="noreferrer"
          >
            View publication <span>↗</span>
          </a>
        </article>
      </div>
    </section>
  );
}