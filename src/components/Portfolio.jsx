import React from 'react';
import myuSync from '../assets/portfolio/myuSync.png';
import Gericht from '../assets/portfolio/Gericht.png';
import Netflix from '../assets/portfolio/Netflix.png';
import Password from '../assets/portfolio/Password.png';
import exercise from '../assets/portfolio/Exercise.png';
import Redux from '../assets/portfolio/Redux.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: exercise,
      href: 'https://github.com/singh-gurkawalbir/Gym_Exercises',
      href2: 'https://csb-2pkxvl-h5x0ddeqy-gurkawalbir.vercel.app',
    },
    {
      id: 2,
      src: myuSync,
      href: 'https://github.com/singh-gurkawalbir/myuSync',
      href2: 'https://myu-sync.web.app/',
    },
    {
      id: 3,
      src: Gericht,
      href: 'https://github.com/singh-gurkawalbir/Restaurant',
      href2: 'https://restaurant-nine-hazel.vercel.app/',
    },
    {
      id: 4,
      src: Netflix,
      href: 'https://github.com/singh-gurkawalbir/Netflix-final',
      href2: 'https://csb-uvmc2o-ma384ilui-gurkawalbir.vercel.app/',
    },
    {
      id: 5,
      src: Redux,
      href: 'https://github.com/singh-gurkawalbir/redux_example',
      href2: 'https://redux-example-six.vercel.app/',
    },
    {
      id: 6,
      src: Password,
      href: 'https://github.com/singh-gurkawalbir/password-generator',
      href2: 'https://password-generator-pied-phi.vercel.app/',
    },
  ];

  return (
    <div
      name='portfolio'
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, href, href2 }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img
                src={src}
                alt=''
                className='rounded-md duration-200 hover:scale-105'
              />
              <div className='flex items-center justify-center'>
                <a
                  href={href2} 
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                >
                  Demo
                </a>
                <a
                  href={href} 
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
