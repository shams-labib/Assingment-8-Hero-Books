import React from 'react';
import LoadingImg from '../../assets/logo.png'

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20">
           
                  <img
                    src={LoadingImg}
                    alt="Loading..."
                    className="w-full h-full animate-spin" 
                  />
                  <p className="mt-3 text-gray-600 font-medium">Loading...</p>
                </div>
    );
};

export default Loader;