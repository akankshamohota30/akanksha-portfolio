const skillGroups = [
  {
    number: "01",
    title: "AI & Technical",
    skills: [
      "Agentic Workflows",
      "Prompt Engineering",
      "GenAI",
      "LLMs",
      "Gemini API",
      "API Integration",
      "TypeScript",
      "React",
      "Vite",
      "Vercel",
      "Redis",
      "Git & GitHub",
      "HuggingFace",
      "EmergentAI",
    ],
  },

  {
    number: "02",
    title: "Product",
    skills: [
      "PRDs",
      "RICE",
      "JTBD",
      "Roadmapping",
      "ROI Modelling",
      "KPI Frameworks",
      "GTM Strategy",
      "Ethical AI",
      "Bias Auditing",
    ],
  },

  {
    number: "03",
    title: "Tools",
    skills: [
      "Notion",
      "Figma",
      "Google Analytics",
      "CRM",
      "Vercel",
    ],
  },
];

export default function SkillsTools() {
  return (
    <section id="skills" className="skills-tools-section">

      <div className="skills-tools-container">

        <p className="section-label">
          SKILLS & TOOLS
        </p>

        <h2 className="skills-tools-title">
          How I Work
        </h2>

        <div className="skills-tools-grid">

          {skillGroups.map((group) => (

            <article
              className="skills-tools-card"
              key={group.number}
            >

              <span className="skills-tools-number">
                {group.number}
              </span>

              <h3>
                {group.title}
              </h3>

              <div className="skills-tools-list">

                {group.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}