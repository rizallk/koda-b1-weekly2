import { useState } from 'react';
import Header from '../components/Header';
import { projects } from '../utils/projects';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { projectsFilter } from '../utils/filter';

// Projects page
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('');

  return (
    <main>
      <Header
        h4="PORTFOLIO"
        h2="My Projects"
        desc="A collection of work that demonstrates my skills across the full development stack."
      />
      <div className="container mx-auto p-4 mt-11 mb-11">
        <div className="flex items-center justify-center flex-wrap gap-3 font-medium text-sm mb-13">
          <FilterButton
            text="All"
            isActive={activeFilter === ''}
            onClick={() => setActiveFilter('')}
          />
          <FilterButton
            text="Frontend"
            isActive={activeFilter === 'Frontend'}
            onClick={() => setActiveFilter('Frontend')}
          />
          <FilterButton
            text="Backend"
            isActive={activeFilter === 'Backend'}
            onClick={() => setActiveFilter('Backend')}
          />
          <FilterButton
            text="Full Stack"
            isActive={activeFilter === 'Full Stack'}
            onClick={() => setActiveFilter('Full Stack')}
          />
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {activeFilter
            ? projectsFilter(activeFilter).map((v, i) => {
                return (
                  <Card
                    img={`images/${v.image}`}
                    key={i}
                    className="relative lg:h-135"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold text-lg text-[#101828]">
                        {v.name}
                      </h3>
                      <Badge text={v.category} variant="theme" />
                    </div>
                    <p className="text-sm text-[#6A7282] mb-4">
                      {v.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-4">
                      {v.technologies.map((v, i) => {
                        return <Badge key={i} text={v} />;
                      })}
                    </div>
                    <div className="flex gap-4 lg:absolute bottom-5 left-5 right-5">
                      <Button variant="outline-2" className="w-full">
                        GitHub
                      </Button>
                      <Button className="w-full">Live Demo</Button>
                    </div>
                  </Card>
                );
              })
            : projects.map((v, i) => {
                return (
                  <Card
                    img={`images/${v.image}`}
                    key={i}
                    className="relative lg:h-135"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold text-lg text-[#101828]">
                        {v.name}
                      </h3>
                      <Badge text={v.category} variant="theme" />
                    </div>
                    <p className="text-sm text-[#6A7282] mb-4">
                      {v.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-4">
                      {v.technologies.map((v, i) => {
                        return <Badge key={i} text={v} />;
                      })}
                    </div>
                    <div className="flex gap-4 lg:absolute bottom-5 left-5 right-5">
                      <Button variant="outline-2" className="w-full">
                        GitHub
                      </Button>
                      <Button className="w-full">Live Demo</Button>
                    </div>
                  </Card>
                );
              })}
        </div>
      </div>
    </main>
  );
}

const FilterButton = ({ text, isActive, ...rest }) => {
  const activeClass = isActive
    ? 'bg-dark text-white'
    : 'border-[0.6px] text-[#4A5565]';

  return (
    <button
      className={`${activeClass} rounded-full px-5 py-3 cursor-pointer`}
      {...rest}
    >
      {text}
    </button>
  );
};
