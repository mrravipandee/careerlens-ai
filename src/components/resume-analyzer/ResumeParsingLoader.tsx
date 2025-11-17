'use client';

const ResumeParsingLoader: React.FC = () => {
  const steps = [
    { id: 1, text: "Parsing resume content", completed: true },
    { id: 2, text: "Checking ATS compatibility", completed: true },
    { id: 3, text: "Analyzing keywords", completed: false },
    { id: 4, text: "Generating insights", completed: false },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 text-center">
      {/* Animated Spinner */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary/20 rounded-full"></div>
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-primary mb-2">
        Analyzing Your Resume
      </h3>
      <p className="text-secondary mb-6">
        Our AI is scanning your resume for optimization opportunities...
      </p>

      {/* Progress Steps */}
      <div className="space-y-3 max-w-md mx-auto">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center justify-between">
            <span className="text-secondary text-sm">{step.text}</span>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              step.completed 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-200 text-gray-400'
            }`}>
              {step.completed ? '✓' : '⋯'}
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-6">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-1000"
            style={{ width: '50%' }}
          />
        </div>
        <p className="text-secondary text-sm mt-2">Processing... 50%</p>
      </div>
    </div>
  );
};

export default ResumeParsingLoader;