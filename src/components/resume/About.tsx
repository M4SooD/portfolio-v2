import { about } from '@/constants/resume';

const About = () => {
  return (
    <div className="flex flex-col gap-7.5">
      <h3 className="text-4xl font-bold">{about.title}</h3>
      <p className="max-w-150 text-white/60 mx-auto xl:mx-0">
        {about.description}
      </p>
      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-155 mx-auto xl:mx-0">
        {about.info.map((item, index) => {
          return (
            <li
              key={index}
              className="flex items-center justify-center xl:justify-start gap-4"
            >
              <span className="text-white/60">{item.fieldName}</span>
              <span className="text-xl">{item.fieldValue}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default About;
