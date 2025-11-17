'use client';

import { FileText, Download, Share2, BarChart3, Calendar, Eye, Trash2 } from 'lucide-react';

interface AnalysisReport {
  id: string;
  title: string;
  resumeName: string;
  createdAt: string;
  score: number;
  type: 'resume' | 'career' | 'job-match';
  insights: string[];
  downloadUrl: string;
}

interface SavedReportsProps {
  reports: AnalysisReport[];
  onViewReport: (report: AnalysisReport) => void;
  onDownloadReport: (report: AnalysisReport) => void;
  onShareReport: (report: AnalysisReport) => void;
  onDeleteReport: (report: AnalysisReport) => void;
}

const SavedReports: React.FC<SavedReportsProps> = ({
  reports,
  onViewReport,
  onDownloadReport,
  onShareReport,
  onDeleteReport
}) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'resume': return 'bg-blue-100 text-blue-800';
      case 'career': return 'bg-purple-100 text-purple-800';
      case 'job-match': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'resume': return '📄';
      case 'career': return '🎯';
      case 'job-match': return '💼';
      default: return '📊';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold text-primary">Saved Reports</h2>
        </div>
        <span className="text-secondary text-sm">{reports.length} reports</span>
      </div>

      {reports.length === 0 ? (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-primary mb-2">No Analysis Reports</h3>
          <p className="text-secondary mb-6">Generate your first analysis report to see it here</p>
          <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Analyze Resume
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {reports.map((report) => (
            <div
              key={report.id}
              className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{getTypeIcon(report.type)}</span>
                  <div>
                    <h3 className="font-semibold text-primary">{report.title}</h3>
                    <p className="text-secondary text-sm">Based on: {report.resumeName}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(report.type)}`}>
                  {report.type.replace('-', ' ')}
                </span>
              </div>

              {/* Score and Date */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${report.score}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-primary">{report.score}%</span>
                </div>
                <div className="flex items-center gap-1 text-secondary text-sm">
                  <Calendar className="w-4 h-4" />
                  {report.createdAt}
                </div>
              </div>

              {/* Key Insights */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-primary mb-2">Key Insights:</h4>
                <ul className="text-sm text-secondary space-y-1">
                  {report.insights.slice(0, 2).map((insight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="line-clamp-2">{insight}</span>
                    </li>
                  ))}
                  {report.insights.length > 2 && (
                    <li className="text-primary text-sm font-medium">
                      +{report.insights.length - 2} more insights
                    </li>
                  )}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                <button
                  onClick={() => onViewReport(report)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  View
                </button>
                <button
                  onClick={() => onDownloadReport(report)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                  PDF
                </button>
                <button
                  onClick={() => onShareReport(report)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                <button
                  onClick={() => onDeleteReport(report)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Generate New Report CTA */}
      <div className="mt-6 p-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-semibold mb-1">Ready for a new analysis?</h4>
            <p className="text-white/90 text-sm">Generate updated insights with your latest resume</p>
          </div>
          <button className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
            Create New Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedReports;