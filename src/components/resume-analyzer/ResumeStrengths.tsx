'use client';

import { Award, CheckCircle } from 'lucide-react';

interface Strength {
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
}

interface ResumeStrengthsProps {
  strengths: Strength[];
}

const ResumeStrengths: React.FC<ResumeStrengthsProps> = ({ strengths }) => {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <Award className="w-6 h-6 text-green-500" />
        <h3 className="text-lg font-semibold text-primary">Resume Strengths</h3>
      </div>

      <div className="space-y-4">
        {strengths.map((strength, index) => (
          <div 
            key={index}
            className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow duration-200"
          >
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h4 className="font-medium text-primary">{strength.title}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(strength.impact)}`}>
                  {strength.impact.toUpperCase()} IMPACT
                </span>
              </div>
              <p className="text-secondary text-sm">{strength.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
        <p className="text-sm text-primary font-medium">
          🎉 Great job! Your resume has several strong points that will impress recruiters.
        </p>
      </div>
    </div>
  );
};

export default ResumeStrengths;