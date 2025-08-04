import './globals.css';
import { Geist, Geist_Mono, Pacifico } from 'next/font/google';
import Header from '../components/layout/Header'; 
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
const pacifico = Pacifico({ weight: '400', subsets: ['latin'], variable: '--font-pacifico' });

export const metadata = {
  title: 'PMD Solutions',
  description: 'Leading consulting firm',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}>
        <Header /> 
        {children}
      </body>
    </html>
  );
}
