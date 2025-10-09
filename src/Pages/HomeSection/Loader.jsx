import React from 'react';
import LoadingImg from '../../assets/logo.png';

const Loader = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <p className="mt-3 text-gray-600 text-2xl font-medium flex items-center">
        Lo
        <img
          src={LoadingImg}
          alt="Loading..."
          className="w-7 h-7 mx-1 animate-spin inline-block"
        />
        ding
      </p>
    </div>
  );
};

export default Loader;
