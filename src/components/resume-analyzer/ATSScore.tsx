'use client';

import { Target, CheckCircle, XCircle } from 'lucide-react';

interface ATSScoreProps {
  score: number;
  matches: string[];
  missing: string[];
}

const ATSScore: React.FC<ATSScoreProps> = ({ score, matches, missing }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <Target className="w-6 h-6 text-blue-500" />
        <h3 className="text-lg font-semibold text-primary">ATS Compatibility</h3>
        <div className="ml-auto text-2xl font-bold text-primary">{score}%</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Matched Keywords */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <h4 className="font-medium text-primary">Keywords Found ({matches.length})</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {matches.map((keyword, index) => (
              <span 
                key={index}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Missing Keywords */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <XCircle className="w-5 h-5 text-orange-500" />
            <h4 className="font-medium text-primary">Missing Keywords ({missing.length})</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {missing.map((keyword, index) => (
              <span 
                key={index}
                className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ATS Tips */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h5 className="font-medium text-primary mb-2">💡 ATS Tips</h5>
        <ul className="text-sm text-secondary space-y-1">
          <li>• Use standard section headings (Experience, Education, Skills)</li>
          <li>• Include relevant keywords from job descriptions</li>
          <li>• Avoid images, tables, and complex formatting</li>
        </ul>
      </div>
    </div>
  );
};

export default ATSScore;