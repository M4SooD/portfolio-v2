import { about } from '@/constants/resume';

const About = () => {
  return (
    <div className="flex flex-col gap-7.5">
      <h3 className="text-4xl font-bold">{about.title}</h3>
      <p className="max-w-150 text-white/60 mx-auto xl:mx-0">
        {about.description}
      </p>
      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-10 max-w-200 w-fit xl:w-full mx-auto xl:mx-0">
        {about.info.map((item) => {
          return (
            <li
              key={item.fieldName}
              className="flex items-center justify-start gap-4"
            >
              <span className="text-white/60 min-w-22.5 xl:min-w-30 shrink-0 text-left">
                {item.fieldName}
              </span>
              <span className="text-base sm:text-lg text-white">
                {item.fieldValue}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default About;
