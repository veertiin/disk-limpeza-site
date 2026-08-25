import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Disk Limpeza | Higienização de Estofados',
  description: 'Limpeza profissional de sofás, poltronas e colchões em Cruz, Preá, Jijoca e região.',
  openGraph: {
    title: 'Disk Limpeza | Seu estofado limpo, sua casa renovada',
    description: 'Higienização profissional em Cruz, Preá, Jijoca e região.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Disk Limpeza' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disk Limpeza | Higienização de Estofados',
    description: 'Seu estofado limpo. Sua casa renovada.',
    images: ['/og.png'],
  },
  icons: { icon: '/logo-disk-limpeza.png' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
