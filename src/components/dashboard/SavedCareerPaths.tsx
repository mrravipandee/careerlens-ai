'use client';

import { Target, TrendingUp, Clock, MapPin, DollarSign, Eye, Download, Share2, Trash2 } from 'lucide-react';

interface CareerPath {
  id: string;
  title: string;
  match: number;
  industry: string;
  timeline: string;
  salary: string;
  locations: string[];
  skills: string[];
  progress: number;
  lastUpdated: string;
}

interface SavedCareerPathsProps {
  careerPaths: CareerPath[];
  onViewPath: (path: CareerPath) => void;
  onDownloadPath: (path: CareerPath) => void;
  onSharePath: (path: CareerPath) => void;
  onDeletePath: (path: CareerPath) => void;
}

const SavedCareerPaths: React.FC<SavedCareerPathsProps> = ({
  careerPaths,
  onViewPath,
  onDownloadPath,
  onSharePath,
  onDeletePath
}) => {
  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Target className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold text-primary">Saved Career Paths</h2>
        </div>
        <span className="text-secondary text-sm">{careerPaths.length} paths</span>
      </div>

      {careerPaths.length === 0 ? (
        <div className="text-center py-12">
          <Target className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-primary mb-2">No Career Paths</h3>
          <p className="text-secondary mb-6">Get personalized career path recommendations</p>
          <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Get Career Advice
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {careerPaths.map((path) => (
            <div
              key={path.id}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Path Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">{path.title}</h3>
                      <p className="text-secondary text-sm">{path.industry}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{path.match}%</div>
                      <div className="text-xs text-secondary">Match Score</div>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary">Your Progress</span>
                      <span className="text-sm text-secondary">{path.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getProgressColor(path.progress)} transition-all duration-500`}
                        style={{ width: `${path.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-secondary">
                      <Clock className="w-4 h-4" />
                      <span>{path.timeline}</span>
                    </div>
                    <div className="flex items-center gap-2 text-secondary">
                      <DollarSign className="w-4 h-4" />
                      <span>{path.salary}</span>
                    </div>
                    <div className="flex items-center gap-2 text-secondary">
                      <MapPin className="w-4 h-4" />
                      <span>{path.locations[0]}</span>
                    </div>
                    <div className="flex items-center gap-2 text-secondary">
                      <TrendingUp className="w-4 h-4" />
                      <span>Updated {path.lastUpdated}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="text-sm font-medium text-primary mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {path.skills.slice(0, 4).map((skill, index) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                      {path.skills.length > 4 && (
                        <span className="text-secondary text-xs">
                          +{path.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex lg:flex-col gap-2">
                  <button
                    onClick={() => onViewPath(path)}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Continue</span>
                  </button>
                  <button
                    onClick={() => onDownloadPath(path)}
                    className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>PDF</span>
                  </button>
                  <button
                    onClick={() => onSharePath(path)}
                    className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                  <button
                    onClick={() => onDeletePath(path)}
                    className="flex items-center gap-2 px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Discover New Paths CTA */}
      <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-medium text-primary mb-1">Explore New Career Opportunities</h4>
            <p className="text-secondary text-sm">Get updated career path recommendations based on your progress</p>
          </div>
          <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap">
            Discover Paths
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedCareerPaths;