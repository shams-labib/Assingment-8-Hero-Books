import React from 'react';
import Navber from '../FullDisplaySection/Navber';
import { Outlet } from 'react-router';
import Hero from '../FullDisplaySection/Hero';
import Footer from '../FullDisplaySection/Footer';

const Root = () => {
    return (
        <div className='flex flex-col'>
            <Navber></Navber>
            {/* <Hero></Hero> */}
            <div className='flex-1 min-h-screen container mx-auto' >
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;