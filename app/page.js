import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Project from "@/components/sections/Project";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
    </>
  );
}