import { useState } from 'react';
import Head from 'next/head';

// Mock data - in a real app, this would come from an API
const mockTrials = [
  {
    id: 1,
    title: "Novel Treatment for Advanced Stage Lung Cancer",
    phase: "Phase III",
    status: "Recruiting",
    condition: "Lung Cancer",
    institution: "National Cancer Institute",
    location: "Multiple Locations",
    startDate: "2024-01-15",
    participants: 500
  },
  {
    id: 2,
    title: "Cardiovascular Outcomes Study of New Diabetes Medication",
    phase: "Phase IV",
    status: "Active",
    condition: "Type 2 Diabetes",
    institution: "Heart Research Center",
    location: "New York, USA",
    startDate: "2023-11-20",
    participants: 1000
  },
  {
    id: 3,
    title: "Neural Plasticity in Stroke Recovery",
    phase: "Phase II",
    status: "Recruiting",
    condition: "Stroke",
    institution: "Neuroscience Institute",
    location: "Boston, USA",
    startDate: "2024-02-01",
    participants: 200
  }
];

export default function ClinicalTrials() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPhase, setFilterPhase] = useState('all');

  const filteredTrials = mockTrials.filter(trial => {
    const matchesSearch = trial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trial.condition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || trial.status === filterStatus;
    const matchesPhase = filterPhase === 'all' || trial.phase === filterPhase;
    return matchesSearch && matchesStatus && matchesPhase;
  });

  return (
    <>
      <Head>
        <title>Clinical Trials | Medical Sciences Research Forum</title>
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Clinical Trials Database</h1>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                placeholder="Search trials..."
                className="w-full px-4 py-2 border rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <select
                className="w-full px-4 py-2 border rounded-md"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="Recruiting">Recruiting</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div>
              <select
                className="w-full px-4 py-2 border rounded-md"
                value={filterPhase}
                onChange={(e) => setFilterPhase(e.target.value)}
              >
                <option value="all">All Phases</option>
                <option value="Phase I">Phase I</option>
                <option value="Phase II">Phase II</option>
                <option value="Phase III">Phase III</option>
                <option value="Phase IV">Phase IV</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {filteredTrials.map((trial) => (
            <div key={trial.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold text-blue-600 mb-2">{trial.title}</h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  trial.status === 'Recruiting' ? 'bg-green-100 text-green-800' :
                  trial.status === 'Active' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {trial.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div>
                  <p className="text-sm text-gray-500">Condition</p>
                  <p className="font-medium">{trial.condition}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phase</p>
                  <p className="font-medium">{trial.phase}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Institution</p>
                  <p className="font-medium">{trial.institution}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{trial.location}</p>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Start Date: {trial.startDate} | Participants: {trial.participants}
                </div>
                <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTrials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No clinical trials found matching your criteria.</p>
          </div>
        )}
      </div>
    </>
  );
} 