// app/resume-analyzer/page.tsx
'use client';

import { useState } from 'react';
import { Download, RotateCcw, Zap, Target, TrendingUp } from 'lucide-react';

// Import Components
import UploadBox from '@/components/resume-analyzer/UploadBox';
import ResumeParsingLoader from '@/components/resume-analyzer/ResumeParsingLoader';
import ScoreCard from '@/components/resume-analyzer/ScoreCard';
import ATSScore from '@/components/resume-analyzer/ATSScore';
import KeywordMatch from '@/components/resume-analyzer/KeywordMatch';
import ResumeStrengths from '@/components/resume-analyzer/ResumeStrengths';
import ImprovementSuggestions from '@/components/resume-analyzer/ImprovementSuggestions';
import JobRoleMatch from '@/components/resume-analyzer/JobRoleMatch';

// Sample data
const sampleAnalysisData = {
  overallScore: 78,
  atsScore: 82,
  strengths: [
    {
      title: "Clear Work Experience",
      description: "Your work history is well-structured and easy to follow with clear timelines",
      impact: "high" as const
    },
    {
      title: "Relevant Skills Section",
      description: "Technical skills are prominently displayed and highly relevant to target roles",
      impact: "high" as const
    },
    {
      title: "Professional Formatting",
      description: "Clean layout with good use of whitespace and readable fonts",
      impact: "medium" as const
    }
  ],
  improvements: [
    {
      title: "Add Quantifiable Achievements",
      description: "Include metrics and numbers to showcase your impact and accomplishments",
      impact: "high" as const,
      action: "Add numbers like 'increased efficiency by 30%'"
    },
    {
      title: "Optimize Resume Length",
      description: "Consider reducing to 2 pages for better readability and ATS compatibility",
      impact: "medium" as const,
      action: "Remove older or less relevant experiences"
    },
    {
      title: "Include Projects Section",
      description: "Add personal projects to demonstrate practical application of your skills",
      impact: "high" as const,
      action: "Showcase 2-3 key projects with technologies used"
    }
  ],
  keywordMatches: {
    "Technical Skills": ["JavaScript", "React", "Node.js", "Python", "SQL"],
    "Soft Skills": ["Leadership", "Communication", "Problem Solving", "Teamwork"],
    "Tools & Technologies": ["Git", "Docker", "AWS", "MongoDB", "Jenkins"]
  },
  atsData: {
    matches: ["JavaScript", "React", "Node.js", "API Development", "Agile"],
    missing: ["TypeScript", "GraphQL", "CI/CD", "Testing", "Microservices"]
  },
  jobMatches: [
    { 
      title: "Frontend Developer", 
      industry: "Technology", 
      match: 92,
      salary: "$85K - $110K",
      location: "Remote",
      growth: "High"
    },
    { 
      title: "Full Stack Engineer", 
      industry: "Software", 
      match: 85,
      salary: "$90K - $120K",
      location: "Hybrid",
      growth: "Very High"
    },
    { 
      title: "UI/UX Developer", 
      industry: "Design & Tech", 
      match: 78,
      salary: "$80K - $105K",
      location: "On-site",
      growth: "Medium"
    }
  ]
};

export default function ResumeAnalyzerPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setIsAnalysisComplete] = useState(false);

  const handleFileUpload = (file: File) => {
    if (file && (file.type === 'application/pdf' || 
                 file.type === 'application/msword' || 
                 file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      setUploadedFile(file);
      setIsAnalyzing(true);
      
      // Simulate analysis process
      setTimeout(() => {
        setIsAnalyzing(false);
        setIsAnalysisComplete(true);
      }, 3000);
    } else {
      alert('Please upload a PDF, DOC, or DOCX file');
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  };

  const handleTryAnother = () => {
    setUploadedFile(null);
    setIsAnalysisComplete(false);
    setIsAnalyzing(false);
  };

  const handleDownloadReport = () => {
    // In real app, generate and download PDF
    alert('Downloading your comprehensive resume analysis report...');
  };

  const handleAnalyzeResume = () => {
    if (uploadedFile && !isAnalyzing && !analysisComplete) {
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setIsAnalysisComplete(true);
      }, 3000);
    }
  };

  // Upload State
  if (!uploadedFile && !isAnalyzing && !analysisComplete) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">AI Resume Analyzer</h1>
            <p className="text-lg sm:text-xl text-secondary max-w-2xl mx-auto">
              Get instant AI-powered feedback on your resume. Improve ATS score, 
              discover missing keywords, and optimize for your dream job.
            </p>
          </div>

          {/* Upload Box */}
          <div className="mb-12">
            <UploadBox 
              onFileUpload={handleFileUpload}
              isDragging={isDragging}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              uploadedFile={uploadedFile}
            />
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl border border-gray-200">
              <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-primary mb-2">Instant Analysis</h3>
              <p className="text-secondary text-sm">Get detailed feedback in seconds</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-gray-200">
              <Target className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-primary mb-2">ATS Optimization</h3>
              <p className="text-secondary text-sm">Improve resume compatibility</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-gray-200">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-primary mb-2">Career Guidance</h3>
              <p className="text-secondary text-sm">Discover best-fit roles</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Analysis in Progress
  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResumeParsingLoader />
        </div>
      </div>
    );
  }

  // Analysis Complete - Show Results
  if (analysisComplete) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Actions */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Resume Analysis Complete</h1>
            <p className="text-secondary mb-6">
              Comprehensive analysis of your resume with actionable insights
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={handleDownloadReport}
                className="flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
              >
                <Download className="w-5 h-5" />
                Download Full Report
              </button>
              <button
                onClick={handleTryAnother}
                className="flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors duration-200"
              >
                <RotateCcw className="w-5 h-5" />
                Try Another Resume
              </button>
            </div>
          </div>

          {/* Analysis Results Grid */}
          <div className="space-y-6">
            {/* Score Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ScoreCard
                score={sampleAnalysisData.overallScore}
                title="Overall Resume Score"
                description="Comprehensive evaluation of your resume's effectiveness"
              />
              <ATSScore
                score={sampleAnalysisData.atsScore}
                matches={sampleAnalysisData.atsData.matches}
                missing={sampleAnalysisData.atsData.missing}
              />
            </div>

            {/* Strengths & Improvements */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ResumeStrengths strengths={sampleAnalysisData.strengths} />
              <ImprovementSuggestions suggestions={sampleAnalysisData.improvements} />
            </div>

            {/* Keywords & Job Matches */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <KeywordMatch 
                matches={sampleAnalysisData.keywordMatches}
                industry="Technology"
              />
              <JobRoleMatch matches={sampleAnalysisData.jobMatches} />
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-12 bg-white rounded-2xl p-8 text-center border border-gray-200">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Ready to Optimize Your Resume?
            </h3>
            <p className="text-secondary mb-6 max-w-2xl mx-auto">
              Implement these suggestions and upload your improved resume to track your progress 
              and increase your chances of landing interviews.
            </p>
            <button
              onClick={handleTryAnother}
              className="bg-primary text-background px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
            >
              Analyze Improved Resume
            </button>
          </div>
        </div>
      </div>
    );
  }

  // File uploaded but not analyzed
  if (uploadedFile && !isAnalyzing && !analysisComplete) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-primary mb-4">Ready to Analyze?</h2>
            <p className="text-secondary mb-6">
              Your resume <strong>{uploadedFile.name}</strong> is ready for AI analysis.
            </p>
            <button
              onClick={handleAnalyzeResume}
              className="bg-primary text-background px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
            >
              Start AI Analysis
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}