
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]  ">
      <Navbar/>
      <div className="container mx-auto px-py">
        <HeroSection/>
        <AboutSection/>
        <ProjectSection/>
        <EmailSection/>
      </div>
      
      
      
    </main>
  );
}
