// app/dashboard/page.tsx
'use client';

import { useState } from 'react';
import { BarChart3, Target, TrendingUp, FileText, Crown } from 'lucide-react';

// Import Components
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import SavedResumes from '@/components/dashboard/SavedResumes';
import SavedReports from '@/components/dashboard/SavedReports';
import SavedCareerPaths from '@/components/dashboard/SavedCareerPaths';
import AnalysisHistory from '@/components/dashboard/AnalysisHistory';

// Sample data
const sampleResumes = [
  {
    id: '1',
    name: 'Software_Engineer_Resume.pdf',
    uploadDate: '2 weeks ago',
    lastAnalyzed: '3 days ago',
    score: 85,
    fileSize: '2.4 MB',
    fileType: 'PDF',
    isStarred: true
  },
  {
    id: '2',
    name: 'Frontend_Developer_2024.docx',
    uploadDate: '1 month ago',
    lastAnalyzed: '2 weeks ago',
    score: 78,
    fileSize: '1.8 MB',
    fileType: 'DOCX',
    isStarred: false
  },
  {
    id: '3',
    name: 'Updated_Tech_Resume.pdf',
    uploadDate: '5 days ago',
    lastAnalyzed: '1 day ago',
    score: 92,
    fileSize: '3.1 MB',
    fileType: 'PDF',
    isStarred: true
  }
];

const sampleReports = [
  {
    id: '1',
    title: 'Comprehensive Resume Analysis',
    resumeName: 'Software_Engineer_Resume.pdf',
    createdAt: '3 days ago',
    score: 85,
    type: 'resume' as const,
    insights: [
      'Strong technical skills section',
      'Good project experience showcase',
      'Could improve quantifiable achievements',
      'ATS compatibility score: 82%'
    ],
    downloadUrl: '#'
  },
  {
    id: '2',
    title: 'Career Path Recommendation',
    resumeName: 'Frontend_Developer_2024.docx',
    createdAt: '2 weeks ago',
    score: 78,
    type: 'career' as const,
    insights: [
      'Recommended path: Senior Frontend Developer',
      'High growth potential in React ecosystem',
      'Consider learning TypeScript and Next.js',
      '90% match with Full Stack roles'
    ],
    downloadUrl: '#'
  }
];

const sampleCareerPaths = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    match: 92,
    industry: 'Technology',
    timeline: '12-18 months',
    salary: '$120,000 - $150,000',
    locations: ['Remote', 'San Francisco', 'New York'],
    skills: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Testing'],
    progress: 65,
    lastUpdated: '1 week ago'
  },
  {
    id: '2',
    title: 'Tech Lead',
    match: 78,
    industry: 'Software Development',
    timeline: '2-3 years',
    salary: '$140,000 - $180,000',
    locations: ['Hybrid', 'Seattle', 'Austin'],
    skills: ['Leadership', 'System Design', 'Architecture', 'Mentoring'],
    progress: 35,
    lastUpdated: '2 weeks ago'
  }
];

const sampleHistory = [
  {
    id: '1',
    type: 'resume' as const,
    title: 'Resume Analysis - Software_Engineer_Resume.pdf',
    date: '3 days ago',
    duration: '45 seconds',
    score: 85,
    insights: 12,
    status: 'completed' as const
  },
  {
    id: '2',
    type: 'career' as const,
    title: 'Career Path Analysis',
    date: '1 week ago',
    duration: '2 minutes',
    score: 78,
    insights: 8,
    status: 'completed' as const
  },
  {
    id: '3',
    type: 'job-match' as const,
    title: 'Job Match - Frontend Roles',
    date: '2 weeks ago',
    duration: '1 minute',
    insights: 15,
    status: 'completed' as const
  },
  {
    id: '4',
    type: 'resume' as const,
    title: 'Resume Analysis - Updated_Tech_Resume.pdf',
    date: '1 day ago',
    duration: '38 seconds',
    score: 92,
    insights: 10,
    status: 'completed' as const
  }
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'resumes' | 'reports' | 'careers' | 'history'>('overview');
  const userName = "John Doe";
  const userPlan = "premium";
  const analysisCount = 15;

  // Event handlers
  const handleViewResume = (resume: any) => {
    console.log('View resume:', resume);
  };

  const handleDownloadResume = (resume: any) => {
    console.log('Download resume:', resume);
  };

  const handleShareResume = (resume: any) => {
    console.log('Share resume:', resume);
  };

  const handleDeleteResume = (resume: any) => {
    console.log('Delete resume:', resume);
  };

  const handleToggleStar = (resume: any) => {
    console.log('Toggle star:', resume);
  };

  const handleViewReport = (report: any) => {
    console.log('View report:', report);
  };

  const handleDownloadReport = (report: any) => {
    console.log('Download report:', report);
  };

  const handleShareReport = (report: any) => {
    console.log('Share report:', report);
  };

  const handleDeleteReport = (report: any) => {
    console.log('Delete report:', report);
  };

  const handleViewPath = (path: any) => {
    console.log('View path:', path);
  };

  const handleDownloadPath = (path: any) => {
    console.log('Download path:', path);
  };

  const handleSharePath = (path: any) => {
    console.log('Share path:', path);
  };

  const handleDeletePath = (path: any) => {
    console.log('Delete path:', path);
  };

  const handleViewAnalysis = (analysis: any) => {
    console.log('View analysis:', analysis);
  };

  const handleDownloadAnalysis = (analysis: any) => {
    console.log('Download analysis:', analysis);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <SavedResumes
              resumes={sampleResumes.slice(0, 2)}
              onViewResume={handleViewResume}
              onDownloadResume={handleDownloadResume}
              onShareResume={handleShareResume}
              onDeleteResume={handleDeleteResume}
              onToggleStar={handleToggleStar}
            />
            <SavedReports
              reports={sampleReports}
              onViewReport={handleViewReport}
              onDownloadReport={handleDownloadReport}
              onShareReport={handleShareReport}
              onDeleteReport={handleDeleteReport}
            />
            <div className="xl:col-span-2">
              <AnalysisHistory
                history={sampleHistory}
                onViewAnalysis={handleViewAnalysis}
                onDownloadAnalysis={handleDownloadAnalysis}
              />
            </div>
          </div>
        );
      
      case 'resumes':
        return (
          <SavedResumes
            resumes={sampleResumes}
            onViewResume={handleViewResume}
            onDownloadResume={handleDownloadResume}
            onShareResume={handleShareResume}
            onDeleteResume={handleDeleteResume}
            onToggleStar={handleToggleStar}
          />
        );
      
      case 'reports':
        return (
          <SavedReports
            reports={sampleReports}
            onViewReport={handleViewReport}
            onDownloadReport={handleDownloadReport}
            onShareReport={handleShareReport}
            onDeleteReport={handleDeleteReport}
          />
        );
      
      case 'careers':
        return (
          <SavedCareerPaths
            careerPaths={sampleCareerPaths}
            onViewPath={handleViewPath}
            onDownloadPath={handleDownloadPath}
            onSharePath={handleSharePath}
            onDeletePath={handleDeletePath}
          />
        );
      
      case 'history':
        return (
          <AnalysisHistory
            history={sampleHistory}
            onViewAnalysis={handleViewAnalysis}
            onDownloadAnalysis={handleDownloadAnalysis}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <DashboardHeader
          userName={userName}
          userPlan={userPlan}
          analysisCount={analysisCount}
        />

        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl p-2 mt-8 border border-gray-200">
          <div className="flex flex-wrap gap-1">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'resumes', label: 'Saved Resumes', icon: FileText },
              { id: 'reports', label: 'Analysis Reports', icon: TrendingUp },
              { id: 'careers', label: 'Career Paths', icon: Target },
              { id: 'history', label: 'History', icon: Crown }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-colors flex-1 min-w-[140px] ${
                    activeTab === tab.id
                      ? 'bg-primary text-white'
                      : 'text-secondary hover:text-primary hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {renderTabContent()}
        </div>

        {/* Premium Upgrade Banner (for free users) */}
        {userPlan === 'free' && (
          <div className="mt-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-6 text-white">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Crown className="w-12 h-12" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Upgrade to Premium</h3>
                  <p className="text-white/90">
                    Unlock unlimited analyses, advanced insights, and priority support
                  </p>
                </div>
              </div>
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
                Upgrade Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}