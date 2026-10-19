import Badge from '../../../components/Badge';
import { skills } from '../../../utils/skills';

export default function SkillsSection() {
  return (
    <div className="text-center py-20 p-4 container mx-auto">
      <p className="font-semibold text-xs text-theme mb-3">TECHNICAL SKILLS</p>
      <h2 className="font-bold text-4xl text-[#101828] mb-4">
        What I Work With
      </h2>
      <p className="text-[#6A7282] mb-4">
        A snapshot of the tools and technologies I use to build modern web
        applications.
      </p>
      <div className="w-12 h-1 bg-dark rounded-full mx-auto mb-10"></div>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((v, i) => {
          return <Badge text={v} variant="theme" key={i} />;
        })}
      </div>
    </div>
  );
}
