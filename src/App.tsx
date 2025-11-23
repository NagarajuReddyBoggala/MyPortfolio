import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './routes/Home';
import { Experience } from './routes/Experience';
import { Skills } from './routes/Skills';
import { Projects } from './routes/Projects';
import { EducationHonors } from './routes/EducationHonors';
import { Connect } from './routes/Connect';
import { SEO } from './components/SEO';

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <div className="min-h-screen flex flex-col">
        <a href="#home" className="skip-to-main">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          <Home />
          <Experience />
          <Skills />
          <Projects />
          <EducationHonors />
          <Connect />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
