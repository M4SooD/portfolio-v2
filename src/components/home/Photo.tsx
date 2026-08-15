import Image, { getImageProps } from 'next/image';
import { Code2, Gauge, Layers3 } from 'lucide-react';
import profilePhoto from '../../../public/assets/photo1.png';

const photoSizes =
  '(min-width: 1280px) 472px, (min-width: 1024px) 42vw, (min-width: 512px) 472px, calc(100vw - 40px)';

const Photo = () => {
  const {
    props: { sizes, srcSet },
  } = getImageProps({
    src: profilePhoto,
    alt: '',
    fill: true,
    quality: 92,
    sizes: photoSizes,
  });

  return (
    <div className="relative mx-auto max-w-118 lg:-translate-y-8 lg:ml-auto xl:-translate-y-10">
      <link
        rel="preload"
        as="image"
        imageSrcSet={srcSet}
        imageSizes={sizes}
        media="(min-width: 1024px)"
      />
      <div className="absolute -inset-7 -z-10 rounded-full bg-primary/10 blur-3xl" />
      <div className="surface relative aspect-[0.92] overflow-hidden rounded-[2rem] bg-card/90 p-3 dark:bg-card/75">
        <div className="relative h-full overflow-hidden rounded-[1.4rem] bg-linear-to-br from-[#d6e6e0] via-[#edf5f2] to-[#bfd5cd] dark:from-[#1b2530] dark:via-[#151d26] dark:to-[#0d1118]">
          <div className="absolute inset-x-0 top-0 z-10 h-32 bg-linear-to-b from-white/30 to-transparent dark:from-black/20" />
          <Image
            src={profilePhoto}
            fill
            quality={92}
            placeholder="blur"
            alt="Masoud Mousavi, Senior Front-End Engineer"
            className="object-cover object-[60%_center]"
            sizes={photoSizes}
          />
          <div className="absolute inset-x-5 bottom-5 z-20 rounded-2xl border border-border/90 bg-card/90 p-4 text-foreground shadow-xl backdrop-blur-xl dark:border-white/12 dark:bg-[#0b0e13]/85 dark:text-white">
            <p className="text-sm font-semibold">Engineering with product context</p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground dark:text-white/65">
              From architecture and accessibility to the final interaction detail.
            </p>
          </div>
        </div>
      </div>

      <div className="surface absolute -left-4 top-[18%] hidden items-center gap-3 rounded-2xl p-3 sm:flex lg:-left-9">
        <span className="grid size-9 place-items-center rounded-xl bg-primary/12 text-primary">
          <Gauge aria-hidden="true" className="size-4" />
        </span>
        <span className="text-xs font-medium">Performance-first</span>
      </div>
      <div className="surface absolute -right-4 top-[36%] hidden items-center gap-3 rounded-2xl p-3 sm:flex lg:-right-7">
        <span className="grid size-9 place-items-center rounded-xl bg-cyan-500/10 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-300">
          <Layers3 aria-hidden="true" className="size-4" />
        </span>
        <span className="text-xs font-medium">Scalable systems</span>
      </div>
      <div className="surface absolute -left-2 bottom-[18%] hidden items-center gap-3 rounded-2xl p-3 sm:flex lg:-left-7">
        <span className="grid size-9 place-items-center rounded-xl bg-violet-500/10 text-violet-700 dark:bg-violet-400/10 dark:text-violet-300">
          <Code2 aria-hidden="true" className="size-4" />
        </span>
        <span className="text-xs font-medium">Clean TypeScript</span>
      </div>
    </div>
  );
};

export default Photo;
