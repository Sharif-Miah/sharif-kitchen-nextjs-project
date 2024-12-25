'use client';
import recipesformdata from '@/data/recipes.json';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LetestRecipi = () => {
  const [recipes, setRecipes] = useState(recipesformdata);
  const router = useRouter();

  const today = new Date().toISOString().split('T')[0];

  const filteredRecipes = recipes.filter(
    (recipe) => recipe.published_date <= today
  );

  const handleClick = (recipe) => {
    router.push(`/recipe-details/${recipe.category_id}`);
  };

  return (
    <section class='mb-16'>
      <h2 class='text-3xl font-bold mb-8'>Latest Recipes</h2>

      <div class='grid md:grid-cols-4 gap-8'>
        {filteredRecipes.slice(0, 4).map((recipe) => (
          <div key={recipe.category_id}>
            <button onClick={() => handleClick(recipe)}>
              <Image
                src={`/thumbs/${recipe.thumbnail}`}
                alt='Strawberry Cream'
                class='w-full h-[300px] object-cover rounded-lg mb-4'
                width={100}
                height={100}
              />
              <h3 class='text-lg font-semibold mb-2'>
                {recipe.published_date}
              </h3>
              <p class='text-gray-600'>{recipe.title}</p>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LetestRecipi;
