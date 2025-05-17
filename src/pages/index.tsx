import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

// Mock data for featured content
const featuredPapers = [
  {
    id: 1,
    title: 'Neural Control of Cardiac Function: An Anatomical Perspective',
    authors: 'Smith J., et al.',
    specialty: 'Anatomy',
    date: '2024-03-15',
    citations: 45,
  },
  {
    id: 2,
    title: 'Metabolic Pathways in Type 2 Diabetes: Biochemical Analysis',
    authors: 'Johnson M., et al.',
    specialty: 'Biochemistry',
    date: '2024-03-10',
    citations: 32,
  },
  {
    id: 3,
    title: 'Novel Drug Delivery Systems in Cancer Treatment',
    authors: 'Williams R., et al.',
    specialty: 'Pharmacology',
    date: '2024-03-05',
    citations: 28,
  },
  {
    id: 4,
    title: 'Inflammatory Response in COVID-19: A Pathological Study',
    authors: 'Brown A., et al.',
    specialty: 'Pathology',
    date: '2024-03-02',
    citations: 56,
  },
  {
    id: 5,
    title: 'Antibiotic Resistance Patterns in Hospital-Acquired Infections',
    authors: 'Davis E., et al.',
    specialty: 'Microbiology',
    date: '2024-02-28',
    citations: 41,
  },
  {
    id: 6,
    title: 'Minimally Invasive Techniques in Cardiac Surgery',
    authors: 'Wilson P., et al.',
    specialty: 'Surgery',
    date: '2024-02-25',
    citations: 38,
  }
]

const featuredTrials = [
  {
    id: 1,
    title: 'Phase III Trial of Novel Cancer Immunotherapy',
    status: 'Recruiting',
    institution: 'National Cancer Institute',
    participants: 500,
  },
  {
    id: 2,
    title: 'Cardiovascular Outcomes Study',
    status: 'Active',
    institution: 'Heart Research Center',
    participants: 1000,
  },
]

const specialties = [
  { name: 'Anatomy', icon: '🧠', count: 850, description: 'Study of human body structure' },
  { name: 'Physiology', icon: '❤️', count: 920, description: 'Function of body systems' },
  { name: 'Biochemistry', icon: '🧬', count: 780, description: 'Chemical processes in living organisms' },
  { name: 'Pathology', icon: '🔬', count: 950, description: 'Disease mechanisms and effects' },
  { name: 'Pharmacology', icon: '💊', count: 860, description: 'Drug actions and effects' },
  { name: 'Microbiology', icon: '🦠', count: 890, description: 'Study of microorganisms' },
  { name: 'Medicine', icon: '👨‍⚕️', count: 1200, description: 'Clinical practice and treatment' },
  { name: 'Surgery', icon: '🏥', count: 750, description: 'Surgical procedures and techniques' }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Medical Sciences Research Forum - Share and Discover Medical Research</title>
        <meta name="description" content="A platform for medical professionals to share and discover the latest research, clinical trials, and medical breakthroughs." />
      </Head>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Student Research Platform
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Share your research work, discover new findings, and connect with fellow student researchers.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/submit"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Submit Research
              </Link>
              <Link
                href="/papers"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                Browse Papers
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Subjects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Medical Subjects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty) => (
              <Link
                key={specialty.name}
                href={`/specialties/${specialty.name.toLowerCase()}`}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="text-4xl mb-3">{specialty.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{specialty.name}</h3>
                    <p className="text-gray-500 text-sm mb-2">{specialty.description}</p>
                    <p className="text-blue-600 font-medium">{specialty.count} papers</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Research Papers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Research Papers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPapers.map((paper) => (
              <div key={paper.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-3">
                  {paper.specialty}
                </div>
                <h3 className="text-xl font-semibold mb-3 line-clamp-2 hover:line-clamp-none">
                  {paper.title}
                </h3>
                <p className="text-gray-600 mb-4">{paper.authors}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{paper.date}</span>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{paper.citations} citations</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Trials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Active Clinical Trials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredTrials.map((trial) => (
              <div key={trial.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{trial.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    trial.status === 'Recruiting' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {trial.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{trial.institution}</p>
                <p className="text-gray-500">{trial.participants} participants needed</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/trials"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              View all clinical trials
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Research</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the community of student researchers and share your findings.
          </p>
          <Link
            href="/submit"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Submit Your Paper
          </Link>
        </div>
      </section>
    </>
  )
}
