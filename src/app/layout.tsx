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
});

export const metadata: Metadata = {
  title: {
    default: 'Masood Moosavi | Creative Front-End Developer',
    template: '%s | Masood Moosavi',
  },
  description:
    'Portfolio of Masood Moosavi, a Senior Front-End Developer specializing in Next.js, React, Tailwind CSS, and modern web animations.',

  keywords: [
    'Frontend Developer',
    'React Developer',
    'Next.js Portfolio',
    'Masood Moosavi',
    'Web Developer Iran',
    'Tailwind CSS',
    'Framer Motion',
  ],

  authors: [{ name: 'Masood Moosavi' }],
  creator: 'Masood Moosavi',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://masood-portfolio.vercel.app',
    title: 'Masood Moosavi | Creative Front-End Developer',
    description:
      'Check out my portfolio featuring modern web technologies and creative designs.',
    siteName: 'Masood Moosavi Portfolio',
    // images: [
    //   {
    //     url: "/assets/og-image.png", // (اختیاری) یه عکس از سایتت بگیر بذار اینجا که لینک میدی عکسش بیاد
    //     width: 1200,
    //     height: 630,
    //     alt: "Masood Moosavi Portfolio",
    //   },
    // ],
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
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
