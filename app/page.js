import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/pages/About";
import Project from "@/components/pages/Project";
import Skills from "@/components/pages/Skills";
import Experience from "@/components/pages/Experience";
import Contact from "@/components/pages/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Contact/>
      <Footer />

    </>
  );
}