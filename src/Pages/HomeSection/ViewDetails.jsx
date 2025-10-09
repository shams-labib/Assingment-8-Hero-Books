
import { useParams } from 'react-router';
import useCustom from '../../useHooks/useCustom';
import dowLoadsImg from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'
import likes from '../../assets/icon-review.png'
import { useEffect, useState } from 'react';
import { addItemStoreDB } from '../../useHooks/Function';
import { toast } from 'react-toastify';
import ErrorPage from '../../Components/ErrorPages/ErrorPage';
import RatingsChart from './RatingsChart';
import DataNotFoundPage from '../AllAppPages/DataNotFoundPage';

const ViewDetails = () => {
  const {id} = useParams();
    const cardId = parseInt(id);
    
    const {data} = useCustom();
    const myData = data.find(item => item.id == cardId);

     const [install, setInstall] = useState(false);

     const handleInstall = (id) => {
    addItemStoreDB(id);
    setInstall(true);

    let installedApps = JSON.parse(localStorage.getItem('readList')) || [];
    if (!installedApps.includes(id)) {
      installedApps.push(id);
      localStorage.setItem('readList', JSON.stringify(installedApps));
    }

    toast("Install Success");
  };

  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem('readlist')) || [];
    if (installedApps.includes(id)) {
      setInstall(true);
    }
  }, [id]);
//       if (!myData) {
//     return <p className="text-center mt-10 text-gray-500 text-xl">Loading...</p>;
//   }

 if (!myData) {
    return (
      <div className="text-center mt-10 text-xl text-gray-500">
        <DataNotFoundPage></DataNotFoundPage>
      </div>
    );
  }

    

    return (
        <div className='px-7 pb-8'>
          <div className='flex md:flex-row flex-col  gap-10 my-15 border-b border-gray-300 pb-8'>
            <div>
              <img className='h-[350px] w-[450px] shadow-md rounded-xl' src={myData.image} alt="" />
            </div>
            <div className='md:w-full space-y-6'>
              <h1 className='text-2xl font-bold'>{myData.title}</h1>
              <p>Developed by : {myData.companyName}</p>
              <div className='border-b-1 border-gray-300 pb-6 w-full'>

              </div>

              <div className='flex md:gap-25 gap-15 items-center mt-6'>
                <div>
                    <img src={dowLoadsImg} alt="" />
                    <p>Downloads</p>
                    <p className='text-4xl font-bold'>{myData.downloads}</p>
                </div>
               <div>
                 <img src={star} alt="" />
                <p>Average Ratings</p>
                  <p className='text-4xl font-bold'>{myData.ratingAvg}</p>
               </div>
                <div>
                    <img src={likes} alt="" />
                <p>Total Reviews</p>
                  <p className='text-4xl font-bold'>{myData.reviews}</p>
                </div>
              </div>

              <button
            disabled={install}
            onClick={()=>handleInstall(id)}
            className={`btn shadow-md px-6 py-2 rounded-md font-semibold text-white transition-all duration-300 
              ${install ? 'bg-green-400 cursor-not-allowed' : 'bg-[#00D390] hover:bg-[#00b77e]'}`}
          >
            {install ? (
              <>
                Installed 
              </>
            ) : (
              `Install Now (${myData.size} MB)`
            )}
          </button>
            </div>
        </div>
        <div className="max-w-4xl mx-auto my-10">
        <RatingsChart></RatingsChart>
    </div>
        <div>
          <h1 className='text-xl font-bold'>Description</h1>
        <p className='mt-7'>{myData.description}</p>
        </div>
        </div>
    );
};

export default ViewDetails;