'use client';

import { Briefcase, MapPin, DollarSign, TrendingUp } from 'lucide-react';

interface JobMatch {
  title: string;
  industry: string;
  match: number;
  salary?: string;
  location?: string;
  growth?: string;
}

interface JobRoleMatchProps {
  matches: JobMatch[];
}

const JobRoleMatch: React.FC<JobRoleMatchProps> = ({ matches }) => {
  const getMatchColor = (match: number) => {
    if (match >= 80) return 'text-green-600 bg-green-100';
    if (match >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-orange-600 bg-orange-100';
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="w-6 h-6 text-indigo-500" />
        <h3 className="text-lg font-semibold text-primary">Recommended Job Roles</h3>
      </div>

      <div className="space-y-4">
        {matches.map((job, index) => (
          <div 
            key={index}
            className="p-4 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-3">
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h4 className="font-semibold text-primary text-lg">{job.title}</h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMatchColor(job.match)}`}>
                    {job.match}% Match
                  </span>
                </div>
                <p className="text-secondary text-sm">{job.industry}</p>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full lg:w-32">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-1000"
                    style={{ width: `${job.match}%` }}
                  />
                </div>
                <p className="text-secondary text-xs text-center mt-1">Compatibility</p>
              </div>
            </div>

            {/* Job Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              {job.salary && (
                <div className="flex items-center gap-2 text-secondary">
                  <DollarSign className="w-4 h-4 text-green-500" />
                  <span>{job.salary}</span>
                </div>
              )}
              {job.location && (
                <div className="flex items-center gap-2 text-secondary">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>{job.location}</span>
                </div>
              )}
              {job.growth && (
                <div className="flex items-center gap-2 text-secondary">
                  <TrendingUp className="w-4 h-4 text-purple-500" />
                  <span>{job.growth} growth</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Career Advice */}
      <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
        <h5 className="font-medium text-primary mb-2">💼 Career Advice</h5>
        <p className="text-secondary text-sm">
          Focus on roles with 80%+ match scores. These align best with your current skills and experience.
        </p>
      </div>
    </div>
  );
};

export default JobRoleMatch;