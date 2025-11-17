// components/AIDemoPreview.tsx
'use client';

import { useState } from 'react';
import { Star, TrendingUp, Target, CheckCircle, AlertCircle, Zap, Download, Share2, Sparkles } from 'lucide-react';

const AIDemoPreview = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'analysis' | 'recommendations'>('overview');

  const sampleResults = {
    overallScore: 82,
    atsScore: 78,
    improvements: [
      "Add more quantifiable achievements",
      "Include relevant keywords from job descriptions",
      "Optimize resume length (currently 3 pages)",
      "Add projects section to showcase skills"
    ],
    strengths: [
      "Clear work experience timeline",
      "Good educational background",
      "Relevant technical skills listed",
      "Professional formatting"
    ],
    jobMatches: [
      { title: "Frontend Developer", match: 92, company: "Tech Corp", salary: "$85K - $110K" },
      { title: "UI/UX Engineer", match: 88, company: "Design Co", salary: "$80K - $105K" },
      { title: "Full Stack Developer", match: 85, company: "Startup Inc", salary: "$90K - $120K" }
    ],
    careerPaths: [
      { title: "Senior Frontend Developer", timeline: "1-2 years", salary: "$110K - $140K" },
      { title: "Tech Lead", timeline: "3-4 years", salary: "$130K - $160K" },
      { title: "Engineering Manager", timeline: "5+ years", salary: "$150K - $200K" }
    ],
    courses: [
      { title: "Advanced React Patterns", provider: "Udemy", duration: "12 hours", level: "Intermediate" },
      { title: "System Design Fundamentals", provider: "Coursera", duration: "8 weeks", level: "Advanced" },
      { title: "AWS Certified Developer", provider: "Amazon", duration: "6 weeks", level: "Professional" }
    ]
  };

  const renderScoreCircle = (score: number, label: string, size = 'medium') => {
    const sizeClass = size === 'large' ? 'w-32 h-32' : 'w-24 h-24';
    const textSize = size === 'large' ? 'text-3xl' : 'text-xl';
    
    return (
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className={`${sizeClass} rounded-full border-8 border-gray-200 flex items-center justify-center`}>
            <div className={`${textSize} font-bold text-primary`}>{score}</div>
          </div>
          <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-green-500 border-r-blue-500 border-b-purple-500 border-l-orange-500 transform -rotate-45" />
        </div>
        <span className="text-sm text-secondary mt-2 font-medium">{label}</span>
      </div>
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <Sparkles className="w-4 h-4" />
            AI Demo Preview
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            See Your 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Career Insights
            </span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Get a sneak peek of the comprehensive analysis and personalized recommendations 
            you&apos;ll receive after uploading your resume.
          </p>
        </div>

        {/* Demo Results Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Sample Resume Analysis</h3>
                <p className="text-white/80">Frontend Developer • 3 years experience</p>
              </div>
              <div className="flex items-center gap-4">
                {renderScoreCircle(sampleResults.overallScore, "Overall Score", "large")}
                {renderScoreCircle(sampleResults.atsScore, "ATS Score")}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {[
                { id: 'overview', label: 'Overview', icon: Target },
                { id: 'analysis', label: 'Detailed Analysis', icon: TrendingUp },
                { id: 'recommendations', label: 'Recommendations', icon: Star }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-6 py-4 border-b-2 font-medium transition-colors duration-200 whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-primary text-primary'
                        : 'border-transparent text-secondary hover:text-primary'
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
          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Improvements Needed */}
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                    Areas for Improvement
                  </h4>
                  <div className="space-y-3">
                    {sampleResults.improvements.map((improvement, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-secondary text-sm">{improvement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strengths */}
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Your Strengths
                  </h4>
                  <div className="space-y-3">
                    {sampleResults.strengths.map((strength, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-secondary text-sm">{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'analysis' && (
              <div className="space-y-8">
                {/* Job Matches */}
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-4">Top Job Matches</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {sampleResults.jobMatches.map((job, index) => (
                      <div key={index} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow duration-200">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h5 className="font-semibold text-primary">{job.title}</h5>
                            <p className="text-secondary text-sm">{job.company}</p>
                          </div>
                          <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                            {job.match}% match
                          </div>
                        </div>
                        <p className="text-secondary text-sm mb-2">{job.salary}</p>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${job.match}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Paths */}
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-4">Suggested Career Paths</h4>
                  <div className="space-y-4">
                    {sampleResults.careerPaths.map((path, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                        <div>
                          <h5 className="font-semibold text-primary">{path.title}</h5>
                          <p className="text-secondary text-sm">Timeline: {path.timeline}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-primary">{path.salary}</p>
                          <div className="flex items-center gap-1 text-yellow-500">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'recommendations' && (
              <div>
                <h4 className="text-lg font-semibold text-primary mb-6">Recommended Courses & Certifications</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sampleResults.courses.map((course, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                          {course.level}
                        </span>
                        <Zap className="w-5 h-5 text-yellow-500" />
                      </div>
                      <h5 className="font-semibold text-primary mb-2">{course.title}</h5>
                      <p className="text-secondary text-sm mb-3">by {course.provider}</p>
                      <div className="flex justify-between items-center text-sm text-secondary">
                        <span>⏱️ {course.duration}</span>
                        <button className="text-primary hover:text-secondary font-semibold text-sm">
                          Enroll →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer CTA */}
          <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-secondary text-sm text-center sm:text-left">
                💡 This is just a sample. Upload your resume to get personalized insights!
              </p>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-200">
                  <Download className="w-4 h-4" />
                  Export PDF
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-200">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold">
                  Get Your Analysis
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-8">
          <p className="text-secondary text-sm">
            🔒 Your data is always secure and private. We never share your information with third parties.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIDemoPreview;