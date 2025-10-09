import React, { useEffect, useState } from 'react';
import Navber from '../FullDisplaySection/Navber';
import { Outlet, useLocation } from 'react-router';
import Hero from '../FullDisplaySection/Hero';
import Footer from '../FullDisplaySection/Footer';
import { ToastContainer } from 'react-toastify';
import { useNavigation } from 'react-router';
import Loader from '../../Pages/HomeSection/Loader';


const Root = () => {
    const location = useLocation();
     const [hideHero, setHideHero] = useState(false);
     
     const navigation = useNavigation();
     navigation.state

   useEffect(() => {
        if (location.pathname.startsWith('/view') || location.pathname === '/apps' || location.pathname === '/instalation') {
            setHideHero(true);
        } else {
            setHideHero(false);
        }
    }, [location]);
    


    return (
        <div>
            
            <div className='flex flex-col'>
                <Navber></Navber>
                { !hideHero && <Hero></Hero> }

                <div className='flex-1 container mx-auto min-h-screen'>
                     <Outlet context={{ setHideHero }}></Outlet>
                </div>
            </div>
            <Footer></Footer>
            <ToastContainer position='top-center' />
        </div>
    );
};

export default Root;
