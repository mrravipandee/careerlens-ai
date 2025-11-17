'use client';

import { Target, CheckCircle, XCircle, TrendingUp, MapPin, DollarSign, Clock } from 'lucide-react';

interface JobMatch {
  id: string;
  title: string;
  company: string;
  match: number;
  location: string;
  salary: string;
  type: string;
  skills: string[];
  description: string;
  posted: string;
  url: string;
}

interface MatchAnalysis {
  skillMatches: string[];
  missingSkills: string[];
  experienceMatch: boolean;
  educationMatch: boolean;
  locationMatch: boolean;
}

interface SemanticMatchResultsProps {
  jobMatches: JobMatch[];
  matchAnalysis: MatchAnalysis;
  selectedJob: JobMatch | null;
  onJobSelect: (job: JobMatch) => void;
}

const SemanticMatchResults: React.FC<SemanticMatchResultsProps> = ({
  jobMatches,
  matchAnalysis,
  selectedJob,
  onJobSelect
}) => {
  const getMatchColor = (match: number) => {
    if (match >= 80) return 'text-green-600 bg-green-100';
    if (match >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-orange-600 bg-orange-100';
  };

  const getMatchLevel = (match: number) => {
    if (match >= 80) return 'Excellent Match';
    if (match >= 60) return 'Good Match';
    if (match >= 40) return 'Fair Match';
    return 'Low Match';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Target className="w-6 h-6 text-primary" />
        <div>
          <h2 className="text-xl font-semibold text-primary">Semantic Match Results</h2>
          <p className="text-secondary text-sm">AI-powered job matching based on skills and context</p>
        </div>
      </div>

      {/* Match Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
          <div className="text-2xl font-bold text-primary mb-1">{jobMatches.length}</div>
          <div className="text-sm text-secondary">Jobs Found</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
          <div className="text-2xl font-bold text-primary mb-1">
            {jobMatches.filter(job => job.match >= 80).length}
          </div>
          <div className="text-sm text-secondary">Excellent Matches</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
          <div className="text-2xl font-bold text-primary mb-1">
            {matchAnalysis.skillMatches.length}
          </div>
          <div className="text-sm text-secondary">Skills Matched</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
          <div className="text-2xl font-bold text-primary mb-1">
            {matchAnalysis.missingSkills.length}
          </div>
          <div className="text-sm text-secondary">Skills to Learn</div>
        </div>
      </div>

      {/* Job Matches Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {jobMatches.map((job) => (
          <div
            key={job.id}
            className={`bg-white rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
              selectedJob?.id === job.id
                ? 'border-primary shadow-xl'
                : 'border-gray-200 hover:shadow-lg'
            }`}
            onClick={() => onJobSelect(job)}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-primary text-lg mb-1">{job.title}</h3>
                <p className="text-secondary text-sm mb-2">{job.company}</p>
              </div>
              <div className="text-right">
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${getMatchColor(job.match)}`}>
                  {job.match}%
                </div>
                <div className="text-xs text-secondary mt-1">{getMatchLevel(job.match)}</div>
              </div>
            </div>

            {/* Match Score Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="h-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-1000"
                style={{ width: `${job.match}%` }}
              />
            </div>

            {/* Job Details */}
            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div className="flex items-center gap-2 text-secondary">
                <MapPin className="w-4 h-4" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2 text-secondary">
                <DollarSign className="w-4 h-4" />
                <span>{job.salary}</span>
              </div>
              <div className="flex items-center gap-2 text-secondary">
                <Clock className="w-4 h-4" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-2 text-secondary">
                <TrendingUp className="w-4 h-4" />
                <span>{job.posted}</span>
              </div>
            </div>

            {/* Key Skills */}
            <div>
              <h4 className="text-sm font-medium text-primary mb-2">Key Skills:</h4>
              <div className="flex flex-wrap gap-2">
                {job.skills.slice(0, 4).map((skill, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1 rounded text-xs ${
                      matchAnalysis.skillMatches.includes(skill)
                        ? 'bg-green-100 text-green-800'
                        : matchAnalysis.missingSkills.includes(skill)
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
                {job.skills.length > 4 && (
                  <span className="text-secondary text-xs">
                    +{job.skills.length - 4} more
                  </span>
                )}
              </div>
            </div>

            {/* View Details CTA */}
            <button className="w-full mt-4 py-2 text-primary font-semibold text-sm hover:bg-primary/5 rounded-lg transition-colors">
              View Detailed Analysis →
            </button>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {jobMatches.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
          <Target className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-primary mb-2">No Matches Found</h3>
          <p className="text-secondary max-w-md mx-auto">
            Try adjusting your job role or skills. You might need to broaden your search criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default SemanticMatchResults;