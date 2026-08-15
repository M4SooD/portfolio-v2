'use client';

import Image from 'next/image';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import type { Project } from '@/constants/work';
import WorkSliderButtons from './WorkSliderButton';

interface WorkSliderProps {
  projects: Project[];
  handleSlideChange: (swiper: SwiperType) => void;
}

const WorkSlider = ({ projects, handleSlideChange }: WorkSliderProps) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      onSlideChange={handleSlideChange}
      className="overflow-hidden rounded-3xl"
    >
      {projects.map((project) => (
        <SwiperSlide key={project.num} className="w-full">
          <div className="surface relative aspect-[16/11] overflow-hidden rounded-3xl p-2 sm:p-3">
            <div className="relative h-full overflow-hidden rounded-[1.25rem] bg-linear-to-br from-[#18212c] via-[#10151d] to-[#0c1016]">
              {project.image ? (
                <Image
                  src={project.image}
                  fill
                  preload={project.num === '01'}
                  quality={80}
                  className={project.imageFit === 'contain' ? 'object-contain p-14 sm:p-20' : 'object-cover'}
                  alt={`${project.title} project preview`}
                  sizes="(min-width: 1280px) 680px, (min-width: 1024px) 56vw, calc(100vw - 40px)"
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center p-8 text-center">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary">
                      {project.kind === 'professional' ? 'Professional work' : 'Interface study'}
                    </p>
                    <p className="mt-4 text-2xl font-semibold tracking-tight sm:text-4xl">{project.title}</p>
                    {project.role ? (
                      <p className="mt-3 text-sm text-muted-foreground">{project.role}</p>
                    ) : null}
                    <div className="mx-auto mt-6 h-px w-24 bg-linear-to-r from-transparent via-primary to-transparent" />
                  </div>
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 to-transparent" />
            </div>
          </div>
        </SwiperSlide>
      ))}
      <WorkSliderButtons
        containerStyles="absolute bottom-5 right-5 z-20 flex gap-2 sm:bottom-7 sm:right-7"
        btnStyles="grid size-11 place-items-center rounded-full border border-white/15 bg-black/65 text-white backdrop-blur-md transition hover:border-primary hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:border-white/8 disabled:bg-black/45 disabled:text-white/35"
      />
    </Swiper>
  );
};

export default WorkSlider;
