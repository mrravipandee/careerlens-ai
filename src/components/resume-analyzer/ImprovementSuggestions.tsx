'use client';

import { AlertCircle, ArrowRight } from 'lucide-react';

interface Suggestion {
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  action?: string;
}

interface ImprovementSuggestionsProps {
  suggestions: Suggestion[];
}

const ImprovementSuggestions: React.FC<ImprovementSuggestionsProps> = ({ suggestions }) => {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'border-red-200 bg-red-50';
      case 'medium': return 'border-orange-200 bg-orange-50';
      case 'low': return 'border-yellow-200 bg-yellow-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const getImpactText = (impact: string) => {
    switch (impact) {
      case 'high': return 'High Priority';
      case 'medium': return 'Medium Priority';
      case 'low': return 'Low Priority';
      default: return 'Suggested';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <AlertCircle className="w-6 h-6 text-orange-500" />
        <h3 className="text-lg font-semibold text-primary">Improvement Suggestions</h3>
      </div>

      <div className="space-y-4">
        {suggestions.map((suggestion, index) => (
          <div 
            key={index}
            className={`flex items-start gap-4 p-4 rounded-lg border-2 hover:shadow-md transition-all duration-200 ${getImpactColor(suggestion.impact)}`}
          >
            <div className="flex flex-col items-center gap-1 flex-shrink-0">
              <div className={`w-3 h-3 rounded-full ${
                suggestion.impact === 'high' ? 'bg-red-500' :
                suggestion.impact === 'medium' ? 'bg-orange-500' : 'bg-yellow-500'
              }`} />
              <span className="text-xs font-medium text-secondary">
                {getImpactText(suggestion.impact)}
              </span>
            </div>
            
            <div className="flex-1">
              <h4 className="font-medium text-primary mb-2">{suggestion.title}</h4>
              <p className="text-secondary text-sm mb-3">{suggestion.description}</p>
              
              {suggestion.action && (
                <div className="flex items-center gap-1 text-primary text-sm font-medium">
                  <span>💡 {suggestion.action}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Priority Guide */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h5 className="font-medium text-primary mb-2">Priority Guide</h5>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-secondary">High - Fix immediately</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-secondary">Medium - Important</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-secondary">Low - Nice to have</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprovementSuggestions;