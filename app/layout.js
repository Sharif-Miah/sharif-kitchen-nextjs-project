import localFont from 'next/font/local';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Suspense } from 'react';
import Loading from './components/Loading';

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

export const metadata = {
  title: 'Sharif Kitchen',
  description: 'Sharif Kitchen next js app.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className='max-w-7xl mx-auto'>
          <Header />
          <Suspense fallback={<Loading />}>
            <div className='mb-10 mt-20'>{children}</div>
          </Suspense>
          <Footer />
        </div>
      </body>
    </html>
  );
}
