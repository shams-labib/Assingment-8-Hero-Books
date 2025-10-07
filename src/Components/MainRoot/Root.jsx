import React from 'react';
import Navber from '../FullDisplaySection/Navber';
import { Outlet } from 'react-router';
import Hero from '../FullDisplaySection/Hero';
import Footer from '../FullDisplaySection/Footer';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Hero></Hero>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;