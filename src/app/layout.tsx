import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Providers from './providers';
import Modal from '@/components/Modal';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'LOL Info',
  description: 'introduce lol champions, items, rotations',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased pt-14 w-full`}>
        <Header />
        <Providers>{children}</Providers>
        <Modal />
      </body>
    </html>
  );
}
