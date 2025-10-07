import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../MainRoot/Root';
import ErrorPage from '../ErrorPages/ErrorPage';
import Home from '../../Pages/Home';
import AppsPage from '../../Pages/AppsPage';
import InstalationPages from '../../Pages/InstalationPages';

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
            }
        ]
    }
])

