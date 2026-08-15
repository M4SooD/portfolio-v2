import { BriefcaseBusiness } from 'lucide-react';
import { experience } from '@/constants/resume';

const Experience = () => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
          <BriefcaseBusiness aria-hidden="true" className="size-5" />
        </span>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">{experience.title}</h2>
          <p className="text-sm text-muted-foreground">Professional timeline</p>
        </div>
      </div>

      <ol className="mt-8 space-y-4">
        {experience.items.map((item) => (
          <li key={`${item.company}-${item.position}`} className="surface relative rounded-2xl p-6 sm:p-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold">{item.position}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{item.company}</p>
              </div>
              <time className="w-fit rounded-full border border-white/8 bg-white/4 px-3 py-1.5 text-xs text-muted-foreground">
                {item.duration}
              </time>
            </div>
            {item.highlights ? (
              <ul className="mt-5 space-y-2.5 text-sm leading-7 text-muted-foreground">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span aria-hidden="true" className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Experience;
