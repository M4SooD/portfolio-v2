import { UserRound } from 'lucide-react';
import { about } from '@/constants/resume';

const About = () => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
          <UserRound aria-hidden="true" className="size-5" />
        </span>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">{about.title}</h2>
          <p className="text-sm text-muted-foreground">How I think and collaborate</p>
        </div>
      </div>

      <div className="surface mt-8 rounded-3xl p-6 sm:p-8">
        <p className="max-w-3xl text-base leading-8 text-muted-foreground">{about.description}</p>
        <dl className="mt-8 grid gap-x-8 gap-y-6 border-t border-border/80 pt-8 sm:grid-cols-2">
          {about.info.map((item) => (
            <div key={item.fieldName} className="grid gap-1">
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">{item.fieldName}</dt>
              <dd className="text-sm font-medium">{item.fieldValue}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default About;
