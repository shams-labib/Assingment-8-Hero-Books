import React, { useEffect, useState } from 'react';
import useCustom from '../useHooks/useCustom';
import { getStoredBook, removeItemStoreDB } from '../useHooks/Function';
import InsPage from './InsPage';

const InstalationPages = () => {


  const [install, setInstall] = useState([]);
  const data = useCustom();
  

  useEffect(()=> {
    const getData = getStoredBook();
    const Converted = getData.map(id => parseInt(id));
    //  const myReadList = data.filter(book => Converted.includes(book.bookId))
    const dataIns = data.filter(item => Converted.includes(item.id));
      setInstall(dataIns);
  },[data])

  const handleRemove = (id)=> {
            removeItemStoreDB(id);
           setInstall(install => install.filter(item => item.id !== id));
    }
  
    return (
        <div className='text-center my-[70px] min-h-screen px-5'>
            <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
            <p className='mt-4 mb-5 md:mb-0 px-5'>Explore All Trending Apps on the Market developed by us</p>

            <div className='flex - justify-between items-center'>
                <p className='text-xl font-semibold'>({install.length}) Apps Found</p>
                <div>
<button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
  Sort by size
</button>

<ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
  popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
</ul>
                </div>
            </div>
             {
              install.map(data => <InsPage key={data.id} handleRemove={handleRemove} data={data}></InsPage>)
             }
            
        </div>
    );
};

export default InstalationPages;