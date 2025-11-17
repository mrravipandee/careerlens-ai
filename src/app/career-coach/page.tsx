'use client';

import { useState } from 'react';
import { Download, FileText, Share2 } from 'lucide-react';

// Import Components
import ProfileForm from '@/components/career-coach/ProfileForm';
import CareerRecommendation from '@/components/career-coach/CareerRecommendation';
import CareerRoadmap from '@/components/career-coach/CareerRoadmap';
import CertificationSuggestions from '@/components/career-coach/CertificationSuggestions';
import LearningPathways from '@/components/career-coach/LearningPathways';

// Sample data
const sampleCareerRecommendations = [
  {
    id: '1',
    title: 'Frontend Developer',
    match: 92,
    description: 'Build user-facing web applications using modern frameworks',
    requiredSkills: ['JavaScript', 'React', 'HTML/CSS', 'TypeScript'],
    salaryRange: { min: 60000, max: 120000, currency: '$' },
    growth: 'Very High',
    demand: 'high' as const,
    timeline: '6-12 months',
    locations: ['Remote', 'San Francisco', 'New York', 'Austin']
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    match: 85,
    description: 'Develop both frontend and backend components of web applications',
    requiredSkills: ['JavaScript', 'Node.js', 'React', 'Database', 'API Design'],
    salaryRange: { min: 80000, max: 140000, currency: '$' },
    growth: 'High',
    demand: 'high' as const,
    timeline: '12-18 months',
    locations: ['Hybrid', 'Seattle', 'Boston', 'Chicago']
  },
  {
    id: '3',
    title: 'UI/UX Developer',
    match: 78,
    description: 'Create intuitive user interfaces with focus on user experience',
    requiredSkills: ['Design Systems', 'Figma', 'CSS', 'JavaScript', 'User Research'],
    salaryRange: { min: 70000, max: 110000, currency: '$' },
    growth: 'Medium',
    demand: 'medium' as const,
    timeline: '8-14 months',
    locations: ['Remote', 'Los Angeles', 'Miami', 'Denver']
  }
];

const sampleRoadmap = {
  title: 'Frontend Developer',
  timeline: '6-12 months',
  steps: [
    {
      phase: 'foundation',
      title: 'Foundation Skills',
      duration: '2-3 months',
      tasks: [
        'Learn HTML5 and semantic markup',
        'Master CSS3 and responsive design',
        'Understand JavaScript fundamentals',
        'Learn Git and version control'
      ],
      current: true
    },
    {
      phase: 'frameworks',
      title: 'Modern Frameworks',
      duration: '3-4 months',
      tasks: [
        'Learn React.js and component architecture',
        'Understand state management (Redux)',
        'Learn TypeScript for type safety',
        'Build portfolio projects'
      ]
    },
    {
      phase: 'advanced',
      title: 'Advanced Concepts',
      duration: '2-3 months',
      tasks: [
        'Learn testing (Jest, React Testing Library)',
        'Understand performance optimization',
        'Learn build tools (Webpack, Vite)',
        'Contribute to open source projects'
      ]
    },
    {
      phase: 'job-ready',
      title: 'Job Ready',
      duration: '1-2 months',
      tasks: [
        'Prepare resume and portfolio',
        'Practice technical interviews',
        'Network with professionals',
        'Apply to entry-level positions'
      ]
    }
  ]
};

const sampleCertifications = [
  {
    id: '1',
    title: 'Google UX Design Professional Certificate',
    provider: 'Google via Coursera',
    duration: '6 months',
    cost: 'Free audit / $49 monthly',
    level: 'Beginner' as const,
    rating: 4.8,
    url: '#',
    skills: ['UX Design', 'Figma', 'User Research', 'Prototyping'],
    relevance: 'high' as const
  },
  {
    id: '2',
    title: 'Meta Front-End Developer Professional Certificate',
    provider: 'Meta via Coursera',
    duration: '7 months',
    cost: 'Free audit / $49 monthly',
    level: 'Intermediate' as const,
    rating: 4.7,
    url: '#',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'UI Design'],
    relevance: 'high' as const
  }
];

const sampleLearningResources = [
  {
    id: '1',
    title: 'The Complete JavaScript Course 2024',
    type: 'course' as const,
    provider: 'Udemy',
    duration: '68 hours',
    level: 'Beginner' as const,
    url: '#'
  },
  {
    id: '2',
    title: 'React - The Complete Guide',
    type: 'course' as const,
    provider: 'Udemy',
    duration: '48 hours',
    level: 'Intermediate' as const,
    url: '#'
  },
  {
    id: '3',
    title: 'You Don\'t Know JS Yet',
    type: 'book' as const,
    provider: 'Kyle Simpson',
    duration: 'Self-paced',
    level: 'Advanced' as const,
    url: '#'
  }
];

export default function CareerCoachPage() {
  const [profileData, setProfileData] = useState(null);
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [activeTab, setActiveTab] = useState<'recommendations' | 'roadmap' | 'certifications' | 'learning'>('recommendations');

  const handleProfileUpdate = (data: any) => {
    setProfileData(data);
    setActiveTab('recommendations');
  };

  const handleCareerSelect = (career: any) => {
    setSelectedCareer(career);
    setActiveTab('roadmap');
  };

  const handleDownloadReport = () => {
    // Generate and download PDF report
    alert('Downloading your career coach report...');
  };

  const handleShareReport = () => {
    // Share functionality
    alert('Sharing your career insights...');
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">AI Career Coach</h1>
          <p className="text-lg sm:text-xl text-secondary max-w-3xl mx-auto">
            Get personalized career guidance, roadmap, and learning recommendations based on your skills and interests.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Sidebar - Profile Form */}
          <div className="xl:col-span-1">
            <ProfileForm onProfileUpdate={handleProfileUpdate} />
            
            {/* Action Buttons */}
            {profileData && (
              <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="font-semibold text-primary mb-4">Career Report</h3>
                <div className="space-y-3">
                  <button
                    onClick={handleDownloadReport}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <Download className="w-5 h-5" />
                    Download PDF Report
                  </button>
                  <button
                    onClick={handleShareReport}
                    className="w-full flex items-center justify-center gap-2 border border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                    Share Insights
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="xl:col-span-2">
            {!profileData ? (
              // Welcome State
              <div className="bg-white rounded-2xl p-8 text-center border border-gray-200">
                <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Start Your Career Journey
                </h2>
                <p className="text-secondary mb-6 max-w-md mx-auto">
                  Complete your profile to get personalized career recommendations, 
                  learning paths, and certification suggestions tailored to your goals.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-2xl mx-auto">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-primary mb-2">Personalized Recommendations</h4>
                    <p className="text-secondary text-sm">AI-powered career path suggestions</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Download className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-primary mb-2">Detailed Roadmaps</h4>
                    <p className="text-secondary text-sm">Step-by-step career progression</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-primary mb-2">Learning Resources</h4>
                    <p className="text-secondary text-sm">Curated courses and certifications</p>
                  </div>
                </div>
              </div>
            ) : (
              // Results Section
              <div className="space-y-8">
                {/* Navigation Tabs */}
                <div className="bg-white rounded-2xl p-2 border border-gray-200">
                  <div className="flex flex-wrap gap-1">
                    {[
                      { id: 'recommendations', label: 'Career Recommendations' },
                      { id: 'roadmap', label: 'Career Roadmap' },
                      { id: 'certifications', label: 'Certifications' },
                      { id: 'learning', label: 'Learning Paths' }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`flex-1 min-w-[150px] px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                          activeTab === tab.id
                            ? 'bg-primary text-white'
                            : 'text-secondary hover:text-primary hover:bg-gray-100'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab Content */}
                {activeTab === 'recommendations' && (
                  <CareerRecommendation
                    recommendations={sampleCareerRecommendations}
                    onPathSelect={handleCareerSelect}
                  />
                )}

                {activeTab === 'roadmap' && selectedCareer && (
                  <CareerRoadmap
                    career={sampleRoadmap}
                    onStepComplete={(phase) => console.log('Step completed:', phase)}
                  />
                )}

                {activeTab === 'roadmap' && !selectedCareer && (
                  <div className="text-center py-12">
                    <p className="text-secondary">Select a career path to view the detailed roadmap</p>
                  </div>
                )}

                {activeTab === 'certifications' && (
                  <CertificationSuggestions
                    certifications={sampleCertifications}
                    careerTitle={selectedCareer?.title || 'your chosen career'}
                  />
                )}

                {activeTab === 'learning' && (
                  <LearningPathways
                    resources={sampleLearningResources}
                    careerTitle={selectedCareer?.title || 'your chosen career'}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}