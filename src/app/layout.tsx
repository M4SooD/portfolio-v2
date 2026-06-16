import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import StairTransition from '@/components/layout/StairTransition';
import PageTransition from '@/components/layout/PageTransition';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://m4sood-dev.vercel.app/'),

  title: {
    default: 'Masood Moosavi | Senior Front-End Developer',
    template: '%s | Masood Moosavi',
  },
  description:
    'Portfolio of Masood Moosavi, a Senior Front-End Engineer specializing in Next.js, React, TypeScript, and high-performance UI architecture.',

  keywords: [
    'Senior Front-End Engineer',
    'React Architecture',
    'Next.js Portfolio',
    'TypeScript Developer',
    'Web Performance Optimization',
    'Masood Moosavi',
    'Tailwind CSS',
    'Framer Motion',
  ],

  authors: [{ name: 'Masood Moosavi' }],
  creator: 'Masood Moosavi',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://m4sood-dev.vercel.app',
    title: 'Masood Moosavi | Senior Front-End Developer',
    description:
      'Explore my portfolio featuring highly performant, scalable user interfaces built with modern web technologies.',
    siteName: 'Masood Moosavi Portfolio',
    images: [
      {
        url: '/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Masood Moosavi - Senior Front-End Engineer',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
      </body>
    </html>
  );
}
