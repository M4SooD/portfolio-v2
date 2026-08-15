import type { Metadata } from 'next';
import { Clock3, Mail, MapPin } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Masoud Mousavi about senior front-end engineering opportunities, product development, or UI architecture.',
  alternates: { canonical: '/contact' },
};

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'masoud.mousavi.dev@gmail.com',
    href: 'mailto:masoud.mousavi.dev@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Tehran, Iran · Remote-friendly',
  },
  {
    icon: Clock3,
    label: 'Response time',
    value: 'Usually within 1–2 business days',
  },
];

export default function ContactPage() {
  return (
    <section className="section-shell">
      <div className="container">
        <div className="max-w-3xl">
          <p className="eyebrow">Start a conversation</p>
          <h1 className="page-title mt-4">Let&apos;s build something people enjoy using.</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            I&apos;m interested in senior front-end roles, ambitious product teams,
            and engineering problems where thoughtful UI architecture makes a difference.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <aside className="surface rounded-3xl p-6 sm:p-8">
            <p className="text-sm font-semibold">Contact details</p>
            <ul className="mt-7 space-y-6">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                const value = item.href ? (
                  <a className="transition-colors hover:text-primary" href={item.href}>
                    {item.value}
                  </a>
                ) : (
                  item.value
                );

                return (
                  <li key={item.label} className="flex gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon aria-hidden="true" className="size-4" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">{item.label}</p>
                      <p className="mt-1 text-sm leading-6">{value}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 rounded-2xl border border-primary/15 bg-primary/6 p-5">
              <p className="text-sm font-semibold text-primary">Currently available</p>
              <p className="mt-2 text-xs leading-6 text-muted-foreground">
                Open to remote senior front-end positions and selected freelance collaborations.
              </p>
            </div>
          </aside>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
