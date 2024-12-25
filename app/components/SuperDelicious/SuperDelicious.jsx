'use client';

import categoriesData from '@/data/recipes.json';
import { useState } from 'react';
import SingleData from './SingleData';

const SuperDelicious = () => {
  const [categories, setCategories] = useState(categoriesData);

  const sortingData = categories
    .sort((a, b) => b.rating_count - a.rating_count)
    .slice(0, 3);

  return (
    <section
      class='mb-16'
      id='super_delicious'>
      <h2 class='text-3xl font-bold mb-8'>Super Delicious</h2>
      <div class='grid md:grid-cols-3 gap-8'>
        {sortingData.map((category) => (
          <SingleData
            key={category.category_id}
            category={category}
          />
        ))}
      </div>
    </section>
  );
};

export default SuperDelicious;
