'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import popularProduct from '@/data/categories.json';
import Link from 'next/link';

const PopularCategories = () => {
  const [products, setProducts] = useState(popularProduct);

  return (
    <section className='mb-16'>
      <div className='flex justify-between items-top'>
        <h2 className='text-3xl font-bold mb-8'>Popular Categories</h2>
        <a
          href='./category.html'
          className='text-orange-500'>
          View All
        </a>
      </div>
      <div className='grid grid-cols-3 md:grid-cols-6 gap-4'>
        {products.slice(0, 6).map((product) => (
          <Link
            href='/recipes'
            key={product.name}>
            <div className='cursor-pointer text-center group'>
              <div className='overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto'>
                <Image
                  src={product.image}
                  alt='Breakfast'
                  className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                  width={100}
                  height={100}
                />
              </div>
              <p className='transition-transform duration-300 group-hover:scale-105'>
                {product.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
