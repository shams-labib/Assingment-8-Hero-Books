import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';

const Footer = () => {
    return (
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <aside>
    <p>
      <div>
        <Link to={'/'} className="flex items-center text-xl font-bold bg-gradient-to-l from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"><span><img className='md:h-[40px] h-[20px] w-[20px] md:w-[40px]' src={logo} alt="" /></span>HERO.IO</Link>
      </div>
      <br />
      <p className='font-semibold'>Empowering your productivity with innovative apps, connecting <br /> people, ideas, and technology seamlessly every day.</p>
    </p>
  </aside>
  <nav>
    <h6 className="text-lg font-bold">Services</h6>
    <a className="font-semibold">Branding</a>
    <a className="font-semibold">Design</a>
    <a className="font-semibold">Marketing</a>
    <a className="font-semibold">Advertisement</a>
  </nav>
  <nav>
    <h6 className="text-lg font-bold">Company</h6>
    <a className="font-semibold">About us</a>
    <a className="font-semibold">Contact</a>
    <a className="font-semibold">Jobs</a>
    <a className="font-semibold">Press kit</a>
  </nav>
  <nav>
    <h6 className="text-lg font-bold">Legal</h6>
    <a className="font-semibold">Terms of use</a>
    <a className="font-semibold">Privacy policy</a>
    <a className="font-semibold">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;