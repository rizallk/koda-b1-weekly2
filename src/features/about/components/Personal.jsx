import Badge from '../../../components/Badge';
import { personal } from '../../../utils/personal';

export default function Personal() {
  return (
    <section className="py-14">
      <div className="container mx-auto p-4">
        <p className="font-semibold text-xs text-theme mb-3 text-center">
          PERSONAL
        </p>
        <h2 className="font-bold text-3xl text-[#101828] mb-4 text-center">
          Interests & Hobbies
        </h2>
        <p className="text-[#6A7282] text-center mb-4">
          A few things I'm passionate about beyond the keyboard.
        </p>
        <div className="w-12 h-1 bg-dark rounded-full mx-auto mb-10"></div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {personal.map((v, i) => {
          return <Badge key={i} text={v} />;
        })}
      </div>
    </section>
  );
}
