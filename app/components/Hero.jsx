'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import categoriesData from '@/data/recipes.json';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const [recipies, setRecipies] = useState(categoriesData);
  const router = useRouter();

  const recipi = recipies.slice(0, 1);

  const handleClickRecipi = (reci) => {
    router.push(`/category/recipe/${reci.category_id}`);
  };

  return (
    <section className='mb-16 bg-orange-50'>
      {recipi.map((reci) => (
        <div
          key={reci.category_id}
          className='grid md:grid-cols-2 gap-8 items-center'>
          <div>
            <Image
              src={`/thumbs/${reci.thumbnail}`}
              alt='Mighty Super Cheesecake'
              className='w-full h-[450px] object-cover rounded-lg'
              width={100}
              height={100}
            />
          </div>
          <div>
            <h1 className='text-4xl font-bold mb-4'>{reci.title}</h1>
            <p className='text-gray-600 mb-4'>{reci.description}</p>
            <button
              onClick={() => handleClickRecipi(reci)}
              className='bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600'>
              View Recipe
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
