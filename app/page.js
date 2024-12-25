import Image from 'next/image';
import Hero from './components/Hero';
import SuperDelicious from './components/SuperDelicious/SuperDelicious';
import PopularCategories from './components/Popular-Categories/PopularCategories';
import Deliciousness from './components/Deliciousness';
import HandPicked from './components/Hand-Picked/HandPicked';
import LetestRecipi from './components/LetestRecipi/LetestRecipi';

export const metadata = {
  title: 'Sharif Kitchen || Home',
  description: 'Sharif Kitchen next js app is home page.',
};

export default function Home() {
  return (
    <main className='container mx-auto px-4 mt-[100px]'>
      <Hero />
      <SuperDelicious />
      <PopularCategories />
      <Deliciousness />
      <HandPicked />
      <LetestRecipi />
    </main>
  );
}
