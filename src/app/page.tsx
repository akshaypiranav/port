import Navbar from "../../components/Navbar";
import HomeContent from "../../components/Home";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Skills from "../../components/Skills";
import Footer from "../../components/Footer";
import Education from "../../components/Education";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <main className="">

        <Navbar />
        <HomeContent />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
    </main>
  );
}
