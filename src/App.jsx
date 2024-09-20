// // src/App.jsx
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import WordLikeEditor from './components/WordLikeEditor';
// import CreateReport from './components/CreateReport';

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <Router>
//       <div className="flex h-screen overflow-hidden">
//         {/* Sidebar */}
//         <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

//         {/* Main content */}
//         <div className="flex flex-col flex-1 overflow-auto">
//           {/* Header */}
//           <Header isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

//           {/* Page content */}
//           <main className="flex-1 bg-gray-50 p-4">
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/reports" element={<Dashboard />} /> {/* Assuming Dashboard includes ReportList */}
//               <Route path="/create" element={<CreateReport />} />
//               <Route path="/edit/:reportId" element={<WordLikeEditor />} />
//               {/* Add more routes as needed */}
//             </Routes>
//           </main>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import WordLikeEditor from './components/WordLikeEditor';
import CreateReport from './components/CreateReport';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [reports, setReports] = useState([
    {
      id: 1,
      title: 'Q1 Financial Audit',
      status: 'Draft',
      dueDate: '2023-06-30',
      progress: 25,
      assignee: ['John Doe', 'Jane Smith'],
      branch: 'New York',
      division: 'Retail Banking',
      content: '<p>This is the initial content of the Q1 Financial Audit report.</p>',
    },
    {
      id: 2,
      title: 'Annual Compliance Review',
      status: 'In Progress',
      dueDate: '2023-07-15',
      progress: 60,
      assignee: ['Mike Johnson', 'Sarah Williams', 'Tom Brown'],
      branch: 'Los Angeles',
      division: 'Corporate Banking',
      content: '<p>This is the initial content of the Annual Compliance Review report.</p>',
    },
    // Add more initial reports as needed
  ]);

  const addReport = (newReport) => {
    setReports((prevReports) => [newReport, ...prevReports]);
  };

  const updateReport = (updatedReport) => {
    setReports((prevReports) =>
      prevReports.map((report) =>
        report.id === updatedReport.id ? updatedReport : report
      )
    );
  };

  return (
    <Router>
     <div className="flex h-screen overflow-hidden">
         {/* Sidebar */}
         <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

         {/* Main content */}
         <div className="flex flex-col flex-1 overflow-auto">
           {/* Header */}
           <Header isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

          {/* Page content */}
          <main className="flex-1 overflow-auto bg-gray-50 p-4">
            <Routes>
              <Route path="/" element={<Dashboard reports={reports} />} />
              <Route path="/create" element={<CreateReport addReport={addReport} />} />
              <Route
                path="/edit/:reportId"
                element={<WordLikeEditor reports={reports} updateReport={updateReport} />}
              />
              {/* Add more routes as needed */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;