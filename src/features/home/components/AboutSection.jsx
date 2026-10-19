import { Link } from 'react-router';
import Card from '../../../components/Card';

export default function AboutSection() {
  return (
    <div className="bg-[#F9FAFB] text-center py-20">
      <div className="container mx-auto p-4">
        <p className="font-semibold text-xs text-theme mb-3">WHO I AM</p>
        <h2 className="font-bold text-4xl text-[#101828] mb-4">
          A Little About Me
        </h2>
        <p className="text-[#6A7282] mb-4">
          I'm passionate about writing clean, maintainable code and crafting
          experiences that users genuinely enjoy.
        </p>
        <div className="w-12 h-1 bg-dark rounded-full mx-auto mb-10"></div>
        <div className="grid lg:grid-cols-3 gap-5 text-left mb-8">
          <Card>
            <h3 className="font-semibold text-lg text-[#101828] mb-3">
              Problem Solver
            </h3>
            <p className="text-sm text-[#6A7282]">
              I enjoy breaking down complex challenges into simple, elegant
              solutions that scale well over time.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-lg text-[#101828] mb-3">
              Team Player
            </h3>
            <p className="text-sm text-[#6A7282]">
              Experienced collaborating with designers, product managers, and
              engineers in agile environments.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-lg text-[#101828] mb-3">
              Lifelong Learner
            </h3>
            <p className="text-sm text-[#6A7282]">
              Always exploring new tools and technologies. Currently deepening
              my cloud architecture and DevOps skills.
            </p>
          </Card>
        </div>
        <Link to="/about" className="font-semibold text-sm text-dark">
          Learn more about me →
        </Link>
      </div>
    </div>
  );
}
