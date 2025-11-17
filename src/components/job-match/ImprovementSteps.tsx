// components/job-match/ImprovementSteps.tsx
'use client';

import { CheckCircle, Clock, Target, Award, BookOpen, Users, Briefcase } from 'lucide-react';

interface ImprovementStep {
  phase: string;
  title: string;
  duration: string;
  tasks: {
    description: string;
    resource?: string;
    completed?: boolean;
  }[];
  priority: 'high' | 'medium' | 'low';
}

interface ImprovementStepsProps {
  steps: ImprovementStep[];
  jobTitle: string;
  onTaskComplete: (phase: string, taskIndex: number) => void;
}

const ImprovementSteps: React.FC<ImprovementStepsProps> = ({
  steps,
  jobTitle,
  onTaskComplete
}) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-200 bg-red-50';
      case 'medium': return 'border-orange-200 bg-orange-50';
      case 'low': return 'border-blue-200 bg-blue-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <Target className="w-5 h-5 text-red-500" />;
      case 'medium': return <Clock className="w-5 h-5 text-orange-500" />;
      case 'low': return <Award className="w-5 h-5 text-blue-500" />;
      default: return <Target className="w-5 h-5 text-gray-500" />;
    }
  };

  const getTaskIcon = (type?: string) => {
    switch (type) {
      case 'course': return <BookOpen className="w-4 h-4 text-blue-500" />;
      case 'project': return <Briefcase className="w-4 h-4 text-green-500" />;
      case 'community': return <Users className="w-4 h-4 text-purple-500" />;
      default: return <CheckCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <Target className="w-6 h-6 text-primary" />
        <div>
          <h2 className="text-xl font-semibold text-primary">Improvement Roadmap</h2>
          <p className="text-secondary text-sm">
            Step-by-step plan to become job-ready for {jobTitle} roles
          </p>
        </div>
      </div>

      {/* Progress Summary */}
      <div className="mb-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
        <div className="flex items-center justify-between mb-3">
          <span className="font-medium text-primary">Overall Progress</span>
          <span className="text-sm text-secondary">
            {steps.flatMap(step => step.tasks).filter(task => task.completed).length} of{' '}
            {steps.flatMap(step => step.tasks).length} tasks completed
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-primary h-3 rounded-full transition-all duration-500"
            style={{ 
              width: `${(steps.flatMap(step => step.tasks).filter(task => task.completed).length / 
                       steps.flatMap(step => step.tasks).length) * 100}%` 
            }}
          />
        </div>
      </div>

      {/* Improvement Steps */}
      <div className="space-y-6">
        {steps.map((step, stepIndex) => (
          <div
            key={step.phase}
            className={`p-4 rounded-xl border-2 ${getPriorityColor(step.priority)}`}
          >
            {/* Step Header */}
            <div className="flex items-center gap-3 mb-4">
              {getPriorityIcon(step.priority)}
              <div className="flex-1">
                <h3 className="font-semibold text-primary text-lg">{step.title}</h3>
                <p className="text-secondary text-sm">Duration: {step.duration}</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-primary">
                  {step.tasks.filter(task => task.completed).length}/{step.tasks.length} tasks
                </div>
                <div className="text-xs text-secondary">completed</div>
              </div>
            </div>

            {/* Tasks List */}
            <div className="space-y-3">
              {step.tasks.map((task, taskIndex) => (
                <div
                  key={taskIndex}
                  className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:shadow-sm transition-shadow"
                >
                  <button
                    onClick={() => onTaskComplete(step.phase, taskIndex)}
                    className={`flex-shrink-0 w-5 h-5 rounded border-2 mt-0.5 transition-colors ${
                      task.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 hover:border-green-500'
                    }`}
                  >
                    {task.completed && <CheckCircle className="w-4 h-4" />}
                  </button>
                  
                  <div className="flex-1">
                    <p className={`text-sm ${
                      task.completed ? 'text-secondary line-through' : 'text-primary'
                    }`}>
                      {task.description}
                    </p>
                    {task.resource && (
                      <a
                        href="#"
                        className="text-xs text-blue-600 hover:text-blue-800 transition-colors mt-1 inline-block"
                      >
                        📚 {task.resource}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Completion Incentive */}
      <div className="mt-6 p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white">
        <div className="flex items-center gap-3">
          <Award className="w-8 h-8" />
          <div>
            <h4 className="font-semibold mb-1">Complete Your Roadmap!</h4>
            <p className="text-white/90 text-sm">
              Finish all steps to increase your job match score by 40-60%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprovementSteps;