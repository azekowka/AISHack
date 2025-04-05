import React from 'react';
import { useGamificationStore } from '../stores/gamificationStore';

const Badges: React.FC = () => {
  const { userProfile } = useGamificationStore();

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Your Badges</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {userProfile.badges.map((badge) => (
          <div
            key={badge.id}
            className={`p-4 rounded-lg text-center ${
              badge.unlocked
                ? 'bg-gradient-to-br from-yellow-100 to-yellow-50 border-2 border-yellow-300'
                : 'bg-gray-100 border-2 border-gray-200'
            }`}
          >
            <div className="text-4xl mb-2">{badge.icon}</div>
            <h3 className="font-semibold">{badge.name}</h3>
            <p className="text-sm text-gray-600">{badge.description}</p>
            
            {badge.unlocked && badge.dateUnlocked && (
              <p className="text-xs text-gray-500 mt-2">
                Unlocked: {new Date(badge.dateUnlocked).toLocaleDateString()}
              </p>
            )}
            
            {!badge.unlocked && (
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '0%' }} />
                </div>
                <p className="text-xs text-gray-500 mt-1">Locked</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">
          {userProfile.badges.filter(b => b.unlocked).length} of {userProfile.badges.length} badges unlocked
        </p>
      </div>
    </div>
  );
};

export default Badges; 