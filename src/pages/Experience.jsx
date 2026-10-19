import Button from '../components/Button';
import Header from '../components/Header';
import Awards from '../features/experience/components/Awards';
import Certifications from '../features/experience/components/Certifications';
import ProfessionalExperience from '../features/experience/components/professionalExperience';

export default function Experience() {
  return (
    <main>
      <Header
        h4="CAREER HISTORY"
        h2="Experience"
        desc="My professional journey, credentials, and recognition."
      >
        <Button className="flex items-center gap-2">
          <div>
            <img src="icons/download.png" alt="Download" />
          </div>
          <div>Download Resume</div>
        </Button>
      </Header>
      <ProfessionalExperience />
      <Certifications />
      <Awards />
    </main>
  );
}
