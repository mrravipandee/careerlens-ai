'use client';

import { useState, useRef } from 'react';
import { Upload, Search, FileText, Briefcase, X } from 'lucide-react';

interface JobInputFormProps {
  onResumeUpload: (file: File) => void;
  onJobRoleSubmit: (jobRole: string, skills: string[]) => void;
  uploadedFile: File | null;
}

const JobInputForm: React.FC<JobInputFormProps> = ({
  onResumeUpload,
  onJobRoleSubmit,
  uploadedFile
}) => {
  const [activeTab, setActiveTab] = useState<'resume' | 'manual'>('resume');
  const [jobRole, setJobRole] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [currentSkill, setCurrentSkill] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (file: File) => {
    if (file && (file.type === 'application/pdf' || 
                 file.type === 'application/msword' || 
                 file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      onResumeUpload(file);
    } else {
      alert('Please upload a PDF, DOC, or DOCX file');
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileUpload(file);
  };

  const handleAddSkill = () => {
    if (currentSkill.trim() && !skills.includes(currentSkill.trim())) {
      setSkills(prev => [...prev, currentSkill.trim()]);
      setCurrentSkill('');
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setSkills(prev => prev.filter(s => s !== skill));
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (jobRole.trim()) {
      onJobRoleSubmit(jobRole.trim(), skills);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentSkill.trim()) {
      e.preventDefault();
      handleAddSkill();
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <Search className="w-6 h-6 text-primary" />
        <h2 className="text-xl font-semibold text-primary">Find Your Job Match</h2>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-4 mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('resume')}
          className={`pb-4 px-2 font-medium border-b-2 transition-colors ${
            activeTab === 'resume'
              ? 'border-primary text-primary'
              : 'border-transparent text-secondary hover:text-primary'
          }`}
        >
          <div className="flex items-center gap-2">
            <Upload className="w-4 h-4" />
            Upload Resume
          </div>
        </button>
        <button
          onClick={() => setActiveTab('manual')}
          className={`pb-4 px-2 font-medium border-b-2 transition-colors ${
            activeTab === 'manual'
              ? 'border-primary text-primary'
              : 'border-transparent text-secondary hover:text-primary'
          }`}
        >
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            Enter Job Details
          </div>
        </button>
      </div>

      {/* Resume Upload Tab */}
      {activeTab === 'resume' && (
        <div>
          {!uploadedFile ? (
            <div
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 cursor-pointer ${
                isDragging
                  ? 'border-primary bg-primary/5 scale-105'
                  : 'border-gray-300 hover:border-primary/50'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileInput}
                accept=".pdf,.doc,.docx"
                className="hidden"
              />
              
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold text-primary mb-2">
                Upload Your Resume
              </h3>
              <p className="text-secondary mb-4">
                Drag & drop your resume or click to browse
              </p>
              <p className="text-sm text-secondary/70">
                Supports PDF, DOC, DOCX • Max 5MB
              </p>
            </div>
          ) : (
            <div className="text-center p-6 border-2 border-green-500 bg-green-50 rounded-xl">
              <FileText className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-primary mb-2">
                Resume Uploaded Successfully!
              </h3>
              <p className="text-secondary mb-2">{uploadedFile.name}</p>
              <p className="text-sm text-secondary/70">
                Ready to find matching job opportunities
              </p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="mt-4 text-primary font-medium hover:text-secondary transition-colors"
              >
                Upload Different File
              </button>
            </div>
          )}
        </div>
      )}

      {/* Manual Input Tab */}
      {activeTab === 'manual' && (
        <form onSubmit={handleManualSubmit} className="space-y-6">
          {/* Job Role Input */}
          <div>
            <label className="block text-sm font-medium text-primary mb-3">
              Desired Job Role
            </label>
            <input
              type="text"
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
              placeholder="e.g., Frontend Developer, Data Scientist, Product Manager"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          {/* Skills Input */}
          <div>
            <label className="block text-sm font-medium text-primary mb-3">
              Your Skills & Technologies
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill)}
                    className="hover:text-red-500 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={currentSkill}
                onChange={(e) => setCurrentSkill(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Add a skill (e.g., React, Python, AWS)"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                type="button"
                onClick={handleAddSkill}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Add
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
          >
            Find Matching Jobs
          </button>
        </form>
      )}

      {/* Quick Tips */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="font-medium text-primary mb-2">💡 Quick Tips</h4>
        <ul className="text-sm text-secondary space-y-1">
          <li>• Upload resume for automatic skill extraction</li>
          <li>• Be specific with job roles for better matches</li>
          <li>• Include both technical and soft skills</li>
        </ul>
      </div>
    </div>
  );
};

export default JobInputForm;