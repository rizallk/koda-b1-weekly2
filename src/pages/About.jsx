import Header from '../components/Header';
import AboutSection from '../features/about/components/AboutSection';
import Career from '../features/about/components/Career';
import Education from '../features/about/components/Education';
import Personal from '../features/about/components/Personal';
import Skills from '../features/about/components/Skills';

export default function About() {
  return (
    <main>
      <Header
        h4="GET TO KNOW ABOUT ME"
        h2="About Alex"
        desc="A passionate developer who loves building things that make a real difference."
      />
      <AboutSection />
      <Education />
      <Career />
      <Skills />
      <Personal />
    </main>
  );
}
