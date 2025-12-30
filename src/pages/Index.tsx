import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Abu Bakkar | AI & Software Engineer Portfolio</title>
        <meta
          name="description"
          content="Abu Bakkar - BS Computer Science Student at UET Mardan. Aspiring AI & Software Engineer specializing in Machine Learning, Data Science, and Python development."
        />
        <meta name="keywords" content="Abu Bakkar, AI Engineer, Software Developer, Machine Learning, Python, Data Science, Portfolio" />
        <meta property="og:title" content="Abu Bakkar | AI & Software Engineer Portfolio" />
        <meta property="og:description" content="Aspiring AI & Software Engineer specializing in Machine Learning and Data Science." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
