const projects = [
  {
    title: "Aza",
    subtitle: "AI Customer Service Agent",
    context:
      "Independent product case study based on analysis of the Amazon India customer-service experience. Not affiliated with Amazon.",
    role: "AI Product Manager",
    date: "March 2026",
    link: "https://akankshamohota30-aza-resolve-ai.vercel.app/",
    caseStudy: "./aza-ai-pm-case-study.pdf",
    problem:
      "Analysed 10+ Amazon India user reviews to identify recurring customer-service failure patterns.",
    work: [
      "Built an assumption-led ROI model for support automation.",
      "Defined Jobs-to-be-Done requirements and built an agentic prototype.",
      "Designed the A-Pay instant-refund flow and documented edge cases, failure scenarios, and fraud-detection gaps.",
    ],
    outcomes: [
      "Opportunity model: ₹43.2B annual savings at 80% automation",
      "Target: under 2-minute resolution for routine issues",
    ],
    tags: ["Product Analysis", "JTBD", "ROI Modelling", "Agentic AI", "AI Quality"],
  },
  {
    title: "Credo",
    subtitle: "AI Credit Decision Explainer",
    context: "Live product",
    role: "AI Product Manager",
    date: "July 2026",
    link: "https://credo-app-mu.vercel.app/",
    problem:
      "Built a product to translate credit-decision factors into clear, plain-language explanations.",
    work: [
      "Designed explanations ranked by relative importance to reduce model-gaming risk.",
      "Authored a heuristic bias-audit rulebook for proxy-variable risk affecting gig and informal-income applicants.",
      "Delivered the PRD, React frontend, Vercel serverless AI layer, and Redis persistence.",
    ],
    outcomes: ["100% of decisions audited in real time"],
    tags: [
      "Explainable AI",
      "Ethical AI",
      "PRD",
      "React",
      "Vercel",
      "Redis",
    ],
  },
  {
    title: "AI-Driven Financial Inclusion Platform",
    subtitle: "Financial services product",
    context: "Product research and PRD",
    role: "AI Product Manager",
    date: "Oct 2025 - Jan 2026",
    problem:
      "Investigated adoption barriers in AI-enabled financial services.",
    work: [
      "Conducted 10+ user interviews and competitive research.",
      "Identified three adoption barriers: trust deficit, low digital literacy, and onboarding friction.",
      "Authored a PRD for eight prioritised features, including AI safeguards and conversational user flows.",
    ],
    outcomes: [
      "Defined activation rate, task completion time, and first-week retention as success metrics",
    ],
    tags: [
      "User Research",
      "Competitive Research",
      "PRD",
      "AI Safeguards",
      "Product Metrics",
    ],
  },
];

export default function ProductWork() {
  return (
    <section id="work" className="product-work-section">
      <div className="product-work-container">
        <p className="section-label">SELECTED PRODUCT WORK</p>

        <h2 className="product-work-title">Projects</h2>

        <div className="product-work-list">
          {projects.map((project, index) => (
            <article className="product-work-card" key={project.title}>
              <div className="product-work-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="product-work-main">
                <div className="product-work-header">
                  <div>
                    <h3>{project.title}</h3>
                    <p className="product-work-subtitle">{project.subtitle}</p>
                  </div>

                  <div className="product-work-meta">
                    <span>{project.role}</span>
                    <span>{project.date}</span>
                  </div>
                </div>

                <p className="product-work-context">{project.context}</p>

                <div className="product-work-grid">
                  <div>
                    <p className="product-work-label">Problem</p>
                    <p className="product-work-text">{project.problem}</p>
                  </div>

                  <div>
                    <p className="product-work-label">Product work</p>

                    <ul className="product-work-list-items">
                      {project.work.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="product-work-outcomes">
                  <p className="product-work-label">Outcomes</p>

                  <div className="product-work-outcome-list">
                    {project.outcomes.map((outcome) => (
                      <span key={outcome}>{outcome}</span>
                    ))}
                  </div>
                </div>

                <div className="product-work-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="product-work-links">
                  {project.link && (
                    <a
                      className="product-work-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View live product <span>↗</span>
                    </a>
                  )}

                  {project.caseStudy && (
                    <a
                      className="product-work-link"
                      href={project.caseStudy}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read case study <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}