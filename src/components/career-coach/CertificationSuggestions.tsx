'use client';

import { Award, Clock, DollarSign, Star, ExternalLink } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  provider: string;
  duration: string;
  cost: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  url: string;
  skills: string[];
  relevance: 'high' | 'medium' | 'low';
}

interface CertificationSuggestionsProps {
  certifications: Certification[];
  careerTitle: string;
}

const CertificationSuggestions: React.FC<CertificationSuggestionsProps> = ({ 
  certifications, 
  careerTitle 
}) => {
  const getRelevanceColor = (relevance: string) => {
    switch (relevance) {
      case 'high': return 'border-green-200 bg-green-50';
      case 'medium': return 'border-yellow-200 bg-yellow-50';
      case 'low': return 'border-blue-200 bg-blue-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <Award className="w-6 h-6 text-primary" />
        <div>
          <h2 className="text-xl font-semibold text-primary">Recommended Certifications</h2>
          <p className="text-secondary text-sm">Boost your {careerTitle} career with these certifications</p>
        </div>
      </div>

      <div className="space-y-4">
        {certifications.map((cert) => (
          <div 
            key={cert.id}
            className={`p-4 rounded-xl border-2 hover:shadow-md transition-all duration-200 ${getRelevanceColor(cert.relevance)}`}
          >
            <div className="flex flex-col lg:flex-row lg:items-start gap-4">
              {/* Certification Info */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-semibold text-primary text-lg mb-1">{cert.title}</h3>
                    <p className="text-secondary text-sm">by {cert.provider}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-4 h-4 ${
                          i < cert.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-secondary text-sm ml-1">({cert.rating})</span>
                  </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span className="text-secondary">{cert.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    <span className="text-secondary">{cert.cost}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="w-4 h-4 text-purple-500" />
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(cert.level)}`}>
                      {cert.level}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className={`w-3 h-3 rounded-full ${
                      cert.relevance === 'high' ? 'bg-green-500' :
                      cert.relevance === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`} />
                    <span className="text-secondary">{cert.relevance} relevance</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors self-start lg:self-center"
              >
                <span>Explore</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {certifications.length === 0 && (
        <div className="text-center py-8">
          <Award className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-secondary">No certifications recommended for your current profile</p>
        </div>
      )}
    </div>
  );
};

export default CertificationSuggestions;