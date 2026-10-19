import Button from '../components/Button';
import AboutSection from '../features/home/components/AboutSection';
import Hero from '../features/home/components/Hero';
import ProjectSection from '../features/home/components/ProjectSection';
import SkillsSection from '../features/home/components/SkillsSection';
import TestimonialSection from '../features/home/components/TestimonialSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <TestimonialSection />
      <div className="bg-dark py-20 text-center">
        <div className="container mx-auto p-4">
          <h1 className="font-bold text-4xl text-white mb-4">
            Let's Work Together
          </h1>
          <p className="text-[#FFD6A8] mb-9">
            I'm currently available for freelance projects and full-time
            opportunities. Let's build something great.
          </p>
          <Button variant="theme" className="font-bold">
            Get In Touch
          </Button>
        </div>
      </div>
    </main>
  );
}
