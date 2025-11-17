'use client';

import { FileText, Download, Share2, Trash2, Eye, Calendar, Star } from 'lucide-react';

interface SavedResume {
  id: string;
  name: string;
  uploadDate: string;
  lastAnalyzed: string;
  score: number;
  fileSize: string;
  fileType: string;
  isStarred: boolean;
}

interface SavedResumesProps {
  resumes: SavedResume[];
  onViewResume: (resume: SavedResume) => void;
  onDownloadResume: (resume: SavedResume) => void;
  onShareResume: (resume: SavedResume) => void;
  onDeleteResume: (resume: SavedResume) => void;
  onToggleStar: (resume: SavedResume) => void;
}

const SavedResumes: React.FC<SavedResumesProps> = ({
  resumes,
  onViewResume,
  onDownloadResume,
  onShareResume,
  onDeleteResume,
  onToggleStar
}) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <FileText className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold text-primary">Saved Resumes</h2>
        </div>
        <span className="text-secondary text-sm">{resumes.length} resumes</span>
      </div>

      {resumes.length === 0 ? (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-primary mb-2">No Saved Resumes</h3>
          <p className="text-secondary mb-6">Upload and analyze your first resume to get started</p>
          <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Upload Resume
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {resumes.map((resume) => (
            <div
              key={resume.id}
              className="flex flex-col lg:flex-row lg:items-center gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all duration-200"
            >
              {/* Resume Info */}
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-2">
                  <button
                    onClick={() => onToggleStar(resume)}
                    className="flex-shrink-0 mt-1"
                  >
                    <Star
                      className={`w-4 h-4 ${
                        resume.isStarred
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300 hover:text-yellow-400'
                      }`}
                    />
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-primary">{resume.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getScoreColor(resume.score)}`}>
                        {resume.score}% Score
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-secondary">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Uploaded {resume.uploadDate}
                      </span>
                      <span>•</span>
                      <span>Last analyzed {resume.lastAnalyzed}</span>
                      <span>•</span>
                      <span>{resume.fileSize} • {resume.fileType}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onViewResume(resume)}
                  className="flex items-center gap-2 px-3 py-2 text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span className="hidden sm:inline">View</span>
                </button>
                <button
                  onClick={() => onDownloadResume(resume)}
                  className="flex items-center gap-2 px-3 py-2 text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download</span>
                </button>
                <button
                  onClick={() => onShareResume(resume)}
                  className="flex items-center gap-2 px-3 py-2 text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Share</span>
                </button>
                <button
                  onClick={() => onDeleteResume(resume)}
                  className="flex items-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload CTA */}
      <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-primary mb-1">Need to analyze a new resume?</h4>
            <p className="text-secondary text-sm">Upload and get instant AI-powered feedback</p>
          </div>
          <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Upload New Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedResumes;