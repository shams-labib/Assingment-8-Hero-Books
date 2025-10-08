import React from 'react';
import Navber from '../FullDisplaySection/Navber';
import { Outlet } from 'react-router';
import Hero from '../FullDisplaySection/Hero';
import Footer from '../FullDisplaySection/Footer';
 import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <div className='flex flex-col'>
            <Navber></Navber>
            {/* <Hero></Hero> */}
            <div className='flex-1 container mx-auto' >
                <Outlet></Outlet>
            </div>
        </div>
        <Footer></Footer>

        <ToastContainer position='top-center' />
        </div>
    );
};

export default Root;