import Navbar          from './components/sections/Navbar';
import Hero            from './components/sections/Hero';
import About           from './components/sections/About';
import Journey         from './components/sections/Journey';
import Experience      from './components/sections/Experience';
import Projects        from './components/sections/Projects';
import Skills          from './components/sections/Skills';
import Certifications  from './components/sections/Certifications';
import Contact         from './components/sections/Contact';
import Footer          from './components/sections/Footer';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Journey />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;