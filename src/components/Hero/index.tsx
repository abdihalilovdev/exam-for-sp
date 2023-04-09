import React from 'react';

const Hero = () => {
    return (
        <div id='hero'>
          <div className='pt-44 pl-32'>
              <h1 className='text-white text-[38px] flex justify-content-start'>Первый курс <br/>
                  по компьютерной сборке</h1>
              <div className='flex'>
                  <div className='block py-6 px-8 bg-gray-700/40 mx-4'>
                      <h1 className='text-white text-[26px]'>18</h1>
                      <p className='text-white text-[14px]'>Дней</p>
                  </div>
                  <div className='block py-6 px-8 bg-gray-700/40 mx-4'>
                      <h1 className='text-white text-[26px]'>18</h1>
                      <p className='text-white text-[14px]'>Часов</p>
                  </div>
                  <div className='block py-6 px-8 bg-gray-700/40 mx-4'>
                      <h1 className='text-white text-[26px]'>18</h1>
                      <p className='text-white text-[14px]'>Минут</p>
                  </div>
                  <div className='block py-6 px-8 bg-gray-700/40 mx-4'>
                      <h1 className='text-white text-[26px]'>18</h1>
                      <p className='text-white text-[14px]'>Секунд</p>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default Hero;