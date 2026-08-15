import { GraduationCap } from 'lucide-react';
import { education } from '@/constants/resume';

const Education = () => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
          <GraduationCap aria-hidden="true" className="size-5" />
        </span>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">{education.title}</h2>
          <p className="text-sm text-muted-foreground">Technical and academic foundation</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {education.items.map((item) => (
          <article key={`${item.institution}-${item.degree}`} className="surface rounded-2xl p-6 sm:p-7">
            <time className="text-xs font-semibold uppercase tracking-widest text-primary">{item.duration}</time>
            <h3 className="mt-4 text-lg font-semibold leading-7">{item.degree}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.institution}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Education;
