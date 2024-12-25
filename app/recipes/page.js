'use client';
import popularProduct from '@/data/categories.json';
import Image from 'next/image';
import { useState } from 'react';

const RecipesPage = () => {
  const [popularProucts, setPopularProucts] = useState(popularProduct);

  return (
    <main class='container mx-auto px-4 py-8 mt-[100px]'>
      <div class='flex justify-between items-center mb-8'>
        <div>
          <h1 class='text-4xl font-bold mb-2'>
            Desserts{' '}
            <span class='text-gray-500 text-2xl font-normal'>
              ({popularProucts.length} Recipes)
            </span>
          </h1>
          <p class='text-gray-600'>
            One thing I learned living in the Canarsie section of Brooklyn, NY
            was how to cook a good Italian meal. Here is a recipe I created
            after having this dish in a restaurant. Enjoy!
          </p>
        </div>
      </div>

      <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {popularProucts.map((product) => (
          <div
            key={product.name}
            class='bg-white rounded-lg overflow-hidden shadow-md'>
            <Image
              src={product.image}
              alt='Decadent Raspberry and Cream Cake'
              class='w-full h-48 object-cover'
              width={100}
              height={100}
            />
            <div class='p-4'>
              <h2 class='font-semibold text-lg mb-2'>{product.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default RecipesPage;
