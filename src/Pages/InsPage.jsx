import React from 'react';
import dowLoadsImg from '.././assets/icon-downloads.png'
import star from '.././assets/icon-ratings.png'


const InsPage = ({data, handleRemove}) => {
   

    return (
        <div className='bg-white shadow-md p-4 rounded-xl mt-4 flex justify-between items-center'>
                <div>
                   <div className='flex gap-5'>
                     <img className='w-[80px] h-[80px] rounded-xl' src={data.image} alt="" />
                     <div className='flex flex-col items-start justify-center'>
                        <p>{data.title}</p>
                        <div className='flex gap-3 justify-center items-center'>
                            <span className='flex items-center text-green-400 gap-1'><img className='w-[15px] h-[15px]' src={dowLoadsImg} alt="" />{data.downloads}M</span>
                            <span className='flex items-center gap-1 text-yellow-400'><img className='w-[15px] h-[15px]' src={star} alt="" />{data.ratingAvg}</span>
                            <span className='text-gray-400'>{data.size} MB</span>
                        </div>
                     </div>
                   </div>
                </div>
                   <div>
                    <button onClick={()=> handleRemove(data.id)} className='btn bg-green-400 text-white'>Uninstall</button>
                   </div>
            </div>
    );
};

export default InsPage;