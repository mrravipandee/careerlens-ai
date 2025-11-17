'use client';

import { CheckCircle, Clock, Target, Award, BookOpen } from 'lucide-react';

interface RoadmapStep {
  phase: string;
  title: string;
  duration: string;
  tasks: string[];
  completed?: boolean;
  current?: boolean;
}

interface CareerRoadmapProps {
  career: {
    title: string;
    timeline: string;
    steps: RoadmapStep[];
  };
  onStepComplete: (phase: string) => void;
}

const CareerRoadmap: React.FC<CareerRoadmapProps> = ({ career, onStepComplete }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <Target className="w-6 h-6 text-primary" />
        <div>
          <h2 className="text-xl font-semibold text-primary">Career Roadmap</h2>
          <p className="text-secondary text-sm">Your path to becoming a {career.title}</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

        {/* Steps */}
        <div className="space-y-8">
          {career.steps.map((step, index) => (
            <div key={step.phase} className="relative flex gap-4">
              {/* Icon */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 z-10 ${
                step.completed 
                  ? 'bg-green-500 border-green-500 text-white' 
                  : step.current
                  ? 'bg-primary border-primary text-white'
                  : 'bg-white border-gray-300 text-gray-400'
              }`}>
                {step.completed ? (
                  <CheckCircle className="w-6 h-6" />
                ) : step.current ? (
                  <Clock className="w-6 h-6" />
                ) : (
                  <Award className="w-6 h-6" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="font-semibold text-primary text-lg">{step.title}</h3>
                  <span className="text-secondary text-sm bg-gray-100 px-3 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  {step.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-center gap-3 text-sm">
                      <div className={`w-2 h-2 rounded-full ${
                        step.completed ? 'bg-green-500' : 'bg-gray-300'
                      }`} />
                      <span className={`${
                        step.completed ? 'text-secondary line-through' : 'text-secondary'
                      }`}>
                        {task}
                      </span>
                    </div>
                  ))}
                </div>

                {!step.completed && step.current && (
                  <button
                    onClick={() => onStepComplete(step.phase)}
                    className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Mark as Completed
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Summary */}
      <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-primary">Overall Progress</span>
          <span className="text-sm text-secondary">
            {career.steps.filter(step => step.completed).length} of {career.steps.length} phases
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-500"
            style={{ 
              width: `${(career.steps.filter(step => step.completed).length / career.steps.length) * 100}%` 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CareerRoadmap;