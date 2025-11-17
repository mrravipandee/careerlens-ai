'use client';

import { useRef } from 'react';
import { Upload, FileText, CheckCircle } from 'lucide-react';

interface UploadBoxProps {
  onFileUpload: (file: File) => void;
  isDragging: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  uploadedFile: File | null;
}

const UploadBox: React.FC<UploadBoxProps> = ({
  onFileUpload,
  isDragging,
  onDragOver,
  onDragLeave,
  onDrop,
  uploadedFile
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFileUpload(file);
  };

  return (
    <div
      className={`bg-white rounded-2xl border-2 border-dashed p-6 sm:p-8 text-center transition-all duration-300 ${
        isDragging
          ? 'border-primary bg-primary/5 scale-105'
          : 'border-gray-300 hover:border-primary/50'
      } ${uploadedFile ? 'border-green-500 bg-green-50' : ''}`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onClick={!uploadedFile ? handleClick : undefined}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInput}
        accept=".pdf,.doc,.docx,.txt"
        className="hidden"
      />
      
      {!uploadedFile ? (
        <>
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Upload className="w-8 h-8 text-primary" />
          </div>
          
          <h3 className="text-xl font-semibold text-primary mb-2">
            Upload Your Resume
          </h3>
          <p className="text-secondary mb-4">
            Drag & drop your resume or click to browse
          </p>
          <p className="text-sm text-secondary/70 mb-6">
            Supports PDF, DOC, DOCX • Max 5MB
          </p>

          <button className="bg-primary text-background px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200">
            Choose File
          </button>
        </>
      ) : (
        <>
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          
          <h3 className="text-xl font-semibold text-primary mb-2">
            Resume Uploaded!
          </h3>
          <div className="flex items-center justify-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-secondary" />
            <p className="text-secondary font-medium">{uploadedFile.name}</p>
          </div>
          <p className="text-sm text-secondary/70">
            Ready for analysis. Click &quot;Analyze Resume&quot; to continue.
          </p>
        </>
      )}
    </div>
  );
};

export default UploadBox;