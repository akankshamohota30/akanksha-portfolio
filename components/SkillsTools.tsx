const skillGroups = [
  {
    category: "Product Management",
    skills: [
      "PRDs",
      "RICE",
      "Jobs-to-be-Done",
      "Roadmapping",
      "ROI Modelling",
      "KPI Frameworks",
      "GTM Strategy",
      "Ethical AI",
      "Bias Auditing",
    ],
  },
  {
    category: "AI Product Development",
    skills: [
      "Agentic Workflows",
      "Prompt Engineering",
      "Generative AI",
      "LLMs",
      "Gemini API",
      "API Integration",
      "Hugging Face",
      "EmergentAI",
    ],
  },
  {
    category: "Technical Delivery",
    skills: [
      "TypeScript",
      "React",
      "Vite",
      "Vercel Serverless Functions",
      "Redis",
      "Git and GitHub",
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
        <p className="section-label">SKILLS &amp; TOOLS</p>

        <h2 className="skills-tools-title">Skills &amp; Tools</h2>

        <div className="skills-tools-grid">
          {skillGroups.map((group, index) => (
            <article className="skills-tools-card" key={group.category}>
              <span className="skills-tools-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{group.category}</h3>

              <div className="skills-tools-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}