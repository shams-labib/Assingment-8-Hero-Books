import React from 'react';
import playStore from '../../assets/playstore.png'
import appsStore from '../../assets/appstore.png'
import heroImg from '../../assets/hero.png'
import { Link } from 'react-router';

const Hero = () => {
    return (
       <div className="hero">
  <div className="flex flex-col items-center justify-center my-10  ">
    <h1 className='md:text-[72px] text-[50px] font-semibold m-0 leading-tight'>We Build </h1>
    <h1 className='md:text-[72px] text-[50px] font-semibold m-0 leading-tight'><span className='bg-gradient-to-l from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps </h1>
    <p className='mt-2 text-center px-2 md:px-0'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.</p>
    <p className='text-center px-2 md:px-0'> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
    <div className='flex gap-3 items-center justify-center mt-5'>
      <Link to={'https://play.google.com/store/games?hl=enl'} className='btn font-semibold'><span><img className='w-[25px] h-[25px]' src={playStore} alt="" /></span>Google Play</Link>
      <Link to={'https://www.apple.com/app-store/'} className='btn font-semibold'><span><img className='w-[25px] h-[25px]' src={appsStore} alt="" /></span>App Store</Link>
    </div>
    <div className='flex flex-col items-center justify-center mt-8'>
      <div className='flex items-center justify-center'><img className='w-[90%] h-[90%]' src={heroImg} alt="" /></div>
      <div className=' w-screen  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-[60px]'>
          <h1 className='text-white text-5xl font-semibold text-center'>Trusted by Millions, Built for You</h1>

         <div className='grid md:grid-cols-3 grid-cols-1 px-10 mt-8 gap-10'>
           <div className='text-white text-center cursor-pointer  bg-gradient-to-tr from-purple-500 via-pink-400 to-yellow-400 shadow-md rounded-2xl p-5 transform transition duration-500 hover:scale-100 hover:shadow-2xl'>
            <p>Total Downloads</p>
            <h1  className='text-[70px] font-bold'>29.6M</h1>
            <p>21% more than last month</p>
          </div>
           <div className='text-white text-center cursor-pointer bg-gradient-to-tr from-purple-500 via-pink-400 to-yellow-400 shadow-md rounded-2xl p-5 transform transition duration-500 hover:scale-100 hover:shadow-2xl'>
            <p>Total Reviews</p>
            <h1  className='text-[70px] font-bold'>906K</h1>
            <p>46% more than last month</p>
          </div>
           <div className='text-white text-center cursor-pointer bg-gradient-to-tr from-purple-500 via-pink-400 to-yellow-400 shadow-md rounded-2xl p-5 transform transition duration-500 hover:scale-100 hover:shadow-2xl'>
            <p>Active Apps</p>
            <h1  className='text-[70px] font-bold'>28+</h1>
            <p>50+ more will Launch</p>
          </div>
         </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Hero;