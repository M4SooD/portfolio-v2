import { Code2 } from 'lucide-react';
import { skills } from '@/constants/resume';

const Skills = () => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
          <Code2 aria-hidden="true" className="size-5" />
        </span>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">{skills.title}</h2>
          <p className="text-sm text-muted-foreground">Tools I use to deliver production work</p>
        </div>
      </div>

      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {skills.skillList.map((skill) => (
          <li key={skill.name} className="surface group flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl p-4 text-center transition hover:-translate-y-1 hover:border-primary/20">
            <span className="text-3xl text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true">
              {skill.icon}
            </span>
            <span className="text-xs font-medium">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
