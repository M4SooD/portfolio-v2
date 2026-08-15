import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://m4sood-dev.vercel.app/'),

  title: {
    default: 'Masoud Mousavi | Senior Front-End Engineer',
    template: '%s | Masoud Mousavi',
  },
  description:
    'Portfolio of Masoud Mousavi, a Senior Front-End Engineer specializing in Next.js, React, TypeScript, and high-performance UI architecture.',

  keywords: [
    'Senior Front-End Engineer',
    'React Architecture',
    'Next.js Portfolio',
    'TypeScript Developer',
    'Web Performance Optimization',
    'Masoud Mousavi',
    'Tailwind CSS',
    'Real-Time Web Applications',
    'WebSockets',
  ],

  authors: [{ name: 'Masoud Mousavi' }],
  creator: 'Masoud Mousavi',
  category: 'technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://m4sood-dev.vercel.app',
    title: 'Masoud Mousavi | Senior Front-End Engineer',
    description:
      'Senior front-end case studies across real-time fintech, SaaS migrations, performance, testing, and design systems.',
    siteName: 'Masoud Mousavi Portfolio',
    images: [
      {
        url: '/assets/preview.jpg',
        width: 1409,
        height: 846,
        alt: 'Masoud Mousavi - Senior Front-End Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Masoud Mousavi | Senior Front-End Engineer',
    description:
      'Senior Front-End Engineer building fast, scalable, and accessible product experiences.',
    images: ['/assets/preview.jpg'],
  },
  alternates: {
    canonical: '/',
  },
};

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f8f7' },
    { media: '(prefers-color-scheme: dark)', color: '#090b10' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="masoud-portfolio-theme"
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="fixed left-4 top-4 z-100 -translate-y-24 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground transition-transform focus:translate-y-0"
          >
            Skip to content
          </a>
          <Header />
          <main id="main-content" tabIndex={-1} className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
