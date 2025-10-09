import React, { useState, useEffect } from 'react';
import useCustom from '../../useHooks/useCustom';
import Pages from './Pages';
import DataNotFoundPage from './DataNotFoundPage';
import LoadingImg from '../../assets/logo.png'

const AppsPage = () => {
  const {data} = useCustom();

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const term = search.trim().toLowerCase();

  useEffect(() => {
    
    setLoading(true);

    const timer = setTimeout(() => {
      const filtered = term
        ? data.filter(item => item.title.toLowerCase().includes(term))
        : data;
      setFilteredData(filtered);
      setLoading(false);
    }, 600); 

    return () => clearTimeout(timer);
  }, [term, data]);

  return (
    <div className="px-6 md:px-0">
      <div className="text-center py-10 space-y-3">
        <h1 className="md:text-5xl text-4xl font-semibold">
          Our All Applications
        </h1>
        <p>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

    
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">
          <span>({filteredData.length})</span> Apps Found
        </h1>
        <label className="input w-[50%] md:w-[20%] flex items-center gap-2">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="search"
            required
            placeholder="Search Apps..."
            className="grow"
          />
        </label>
      </div>


      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
   
          <img
            src={LoadingImg}
            alt="Loading..."
            className="w-[15%] h-[15%] animate-spin" 
          />
          <p className="mt-3 text-gray-600 font-medium">Loading...</p>
        </div>
      ) : filteredData.length > 0 ? (
        <div className="grid md:grid-cols-4 grid-cols-1 gap-7 my-10">
          {filteredData.map((card) => (
            <Pages key={card.id} card={card}></Pages>
          ))}
        </div>
      ) : (
        <DataNotFoundPage></DataNotFoundPage>
      )}
    </div>
  );
};

export default AppsPage;
