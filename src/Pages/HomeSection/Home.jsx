import React from 'react';
import useCustom from '../../useHooks/useCustom';
import HomePages from './HomePages';
import { Link } from 'react-router';

const Home = () => {

    const data = useCustom();
    const appsData = data.slice(0,8);

    return (
        <div className='my-10'>
            <div className='text-center space-y-2'>
                <h1 className='text-4xl font-bold'>Trending Apps</h1>
            <p className='px-8 md:px-0 lg:px-0'>Explore All Trending Apps on the Market developed by us</p>
            </div>
               <div className='grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-8 mt-10 pb-10 p-8 md:p-0 lg:p-0'>
                {
                    appsData.map((card, index) => <HomePages key={index} card={card} ></HomePages>)
                }
               </div>
               
              <div className='flex items-center justify-center mt-10'>
                 <Link to={'/apps'} className='btn px-[20px] p-[12px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Show All Card</Link>
              </div>
          
        </div>
    );
};

export default Home;