'use client';

interface ScoreCardProps {
  score: number;
  title: string;
  description: string;
  maxScore?: number;
}

const ScoreCard: React.FC<ScoreCardProps> = ({ 
  score, 
  title, 
  description, 
  maxScore = 100 
}) => {
  const percentage = (score / maxScore) * 100;
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'from-green-500 to-emerald-500';
    if (score >= 60) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
        <div className="text-2xl font-bold text-primary">{score}/{maxScore}</div>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
        <div 
          className={`h-3 rounded-full bg-gradient-to-r ${getScoreColor(score)} transition-all duration-1000`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <p className="text-secondary text-sm">{description}</p>

      {/* Score Interpretation */}
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-sm text-secondary">
          {score >= 80 ? 'Excellent! Your resume is well-optimized.' :
           score >= 60 ? 'Good, but there is room for improvement.' :
           'Needs significant improvements for better results.'}
        </p>
      </div>
    </div>
  );
};

export default ScoreCard;