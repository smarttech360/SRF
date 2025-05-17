import { useState } from 'react';
import Head from 'next/head';

export default function SubmitResearch() {
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    specialty: '',
    authors: '',
    institution: '',
    keywords: '',
    researchType: '',
    ethicsApproval: '',
    file: null
  });

  const specialties = [
    'Cardiology',
    'Neurology',
    'Oncology',
    'Pediatrics',
    'Surgery',
    'Psychiatry',
    'Immunology',
    'Emergency Medicine',
    'Other'
  ];

  const researchTypes = [
    'Clinical Trial',
    'Case Study',
    'Systematic Review',
    'Meta-Analysis',
    'Observational Study',
    'Laboratory Research',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <>
      <Head>
        <title>Submit Medical Research | Medical Sciences Research Forum</title>
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Submit Medical Research</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-lg rounded-lg p-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Research Title *
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Medical Specialty *
            </label>
            <select
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={formData.specialty}
              onChange={(e) => setFormData({...formData, specialty: e.target.value})}
            >
              <option value="">Select Specialty</option>
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty.toLowerCase()}>
                  {specialty}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Research Type *
            </label>
            <select
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={formData.researchType}
              onChange={(e) => setFormData({...formData, researchType: e.target.value})}
            >
              <option value="">Select Research Type</option>
              {researchTypes.map((type) => (
                <option key={type} value={type.toLowerCase()}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Authors *
            </label>
            <input
              type="text"
              required
              placeholder="Separate multiple authors with commas"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={formData.authors}
              onChange={(e) => setFormData({...formData, authors: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Institution *
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={formData.institution}
              onChange={(e) => setFormData({...formData, institution: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Abstract *
            </label>
            <textarea
              required
              rows={6}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={formData.abstract}
              onChange={(e) => setFormData({...formData, abstract: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Keywords
            </label>
            <input
              type="text"
              placeholder="Separate keywords with commas"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={formData.keywords}
              onChange={(e) => setFormData({...formData, keywords: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ethics Committee Approval Number (if applicable)
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={formData.ethicsApproval}
              onChange={(e) => setFormData({...formData, ethicsApproval: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Research Paper (PDF) *
            </label>
            <input
              type="file"
              required
              accept=".pdf"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setFormData({...formData, file: e.target.files?.[0] || null})}
            />
            <p className="mt-2 text-sm text-gray-500">Maximum file size: 10MB</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-medium text-gray-900 mb-2">Before Submitting:</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Ensure all authors have approved the submission</li>
              <li>Check that the research follows ethical guidelines</li>
              <li>Verify all data and statistics are accurate</li>
              <li>Confirm no duplicate submission elsewhere</li>
            </ul>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit Research Paper
          </button>
        </form>
      </div>
    </>
  );
} 