import React from 'react';
import ErrorImg from '../../assets/App-Error.png'
import { Link } from 'react-router';

const DataNotFoundPage = () => {
    return (
        <div className='flex flex-col items-center justify-center my-[70px]'>
                    <div>
                        <img src={ErrorImg} alt="" />
                    </div>
                    <div className='text-center space-y-3 mt-10'>
                        <h1 className='text-4xl font-semibold'>OPPS!! APP NOT FOUND</h1>
                        <p>The App you are requesting is not found on our system.  please try another apps</p>
                        <Link to={'/apps'} className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-7'>Go Back</Link>
                    </div>
                </div>
    );
};

export default DataNotFoundPage;