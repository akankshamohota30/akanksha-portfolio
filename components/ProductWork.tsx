const projects = [
  {
    title: "Aza",
    subtitle: "AI Customer Service Agent",
    context:
      "Independent AI product project focused on customer-service automation.",
    role: "AI Product Manager",
    date: "March 2026",
    link: "https://akankshamohota30-aza-resolve-ai.vercel.app/",
    caseStudy: "./aza-ai-pm-case-study.pdf",

    problem:
      "Analyzed 10+ Amazon customer reviews and tested 100 support scenarios to evaluate customer-service automation.",

    work: [
      "Analyzed 10+ Amazon customer reviews to identify customer-service pain points.",
      "Tested 100 support scenarios, evaluating resolution quality and refund handling.",
      "Built and deployed an agentic workflow using Emergent AI.",
      "Mapped failure modes, fraud risks, escalation paths, and policy edge cases into product requirements.",
      "Developed a directional ROI model to evaluate automation value across resolution time, escalation volume, and support costs.",
    ],

    outcomes: [
      "89% resolution rate",
      "94% refund-handling accuracy",
      "80% lower average resolution time",
    ],

    tags: [
      "AI Product Management",
      "Agentic AI",
      "Customer Service",
      "ROI Modelling",
      "AI Quality",
    ],
  },

  {
    title: "AI-Driven Financial Inclusion Platform",
    subtitle: "Financial services product",
    context: "Product research and PRD",

    role: "AI Product Manager",
    date: "October 2025 — January 2026",

    problem:
      "Investigated adoption barriers in AI-enabled financial services through user research and product discovery.",

    work: [
      "Conducted 10+ user interviews and identified 3 adoption barriers.",
      "Translated research findings into an 8-feature PRD.",
      "Prioritized solutions using RICE.",
      "Iterated the product through a 30-user usability study.",
      "Defined activation, task-completion time, and week-1 retention as product success metrics.",
    ],

    outcomes: [
      "+26 pp activation",
      "+23 pp task success",
      "40% lower task-completion time",
    ],

    tags: [
      "User Research",
      "RICE",
      "PRD",
      "Product Metrics",
      "Financial Inclusion",
    ],
  },

  {
    title: "Credo",
    subtitle: "AI Credit Decision Explainer",
    context: "Live product",

    role: "AI Product Manager",
    date: "July 2026",

    link: "https://credo-app-mu.vercel.app/",

    problem:
      "Built and evaluated an AI credit-explanation agent designed to make credit-decision rationale easier to understand.",

    work: [
      "Built and evaluated the AI credit-explanation agent across 100 decision scenarios.",
      "Validated explanations with 30 users to assess whether decision rationale was understandable.",
      "Conducted a bias audit covering disparate impact, equal opportunity, and proxy-variable risks.",
      "Owned product and technical delivery across the PRD, React frontend, Vercel serverless AI layer, and Redis persistence.",
    ],

    outcomes: [
      "94% factor-identification accuracy",
      "95% explanation accuracy",
      "87% correct interpretation of decision rationale",
    ],

    tags: [
      "Explainable AI",
      "Ethical AI",
      "Bias Auditing",
      "React",
      "Vercel",
      "Redis",
    ],
  },
];

export default function ProductWork() {
  return (
    <section id="work" className="product-work-section">

      <div className="product-work-container">

        <p className="section-label">
          SELECTED PRODUCT WORK
        </p>

        <h2 className="product-work-title">
          Projects
        </h2>

        <div className="product-work-list">

          {projects.map((project, index) => (

            <article
              className="product-work-card"
              key={project.title}
            >

              <div className="product-work-number">
                {String(index + 1).padStart(2, "0")}
              </div>


              <div className="product-work-main">

                <div className="product-work-header">

                  <div>

                    <h3>
                      {project.title}
                    </h3>

                    <p className="product-work-subtitle">
                      {project.subtitle}
                    </p>

                  </div>


                  <div className="product-work-meta">

                    <span>
                      {project.role}
                    </span>

                    <span>
                      {project.date}
                    </span>

                  </div>

                </div>


                <p className="product-work-context">
                  {project.context}
                </p>


                <div className="product-work-grid">

                  <div>

                    <p className="product-work-label">
                      Problem
                    </p>

                    <p className="product-work-text">
                      {project.problem}
                    </p>

                  </div>


                  <div>

                    <p className="product-work-label">
                      Product work
                    </p>

                    <ul className="product-work-list-items">

                      {project.work.map((item) => (
                        <li key={item}>
                          {item}
                        </li>
                      ))}

                    </ul>

                  </div>

                </div>


                <div className="product-work-outcomes">

                  <p className="product-work-label">
                    Outcomes
                  </p>

                  <div className="product-work-outcome-list">

                    {project.outcomes.map((outcome) => (
                      <span key={outcome}>
                        {outcome}
                      </span>
                    ))}

                  </div>

                </div>


                <div className="product-work-tags">

                  {project.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
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