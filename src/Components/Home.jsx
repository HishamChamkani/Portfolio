import React from 'react';
import Photo from '../Photo.png';

const Home = () => {
  return (
    <div className='bg-MyDark flex flex-col md:flex-row w-auto pb-16 items-center'>
      <div className='md:ml-12 md:mt-28 flex justify-center'>
        <img src={Photo} alt="Profile Photo" className='h-48 w-48 rounded-full' />
      </div>
      <div className='md:ml-12 text-center md:text-left text-MySalat font-Montserrat my-8 md:my-0'>
        <h1 className='text-white text-5xl mb-3'>Hisham Khan</h1>
        <h2 className='text-2xl mb-4'>Full Stack Developer</h2>
        <p className='text-white text-lg'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem maxime minus officia dicta suscipit
          <br />
          aliquam iusto veniam voluptate quis, blanditiis, saepe fugit eius omnis voluptatem laboriosam voluptas,
          <br />
          ipsam ab temporibus.
        </p>
      </div>
    </div>
  );
};

export default Home;
