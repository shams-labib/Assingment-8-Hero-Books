import React from 'react';
import { Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart } from 'recharts';
import useCustom from '../../useHooks/useCustom';
import { useParams } from 'react-router-dom';

const RatingsChart = () => {
  const { id } = useParams(); // ধরো route: /details/:id
  const appData = useCustom();

  // ensure data is loaded
  if (!appData || appData.length === 0) {
    return <p className="text-center text-gray-500">Loading chart...</p>;
  }

  // find the correct app using the id
  const app = appData.find(item => item.id === parseInt(id));

  if (!app) {
    return <p className="text-center text-gray-500">No app found for this ID</p>;
  }

  const ratings = app.ratings;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-5 text-gray-800">{app.title} Ratings</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={ratings}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={70} />
          <Tooltip />
          <Bar
            dataKey="count"
            fill="#FFA500"
            barSize={25}
            radius={[5, 5, 5, 5]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsChart;
