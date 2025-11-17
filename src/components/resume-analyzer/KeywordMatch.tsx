'use client';

import { Search, TrendingUp } from 'lucide-react';

interface KeywordMatchProps {
  matches: { [category: string]: string[] };
  industry: string;
}

const KeywordMatch: React.FC<KeywordMatchProps> = ({ matches, industry }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <Search className="w-6 h-6 text-purple-500" />
        <div>
          <h3 className="text-lg font-semibold text-primary">Keyword Analysis</h3>
          <p className="text-secondary text-sm">Industry: {industry}</p>
        </div>
      </div>

      <div className="space-y-6">
        {Object.entries(matches).map(([category, keywords]) => (
          <div key={category}>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-primary">{category}</h4>
              <span className="text-secondary text-sm">{keywords.length} keywords</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword, index) => (
                <span 
                  key={index}
                  className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors duration-200"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Keyword Density Info */}
      <div className="mt-6 flex items-center gap-2 text-sm text-secondary">
        <TrendingUp className="w-4 h-4" />
        <span>Good keyword distribution across categories</span>
      </div>
    </div>
  );
};

export default KeywordMatch;