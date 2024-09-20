// import React, { useRef, useState } from 'react';
// import { Bar, Line, Pie } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const ChartBuilder = ({ onChartGenerated }) => {
//   const chartRef = useRef(null);
//   const [chartType, setChartType] = useState('bar');
//   const [labels, setLabels] = useState(['January', 'February', 'March', 'April']);
//   const [data, setData] = useState([50, 75, 150, 100]);
//   const [chartTitle, setChartTitle] = useState('Sales Data');

//   const chartData = {
//     labels: labels,
//     datasets: [
//       {
//         label: chartTitle,
//         data: data,
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.6)',
//           'rgba(54, 162, 235, 0.6)',
//           'rgba(255, 206, 86, 0.6)',
//           'rgba(75, 192, 192, 0.6)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: chartTitle,
//       },
//     },
//   };

//   const handleLabelChange = (index, value) => {
//     const newLabels = [...labels];
//     newLabels[index] = value;
//     setLabels(newLabels);
//   };

//   const handleDataChange = (index, value) => {
//     const newData = [...data];
//     newData[index] = Number(value);
//     setData(newData);
//   };

//   const addDataPoint = () => {
//     setLabels([...labels, `Label ${labels.length + 1}`]);
//     setData([...data, 0]);
//   };

//   const removeDataPoint = (index) => {
//     setLabels(labels.filter((_, i) => i !== index));
//     setData(data.filter((_, i) => i !== index));
//   };

//   const generateChartImage = () => {
//     if (chartRef.current) {
//       const chartImage = chartRef.current.toBase64Image();
//       onChartGenerated(chartImage);
//     }
//   };

//   const renderChart = () => {
//     switch (chartType) {
//       case 'bar':
//         return <Bar ref={chartRef} data={chartData} options={options} />;
//       case 'line':
//         return <Line ref={chartRef} data={chartData} options={options} />;
//       case 'pie':
//         return <Pie ref={chartRef} data={chartData} options={options} />;
//       default:
//         return <Bar ref={chartRef} data={chartData} options={options} />;
//     }
//   };

//   return (
//     <div style={{ width: '500px', padding: '20px' }}>
//       <h3>Chart Builder</h3>
//       <div>
//         <label>
//           Chart Type:
//           <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
//             <option value="bar">Bar</option>
//             <option value="line">Line</option>
//             <option value="pie">Pie</option>
//           </select>
//         </label>
//       </div>
//       <div>
//         <label>
//           Chart Title:
//           <input
//             type="text"
//             value={chartTitle}
//             onChange={(e) => setChartTitle(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         {labels.map((label, index) => (
//           <div key={index}>
//             <input
//               type="text"
//               value={label}
//               onChange={(e) => handleLabelChange(index, e.target.value)}
//             />
//             <input
//               type="number"
//               value={data[index]}
//               onChange={(e) => handleDataChange(index, e.target.value)}
//             />
//             <button onClick={() => removeDataPoint(index)}>Remove</button>
//           </div>
//         ))}
//         <button onClick={addDataPoint}>Add Data Point</button>
//       </div>
//       {renderChart()}
//       <button onClick={generateChartImage}>Insert Chart</button>
//     </div>
//   );
// };

// export default ChartBuilder;

// // src/components/ChartBuilder.jsx
// import React, { useRef, useState } from 'react';
// import { Bar, Line, Pie } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const ChartBuilder = ({ onChartGenerated, onClose }) => {
//   const chartRef = useRef(null);
//   const [chartType, setChartType] = useState('bar');
//   const [labels, setLabels] = useState(['January', 'February', 'March', 'April']);
//   const [data, setData] = useState([50, 75, 150, 100]);
//   const [chartTitle, setChartTitle] = useState('Sales Data');

//   const chartData = {
//     labels: labels,
//     datasets: [
//       {
//         label: chartTitle,
//         data: data,
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.6)',
//           'rgba(54, 162, 235, 0.6)',
//           'rgba(255, 206, 86, 0.6)',
//           'rgba(75, 192, 192, 0.6)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: chartTitle,
//       },
//     },
//   };

//   const handleLabelChange = (index, value) => {
//     const newLabels = [...labels];
//     newLabels[index] = value;
//     setLabels(newLabels);
//   };

//   const handleDataChange = (index, value) => {
//     const newData = [...data];
//     newData[index] = parseInt(value, 10);
//     setData(newData);
//   };

//   const addDataPoint = () => {
//     setLabels([...labels, `Month ${labels.length + 1}`]);
//     setData([...data, 0]);
//   };

//   const removeDataPoint = (index) => {
//     const newLabels = labels.filter((_, i) => i !== index);
//     const newData = data.filter((_, i) => i !== index);
//     setLabels(newLabels);
//     setData(newData);
//   };

//   const renderChart = () => {
//     switch (chartType) {
//       case 'bar':
//         return <Bar ref={chartRef} data={chartData} options={options} />;
//       case 'line':
//         return <Line ref={chartRef} data={chartData} options={options} />;
//       case 'pie':
//         return <Pie ref={chartRef} data={chartData} options={options} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="text-2xl font-bold">Chart Builder</h3>
//         <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//           </svg>
//         </button>
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Chart Type:
//           <select
//             value={chartType}
//             onChange={(e) => setChartType(e.target.value)}
//             className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1"
//           >
//             <option value="bar">Bar</option>
//             <option value="line">Line</option>
//             <option value="pie">Pie</option>
//           </select>
//         </label>
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Chart Title:
//           <input
//             type="text"
//             value={chartTitle}
//             onChange={(e) => setChartTitle(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1"
//           />
//         </label>
//       </div>
//       <div className="mb-4">
//         {labels.map((label, index) => (
//           <div key={index} className="flex mb-2 items-center">
//             <input
//               type="text"
//               value={label}
//               onChange={(e) => handleLabelChange(index, e.target.value)}
//               className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
//               placeholder="Label"
//             />
//             <input
//               type="number"
//               value={data[index]}
//               onChange={(e) => handleDataChange(index, e.target.value)}
//               className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
//               placeholder="Value"
//             />
//             <button
//               onClick={() => removeDataPoint(index)}
//               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//         <button
//           onClick={addDataPoint}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Add Data Point
//         </button>
//       </div>
//       <div className="mb-4">
//         {renderChart()}
//       </div>
//       <button
//         onClick={() => {
//           const chartImage = chartRef.current.toBase64Image();
//           onChartGenerated(chartImage);
//           onClose();
//         }}
//         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//       >
//         Insert Chart
//       </button>
//     </div>
//   );
// };

// export default ChartBuilder;


import React, { useRef, useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ChartBuilder = ({ onChartGenerated, onClose }) => {
  const chartRef = useRef(null);
  const [chartType, setChartType] = useState('bar');
  const [labels, setLabels] = useState(['January', 'February', 'March', 'April']);
  const [data, setData] = useState([50, 75, 150, 100]);
  const [chartTitle, setChartTitle] = useState('Sales Data');

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: chartTitle,
        data: data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: chartTitle,
      },
    },
  };

  const handleLabelChange = (index, value) => {
    const newLabels = [...labels];
    newLabels[index] = value;
    setLabels(newLabels);
  };

  const handleDataChange = (index, value) => {
    const newData = [...data];
    newData[index] = Number(value);
    setData(newData);
  };

  const addDataPoint = () => {
    setLabels([...labels, `Label ${labels.length + 1}`]);
    setData([...data, 0]);
  };

  const removeDataPoint = (index) => {
    setLabels(labels.filter((_, i) => i !== index));
    setData(data.filter((_, i) => i !== index));
  };

  const generateChartImage = () => {
    if (chartRef.current) {
      const chartImage = chartRef.current.toBase64Image();
      onChartGenerated(chartImage);
    }
  };

  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return <Bar ref={chartRef} data={chartData} options={options} />;
      case 'line':
        return <Line ref={chartRef} data={chartData} options={options} />;
      case 'pie':
        return <Pie ref={chartRef} data={chartData} options={options} />;
      default:
        return <Bar ref={chartRef} data={chartData} options={options} />;
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-lg w-11/12 max-w-xl max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl font-bold mb-4">Chart Builder</h3>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Chart Type:
            <select
              value={chartType}
              onChange={(e) => setChartType(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1"
            >
              <option value="bar">Bar</option>
              <option value="line">Line</option>
              <option value="pie">Pie</option>
            </select>
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Chart Title:
            <input
              type="text"
              value={chartTitle}
              onChange={(e) => setChartTitle(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1"
            />
          </label>
        </div>
        <div className="mb-4 max-h-40 overflow-y-auto">
          {labels.map((label, index) => (
            <div key={index} className="flex mb-2 items-center">
              <input
                type="text"
                value={label}
                onChange={(e) => handleLabelChange(index, e.target.value)}
                className="shadow appearance-none border rounded w-1/3 py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                placeholder="Label"
              />
              <input
                type="number"
                value={data[index]}
                onChange={(e) => handleDataChange(index, e.target.value)}
                className="shadow appearance-none border rounded w-1/3 py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                placeholder="Value"
              />
              <button onClick={() => removeDataPoint(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm">
                Remove
              </button>
            </div>
          ))}
        </div>
        <button onClick={addDataPoint} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 text-sm">
          Add Data Point
        </button>
        <div className="mt-4 h-64">
          {renderChart()}
        </div>
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2 text-sm">
            Cancel
          </button>
          <button onClick={generateChartImage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
            Insert Chart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChartBuilder;