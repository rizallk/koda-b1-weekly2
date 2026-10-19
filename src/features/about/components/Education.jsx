import Badge from '../../../components/Badge';
import Card from '../../../components/Card';

export default function Education() {
  return (
    <section className="bg-[#F9FAFB] py-14">
      <div className="container mx-auto p-4">
        <p className="font-semibold text-xs text-theme mb-3 text-center">
          EDUCATION
        </p>
        <h2 className="font-bold text-3xl text-[#101828] mb-4 text-center">
          A Little About Me
        </h2>
        <div className="w-12 h-1 bg-dark rounded-full mx-auto mb-10"></div>
        <div className="relative pl-8.5 pb-10 border-l-2 border-[#E5E7EB]">
          <Card>
            <div className="flex flex-col md:flex-row md:items-top justify-between mb-3">
              <div>
                <p className="font-semibold text-[#101828]">
                  B.S. Computer Science
                </p>
                <p className="font-medium text-sm text-theme mb-2">
                  UC Berkeley · Berkeley, CA
                </p>
              </div>
              <div>
                <Badge text="2019 - 2023" variant="theme" className="text-xs" />
              </div>
            </div>
            <p className="text-sm text-[#6A7282]">
              Graduated with honors. Dean's List 2021 & 2022. Focused on
              software engineering, distributed systems, and human-computer
              interaction.
            </p>
          </Card>
          <div className="bg-white p-1.5 w-fit rounded-full shadow-md absolute top-0 -left-3">
            <div className="bg-black w-2.5 h-2.5"></div>
          </div>
        </div>
        <div className="relative pl-8.5 pb-10 border-l-2 border-[#E5E7EB]">
          <Card>
            <div className="flex flex-col md:flex-row md:items-top justify-between mb-3">
              <div>
                <p className="font-semibold text-[#101828]">
                  Full Stack Web Development
                </p>
                <p className="font-medium text-sm text-theme mb-2">
                  Codecademy Pro · Online
                </p>
              </div>
              <div>
                <Badge text="2022" variant="theme" className="text-xs" />
              </div>
            </div>
            <p className="text-sm text-[#6A7282]">
              Intensive program covering modern JavaScript, React, Node.js,
              databases, and deployment workflows using industry-standard tools.
            </p>
          </Card>
          <div className="bg-white p-1.5 w-fit rounded-full shadow-md absolute top-0 -left-3">
            <div className="bg-black w-2.5 h-2.5"></div>
          </div>
        </div>
        <div className="relative pl-8.5 pb-10 border-l-2 border-[#E5E7EB]">
          <Card>
            <div className="flex flex-col md:flex-row md:items-top justify-between mb-3">
              <div>
                <p className="font-semibold text-[#101828]">
                  Data Structures & Algorithms
                </p>
                <p className="font-medium text-sm text-theme mb-2">
                  Coursera — Stanford University · Online
                </p>
              </div>
              <div>
                <Badge text="2021" variant="theme" className="text-xs" />
              </div>
            </div>
            <p className="text-sm text-[#6A7282]">
              Certificate course covering sorting algorithms, trees, graphs,
              dynamic programming, and complexity analysis.
            </p>
          </Card>
          <div className="bg-white p-1.5 w-fit rounded-full shadow-md absolute top-0 -left-3">
            <div className="bg-black w-2.5 h-2.5"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
