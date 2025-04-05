import React from 'react';
import { useGamificationStore } from '../stores/gamificationStore';

const MountainProgress: React.FC = () => {
  const { userProfile } = useGamificationStore();

  const rewards = [
    { level: 25, reward: '🎨 Custom Avatar' },
    { level: 50, reward: '🌟 Special Badge' },
    { level: 75, reward: '⚡ Power-up' },
    { level: 100, reward: '🏆 Ultimate Prize' },
  ];

  return (
    <div className="relative w-full h-64 bg-gradient-to-b from-blue-100 to-white rounded-lg p-4">
      {/* Mountain Background */}
      <div className="absolute bottom-0 left-0 w-full h-3/4">
        <div className="relative w-full h-full">
          {/* Mountain Shape */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-full">
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-full" />
            
            {/* Progress Indicator */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-400 rounded-full border-4 border-white shadow-lg"
              style={{ bottom: `${userProfile.mountainProgress}%` }}
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-sm font-bold shadow">
                {userProfile.mountainProgress}%
              </div>
            </div>

            {/* Rewards */}
            {rewards.map(({ level, reward }) => (
              <div
                key={level}
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-2 border-yellow-400 flex items-center justify-center text-xs"
                style={{ bottom: `${level}%` }}
              >
                <div className="absolute -left-24 w-20 text-xs text-center">
                  {reward}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Info */}
      <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-2 rounded-lg shadow">
        <h3 className="text-lg font-bold">Mountain Climb</h3>
        <p className="text-sm">Current Progress: {userProfile.mountainProgress}%</p>
        <p className="text-sm">Points: {userProfile.points}</p>
      </div>
    </div>
  );
};

export default MountainProgress; 