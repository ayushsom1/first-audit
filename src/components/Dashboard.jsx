import React, { useState } from 'react';
import ReportList from './ReportList';
import WordLikeEditor from './WordLikeEditor';

const Dashboard = () => {
  const [editingReport, setEditingReport] = useState(null);

  const handleEditReport = (report) => {
    setEditingReport(report);
  };

  const handleCloseEditor = () => {
    setEditingReport(null);
  };

  const handleSaveReport = (content) => {
    console.log('Saving report:', content);
    // Implement save logic here
    setEditingReport(null);
  };

  const handleSubmitForReview = (content) => {
    console.log('Submitting report for review:', content);
    // Implement submit for review logic here
    setEditingReport(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-indigo-600 text-white flex justify-between items-center">
          <h2 className="text-xl font-semibold">{editingReport ? 'Edit Report' : 'Your Reports'}</h2>
          {editingReport && (
            <button onClick={handleCloseEditor} className="text-white hover:text-indigo-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          )}
        </div>
        <div className="p-6">
          {editingReport ? (
            <WordLikeEditor
              initialContent={editingReport.content}
              onSave={handleSaveReport}
              onSubmitForReview={handleSubmitForReview}
              onClose={handleCloseEditor}
            />
          ) : (
            <div className="h-[calc(100vh-200px)] overflow-y-auto">
              <ReportList onEditReport={handleEditReport} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;