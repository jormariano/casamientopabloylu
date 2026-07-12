import './globals.css';
import { Montserrat } from 'next/font/google';
import { Metadata } from 'next';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lucas y Pablo',
  description: 'Casamiento de Lucas y Pablo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
