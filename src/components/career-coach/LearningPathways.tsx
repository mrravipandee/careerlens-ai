'use client';

import { BookOpen, PlayCircle, FileText, Users, Clock, CheckCircle } from 'lucide-react';

interface LearningResource {
  id: string;
  title: string;
  type: 'course' | 'book' | 'tutorial' | 'community';
  provider: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  url: string;
  completed?: boolean;
}

interface LearningPathwaysProps {
  resources: LearningResource[];
  careerTitle: string;
}

const LearningPathways: React.FC<LearningPathwaysProps> = ({ resources, careerTitle }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course': return <PlayCircle className="w-5 h-5 text-blue-500" />;
      case 'book': return <BookOpen className="w-5 h-5 text-green-500" />;
      case 'tutorial': return <FileText className="w-5 h-5 text-purple-500" />;
      case 'community': return <Users className="w-5 h-5 text-orange-500" />;
      default: return <BookOpen className="w-5 h-5 text-gray-500" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'course': return 'bg-blue-100 text-blue-800';
      case 'book': return 'bg-green-100 text-green-800';
      case 'tutorial': return 'bg-purple-100 text-purple-800';
      case 'community': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
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
        <BookOpen className="w-6 h-6 text-primary" />
        <div>
          <h2 className="text-xl font-semibold text-primary">Learning Pathways</h2>
          <p className="text-secondary text-sm">Curated resources for your {careerTitle} journey</p>
        </div>
      </div>

      <div className="space-y-4">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className={`p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200 ${
              resource.completed ? 'bg-green-50 border-green-200' : ''
            }`}
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="flex-shrink-0">
                {getTypeIcon(resource.type)}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-semibold text-primary text-lg mb-1">{resource.title}</h3>
                    <p className="text-secondary text-sm">by {resource.provider}</p>
                  </div>
                  {resource.completed && (
                    <div className="flex items-center gap-1 text-green-600 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>Completed</span>
                    </div>
                  )}
                </div>

                {/* Meta Information */}
                <div className="flex flex-wrap gap-3 mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                    {resource.type}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(resource.level)}`}>
                    {resource.level}
                  </span>
                  <div className="flex items-center gap-1 text-secondary text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{resource.duration}</span>
                  </div>
                </div>

                {/* Action */}
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors"
                >
                  Start Learning →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {resources.length === 0 && (
        <div className="text-center py-8">
          <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-secondary">No learning resources available for your current profile</p>
        </div>
      )}

      {/* Progress Summary */}
      {resources.some(r => r.completed) && (
        <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-primary">Learning Progress</span>
            <span className="text-sm text-secondary">
              {resources.filter(r => r.completed).length} of {resources.length} completed
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ 
                width: `${(resources.filter(r => r.completed).length / resources.length) * 100}%` 
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LearningPathways;