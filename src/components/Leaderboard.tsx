import React from 'react';
import { useGamificationStore } from '../stores/gamificationStore';

const Leaderboard: React.FC = () => {
  const { leaderboard, userProfile } = useGamificationStore();

  // Mock data for demonstration
  const mockLeaderboard = [
    { userId: '1', name: 'Alex', avatar: '👨‍🎓', points: 1200, streak: 7, rank: 1 },
    { userId: '2', name: 'Sarah', avatar: '👩‍🎓', points: 1100, streak: 5, rank: 2 },
    { userId: '3', name: 'Mike', avatar: '👨‍🎓', points: 900, streak: 3, rank: 3 },
    { userId: '4', name: 'Emma', avatar: '👩‍🎓', points: 800, streak: 2, rank: 4 },
    { userId: '5', name: 'John', avatar: '👨‍🎓', points: 700, streak: 1, rank: 5 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Class Leaderboard</h2>
      
      <div className="space-y-4">
        {mockLeaderboard.map((entry) => (
          <div
            key={entry.userId}
            className={`flex items-center p-3 rounded-lg ${
              entry.userId === userProfile.id
                ? 'bg-blue-50 border-2 border-blue-500'
                : 'bg-gray-50'
            }`}
          >
            <div className="w-8 h-8 flex items-center justify-center text-xl">
              {entry.avatar}
            </div>
            
            <div className="ml-4 flex-1">
              <div className="flex justify-between items-center">
                <span className="font-semibold">{entry.name}</span>
                <span className="text-gray-600">#{entry.rank}</span>
              </div>
              
              <div className="flex justify-between text-sm text-gray-500">
                <span>Points: {entry.points}</span>
                <span>🔥 {entry.streak} day streak</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          View Full Leaderboard
        </button>
      </div>
    </div>
  );
};

export default Leaderboard; 