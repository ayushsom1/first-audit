// import React, { useRef, useState } from 'react';
// import { Editor } from '@tinymce/tinymce-react';
// import ChartBuilder from './ChartBuilder';

// const WordLikeEditor = () => {
//   const editorRef = useRef(null);
//   const [showChartBuilder, setShowChartBuilder] = useState(false);

//   const handleEditorInit = (evt, editor) => {
//     editorRef.current = editor;
//   };

//   const insertChart = () => {
//     setShowChartBuilder(true);
//   };

//   const handleChartGenerated = (chartImage) => {
//     if (editorRef.current) {
//       const chartHtml = `<img src="${chartImage}" alt="Chart" style="max-width: 100%; height: auto;" />`;
//       editorRef.current.insertContent(chartHtml);
//       setShowChartBuilder(false);
//     }
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
//       <div style={{ marginBottom: '10px' }}>
//         <button onClick={insertChart}>Insert Chart</button>
//       </div>
//       <Editor
//         apiKey="p5r5r4hsczr2ygo3wvmzqsygb8ojkoneh6jn6j30ul5pg9qy"
//         onInit={handleEditorInit}
//         init={{
//           height: '100%',
//           width: '100%',
//           plugins: 'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount',
//           toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
//           content_style: `
//             body {
//               font-family: Helvetica, Arial, sans-serif;
//               font-size: 14px;
//               margin: 0;
//               padding: 20px;
//               background: white;
//             }
//           `,
//           setup: (editor) => {
//             editor.on('init', () => {
//               editor.setContent('<p>Start typing here...</p>');
//             });
//           }
//         }}
//       />
//       {showChartBuilder && (
//         <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
//           <ChartBuilder onChartGenerated={handleChartGenerated} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default WordLikeEditor;
// src/components/WordLikeEditor.jsx





// import React, { useRef, useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Editor } from '@tinymce/tinymce-react';
// import ChartBuilder from './ChartBuilder';

// const WordLikeEditor = () => {
//   const { reportId } = useParams();
//   const navigate = useNavigate();
//   const editorRef = useRef(null);
//   const [showChartBuilder, setShowChartBuilder] = useState(false);
//   const [initialContent, setInitialContent] = useState('');

//   useEffect(() => {
//     // Fetch report content based on reportId
//     // Replace this with actual data fetching logic
//     setInitialContent(`<h1>Report ${reportId}</h1><p>Start editing here...</p>`);
//   }, [reportId]);

//   const handleEditorInit = (evt, editor) => {
//     editorRef.current = editor;
//   };

//   const insertChart = () => {
//     setShowChartBuilder(true);
//   };

//   const handleChartGenerated = (chartImage) => {
//     if (editorRef.current) {
//       const chartHtml = `<img src="${chartImage}" alt="Chart" style="max-width: 100%; height: auto;" />`;
//       editorRef.current.insertContent(chartHtml);
//       setShowChartBuilder(false);
//     }
//   };

//   const handleSave = () => {
//     if (editorRef.current) {
//       const content = editorRef.current.getContent();
//       console.log('Saving report:', content);
//       // Implement save logic here
//       navigate('/');
//     }
//   };

//   const handleSubmitForReview = () => {
//     if (editorRef.current) {
//       const content = editorRef.current.getContent();
//       console.log('Submitting report for review:', content);
//       // Implement submit for review logic here
//       navigate('/');
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="px-6 py-4 bg-indigo-600 text-white flex justify-between items-center">
//           <h2 className="text-xl font-semibold">Edit Report {reportId}</h2>
//           <button onClick={() => navigate('/')} className="text-white hover:text-indigo-200">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//         <div className="p-6">
//           <div className="mb-4 flex space-x-2">
//             <button onClick={insertChart} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200">
//               Insert Chart
//             </button>
//             <button onClick={handleSave} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-200">
//               Save
//             </button>
//             <button onClick={handleSubmitForReview} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-200">
//               Submit for Review
//             </button>
//           </div>
//           <div className="border rounded-lg overflow-hidden">
//             <Editor
//               apiKey="p5r5r4hsczr2ygo3wvmzqsygb8ojkoneh6jn6j30ul5pg9qy" // Replace with your actual TinyMCE API key
//               onInit={handleEditorInit}
//               initialValue={initialContent}
//               init={{
//                 height: 500,
//                 menubar: true,
//                 plugins: [
//                   'advlist autolink lists link image charmap print preview anchor',
//                   'searchreplace visualblocks code fullscreen',
//                   'insertdatetime media table paste code help wordcount',
//                 ],
//                 toolbar:
//                   'undo redo | formatselect | bold italic backcolor | \
//                   alignleft aligncenter alignright alignjustify | \
//                   bullist numlist outdent indent | removeformat | help',
//                 content_style: `
//                   body {
//                     font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
//                     font-size: 14px;
//                     line-height: 1.6;
//                     padding: 20px;
//                   }
//                 `,
//               }}
//             />
//           </div>
//         </div>
//       </div>
//       {showChartBuilder && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full">
//             <ChartBuilder onChartGenerated={handleChartGenerated} onClose={() => setShowChartBuilder(false)} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WordLikeEditor;

import React, { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import ChartBuilder from './ChartBuilder';

const WordLikeEditor = ({ reports = [], updateReport }) => {
  const { reportId } = useParams();
  const navigate = useNavigate();
  const editorRef = useRef(null);
  const [initialContent, setInitialContent] = useState('');
  const [report, setReport] = useState(null);
  const [showChartBuilder, setShowChartBuilder] = useState(false);

  useEffect(() => {
    if (reports.length > 0) {
      const foundReport = reports.find(r => r.id === Number(reportId));
      setReport(foundReport);
    }
  }, [reports, reportId]);

  useEffect(() => {
    if (report) {
      const headingContent = `
        <div class="report-heading" contenteditable="false">
          <h1>${report.title}</h1>
          <h2>Report Number: ${report.id}</h2>
        </div>
        <hr/>
      `;
      setInitialContent(report.content ? headingContent + report.content : headingContent + '<p>Start editing your report here...</p>');
    } else {
      setInitialContent('');
    }
  }, [report]);

  const handleEditorInit = (evt, editor) => {
    editorRef.current = editor;
  };

  const handleSave = () => {
    if (editorRef.current && report) {
      const content = editorRef.current.getContent();
      const updatedReport = { ...report, content, status: 'Draft' };
      updateReport(updatedReport);
      console.log('Saving report:', updatedReport);
      navigate('/');
    }
  };

  const handleSubmitForReview = () => {
    if (editorRef.current && report) {
      const content = editorRef.current.getContent();
      const updatedReport = { ...report, content, status: 'In Progress' };
      updateReport(updatedReport);
      console.log('Submitting report for review:', updatedReport);
      navigate('/');
    }
  };

  const handleInsertChart = () => {
    setShowChartBuilder(true);
  };

  const handleChartGenerated = (chartImage) => {
    if (editorRef.current) {
      editorRef.current.insertContent(`<img src="${chartImage}" alt="Chart" />`);
    }
    setShowChartBuilder(false);
  };

  if (!report) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-red-500">Report not found or still loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-gray-100 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Editing Report</h2>
        </div>
        <div className="p-6">
          <div className="mb-4 flex space-x-2">
            <button
              onClick={handleInsertChart}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200"
            >
              Insert Chart
            </button>
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-200"
            >
              Save
            </button>
            <button
              onClick={handleSubmitForReview}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-200"
            >
              Submit for Review
            </button>
          </div>
          <div className="border rounded-lg overflow-hidden">
          <Editor
            apiKey="p5r5r4hsczr2ygo3wvmzqsygb8ojkoneh6jn6j30ul5pg9qy"
            onInit={handleEditorInit}
            initialValue={initialContent}
            init={{
              height: '500',
              width: '100%',
              plugins: 'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount',
              toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
              content_style: `
                body {
                  font-family: Helvetica, Arial, sans-serif;
                  font-size: 14px;
                  margin: 0;
                  padding: 20px;
                  background: white;
                }
              `,
              image_advtab: true,
                image_uploadtab: true,
                file_picker_types: 'image',
                file_picker_callback: (callback, value, meta) => {
                  if (meta.filetype === 'image') {
                    const input = document.createElement('input');
                    input.setAttribute('type', 'file');
                    input.setAttribute('accept', 'image/*');
                    input.onchange = function () {
                      const file = this.files[0];
                      const reader = new FileReader();
                      reader.onload = function () {
                        callback(reader.result, {
                          alt: file.name
                        });
                      };
                      reader.readAsDataURL(file);
                    };
                    input.click();
                  }
                }
            }}
          />
          </div>
        </div>
      </div>
      {showChartBuilder && (
        <ChartBuilder
          onChartGenerated={handleChartGenerated}
          onClose={() => setShowChartBuilder(false)}
        />
      )}
    </div>
  );
};

export default WordLikeEditor;