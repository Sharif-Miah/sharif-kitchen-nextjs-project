import Image from 'next/image';
import Hero from './components/Hero';
import SuperDelicious from './components/SuperDelicious/SuperDelicious';

export const metadata = {
  title: 'Sharif Kitchen || Home',
  description: 'Sharif Kitchen next js app is home page.',
};

export default function Home() {
  return (
    <main className='container mx-auto px-4 mt-[100px]'>
      <Hero />
      <SuperDelicious />
    </main>
  );
}
