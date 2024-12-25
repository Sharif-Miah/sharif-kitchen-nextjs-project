import categories from '@/data/categories.json';
import Image from 'next/image';
export const metadata = {
  title: 'Sharif Kitchen ||  Categories',
  description: 'Sharif Kitchen next js app is  Categories page.',
};

const CategoriesPage = () => {
  return (
    <main className='container mx-auto px-4 py-8 mt-[100px]'>
      <h1 className='text-5xl font-bold mb-12'>Categories</h1>

      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'>
        {categories.map((recipi) => (
          <div
            key={recipi.name}
            className='text-center'>
            <div className='overflow-hidden rounded-full mb-4 relative cursor-pointer'>
              <Image
                src={recipi.image}
                alt='Seafood'
                className='w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110'
                width={100}
                height={100}
              />
            </div>
            <h2 className='text-xl font-semibold'>{recipi.name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CategoriesPage;
