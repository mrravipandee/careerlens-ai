'use client';

import { CheckCircle, XCircle, AlertCircle, TrendingUp, Target } from 'lucide-react';

interface MatchBreakdown {
  category: string;
  score: number;
  maxScore: number;
  matches: string[];
  improvements: string[];
}

interface MatchScoreAnalysisProps {
  selectedJob: {
    title: string;
    company: string;
    match: number;
  };
  breakdown: MatchBreakdown[];
  overallMatch: number;
}

const MatchScoreAnalysis: React.FC<MatchScoreAnalysisProps> = ({
  selectedJob,
  breakdown,
  overallMatch
}) => {
  const getScoreColor = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 80) return 'text-green-600 bg-green-100';
    if (percentage >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getScoreDescription = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 80) return 'Excellent match';
    if (percentage >= 60) return 'Good match';
    if (percentage >= 40) return 'Fair match';
    return 'Needs improvement';
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="w-6 h-6 text-primary" />
        <div>
          <h2 className="text-xl font-semibold text-primary">Match Score Analysis</h2>
          <p className="text-secondary text-sm">
            Detailed breakdown for {selectedJob.title} at {selectedJob.company}
          </p>
        </div>
      </div>

      {/* Overall Match Score */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Overall Match Score</h3>
            <p className="text-white/80">
              How well your profile matches this job requirement
            </p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold mb-1">{overallMatch}%</div>
            <div className="text-white/80 text-sm">
              {overallMatch >= 80 ? 'Excellent Fit' : 
               overallMatch >= 60 ? 'Good Fit' : 
               overallMatch >= 40 ? 'Fair Fit' : 'Needs Work'}
            </div>
          </div>
        </div>
        
        {/* Overall Progress Bar */}
        <div className="w-full bg-white/30 rounded-full h-3 mt-4">
          <div 
            className="h-3 rounded-full bg-white transition-all duration-1000"
            style={{ width: `${overallMatch}%` }}
          />
        </div>
      </div>

      {/* Breakdown Categories */}
      <div className="space-y-6">
        {breakdown.map((category, index) => (
          <div key={category.category} className="border border-gray-200 rounded-xl p-4">
            {/* Category Header */}
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-primary">{category.category}</h4>
              <div className="text-right">
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(category.score, category.maxScore)}`}>
                  {category.score}/{category.maxScore}
                </div>
                <div className="text-xs text-secondary mt-1">
                  {getScoreDescription(category.score, category.maxScore)}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="h-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-1000"
                style={{ width: `${(category.score / category.maxScore) * 100}%` }}
              />
            </div>

            {/* Matches and Improvements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Matches */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-primary">Strong Points</span>
                </div>
                <ul className="space-y-1">
                  {category.matches.map((match, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-secondary">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      {match}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Improvements */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-orange-500" />
                  <span className="text-sm font-medium text-primary">Areas to Improve</span>
                </div>
                <ul className="space-y-1">
                  {category.improvements.map((improvement, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-secondary">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      {improvement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
        <h4 className="font-medium text-primary mb-2">📊 Match Summary</h4>
        <p className="text-secondary text-sm">
          {overallMatch >= 80 
            ? 'Excellent match! You have most of the required skills and qualifications.'
            : overallMatch >= 60
            ? 'Good match. Focus on the improvement areas to increase your chances.'
            : 'Fair match. Consider developing the missing skills or exploring related roles.'
          }
        </p>
      </div>
    </div>
  );
};

export default MatchScoreAnalysis;