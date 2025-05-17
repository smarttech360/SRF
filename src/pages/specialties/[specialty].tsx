import { useRouter } from 'next/router';
import Head from 'next/head';

// Mock data - in a real app, this would come from an API
const specialtyData = {
  cardiology: {
    title: 'Cardiology',
    description: 'Research in cardiovascular medicine, heart diseases, and circulatory system disorders.',
    topics: [
      'Coronary Artery Disease',
      'Heart Failure',
      'Arrhythmias',
      'Preventive Cardiology',
      'Interventional Procedures',
      'Cardiovascular Imaging'
    ],
    papers: [
      {
        id: 1,
        title: 'New Insights into Heart Failure Treatment',
        authors: 'Smith J., Johnson M., et al.',
        journal: 'Journal of Cardiology',
        date: '2024-01-15',
        citations: 45
      },
      {
        id: 2,
        title: 'Artificial Intelligence in Cardiac Imaging',
        authors: 'Williams R., Brown K., et al.',
        journal: 'Cardiovascular Research',
        date: '2023-12-20',
        citations: 32
      }
    ],
    experts: [
      {
        name: 'Dr. Sarah Johnson',
        institution: 'Heart Institute',
        specialty: 'Interventional Cardiology'
      },
      {
        name: 'Dr. Michael Chen',
        institution: 'University Medical Center',
        specialty: 'Electrophysiology'
      }
    ]
  }
  // Add other specialties here
};

export default function SpecialtyDetail() {
  const router = useRouter();
  const { specialty } = router.query;
  
  // Handle loading state
  if (!specialty) {
    return <div>Loading...</div>;
  }

  // Get specialty data
  const data = specialtyData[specialty as keyof typeof specialtyData];
  
  // Handle 404
  if (!data) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-800">Specialty not found</h1>
        <p className="mt-4 text-gray-600">The requested medical specialty could not be found.</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{data.title} Research | Medical Sciences Research Forum</title>
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
          <p className="text-xl text-blue-100">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Key Research Topics */}
          <div className="col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Key Research Topics</h2>
              <ul className="space-y-2">
                {data.topics.map((topic) => (
                  <li key={topic} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Latest Research Papers */}
          <div className="col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Latest Research Papers</h2>
              <div className="space-y-6">
                {data.papers.map((paper) => (
                  <div key={paper.id} className="border-b pb-4 last:border-0 last:pb-0">
                    <h3 className="text-lg font-medium text-blue-600">{paper.title}</h3>
                    <p className="text-gray-600 mt-1">{paper.authors}</p>
                    <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                      <span>{paper.journal} • {paper.date}</span>
                      <span>{paper.citations} citations</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Leading Experts */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Leading Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.experts.map((expert) => (
              <div key={expert.name} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold">{expert.name}</h3>
                <p className="text-gray-600">{expert.institution}</p>
                <p className="text-sm text-blue-600 mt-1">{expert.specialty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Contribute to {data.title} Research</h2>
          <p className="text-gray-600 mb-6">
            Share your research findings and collaborate with experts in {data.title.toLowerCase()}.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Submit Your Research
          </button>
        </div>
      </div>
    </>
  );
} 