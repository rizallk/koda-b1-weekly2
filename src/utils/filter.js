import { projects } from './projects';

export function projectsFilter(target) {
  return projects.filter((v) => v.category === target);
}
