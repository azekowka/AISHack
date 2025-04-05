import React from 'react';
import { useGamificationStore } from '../stores/gamificationStore';

const StreakProgress: React.FC = () => {
  const { userProfile } = useGamificationStore();

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Your Streak</h2>
        <div className="flex items-center">
          <span className="text-2xl mr-2">🔥</span>
          <span className="text-xl font-bold">{userProfile.currentStreak} days</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Current Streak</span>
          <span>{userProfile.currentStreak} days</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-gradient-to-r from-yellow-400 to-orange-500 h-4 rounded-full transition-all duration-500"
            style={{ width: `${(userProfile.currentStreak / 7) * 100}%` }}
          />
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Longest Streak</span>
          <span>{userProfile.longestStreak} days</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-gradient-to-r from-blue-400 to-purple-500 h-4 rounded-full"
            style={{ width: `${(userProfile.longestStreak / 30) * 100}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className={`aspect-square rounded-lg flex items-center justify-center ${
              index < userProfile.currentStreak
                ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white'
                : 'bg-gray-100 text-gray-400'
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">
          {userProfile.currentStreak > 0
            ? `Keep it up! You're on a ${userProfile.currentStreak}-day streak!`
            : 'Start your streak by being on time for your lessons!'}
        </p>
      </div>
    </div>
  );
};

export default StreakProgress; 