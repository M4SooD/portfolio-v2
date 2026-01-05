import { experience } from '@/constants/resume';
import { ScrollArea } from '@/components/ui/scroll-area';

const Experience = () => {
  return (
    <div className="flex flex-col gap-7.5 text-center xl:text-left">
      <h3 className="text-4xl font-bold">{experience.title}</h3>
      <p className="max-w-150 text-white/60 mx-auto xl:mx-0">
        {experience.description}
      </p>
      <ScrollArea className="h-100">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7.5">
          {experience.items.map((item, index) => {
            return (
              <li
                key={index}
                className="bg-[#232329] h-46 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
              >
                <span className="text-accent">{item.duration}</span>
                <h3 className="text-xl max-w-65 min-h-15 text-center lg:text-left">
                  {item.position}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  <p className="text-white/60">{item.company}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default Experience;
