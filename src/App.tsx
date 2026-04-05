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
import { siteData } from './data/site-data';

function App() {
  const activeIdentity = siteData.identities[0];

  return (
    <HelmetProvider>
      <SEO title={activeIdentity.title} description={activeIdentity.summary} />
      <div className="min-h-screen flex flex-col bg-void-base relative overflow-hidden">
        {/* Global Background Glows */}
        <div className="glow-primary -top-48 -right-48 opacity-20" />
        <div className="glow-secondary bottom-0 -left-48 opacity-10" />
        
        <Navbar />
        
        <main id="main-content" className="flex-1 relative z-10">
          <Home 
            identity={activeIdentity} 
          />
          <Experience experience={activeIdentity.experience} />
          <Skills skills={activeIdentity.skills} />
          <Projects projects={activeIdentity.projects} />
          <EducationHonors education={siteData.education} honors={siteData.honors} />
          <Connect profile={siteData.profile} />
        </main>
        
        <Footer profile={siteData.profile} identity={activeIdentity} />
      </div>
    </HelmetProvider>
  );
}

export default App;
