'use client';

import { Calendar, BarChart3, FileText, Target, TrendingUp, Download, Eye } from 'lucide-react';

interface AnalysisHistoryItem {
  id: string;
  type: 'resume' | 'career' | 'job-match';
  title: string;
  date: string;
  duration: string;
  score?: number;
  insights: number;
  status: 'completed' | 'processing' | 'failed';
}

interface AnalysisHistoryProps {
  history: AnalysisHistoryItem[];
  onViewAnalysis: (analysis: AnalysisHistoryItem) => void;
  onDownloadAnalysis: (analysis: AnalysisHistoryItem) => void;
}

const AnalysisHistory: React.FC<AnalysisHistoryProps> = ({
  history,
  onViewAnalysis,
  onDownloadAnalysis
}) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'resume': return <FileText className="w-5 h-5 text-blue-500" />;
      case 'career': return <Target className="w-5 h-5 text-purple-500" />;
      case 'job-match': return <TrendingUp className="w-5 h-5 text-green-500" />;
      default: return <BarChart3 className="w-5 h-5 text-gray-500" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'resume': return 'bg-blue-100 text-blue-800';
      case 'career': return 'bg-purple-100 text-purple-800';
      case 'job-match': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'processing': return 'text-yellow-600 bg-yellow-100';
      case 'failed': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Calendar className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold text-primary">Analysis History</h2>
        </div>
        <span className="text-secondary text-sm">{history.length} analyses</span>
      </div>

      {history.length === 0 ? (
        <div className="text-center py-12">
          <BarChart3 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-primary mb-2">No Analysis History</h3>
          <p className="text-secondary">Your analysis history will appear here</p>
        </div>
      ) : (
        <div className="space-y-4">
          {history.map((analysis) => (
            <div
              key={analysis.id}
              className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all duration-200"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                {getTypeIcon(analysis.type)}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="font-semibold text-primary truncate">{analysis.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(analysis.type)}`}>
                      {analysis.type.replace('-', ' ')}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(analysis.status)}`}>
                      {analysis.status}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-secondary">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {analysis.date}
                  </span>
                  <span>•</span>
                  <span>{analysis.duration}</span>
                  {analysis.score && (
                    <>
                      <span>•</span>
                      <span className="font-medium text-primary">{analysis.score}% Score</span>
                    </>
                  )}
                  <span>•</span>
                  <span>{analysis.insights} insights</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 flex-shrink-0">
                {analysis.status === 'completed' && (
                  <>
                    <button
                      onClick={() => onViewAnalysis(analysis)}
                      className="p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors"
                      title="View Analysis"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onDownloadAnalysis(analysis)}
                      className="p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors"
                      title="Download Report"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* History Stats */}
      {history.length > 0 && (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-lg font-bold text-blue-600">
              {history.filter(a => a.type === 'resume').length}
            </div>
            <div className="text-sm text-blue-800">Resume Analyses</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-lg font-bold text-purple-600">
              {history.filter(a => a.type === 'career').length}
            </div>
            <div className="text-sm text-purple-800">Career Analyses</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-lg font-bold text-green-600">
              {history.filter(a => a.type === 'job-match').length}
            </div>
            <div className="text-sm text-green-800">Job Matches</div>
          </div>
          <div className="text-center p-3 bg-orange-50 rounded-lg">
            <div className="text-lg font-bold text-orange-600">
              {history.filter(a => a.status === 'completed').length}
            </div>
            <div className="text-sm text-orange-800">Completed</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalysisHistory;