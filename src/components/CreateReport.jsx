import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Optional: Import React Select if implementing the searchable multi-select
import Select from 'react-select';

const preWrittenHeadings = [
  'Financial Overview',
  'Annual Compliance',
  'IT Security Assessment',
  'Performance Review',
  'Supply Chain Analysis',
  'Market Expansion Strategy',
  'Customer Satisfaction Report',
  'Operational Efficiency',
  'Risk Management',
  'Human Resources Audit',
  'Product Launch Plan',
  'Branch Performance'
];

const people = [
  'John Doe',
  'Jane Smith',
  'Mike Johnson',
  'Sarah Williams',
  'Tom Brown',
  'Alice Green',
  'Bob White',
  'Charlie Black',
  'Diana Blue',
  'Ethan Yellow'
];

const branches = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix'
];

const divisions = [
  'Retail Banking',
  'Corporate Banking',
  'Investment Banking',
  'Wealth Management',
  'Risk Management'
];

const CreateReport = ({ addReport }) => {
  const navigate = useNavigate();

  const [heading, setHeading] = useState('');
  const [assignedPeople, setAssignedPeople] = useState([]);
  const [branch, setBranch] = useState('');
  const [division, setDivision] = useState('');
  const [errors, setErrors] = useState({});

//   const handlePeopleChange = (e) => {
//     const selected = Array.from(e.target.selectedOptions, option => option.value);
//     setAssignedPeople(selected);
//     if (selected.length > 0) {
//       setErrors(prev => ({ ...prev, assignedPeople: '' }));
//     }
//   };

  // Optional: If using React Select
  
  const peopleOptions = people.map(person => ({ value: person, label: person }));

  const handlePeopleChange = (selectedOptions) => {
    const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setAssignedPeople(selectedValues);
    if (selectedValues.length > 0) {
      setErrors(prev => ({ ...prev, assignedPeople: '' }));
    }
  };
  

  const validate = () => {
    const newErrors = {};
    if (!heading) newErrors.heading = 'Heading is required.';
    if (assignedPeople.length === 0) newErrors.assignedPeople = 'At least one person must be assigned.';
    if (!branch) newErrors.branch = 'Branch is required.';
    if (!division) newErrors.division = 'Division is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newReport = {
        id: Date.now(),
        title: heading,
        status: 'Draft',
        dueDate: '',
        progress: 0,
        assignee: assignedPeople,
        branch,
        division,
      };
      addReport(newReport);
      navigate('/');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Container */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-indigo-600 text-white flex justify-between items-center">
          <h2 className="text-xl font-semibold">Create New Report</h2>
          <button onClick={() => navigate('/')} className="text-white hover:text-indigo-200">
            {/* Close Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* Form */}
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            {/* Heading Selection */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="heading">
                Select Heading
              </label>
              <select
                id="heading"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                className={`shadow appearance-none border ${
                  errors.heading ? 'border-red-500' : ''
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              >
                <option value="">-- Select Heading --</option>
                {preWrittenHeadings.map((h, index) => (
                  <option key={index} value={h}>
                    {h}
                  </option>
                ))}
              </select>
              {errors.heading && <p className="text-red-500 text-xs italic mt-1">{errors.heading}</p>}
            </div>

            {/* Assign People */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="assignee">
                Assign Employees
              </label>
              <select
                id="assignee"
                multiple
                value={assignedPeople}
                onChange={handlePeopleChange}
                className={`shadow appearance-none border ${
                  errors.assignedPeople ? 'border-red-500' : ''
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32`}
              >
                {people.map((person, index) => (
                  <option key={index} value={person}>
                    {person}
                  </option>
                ))}
              </select>
              {errors.assignedPeople && <p className="text-red-500 text-xs italic mt-1">{errors.assignedPeople}</p>}
              <p className="text-gray-500 text-xs italic mt-1">
                Hold down the `Ctrl` (Windows) or `Command` (Mac) button to select multiple options.
              </p>
              {/* Optional: If using React Select */}
              
              <Select
                isMulti
                options={peopleOptions}
                value={peopleOptions.filter(option => assignedPeople.includes(option.value))}
                onChange={handlePeopleChange}
                className={`react-select-container ${errors.assignedPeople ? 'border-red-500' : ''}`}
                classNamePrefix="react-select"
              />
             
            </div>

            {/* Branch Selection */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="branch">
                Select Branch
              </label>
              <select
                id="branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className={`shadow appearance-none border ${
                  errors.branch ? 'border-red-500' : ''
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              >
                <option value="">-- Select Branch --</option>
                {branches.map((b, index) => (
                  <option key={index} value={b}>
                    {b}
                  </option>
                ))}
              </select>
              {errors.branch && <p className="text-red-500 text-xs italic mt-1">{errors.branch}</p>}
            </div>

            {/* Division Selection */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="division">
                Select Division
              </label>
              <select
                id="division"
                value={division}
                onChange={(e) => setDivision(e.target.value)}
                className={`shadow appearance-none border ${
                  errors.division ? 'border-red-500' : ''
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              >
                <option value="">-- Select Division --</option>
                {divisions.map((d, index) => (
                  <option key={index} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              {errors.division && <p className="text-red-500 text-xs italic mt-1">{errors.division}</p>}
            </div>

            {/* Submit and Cancel Buttons */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Create Report
              </button>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateReport;