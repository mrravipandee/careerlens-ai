'use client';

import { useState } from 'react';
import { Download, Share2, RotateCcw } from 'lucide-react';

// Import Components
import JobInputForm from '@/components/job-match/JobInputForm';
import SemanticMatchResults from '@/components/job-match/SemanticMatchResults';
import MatchScoreAnalysis from '@/components/job-match/MatchScoreAnalysis';
import MissingKeywordSuggestions from '@/components/job-match/MissingKeywordSuggestions';
import ImprovementSteps from '@/components/job-match/ImprovementSteps';

import { JobMatch } from "@/types/jobMatch";

// Sample data
const sampleJobMatches = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    match: 85,
    location: 'San Francisco, CA (Remote)',
    salary: '$120,000 - $150,000',
    type: 'Full-time',
    skills: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Jest', 'CSS-in-JS'],
    description: 'Join our team to build cutting-edge web applications using modern frontend technologies.',
    posted: '2 days ago',
    url: '#'
  },
  {
    id: '2',
    title: 'Frontend Engineer',
    company: 'StartupXYZ',
    match: 78,
    location: 'New York, NY (Hybrid)',
    salary: '$100,000 - $130,000',
    type: 'Full-time',
    skills: ['React', 'JavaScript', 'Redux', 'HTML/CSS', 'Webpack'],
    description: 'Looking for a passionate frontend engineer to help scale our product.',
    posted: '1 week ago',
    url: '#'
  },
  {
    id: '3',
    title: 'UI/UX Developer',
    company: 'DesignFirst Co.',
    match: 65,
    location: 'Austin, TX (On-site)',
    salary: '$90,000 - $115,000',
    type: 'Full-time',
    skills: ['React', 'Figma', 'CSS', 'Design Systems', 'Accessibility'],
    description: 'Bridge the gap between design and development in our growing team.',
    posted: '3 days ago',
    url: '#'
  },
  {
    id: '4',
    title: 'Full Stack Developer',
    company: 'Innovation Labs',
    match: 72,
    location: 'Remote',
    salary: '$110,000 - $140,000',
    type: 'Contract',
    skills: ['React', 'Node.js', 'MongoDB', 'AWS', 'TypeScript'],
    description: 'End-to-end development role in a fast-paced startup environment.',
    posted: '5 days ago',
    url: '#'
  }
];

const sampleMatchAnalysis = {
  skillMatches: ['React', 'JavaScript', 'HTML/CSS', 'Redux'],
  missingSkills: ['TypeScript', 'GraphQL', 'Jest', 'Next.js'],
  experienceMatch: true,
  educationMatch: true,
  locationMatch: false
};

const sampleBreakdown = [
  {
    category: 'Technical Skills',
    score: 7,
    maxScore: 10,
    matches: ['Strong React knowledge', 'Good JavaScript fundamentals', 'Experience with state management'],
    improvements: ['Learn TypeScript for type safety', 'Master testing with Jest', 'Explore GraphQL for APIs']
  },
  {
    category: 'Framework Experience',
    score: 6,
    maxScore: 10,
    matches: ['Proficient in React ecosystem', 'Experience with component libraries'],
    improvements: ['Learn Next.js for SSR', 'Explore modern build tools', 'Understand performance optimization']
  },
  {
    category: 'Soft Skills',
    score: 8,
    maxScore: 10,
    matches: ['Good communication skills', 'Team collaboration experience', 'Problem-solving ability'],
    improvements: ['Develop leadership skills', 'Improve project management', 'Enhance presentation skills']
  }
];

const sampleMissingKeywords = [
  {
    keyword: 'TypeScript',
    importance: 'high' as const,
    frequency: 85,
    category: 'Programming Language',
    resources: ['TypeScript Official Docs', 'React with TypeScript Course', 'TypeScript Exercises']
  },
  {
    keyword: 'GraphQL',
    importance: 'high' as const,
    frequency: 70,
    category: 'API Technology',
    resources: ['GraphQL Fundamentals', 'Apollo Client Tutorial', 'GraphQL with React']
  },
  {
    keyword: 'Jest',
    importance: 'medium' as const,
    frequency: 65,
    category: 'Testing Framework',
    resources: ['Jest Documentation', 'React Testing Tutorial', 'Testing Best Practices']
  },
  {
    keyword: 'Next.js',
    importance: 'medium' as const,
    frequency: 60,
    category: 'React Framework',
    resources: ['Next.js Official Guide', 'SSR with Next.js', 'Next.js Projects']
  }
];

const sampleImprovementSteps = [
  {
    phase: 'foundation',
    title: 'Core Technology Skills',
    duration: '4-6 weeks',
    priority: 'high' as const,
    tasks: [
      {
        description: 'Complete TypeScript fundamentals course',
        resource: 'TypeScript Deep Dive (free ebook)',
        completed: false
      },
      {
        description: 'Build a project with TypeScript and React',
        resource: 'React TypeScript Tutorial',
        completed: false
      },
      {
        description: 'Learn GraphQL basics and build a simple API',
        resource: 'GraphQL.org tutorials',
        completed: false
      }
    ]
  },
  {
    phase: 'advanced',
    title: 'Advanced Framework Skills',
    duration: '3-4 weeks',
    priority: 'medium' as const,
    tasks: [
      {
        description: 'Learn Next.js and server-side rendering',
        resource: 'Next.js Official Documentation',
        completed: false
      },
      {
        description: 'Master testing with Jest and React Testing Library',
        resource: 'Testing JavaScript Course',
        completed: false
      },
      {
        description: 'Explore performance optimization techniques',
        completed: false
      }
    ]
  },
  {
    phase: 'portfolio',
    title: 'Portfolio Development',
    duration: '2-3 weeks',
    priority: 'medium' as const,
    tasks: [
      {
        description: 'Create 2-3 portfolio projects using learned technologies',
        completed: false
      },
      {
        description: 'Contribute to an open-source project',
        completed: false
      },
      {
        description: 'Prepare technical interview answers',
        completed: false
      }
    ]
  }
];

export default function JobMatchPage() {

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [jobData, setJobData] = useState<{ role: string; skills: string[] } | null>(null);
  const [selectedJob, setSelectedJob] = useState<JobMatch | null>(null);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const handleResumeUpload = (file: File) => {
    setUploadedFile(file);
    // Simulate analysis
    setTimeout(() => {
      setAnalysisComplete(true);
    }, 2000);
  };

  const handleJobRoleSubmit = (role: string, skills: string[]) => {
    setJobData({ role, skills });
    // Simulate analysis
    setTimeout(() => {
      setAnalysisComplete(true);
    }, 2000);
  };

  const handleJobSelect = (job: any) => {
    setSelectedJob(job);
  };

  const handleTaskComplete = (phase: string, taskIndex: number) => {
    console.log('Task completed:', phase, taskIndex);
    // In a real app, update the task completion status
  };

  const handleReset = () => {
    setUploadedFile(null);
    setJobData(null);
    setSelectedJob(null);
    setAnalysisComplete(false);
  };

  const handleDownloadReport = () => {
    alert('Downloading job match analysis report...');
  };

  const handleShareResults = () => {
    alert('Sharing job match results...');
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">AI Job Match</h1>
          <p className="text-lg sm:text-xl text-secondary max-w-3xl mx-auto">
            Find your perfect job match with AI-powered semantic analysis. 
            Upload your resume or enter your skills to discover opportunities.
          </p>
        </div>

        {!analysisComplete ? (
          // Input Phase
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Input Form */}
            <div className="xl:col-span-1">
              <JobInputForm
                onResumeUpload={handleResumeUpload}
                onJobRoleSubmit={handleJobRoleSubmit}
                uploadedFile={uploadedFile}
              />
            </div>

            {/* Info Panel */}
            <div className="xl:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-primary mb-4">
                    Find Your Perfect Job Match
                  </h2>
                  <p className="text-secondary mb-6 max-w-md mx-auto">
                    Our AI analyzes your skills, experience, and preferences to find 
                    job opportunities that truly match your profile.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    <div className="text-center p-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-lg">🤖</span>
                      </div>
                      <h4 className="font-semibold text-primary mb-2">AI-Powered Matching</h4>
                      <p className="text-secondary text-sm">Semantic analysis beyond keywords</p>
                    </div>
                    <div className="text-center p-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-lg">📊</span>
                      </div>
                      <h4 className="font-semibold text-primary mb-2">Detailed Analysis</h4>
                      <p className="text-secondary text-sm">Comprehensive match breakdown</p>
                    </div>
                    <div className="text-center p-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-lg">🚀</span>
                      </div>
                      <h4 className="font-semibold text-primary mb-2">Improvement Plan</h4>
                      <p className="text-secondary text-sm">Personalized roadmap to success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Results Phase
          <div className="space-y-8">
            {/* Action Bar */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-primary">
                    Job Match Results
                  </h2>
                  <p className="text-secondary text-sm">
                    {uploadedFile 
                      ? `Based on your resume: ${uploadedFile.name}`
                      : jobData 
                      ? `For ${jobData.role} role with ${jobData.skills.length} skills`
                      : 'Analysis complete'
                    }
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-2 border border-primary text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary/5 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    New Search
                  </button>
                  <button
                    onClick={handleDownloadReport}
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download Report
                  </button>
                  <button
                    onClick={handleShareResults}
                    className="flex items-center gap-2 border border-primary text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary/5 transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Left Column - Job Matches */}
              <div className="xl:col-span-2 space-y-8">
                <SemanticMatchResults
                  jobMatches={sampleJobMatches}
                  matchAnalysis={sampleMatchAnalysis}
                  selectedJob={selectedJob}
                  onJobSelect={handleJobSelect}
                />

                {selectedJob && (
                  <MatchScoreAnalysis
                    selectedJob={selectedJob}
                    breakdown={sampleBreakdown}
                    overallMatch={selectedJob?.match ?? 0}
                  />
                )}
              </div>

              {/* Right Column - Analysis & Improvements */}
              <div className="space-y-8">
                <MissingKeywordSuggestions
                  missingKeywords={sampleMissingKeywords}
                  jobTitle={selectedJob?.title || jobData?.role || 'your target role'}
                />

                <ImprovementSteps
                  steps={sampleImprovementSteps}
                  jobTitle={selectedJob?.title || jobData?.role || 'your target role'}
                  onTaskComplete={handleTaskComplete}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}