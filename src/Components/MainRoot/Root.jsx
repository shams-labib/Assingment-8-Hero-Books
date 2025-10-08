import React from 'react';
import Navber from '../FullDisplaySection/Navber';
import { Outlet } from 'react-router';
import Hero from '../FullDisplaySection/Hero';
import Footer from '../FullDisplaySection/Footer';

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
        </div>
    );
};

export default Root;