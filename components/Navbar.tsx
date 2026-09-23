const basePath =
  process.env.NODE_ENV === "production"
    ? "/akanksha-portfolio"
    : "";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        AKANKSHA MOHOTA
      </div>

      <nav>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#work">Work</a>
        <a href="#research">Research</a>
        <a href="#contact">Contact</a>
      </nav>

      <a
        className="resume-button"
        href={`${basePath}/akanksha-mohota-resume.pdf`}
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
    </header>
  );
}