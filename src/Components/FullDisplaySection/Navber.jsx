import React from 'react';
import { Link, NavLink } from 'react-router';
import logoImg from '../../assets/logo.png'
import githubImg from '../../assets/github.png'

const Navber = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm md:px-[50px] px-4 py-3 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to={'/'}>Home</Link></li>
      <li>
       <Link to={'/apps'}>Apps</Link>
      </li>
      <li><Link to={'/instalation'}>Installation</Link></li>
      </ul>
    </div>
    <Link to={'/'} className="flex items-center text-xl font-bold bg-gradient-to-l from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"><span><img className='md:h-[40px] h-[20px] w-[20px] md:w-[40px]' src={logoImg} alt="" /></span>HERO.IO</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink className={({ isActive }) =>
    `relative pb-2 ${isActive ? "text-purple-800 after:w-full after:bg-[#632EE3] font-semibold" : "text-gray-600 after:w-0 after:bg-transparent"} 
    after:absolute after:bottom-0 after:h-[3px] after:transition-all after:duration-200`
  } to={'/'}>Home</NavLink></li>
      <li>
       <NavLink className={({ isActive }) =>
    `relative pb-2 ${isActive ? "text-purple-800 after:w-full after:bg-[#632EE3] font-semibold" : "text-gray-600 after:w-0 after:bg-transparent"} 
    after:absolute after:bottom-0 after:h-[3px] after:transition-all after:duration-200`
  } to={'/apps'}>Apps</NavLink>
      </li>
      <li><NavLink className={({ isActive }) =>
    `relative pb-2 ${isActive ? "text-purple-800 after:w-full after:bg-[#632EE3] font-semibold" : "text-gray-600 after:w-0 after:bg-transparent"} 
    after:absolute after:bottom-0 after:h-[3px] after:transition-all after:duration-200`
  } to={'/instalation'}>Installation</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to={'https://github.com/shams-labib'} className="btn  text-white bg-gradient-to-l from-[#632EE3] to-[#9F62F2]"><span><img src={githubImg} alt="" /></span> Contribute</Link>
  </div>
</div>
    );
};

export default Navber;