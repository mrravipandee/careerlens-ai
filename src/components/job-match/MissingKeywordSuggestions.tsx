'use client';

import { Search, Plus, Target, TrendingUp } from 'lucide-react';

interface KeywordSuggestion {
  keyword: string;
  importance: 'high' | 'medium' | 'low';
  frequency: number;
  category: string;
  resources?: string[];
}

interface MissingKeywordSuggestionsProps {
  missingKeywords: KeywordSuggestion[];
  jobTitle: string;
}

const MissingKeywordSuggestions: React.FC<MissingKeywordSuggestionsProps> = ({
  missingKeywords,
  jobTitle
}) => {
  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'high': return 'text-red-600 bg-red-100 border-red-200';
      case 'medium': return 'text-orange-600 bg-orange-100 border-orange-200';
      case 'low': return 'text-blue-600 bg-blue-100 border-blue-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getImportanceText = (importance: string) => {
    switch (importance) {
      case 'high': return 'High Priority';
      case 'medium': return 'Medium Priority';
      case 'low': return 'Nice to Have';
      default: return 'Suggested';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <Search className="w-6 h-6 text-primary" />
        <div>
          <h2 className="text-xl font-semibold text-primary">Missing Keyword Suggestions</h2>
          <p className="text-secondary text-sm">
            Key skills and technologies needed for {jobTitle} roles
          </p>
        </div>
      </div>

      {/* Priority Guide */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg border border-red-200">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="text-sm font-medium text-red-700">High Priority</span>
        </div>
        <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg border border-orange-200">
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <span className="text-sm font-medium text-orange-700">Medium Priority</span>
        </div>
        <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium text-blue-700">Nice to Have</span>
        </div>
      </div>

      {/* Keywords List */}
      <div className="space-y-4">
        {missingKeywords.map((keyword, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl border-2 hover:shadow-md transition-all duration-200 ${getImportanceColor(keyword.importance)}`}
          >
            <div className="flex flex-col lg:flex-row lg:items-start gap-4">
              {/* Keyword Info */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-semibold text-primary text-lg mb-1">{keyword.keyword}</h3>
                    <p className="text-secondary text-sm">{keyword.category}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-secondary">
                      {keyword.frequency}% of jobs
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getImportanceColor(keyword.importance)}`}>
                      {getImportanceText(keyword.importance)}
                    </span>
                  </div>
                </div>

                {/* Learning Resources */}
                {keyword.resources && keyword.resources.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-primary mb-2">Learning Resources:</h4>
                    <div className="flex flex-wrap gap-2">
                      {keyword.resources.map((resource, idx) => (
                        <a
                          key={idx}
                          href="#"
                          className="text-sm text-primary hover:text-secondary transition-colors"
                        >
                          • {resource}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors self-start lg:self-center">
                <Plus className="w-4 h-4" />
                <span>Learn</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Learning Tips */}
      <div className="mt-6 p-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white">
        <h4 className="font-semibold mb-2">🚀 Quick Learning Strategy</h4>
        <ul className="text-sm space-y-1 text-white/90">
          <li>• Focus on 2-3 high-priority skills first</li>
          <li>• Build practical projects to demonstrate skills</li>
          <li>• Join relevant online communities and forums</li>
          <li>• Consider certifications for credibility</li>
        </ul>
      </div>

      {missingKeywords.length === 0 && (
        <div className="text-center py-8">
          <Target className="w-12 h-12 text-green-500 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-primary mb-2">Great Job!</h3>
          <p className="text-secondary">
            You have all the key skills needed for {jobTitle} roles.
          </p>
        </div>
      )}
    </div>
  );
};

export default MissingKeywordSuggestions;