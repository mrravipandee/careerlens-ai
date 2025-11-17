'use client';

import { useState, useRef } from 'react';
import { Upload, Sparkles, CheckCircle, ArrowRight, Star } from 'lucide-react';

const HeroSection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (file: File) => {
    if (file && file.type === 'application/pdf') {
      setUploadedFile(file);
      // Here you would typically handle the file upload to your backend
      console.log('File uploaded:', file.name);
    } else {
      alert('Please upload a PDF file');
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

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 border border-primary/20">
          <Sparkles className="w-4 h-4" />
          AI-Powered Career Guidance
          <Star className="w-3 h-3 fill-primary" />
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
          Land Your Dream Job
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            With AI Precision
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl lg:text-2xl text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
          Get instant resume feedback, personalized career recommendations, 
          and discover job matches that fit your skills and aspirations.
        </p>

        {/* Upload Resume Section */}
        <div className="max-w-2xl mx-auto">
          {!uploadedFile ? (
            <div
              className={`border-2 border-dashed rounded-2xl p-8 sm:p-12 transition-all duration-300 cursor-pointer ${
                isDragging
                  ? 'border-primary bg-primary/5 scale-105'
                  : 'border-secondary/30 hover:border-primary/50 hover:bg-primary/3'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={handleUploadClick}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileInput}
                accept=".pdf,.doc,.docx"
                className="hidden"
              />
              
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Upload className="w-8 h-8 text-primary" />
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Upload Your Resume
                  </h3>
                  <p className="text-secondary mb-4">
                    Drag & drop your resume or click to browse
                  </p>
                  <p className="text-sm text-secondary/70">
                    Supports PDF, DOC, DOCX • Max 5MB
                  </p>
                </div>

                <button className="inline-flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Choose File
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="border-2 border-primary/20 rounded-2xl p-8 sm:p-12 bg-primary/5">
              <div className="flex flex-col items-center justify-center space-y-4">
                <CheckCircle className="w-16 h-16 text-primary" />
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Resume Uploaded Successfully!
                  </h3>
                  <p className="text-secondary mb-2">
                    {uploadedFile.name}
                  </p>
                  <p className="text-sm text-secondary/70">
                    Ready to analyze your resume and provide career insights
                  </p>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => setUploadedFile(null)}
                    className="px-6 py-3 border border-secondary/30 text-secondary rounded-xl font-semibold hover:bg-white transition-colors duration-200"
                  >
                    Upload Different File
                  </button>
                  <button className="inline-flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg">
                    Analyze Resume
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">98%</div>
            <div className="text-secondary text-sm">Resume Match Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">50K+</div>
            <div className="text-secondary text-sm">Careers Guided</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-secondary text-sm">User Rating</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;