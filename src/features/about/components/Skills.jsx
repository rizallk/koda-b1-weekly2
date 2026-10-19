import ProgressBar from '../../../components/ProgressBar';

export default function Skills() {
  return (
    <section className="bg-[#F9FAFB] py-14">
      <div className="container mx-auto p-4">
        <p className="font-semibold text-xs text-theme mb-3 text-center">
          SKILLS
        </p>
        <h2 className="font-bold text-3xl text-[#101828] mb-4 text-center">
          Technical Proficiency
        </h2>
        <div className="w-12 h-1 bg-dark rounded-full mx-auto mb-10"></div>
        <div className="grid lg:grid-cols-2 gap-10">
          <ProgressBar label="React / Next.js" min={90} />
          <ProgressBar label="TypeScript / JavaScript" min={88} />
          <ProgressBar label="Node.js / Express" min={82} />
          <ProgressBar label="Python / Django" min={74} />
          <ProgressBar label="PostgreSQL / MongoDB" min={80} />
          <ProgressBar label="Docker / AWS" min={65} />
        </div>
      </div>
    </section>
  );
}
