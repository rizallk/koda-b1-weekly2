import Badge from '../../../components/Badge';
import Card from '../../../components/Card';

export default function Career() {
  return (
    <section className="py-14">
      <div className="container mx-auto p-4">
        <p className="font-semibold text-xs text-theme mb-3 text-center">
          CAREER
        </p>
        <h2 className="font-bold text-3xl text-[#101828] mb-4 text-center">
          Work Experience
        </h2>
        <div className="w-12 h-1 bg-dark rounded-full mx-auto mb-10"></div>
        <Card className="mb-4">
          <div className="flex flex-col md:flex-row md:items-top justify-between mb-3">
            <div>
              <p className="font-semibold text-lg text-[#101828]">
                Junior Software Developer
              </p>
              <p className="font-medium text-sm text-dark mb-2">
                TechCorp Inc. · San Francisco, CA
              </p>
            </div>
            <div>
              <Badge text="Jan 2023 - Present" className="text-xs" />
            </div>
          </div>
          <ul className="list-image-[url(/icons/list.png)] ml-5 text-sm text-[#6A7282]">
            <li className="pl-3 mb-2">
              Build and maintain full-stack features for a B2B SaaS platform
              serving 10,000+ users.
            </li>
            <li className="pl-3 mb-2">
              Collaborate with designers and senior engineers in 2-week agile
              sprints.
            </li>
            <li className="pl-3">
              Reduced API response times by 35% through query optimization and
              Redis caching.
            </li>
          </ul>
        </Card>
        <Card className="mb-4">
          <div className="flex flex-col md:flex-row md:items-top justify-between mb-3">
            <div>
              <p className="font-semibold text-lg text-[#101828]">
                Software Engineering Intern
              </p>
              <p className="font-medium text-sm text-dark mb-2">
                StartupXYZ · San Jose, CA
              </p>
            </div>
            <div>
              <Badge text="May 2022 – Aug 2022" className="text-xs" />
            </div>
          </div>
          <ul className="list-image-[url(/icons/list.png)] ml-5 text-sm text-[#6A7282]">
            <li className="pl-3 mb-2">
              Developed React components for the company's customer-facing
              dashboard.
            </li>
            <li className="pl-3">
              Wrote unit and integration tests, achieving 85% code coverage
              across new modules.
            </li>
          </ul>
        </Card>
        <Card>
          <div className="flex flex-col md:flex-row md:items-top justify-between mb-3">
            <div>
              <p className="font-semibold text-lg text-[#101828]">
                Web Developer
              </p>
              <p className="font-medium text-sm text-dark mb-2">
                Freelance · Remote
              </p>
            </div>
            <div>
              <Badge text="Jun 2022 – Dec 2022" className="text-xs" />
            </div>
          </div>
          <ul className="list-image-[url(/icons/list.png)] ml-5 text-sm text-[#6A7282]">
            <li className="pl-3 mb-2">
              Built responsive websites and web apps for 8 small business
              clients.
            </li>
            <li className="pl-3">
              Managed client communication, requirements gathering, scoping, and
              delivery.
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
}
