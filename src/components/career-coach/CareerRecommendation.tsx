'use client';

import { TrendingUp, Target, DollarSign, Clock, MapPin, Star } from 'lucide-react';

interface CareerPath {
  id: string;
  title: string;
  match: number;
  description: string;
  requiredSkills: string[];
  salaryRange: {
    min: number;
    max: number;
    currency: string;
  };
  growth: string;
  demand: 'high' | 'medium' | 'low';
  timeline: string;
  locations: string[];
}

interface CareerRecommendationProps {
  recommendations: CareerPath[];
  onPathSelect: (path: CareerPath) => void;
}

const CareerRecommendation: React.FC<CareerRecommendationProps> = ({ 
  recommendations, 
  onPathSelect 
}) => {
  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'high': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const formatSalary = (min: number, max: number, currency: string) => {
    return `${currency} ${min/1000}K - ${max/1000}K/year`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="w-6 h-6 text-primary" />
        <h2 className="text-xl font-semibold text-primary">AI Career Recommendations</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {recommendations.map((career) => (
          <div
            key={career.id}
            className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => onPathSelect(career)}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-primary text-lg mb-1">{career.title}</h3>
                <p className="text-secondary text-sm mb-2">{career.description}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">{career.match}%</div>
                <div className="text-xs text-secondary">Match</div>
              </div>
            </div>

            {/* Match Score Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="h-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                style={{ width: `${career.match}%` }}
              />
            </div>

            {/* Key Details */}
            <div className="space-y-3">
              {/* Salary */}
              <div className="flex items-center gap-2 text-sm">
                <DollarSign className="w-4 h-4 text-green-500" />
                <span className="text-secondary">
                  {formatSalary(career.salaryRange.min, career.salaryRange.max, career.salaryRange.currency)}
                </span>
              </div>

              {/* Timeline */}
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-blue-500" />
                <span className="text-secondary">{career.timeline}</span>
              </div>

              {/* Growth */}
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-purple-500" />
                <span className="text-secondary">{career.growth} growth</span>
              </div>

              {/* Demand */}
              <div className="flex items-center gap-2 text-sm">
                <Target className="w-4 h-4 text-orange-500" />
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDemandColor(career.demand)}`}>
                  {career.demand.toUpperCase()} DEMAND
                </span>
              </div>

              {/* Locations */}
              {career.locations.length > 0 && (
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span className="text-secondary text-xs">
                    {career.locations.slice(0, 2).join(', ')}
                    {career.locations.length > 2 && ` +${career.locations.length - 2} more`}
                  </span>
                </div>
              )}
            </div>

            {/* Required Skills */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h4 className="text-sm font-medium text-primary mb-2">Key Skills Needed:</h4>
              <div className="flex flex-wrap gap-1">
                {career.requiredSkills.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
                {career.requiredSkills.length > 3 && (
                  <span className="text-secondary text-xs">
                    +{career.requiredSkills.length - 3} more
                  </span>
                )}
              </div>
            </div>

            {/* View Details CTA */}
            <button className="w-full mt-4 py-2 text-primary font-semibold text-sm hover:bg-primary/5 rounded-lg transition-colors">
              View Career Roadmap →
            </button>
          </div>
        ))}
      </div>

      {/* No Recommendations Message */}
      {recommendations.length === 0 && (
        <div className="text-center py-12">
          <Star className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-primary mb-2">No Recommendations Yet</h3>
          <p className="text-secondary">
            Complete your profile to get personalized career recommendations
          </p>
        </div>
      )}
    </div>
  );
};

export default CareerRecommendation;