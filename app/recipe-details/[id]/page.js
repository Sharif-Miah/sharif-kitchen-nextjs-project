'use client';
import { useParams } from 'next/navigation';
import categoriesData from '@/data/recipes.json';
import Image from 'next/image';

const RecipeDetailsPage = () => {
  const { id } = useParams();

  const product = categoriesData.find((prod) => prod.category_id === id);

  const { title, thumnail, author, cooking_time, published_date, description } =
    product;

  return (
    <main class='container mx-auto px-4 py-8'>
      <article>
        <h1 class='text-4xl md:text-5xl font-bold mb-6'>{title}</h1>
        <div class='flex items-center space-x-4 mb-6'>
          <Image
            src={thumnail}
            alt='Author'
            class='w-8 h-8 rounded-full'
            height={100}
            width={100}
          />
          <span class='text-gray-600'>{author}</span>
          <span class='text-gray-400'>|</span>
          <span class='text-gray-600'>{cooking_time}</span>
          <span class='text-gray-400'>|</span>
          <span class='text-gray-600'>{published_date}</span>
        </div>
        <div class='flex justify-between items-center mb-8'>
          <div class='flex space-x-4'>
            <button class='bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-5 w-5 inline-block mr-2'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path d='M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z' />
              </svg>
              Share
            </button>
            <button class='bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-5 w-5 inline-block mr-2'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' />
              </svg>
              Save
            </button>
          </div>
        </div>
        <Image
          src={thumnail}
          alt='Cooking Image'
          class='w-full h-auto mb-8 rounded-lg'
          height={100}
          width={100}
        />
        <p class='text-gray-600 mb-8'>
          One thing I learned living in the Catskills section of Brooklyn, NY
          was how to cook a good Italian meal. Here is a recipe I created after
          having this dish in a restaurant. Enjoy!
        </p>

        <h2 class='text-3xl font-bold mb-4'>Before you begin</h2>
        <p class='mb-8'>
          Food qualities braise chicken cuts bowl through slices butternut
          snack. Tender meat juicy dinners. One-pot low heat plenty of time
          adobo fat raw soften fruit. sweet renders bone-in marrow richness
          kitchen, fricassee basted putter.
        </p>

        <h2 class='text-3xl font-bold mb-4'>Here are the basics</h2>
        <p class='mb-8'>{description}</p>

        <blockquote class='text-3xl font-bold italic text-center my-12 px-4'>
          One cannot think well, love well, sleep well, if one has not dined
          well.
        </blockquote>
        <p class='text-center text-gray-600 mb-12'>
          — Virginia Woolf, A Room of Ones Own
        </p>

        <h2 class='text-3xl font-bold mb-4'>In the kitchen</h2>
        <p class='mb-8'>{description}</p>

        <Image
          src={thumnail}
          alt='Cooking in kitchen'
          class='w-full h-auto mb-8 rounded-lg max-w-xl mx-auto'
          height={100}
          width={100}
        />

        <p class='mb-8'>
          Juicy meatballs brisket slammin baked shoulder. Juicy smoker soy sauce
          burgers brisket. polenta mustard hunk greens. Wine technique snack
          skewers chuck excess. Oil heat slowly. slices natural delicious, set
          aside magic tbsp skillet, bay leaves brown centerpiece. fruit soften
          edges frond slices onion snack pork steem on wines excess technique
          cup; Cover smoker soy sauce.
        </p>
      </article>

      <section class='my-12'>
        <h2 class='text-3xl font-bold mb-8'>You might also like</h2>
        <div class='grid grid-cols-2 md:grid-cols-4 gap-6'>
          <div>
            <Image
              src={thumnail}
              alt='Recipe 1'
              class='w-full h-60 object-cover rounded-lg mb-2'
              height={100}
              width={100}
            />
            <h3 class='font-semibold'>Strawberries and Cream Cake</h3>
          </div>
          <div>
            <Image
              src={thumnail}
              alt='Recipe 2'
              class='w-full h-60 object-cover rounded-lg mb-2'
              height={100}
              width={100}
            />
            <h3 class='font-semibold'>No-Bake Cheesecake</h3>
          </div>
          <div>
            <Image
              src={thumnail}
              alt='Recipe 3'
              class='w-full h-60 object-cover rounded-lg mb-2'
              height={100}
              width={100}
            />
            <h3 class='font-semibold'>Peanut Butter Banana Cake</h3>
          </div>
          <div>
            <Image
              src={thumnail}
              alt='Recipe 4'
              class='w-full h-60 object-cover rounded-lg mb-2'
              height={100}
              width={100}
            />
            <h3 class='font-semibold'>Banana Bread Cake</h3>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecipeDetailsPage;
