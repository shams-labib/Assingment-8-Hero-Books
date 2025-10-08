import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../MainRoot/Root';
import ErrorPage from '../ErrorPages/ErrorPage';
import AppsPage from '../../Pages/AllAppPages/AppsPage';
import InstalationPages from '../../Pages/InstalationPages';
import Home from '../../Pages/HomeSection/Home';
import ViewDetails from '../../Pages/HomeSection/ViewDetails';

export const Router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/apps',
                element:<AppsPage></AppsPage>
            },
            {
                path:'/instalation',
                element:<InstalationPages></InstalationPages>
            },
            {
                path:'/view/:id',
                element:<ViewDetails></ViewDetails>
            },
            {
                path:'*',
                element:<ErrorPage></ErrorPage>
            }
        ]
    }
])

