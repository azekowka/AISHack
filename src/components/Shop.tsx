import React from 'react';
import { useGamificationStore } from '../stores/gamificationStore';

const Shop: React.FC = () => {
  const { shopItems, userProfile, purchaseItem } = useGamificationStore();

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Shop</h2>
        <div className="bg-yellow-100 px-3 py-1 rounded-full">
          <span className="font-semibold">Points: {userProfile.points}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shopItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{item.description}</p>
            
            <div className="flex justify-between items-center">
              <span className="text-yellow-600 font-bold">{item.cost} points</span>
              <button
                onClick={() => purchaseItem(item.id)}
                disabled={userProfile.points < item.cost}
                className={`px-3 py-1 rounded ${
                  userProfile.points >= item.cost
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {userProfile.points >= item.cost ? 'Buy' : 'Not enough points'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">
          Earn points by maintaining your streak and completing challenges!
        </p>
      </div>
    </div>
  );
};

export default Shop; 