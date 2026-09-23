import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Research from "../components/Research";
import ProductWork from "../components/ProductWork";
import SkillsTools from "../components/SkillsTools";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Research />
        <ProductWork />
        <SkillsTools />
        <Contact />
      </main>
    </>
  );
}