import type { Metadata } from 'next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Experience from '@/components/resume/Experience';
import Education from '@/components/resume/Education';
import Skills from '@/components/resume/Skills';
import About from '@/components/resume/About';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Professional experience, technical skills, education, and background of Senior Front-End Engineer Masoud Mousavi.',
  alternates: { canonical: '/resume' },
};

export default function ResumePage() {
  return (
    <section className="section-shell">
      <div className="container">
        <div className="max-w-3xl">
          <p className="eyebrow">Experience</p>
          <h1 className="page-title mt-4">Building better products—and stronger front-end teams.</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            A practical track record across crypto, social products, and agency work,
            with an emphasis on performance, maintainability, and clear collaboration.
          </p>
        </div>

        <Tabs defaultValue="experience" className="mt-12 grid gap-8 lg:grid-cols-[240px_1fr] lg:items-start">
          <TabsList className="surface grid w-full grid-cols-2 gap-2 rounded-2xl p-2 lg:sticky lg:top-28 lg:flex lg:flex-col">
            <TabsTrigger className="min-w-0" value="experience">Experience</TabsTrigger>
            <TabsTrigger className="min-w-0" value="skills">Skills</TabsTrigger>
            <TabsTrigger className="min-w-0" value="about">About</TabsTrigger>
            <TabsTrigger className="min-w-0" value="education">Education</TabsTrigger>
          </TabsList>

          <div className="min-w-0">
            <TabsContent value="experience"><Experience /></TabsContent>
            <TabsContent value="skills"><Skills /></TabsContent>
            <TabsContent value="about"><About /></TabsContent>
            <TabsContent value="education"><Education /></TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
