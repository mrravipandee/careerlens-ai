'use client';

import { Crown, User, Settings, Bell } from 'lucide-react';

interface DashboardHeaderProps {
  userName: string;
  userPlan: 'free' | 'premium';
  analysisCount: number;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  userName,
  userPlan,
  analysisCount
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* User Info */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-xl font-semibold">
            {userName.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary">Welcome back, {userName}!</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                userPlan === 'premium'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-primary/10 text-primary'
              }`}>
                {userPlan === 'premium' ? (
                  <>
                    <Crown className="w-4 h-4" />
                    Premium Member
                  </>
                ) : (
                  'Free Account'
                )}
              </span>
              <span className="text-secondary text-sm">
                {analysisCount} analyses performed
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="p-2 text-secondary hover:text-primary hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 text-secondary hover:text-primary hover:bg-gray-100 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            <User className="w-4 h-4" />
            Profile
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-200">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">12</div>
          <div className="text-secondary text-sm">Saved Resumes</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">8</div>
          <div className="text-secondary text-sm">Career Reports</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">5</div>
          <div className="text-secondary text-sm">Career Paths</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">92%</div>
          <div className="text-secondary text-sm">Avg. Match Score</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;