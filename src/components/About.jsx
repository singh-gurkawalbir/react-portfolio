import React from 'react';

const About = () => {
  return (
    <div
      name='about'
      className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>

        <p className='text-xl mt-20 font-semibold text-gray-400'>
          Greetings! my name is Gurkawalbir Singh, I'm dedicated fullstack
          developer passionate about crafting seamless and engaging user
          experiences. With a keen eye for detail and a love for clean,
          efficient code, I specialize in bringing designs to life using
          cutting-edge technologies. I believe in the importance of not just
          writing code but crafting experiences. Every line of code I write is
          aimed at delivering not just functionality but a delightful user
          journey.
        </p>

        <br />

        <p className='text-xl font-semibold text-gray-400'>
          I've had the pleasure of contributing to a variety of projects, where
          I've honed my skills in creating dynamic and responsive web
          applications. My journey has been a continuous exploration of new
          technologies and methodologies, allowing me to stay at the forefront
          of web development.
          <br />
          Currently, I'm immersed in new projects. Whether it's optimizing
          performance, exploring new libraries, or diving into the latest
          industry trends, I'm committed to staying ahead of the curve.
          <br />
          <br />
          I'm always open to collaborating with fellow developers, designers,
          and enthusiasts. If you share a passion for frontend development or
          have exciting projects in mind, let's connect! Feel free to [provide
          contact details or links to your professional profiles]. Thank you for
          exploring my portfolio, and I'm excited about the possibilities that
          lie ahead!
        </p>
      </div>
    </div>
  );
};

export default About;
